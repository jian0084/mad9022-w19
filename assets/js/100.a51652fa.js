(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{193:function(t,a,n){"use strict";n.r(a);var s=n(0),e=Object(s.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("One of the new APIs that was made available as part of the evolution of HTML is Geolocation. That is the ability for the browser to return a device's latitude and longitude based on actual GPS data, ISP, IP address, or wi-fi network.")]),t._v(" "),n("p",[t._v("Step one is determining if the device / browser supports geolocation.")]),t._v(" "),t._m(1),n("p",[t._v("Once you know that it is supported then you can write the code to use it.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),n("p",[t._v("The three parameters - enableHighAccuracy, timeout, and maximumAge - can be passed to the getCurrentPosition method. enableHighAccuracy means actually making a call to the GPS satellite data. This means using the device radio antenna and having to wait for the data. So, it can cause a delay in your application and a drain on the battery. The trade off is more accurate information (within 3m). timeout is the number of milliseconds to wait before requesting new info. maximumAge is how long to keep data before considering it out of date. A value of zero for maximumAge means request a value immediately.")]),t._v(" "),n("p",[t._v("The successful callback function will be passed a position object when called. The position object will give you access to all the GPS info you need, like latitude, longitude, altitude, and accuracy. Inside the position object is a coords object which contains all the properties.")]),t._v(" "),t._m(4),n("p",[t._v("The error callback function will be passed an error object that has a numeric value. You can see the meaning of the numbers in this function.")]),t._v(" "),t._m(5),n("p",[t._v("Note: it is important to remember that the user will always be prompted by the browser for permission to access their location. If they say no, then none of your geolocation code will run.")]),t._v(" "),n("YouTube",{attrs:{title:"Geolocation with JavaScript",url:"https://www.youtube.com/embed/NIAqR34eg7I"}}),t._v(" "),t._m(6),t._v(" "),n("p",[n("a",{attrs:{href:"http://codepen.io/mad-d/pen/mymOBy?editors=101",target:"_blank",rel:"noopener noreferrer"}},[t._v("CODEPEN sample"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("Here are some URLs with helpful information:")]),t._v(" "),n("p",[n("a",{attrs:{href:"http://html5doctor.com/finding-your-position-with-geolocation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML5 Doctor"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://developer.mozilla.org/en/docs/WebAPI/Using_geolocation",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN Reference"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"http://diveintohtml5.info/geolocation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dive Into HTML5"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[n("a",{attrs:{href:"http://html5demos.com/geo",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML5 Demos"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("[Sitepoint]http://www.sitepoint.com/html5-geolocation/)")])],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"geolocation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#geolocation","aria-hidden":"true"}},[this._v("#")]),this._v(" Geolocation")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("if")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" navigator"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("geolocation "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),n("span",{attrs:{class:"token comment"}},[t._v("//code goes here to find position")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("The "),a("code",[this._v("navigator.geolocation")]),this._v(" object has a getCurrentPosition method which takes three arguments - a callback function for success, a callback function for failure, and a properties object.")])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" params "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("enableHighAccuracy"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeout"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("360000")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" maximumAge"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nnavigator"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("geolocation"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getCurrentPosition")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" watchPosition"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gpsError"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("watchPosition")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" position "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" position"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coords"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("latitude "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" position"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coords"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("longitude "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" position"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coords"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accuracy "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" position"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coords"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("altitude "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("gpsError")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" error "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   \n  "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" errors "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Permission denied'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Position unavailable'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token number"}},[t._v("3")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Request timeout'")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("alert")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"Error: "')]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" errors"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("error"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"links-to-help-with-geolocation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#links-to-help-with-geolocation","aria-hidden":"true"}},[this._v("#")]),this._v(" Links to help with Geolocation")])}],!1,null,null,null);e.options.__file="geolocation.md";a.default=e.exports}}]);