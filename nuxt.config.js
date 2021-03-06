const path = require('path')
const moment = require('moment')
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const copyfiles = require('copyfiles')

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { hid: 'material-icon-css', rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { hid: 'prism-theme', rel: 'stylesheet', href: '/css/prism-synthwave84.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/moment',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxt/content',
    ['@reallifedigital/nuxt-image-loader-module', {
      imagesBaseDir: 'content',
      imageStyles: {
        thumbnail: { actions: ['gravity|Center', 'resize|320|180^', 'extent|320|180|+0|+90'] },
        small: { macros: ['scaleAndCrop|160|90'] },
        medium: { macros: ['scaleAndCrop|320|180'] },
        large: { macros: ['scaleAndCrop|800|600'] },
      },
      forceGenerateImages: {
        small: '**/*',
        medium: '**/*'
      },
      responsiveStyles: {
        thumb: {
          srcset: 'small 160w, medium 320w, large 800w',
          sizes: '(min-width: 1280px) 100vw, 50vw',
        },
      },
    }]
  ],
  content: {
    markdown: {
      prism: {
        theme: 'static/css/prism-synthwave84.css'
      }
    }
  },
  hooks: {
    'content:file:beforeInsert': async document => {
      if (document.extension === '.md') {
        try {
          const contentPath = `content${document.path}${document.extension}`
          const { stdout } = await exec(`git log -1 --format=%cd --date=iso ${contentPath}`)
          // 2020-06-30 00:33:07 +0900
          const [date, time] = stdout.split(' ', 2)
          const iso8601 = [date, time.replace(' ', '')].join('T')
          document.updatedAt = moment(iso8601).toDate()
          console.log('hook created date', contentPath, iso8601)
        } catch (e) {
          // noop
        }
      }
    },
    hooks: {
      generate: {
        before(generator, generateOptions) {
          copyfiles(['content/**/*.jpg', 'content/**/*.gif', 'content/**/*.png', 'static'])
        }
      }
    }
  },
  generate: {
    // async routes() {
    //   const { $content } = require('@nuxt/content')
    //   return $content({deep: true}).only(['path']).fetch()
    //     .then(files => files.map(file => file.path === '/index' ? '/' : file.path))
    // }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    postcss: {
      plugins: {
        // https://github.com/postcss/postcss/blob/master/docs/plugins.md
        // 위 플러그인 목록에서 필요한 플러그인을 추가해서 사용할 수 있습니다.
        // tailwindcss는 삭제하면 안됩니다.
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        'postcss-nested': {}
      }
    }
  }
}
