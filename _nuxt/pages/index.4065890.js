(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{182:function(t,e,n){var content=n(186);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("45be49ee",content,!0,{sourceMap:!1})},185:function(t,e,n){"use strict";var r=n(182);n.n(r).a},186:function(t,e,n){(e=n(37)(!1)).push([t.i,".portal{height:16rem}h3{font-size:1.25rem;--text-opacity:1;color:#718096;color:rgba(113,128,150,var(--text-opacity));font-weight:700}",""]),t.exports=e},197:function(t,e,n){"use strict";n.r(e);n(16);var r=n(2),c={name:"index",data:function(){return{page:"",recent:[]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("index").fetch();case 2:return t.page=e.sent,e.next=5,t.$content("article",{deep:!0}).only(["title","description","path","createdAt"]).sortBy("createdAt","desc").limit(5).fetch();case 5:t.recent=e.sent;case 6:case"end":return e.stop()}}),e)})))()}},o=(n(185),n(27)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{},[n("div",{staticClass:"container mx-auto items-center flex flex-wrap my-16 md:mt-48"},[n("div",{staticClass:"w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4"},[n("nuxt-content",{attrs:{document:t.page}})],1)])]),t._v(" "),n("section",{staticClass:"bg-gray-200 py-2 lg:py-8"},[n("div",{staticClass:"mx-auto container flex-wrap"},t._l(t.recent,(function(article){return n("div",{key:article.slug,staticClass:"p-2 md:p-4 w-full md:w-1/2"},[n("article",{staticClass:"bg-white border border-gray-600 shadow-md rounded-lg p-4 "},[n("header",[n("h3",[n("nuxt-link",{attrs:{to:article.path}},[t._v(t._s(article.title))])],1)]),t._v(" "),n("p",[t._v(t._s(article.description))])])])})),0)]),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"portal"},[e("div",{staticClass:"mx-auto container"},[this._v("...")])])}],!1,null,null,null);e.default=component.exports}}]);