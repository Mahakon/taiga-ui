function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _get(t,e,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=_superPropBase(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(t);if(e){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+SFL":function(t,e,n){"use strict";e.a=n.p+"bf2e94ae58ee713717faf397958a8e3d.jpg"},"P+hG":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("9qw2"),o=n("C05f"),i=n("EM62"),c=function(){var t=function(t){_inherits(n,t);var e=_createSuper(n);function n(t){var r;return _classCallCheck(this,n),(r=e.call(this,t.getItem("theme")||"Open-source")).storage=t,r}return _createClass(n,[{key:"next",value:function(t){this.storage.setItem("theme",t),_get(_getPrototypeOf(n.prototype),"next",this).call(this,t)}}]),n}(o.a);return t.\u0275fac=function(e){return new(e||t)(i["\u0275\u0275inject"](r.c))},t.\u0275prov=i["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"s2A/":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("Qq0t"),o=n("EM62"),i=function(){var t=function(){function t(e){_classCallCheck(this,t),this.notifications=e}return _createClass(t,[{key:"log",value:function(t){this.notifications.show(String(t)).subscribe()}},{key:"event",value:function(t,e){this.notifications.show(String(e),{label:"event (".concat(t,")")}).subscribe(),console.log(t,e)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o["\u0275\u0275inject"](r.TuiNotificationsService))},t.\u0275prov=o["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac}),t}()},yPof:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("EM62"),o=n("l4xa"),i=new r.InjectionToken("resolves path to markdown with how to guide",{factory:function(){return o.identity}})}}]);