(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{267:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[s("a",{attrs:{href:"https://content-security-policy.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSP Reference"),s("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),s("p",[t._v("This meta tag defines what type of content can be loaded from which sources.")]),t._v(" "),s("p",[t._v("Inside the content attribute is a list of possible types of things to load and the sources from which they are allowed to be loaded.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("There are others as well that you can find on the CSP website, but these are the most common. The values that you can enter for each of "),s("a",{attrs:{href:"https://content-security-policy.com/#source_list",target:"_blank",rel:"noopener noreferrer"}},[t._v("these policies can be found here"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"content-security-policy-meta-tag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#content-security-policy-meta-tag","aria-hidden":"true"}},[this._v("#")]),this._v(" Content-Security-Policy Meta Tag")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This website describes all the details of the new "),e("code",[this._v("<meta>")]),this._v(" tag that appears in all Cordova Apps.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you look inside the "),e("code",[this._v("<head>")]),this._v(" of your "),e("code",[this._v("index.html")]),this._v(" file, from your Cordova www folder then you will see this:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("http-equiv")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Content-Security-Policy"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("default-src "),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("self"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(" data: gap: https://ssl.gstatic.com "),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("unsafe-eval"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("; style-src "),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("self"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("unsafe-inline"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("; media-src *"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("code",[t._v("default-src")]),t._v(" is the default policy for loading content such as JavaScript, Images, CSS, Font's, AJAX requests, Frames, HTML5 Media. In the example above, "),s("code",[t._v("self")]),t._v(", "),s("code",[t._v("data:")]),t._v(", and "),s("code",[t._v("gap:")]),t._v(" are used as the defaults. That means when there is no specific value given for one of those things then it must be loaded from inside the "),s("code",[t._v("www")]),t._v(" folder, or begin with a "),s("code",[t._v("data:")]),t._v(" or "),s("code",[t._v("gap:")]),t._v(" URL.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("style-src")]),this._v(" is the policy for loading CSS files. In the example above 'self' is being used. So CSS must be inside the www folder (or from the same domain for web apps)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("media-src")]),this._v(" is the policy for loading audio and video.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("font-src")]),this._v(" gets used to load fonts.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("img-src")]),this._v(" gets used to load images.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("connect-src")]),this._v(" gets used to make AJAX calls with XMLHttpRequest or fetch.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("self")]),this._v(" was already mentioned. This will allow anything from the local device or same domain.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("*")]),this._v(" allows anything except for data: or other blob or filesystem formats.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("data:")]),this._v(" allows anything being loaded as a data-uri (base-64 encoded).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("gap:")]),this._v(" refers to internal phonegap references. It is always a good idea to keep this in the default-src policy to prevent permission errors that are hard to debug.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("'none'")]),this._v(" will prevent anything of that type from being loaded")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("*.example.com")]),this._v(" would allow any subdomain from example.com to be used.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("https:")]),this._v(" would allow anything being loaded over https.")])}],!1,null,null,null);n.options.__file="csp.md";e.default=n.exports}}]);