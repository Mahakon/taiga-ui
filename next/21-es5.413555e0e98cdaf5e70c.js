var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_templateObject14,_templateObject15,_templateObject16,_templateObject17;function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var n,o=_getPrototypeOf(t);if(e){var a=_getPrototypeOf(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _taggedTemplateLiteral(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"K/iL":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o=new(n("kZht").InjectionToken)("Component extends AbstractExample class")},jkSx:function(t,e,n){"use strict";n.r(e),n.d(e,"ExampleTuiButtonModule",(function(){return xt}));var o=n("An66"),a=n("3kIJ"),i=n("1VvW"),r=n("T8fS"),c=n("SVIu"),u=n("l4xa"),l=n("Qq0t"),p=n("dvRg"),s=n("D57K"),d=n("kZht"),m=n("K/iL"),b=n("pVuH"),f=n("OZlg"),h=n("e0eB"),_=n("iyc4"),g=n("+SFL"),y=n("zV1d"),C=n("vfve"),T=n("cweO");function O(t,e){if(1&t&&d["\u0275\u0275element"](0,"tui-avatar",12),2&t){var n=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("rounded",!0)("avatarUrl",n.avatarUrl)}}var v,x,S=function(){return["/tui-dropdown"]},E=((v=function(){function t(){_classCallCheck(this,t),this.avatarUrl=g.a}return _createClass(t,[{key:"onClick",value:function(t){console.info("click",t)}}]),t}()).\u0275fac=function(t){return new(t||v)},v.\u0275cmp=d["\u0275\u0275defineComponent"]({type:v,selectors:[["tui-button-example-1"]],decls:30,vars:15,consts:[["icon",""],["tuiButton","","type","button",1,"tui-space_right-3","tui-space_bottom-3",3,"icon","click"],["tuiButton","","type","button","iconRight","tuiIconSearch",1,"tui-space_right-3","tui-space_bottom-3",3,"disabled","click"],["tuiButton","","type","button",3,"showLoader","click"],["tuiIconButton","","type","button",1,"tui-space_right-3","tui-space_bottom-3",3,"icon","click"],["tuiIconButton","","type","button","icon","tuiIconSearch",1,"tui-space_right-3","tui-space_bottom-3",3,"disabled","click"],["tuiIconButton","","type","button",3,"showLoader","click"],["tuiButton","","type","button","href","http://google.com",1,"tui-space_right-3","tui-space_bottom-3",3,"icon"],["tuiButton","",3,"showLoader"],["tuiIconButton","","type","button",1,"tui-space_right-3","tui-space_bottom-3",3,"icon","routerLink"],["tuiIconButton","","type","button","icon","tuiIconSearch",1,"tui-space_right-3","tui-space_bottom-3",3,"disabled","routerLink","tuiFocusable"],["tuiIconButton","","type","button",3,"showLoader","routerLink","tuiFocusable"],["size","xs",3,"rounded","avatarUrl"]],template:function(t,e){if(1&t&&(d["\u0275\u0275template"](0,O,1,2,"ng-template",null,0,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275elementStart"](2,"h3"),d["\u0275\u0275text"](3,"button[tuiButton]"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"p"),d["\u0275\u0275elementStart"](5,"button",1),d["\u0275\u0275listener"]("click",(function(t){return e.onClick(t)})),d["\u0275\u0275text"](6," Button "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"button",2),d["\u0275\u0275listener"]("click",(function(t){return e.onClick(t)})),d["\u0275\u0275text"](8," Disabled button "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"button",3),d["\u0275\u0275listener"]("click",(function(t){return e.onClick(t)})),d["\u0275\u0275text"](10," Loading button "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](11,"h3"),d["\u0275\u0275text"](12,"button[tuiIconButton]"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](13,"p"),d["\u0275\u0275elementStart"](14,"button",4),d["\u0275\u0275listener"]("click",(function(t){return e.onClick(t)})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](15,"button",5),d["\u0275\u0275listener"]("click",(function(t){return e.onClick(t)})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](16,"button",6),d["\u0275\u0275listener"]("click",(function(t){return e.onClick(t)})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](17,"h3"),d["\u0275\u0275text"](18,"a[tuiButton]"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](19,"p"),d["\u0275\u0275elementStart"](20,"a",7),d["\u0275\u0275text"](21," Link "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](22,"a",8),d["\u0275\u0275text"](23,"Loading button"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](24,"h3"),d["\u0275\u0275text"](25,"a[tuiIconButton]"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](26,"p"),d["\u0275\u0275element"](27,"a",9),d["\u0275\u0275element"](28,"a",10),d["\u0275\u0275element"](29,"a",11),d["\u0275\u0275elementEnd"]()),2&t){var n=d["\u0275\u0275reference"](1);d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("icon",n),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("disabled",!0),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("showLoader",!0),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("icon",n),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("disabled",!0),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("showLoader",!0),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("icon",n),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("showLoader",!0),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("icon",n)("routerLink",d["\u0275\u0275pureFunction0"](14,S)),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("disabled",!0)("tuiFocusable",!1),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("showLoader",!0)("tuiFocusable",!1)}},directives:[y.a,i.e,C.a,T.a],encapsulation:2,changeDetection:0}),v),w=n("aPft"),k=((x=_createClass((function t(){_classCallCheck(this,t)}))).\u0275fac=function(t){return new(t||x)},x.\u0275cmp=d["\u0275\u0275defineComponent"]({type:x,selectors:[["tui-button-example-2"]],decls:11,vars:0,consts:[["tuiButton","","type","button","appearance","primary",1,"tui-space_right-3","tui-space_bottom-3"],["tuiButton","","type","button","appearance","secondary",1,"tui-space_right-3","tui-space_bottom-3"],["tuiButton","","type","button","appearance","accent",1,"tui-space_right-3","tui-space_bottom-3"],["tuiButton","","type","button","appearance","flat",1,"tui-space_right-3","tui-space_bottom-3"],["tuiButton","","type","button","appearance","outline",1,"tui-space_right-3","tui-space_bottom-3"],["tuiIconButton","","type","button","appearance","icon","icon","tuiIconCloseLarge",1,"tui-space_right-3","tui-space_bottom-3"]],template:function(t,e){1&t&&(d["\u0275\u0275elementStart"](0,"button",0),d["\u0275\u0275text"](1," primary\n"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"button",1),d["\u0275\u0275text"](3," secondary\n"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"button",2),d["\u0275\u0275text"](5," accent\n"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"button",3),d["\u0275\u0275text"](7," flat\n"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"button",4),d["\u0275\u0275text"](9," outline\n"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](10,"button",5))},directives:[y.a],encapsulation:2,changeDetection:0}),x),P=n("q7Lq"),L=n("SUM+");function B(t,e){1&t&&(d["\u0275\u0275elementStart"](0,"div",3),d["\u0275\u0275text"](1," Use "),d["\u0275\u0275elementStart"](2,"code"),d["\u0275\u0275text"](3,"TuiArrowModule"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](4," from "),d["\u0275\u0275elementStart"](5,"code"),d["\u0275\u0275text"](6,"@taiga-ui/kit"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]())}var j,V,I,A,D=((I=function(){function t(){_classCallCheck(this,t),this.arrow=p.TUI_ARROW,this.open=!1}return _createClass(t,[{key:"onClick",value:function(){this.open=!this.open}}]),t}()).\u0275fac=function(t){return new(t||I)},I.\u0275cmp=d["\u0275\u0275defineComponent"]({type:I,selectors:[["tui-button-example-3"]],decls:5,vars:3,consts:[["tuiDropdownLimitWidth","fixed",3,"open","content"],["tuiButton","","type","button",3,"iconRight","click"],["dropdown",""],[1,"content"]],template:function(t,e){if(1&t&&(d["\u0275\u0275elementStart"](0,"tui-hosted-dropdown",0),d["\u0275\u0275elementStart"](1,"button",1),d["\u0275\u0275listener"]("click",(function(){return e.onClick()})),d["\u0275\u0275text"](2," Where could I find such an arrow...? "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](3,B,7,0,"ng-template",null,2,d["\u0275\u0275templateRefExtractor"])),2&t){var n=d["\u0275\u0275reference"](4);d["\u0275\u0275property"]("open",e.open)("content",n),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("iconRight",e.arrow)}},directives:[P.a,L.a,y.a],styles:[".icon[_ngcontent-%COMP%]{-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-duration:var(--tui-duration,.3s);transition-duration:var(--tui-duration,.3s);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out}.icon_rotated[_ngcontent-%COMP%]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.content[_ngcontent-%COMP%]{padding:.75rem 1.25rem}"],changeDetection:0}),I),R=((V=_createClass((function t(){_classCallCheck(this,t)}))).\u0275fac=function(t){return new(t||V)},V.\u0275cmp=d["\u0275\u0275defineComponent"]({type:V,selectors:[["tui-button-example-4"]],decls:2,vars:0,consts:[["tuiButton","","appearance","custom"]],template:function(t,e){1&t&&(d["\u0275\u0275elementStart"](0,"button",0),d["\u0275\u0275text"](1,"See LESS tab"),d["\u0275\u0275elementEnd"]())},directives:[y.a],styles:["tui-wrapper[data-appearance=custom]{background:#bc71c9;color:#fff}tui-wrapper[data-appearance=custom][data-state=hovered]{background:#a381ff}tui-wrapper[data-appearance=custom][data-state=pressed]{background:#8f75d1}tui-wrapper[data-appearance=custom][data-state=disabled]{background:#eaecee}"],encapsulation:2,changeDetection:0}),V),M=((j=_createClass((function t(){_classCallCheck(this,t)}))).\u0275fac=function(t){return new(t||j)},j.\u0275cmp=d["\u0275\u0275defineComponent"]({type:j,selectors:[["tui-button-example-5"]],features:[d["\u0275\u0275ProvidersFeature"]([{provide:l.TUI_BUTTON_OPTIONS,useValue:{shape:"rounded",appearance:"outline",size:"m"}}])],decls:2,vars:0,consts:[["tuiButton",""]],template:function(t,e){1&t&&(d["\u0275\u0275elementStart"](0,"button",0),d["\u0275\u0275text"](1,"Options"),d["\u0275\u0275elementEnd"]())},directives:[y.a],encapsulation:2,changeDetection:0}),j),z=n("EPR0"),U=n("/ASf"),N=n("yHor"),G=n("zGJC"),$=n("mTwp"),F=n("u8jZ");A=$localize(_templateObject||(_templateObject=_taggedTemplateLiteral([":\u241fe6a149d61f900eaf8225bc53f4e5f70a2af483d6\u241f7531330618895929781:",":START_TAG_CODE:TuiButtonModule",":CLOSE_TAG_CODE: is a module with components ",":START_TAG_CODE:tuiButton",":CLOSE_TAG_CODE: , ",":START_TAG_CODE:tuiIconButton",":CLOSE_TAG_CODE: are components to use them with native ",":START_TAG_CODE:button",":CLOSE_TAG_CODE: and ",":START_TAG_CODE:a",":CLOSE_TAG_CODE: elements. "])),"[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd|\ufffd#6\ufffd]","[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd|\ufffd/#6\ufffd]","[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd|\ufffd#6\ufffd]","[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd|\ufffd/#6\ufffd]","[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd|\ufffd#6\ufffd]","[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd|\ufffd/#6\ufffd]","[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd|\ufffd#6\ufffd]","[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd|\ufffd/#6\ufffd]","[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd|\ufffd#6\ufffd]","[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd|\ufffd/#6\ufffd]"),A=d["\u0275\u0275i18nPostprocess"](A);var H,W=["heading",$localize(_templateObject2||(_templateObject2=_taggedTemplateLiteral([":\u241f45f210b96a2a6e91f52f153a4f8dc30662629f8e\u241f142654590491855672:Usage"])))];H=$localize(_templateObject3||(_templateObject3=_taggedTemplateLiteral([":\u241f81bbfd52914c382590b0f0d18c1123591ffb15ef\u241f3343159686784376531: Link cannot be ",":START_TAG_CODE:disabled",":CLOSE_TAG_CODE: . If you want to make an unactive link, remove ",":START_TAG_CODE:href",":CLOSE_TAG_CODE: attribute or send an empty string into ",":START_TAG_CODE:routerLink",":CLOSE_TAG_CODE: . To prevent keyboard focus when ",":START_TAG_CODE:routerLink",":CLOSE_TAG_CODE: , use ",':START_TAG_CODE:[tuiFocusable]="false"',":CLOSE_TAG_CODE: directive "])),"[\ufffd#12\ufffd|\ufffd#13\ufffd|\ufffd#14\ufffd|\ufffd#15\ufffd|\ufffd#16\ufffd]","[\ufffd/#12\ufffd|\ufffd/#13\ufffd|\ufffd/#14\ufffd|\ufffd/#15\ufffd|\ufffd/#16\ufffd]","[\ufffd#12\ufffd|\ufffd#13\ufffd|\ufffd#14\ufffd|\ufffd#15\ufffd|\ufffd#16\ufffd]","[\ufffd/#12\ufffd|\ufffd/#13\ufffd|\ufffd/#14\ufffd|\ufffd/#15\ufffd|\ufffd/#16\ufffd]","[\ufffd#12\ufffd|\ufffd#13\ufffd|\ufffd#14\ufffd|\ufffd#15\ufffd|\ufffd#16\ufffd]","[\ufffd/#12\ufffd|\ufffd/#13\ufffd|\ufffd/#14\ufffd|\ufffd/#15\ufffd|\ufffd/#16\ufffd]","[\ufffd#12\ufffd|\ufffd#13\ufffd|\ufffd#14\ufffd|\ufffd#15\ufffd|\ufffd#16\ufffd]","[\ufffd/#12\ufffd|\ufffd/#13\ufffd|\ufffd/#14\ufffd|\ufffd/#15\ufffd|\ufffd/#16\ufffd]","[\ufffd#12\ufffd|\ufffd#13\ufffd|\ufffd#14\ufffd|\ufffd#15\ufffd|\ufffd#16\ufffd]","[\ufffd/#12\ufffd|\ufffd/#13\ufffd|\ufffd/#14\ufffd|\ufffd/#15\ufffd|\ufffd/#16\ufffd]"),H=d["\u0275\u0275i18nPostprocess"](H);var q,J,Z,K,X,Q,Y,tt,et,nt,ot=["heading",$localize(_templateObject4||(_templateObject4=_taggedTemplateLiteral([":\u241f84179be0a765ac2da1a2bcf6b5b476a4e9253aab\u241f1387438809102966566:Modes"])))],at=["heading",$localize(_templateObject5||(_templateObject5=_taggedTemplateLiteral([":\u241f5a9a9bb37e323fa72f117be7f850c7f754de37a3\u241f6967331457159620885:Rotating"])))],it=["heading",$localize(_templateObject6||(_templateObject6=_taggedTemplateLiteral([":\u241fc879182022ac787b589d1a85f9616d778e6efc25\u241f5093220205467023095:Custom theme"])))],rt=["heading",$localize(_templateObject7||(_templateObject7=_taggedTemplateLiteral([":\u241f24813b8a3e45f0b57136c18d003027262cfe2d1f\u241f8432562579042371182:Options"])))];function ct(t,e){if(1&t&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275i18nStart"](1,A),d["\u0275\u0275element"](2,"code"),d["\u0275\u0275element"](3,"code"),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275element"](5,"code"),d["\u0275\u0275element"](6,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"tui-doc-example",2),d["\u0275\u0275i18nAttributes"](8,W),d["\u0275\u0275element"](9,"tui-button-example-1"),d["\u0275\u0275elementStart"](10,"tui-notification"),d["\u0275\u0275i18nStart"](11,H),d["\u0275\u0275element"](12,"code"),d["\u0275\u0275element"](13,"code"),d["\u0275\u0275element"](14,"code"),d["\u0275\u0275element"](15,"code"),d["\u0275\u0275element"](16,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](17,"tui-doc-example",3),d["\u0275\u0275i18nAttributes"](18,ot),d["\u0275\u0275element"](19,"tui-button-example-2"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](20,"tui-doc-example",4),d["\u0275\u0275i18nAttributes"](21,at),d["\u0275\u0275element"](22,"tui-button-example-3"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](23,"tui-doc-example",5),d["\u0275\u0275i18nAttributes"](24,it),d["\u0275\u0275element"](25,"tui-button-example-4"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](26,"tui-doc-example",6),d["\u0275\u0275i18nAttributes"](27,rt),d["\u0275\u0275element"](28,"tui-button-example-5"),d["\u0275\u0275elementEnd"]()),2&t){var n=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](7),d["\u0275\u0275property"]("content",n.example1),d["\u0275\u0275advance"](10),d["\u0275\u0275property"]("content",n.example2),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",n.example3),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",n.example4),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",n.example5)}}function ut(t,e){if(1&t&&d["\u0275\u0275element"](0,"button",18),2&t){var n=d["\u0275\u0275nextContext"](2);d["\u0275\u0275property"]("appearance",n.appearance)("disabled",n.disabled)("icon",n.icon)("shape",n.shape)("showLoader",n.showLoader)("size",n.size)}}function lt(t,e){if(1&t&&(d["\u0275\u0275elementStart"](0,"button",19),d["\u0275\u0275text"](1," Content "),d["\u0275\u0275elementEnd"]()),2&t){var n=d["\u0275\u0275nextContext"](2);d["\u0275\u0275property"]("appearance",n.appearance)("disabled",n.disabled)("icon",n.icon)("iconRight",n.iconRight)("shape",n.shape)("showLoader",n.showLoader)("size",n.size)}}function pt(t,e){1&t&&d["\u0275\u0275element"](0,"tui-card",20)}function st(t,e){1&t&&d["\u0275\u0275i18n"](0,q)}function dt(t,e){1&t&&d["\u0275\u0275i18n"](0,J)}function mt(t,e){1&t&&d["\u0275\u0275i18n"](0,Z)}function bt(t,e){1&t&&d["\u0275\u0275i18n"](0,K)}function ft(t,e){1&t&&d["\u0275\u0275i18n"](0,X)}function ht(t,e){1&t&&d["\u0275\u0275i18n"](0,Q)}function _t(t,e){1&t&&d["\u0275\u0275i18n"](0,Y)}function gt(t,e){if(1&t){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-doc-demo"),d["\u0275\u0275elementStart"](1,"p"),d["\u0275\u0275template"](2,ut,1,6,"button",7),d["\u0275\u0275template"](3,lt,2,7,"ng-template",null,8,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](5," tuiButton "),d["\u0275\u0275elementStart"](6,"tui-toggle",9),d["\u0275\u0275listener"]("ngModelChange",(function(t){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().iconButton=t})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](7," tuiIconButton "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](8,pt,1,0,"ng-template",null,10,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275elementStart"](10,"tui-doc-documentation"),d["\u0275\u0275template"](11,st,1,0,"ng-template",11),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().appearance=t})),d["\u0275\u0275template"](12,dt,1,0,"ng-template",12),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().disabled=t})),d["\u0275\u0275template"](13,mt,1,0,"ng-template",13),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().icon=t})),d["\u0275\u0275template"](14,bt,1,0,"ng-template",14),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().iconRight=t})),d["\u0275\u0275template"](15,ft,1,0,"ng-template",15),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().shape=t})),d["\u0275\u0275template"](16,ht,1,0,"ng-template",16),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().showLoader=t})),d["\u0275\u0275template"](17,_t,1,0,"ng-template",17),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().size=t})),d["\u0275\u0275elementEnd"]()}if(2&t){var o=d["\u0275\u0275reference"](4),a=d["\u0275\u0275reference"](9),i=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngIf",i.iconButton)("ngIfElse",o),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("singleColor",!0)("ngModel",i.iconButton),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("documentationPropertyValues",i.appearanceVariants)("documentationPropertyValue",i.appearance),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",i.disabled),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",i.getContentVariants(a))("documentationPropertyValue",i.icon),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",i.getContentVariants(a))("documentationPropertyValue",i.iconRight),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",i.shapeVariants)("documentationPropertyValue",i.shape),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",i.showLoader),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",i.sizeVariants)("documentationPropertyValue",i.size)}}function yt(t,e){if(1&t&&(d["\u0275\u0275elementStart"](0,"ol",21),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,tt),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",22),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18n"](8,et),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](9,"tui-doc-code",23),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](10,"li"),d["\u0275\u0275elementStart"](11,"p"),d["\u0275\u0275i18nStart"](12,nt),d["\u0275\u0275element"](13,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](14,"tui-doc-code",22),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&t){var n=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",n.exampleImportModule),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("code",n.exampleInsertTemplate),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",n.exampleDefineOptions)}}q=$localize(_templateObject8||(_templateObject8=_taggedTemplateLiteral([":\u241f026823b82319471807106b10d1921bca4c3cf14c\u241f8748187544722377841: Appearance mode "]))),J=$localize(_templateObject9||(_templateObject9=_taggedTemplateLiteral([":\u241f9a6e6506042b6d5e27477399cbbdd3e41bf7d0d8\u241f101820728901530778: disabled state "]))),Z=$localize(_templateObject10||(_templateObject10=_taggedTemplateLiteral([":\u241f6ff16f7de04cc77f36d08d43c24646fe920d64a2\u241f8480623023289998989: Left content "]))),K=$localize(_templateObject11||(_templateObject11=_taggedTemplateLiteral([":\u241f0c1241fe77e2124b62d9c45b4cd0446074885eee\u241f4251750074972270406: Right content "]))),X=$localize(_templateObject12||(_templateObject12=_taggedTemplateLiteral([":\u241f5922385f779b17480e5350ed5bf386e7c970c0fe\u241f2417708497028424124: Button shape "]))),Q=$localize(_templateObject13||(_templateObject13=_taggedTemplateLiteral([":\u241f2d1ee6bbe7aa8b363a54c1d7e446b25c0ba4cd5f\u241f5202720144004890121: Adds loader inside "]))),Y=$localize(_templateObject14||(_templateObject14=_taggedTemplateLiteral([":\u241f179c074c54faa08ac2cd371aae91270430094cb4\u241f5919257397270847364: Size "]))),tt=$localize(_templateObject15||(_templateObject15=_taggedTemplateLiteral([":\u241f74d107a2fad7e62d9a2f210cc730bbc723bddd92\u241f1959104135768771069: Import ",":START_TAG_CODE:TuiButtonModule",":CLOSE_TAG_CODE: into a module where you want to use our component "])),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),et=$localize(_templateObject16||(_templateObject16=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"]))),nt=$localize(_templateObject17||(_templateObject17=_taggedTemplateLiteral([":\u241f923fc437f847d5909ca8ce2a2cc8fbc6bb9849d4\u241f6989045831216246718: Optionally use the ",":START_TAG_CODE:TUI_BUTTON_OPTIONS",":CLOSE_TAG_CODE: injection token to override the default options for the component. "])),"\ufffd#13\ufffd","\ufffd/#13\ufffd");var Ct,Tt,Ot=((Ct=function(t){_inherits(n,t);var e=_createSuper(n);function n(){var t;return _classCallCheck(this,n),(t=e.apply(this,arguments)).example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\nimport {default as avatar} from '!!file-loader!../../../../../assets/images/avatar.jpg';\n\n@Component({\n    selector: 'tui-button-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiButtonExample1 {\n    readonly avatarUrl = avatar;\n\n    onClick(event: MouseEvent) {\n        console.info('click', event);\n    }\n}\n",HTML:'<ng-template #icon>\n    <tui-avatar size="xs" [rounded]="true" [avatarUrl]="avatarUrl"></tui-avatar>\n</ng-template>\n<h3>button[tuiButton]</h3>\n<p>\n    <button\n        tuiButton\n        type="button"\n        class="tui-space_right-3 tui-space_bottom-3"\n        [icon]="icon"\n        (click)="onClick($event)"\n    >\n        Button\n    </button>\n\n    <button\n        tuiButton\n        type="button"\n        iconRight="tuiIconSearch"\n        class="tui-space_right-3 tui-space_bottom-3"\n        [disabled]="true"\n        (click)="onClick($event)"\n    >\n        Disabled button\n    </button>\n\n    <button\n        tuiButton\n        type="button"\n        [showLoader]="true"\n        (click)="onClick($event)"\n    >\n        Loading button\n    </button>\n</p>\n<h3>button[tuiIconButton]</h3>\n<p>\n    <button\n        tuiIconButton\n        type="button"\n        class="tui-space_right-3 tui-space_bottom-3"\n        [icon]="icon"\n        (click)="onClick($event)"\n    ></button>\n\n    <button\n        tuiIconButton\n        type="button"\n        icon="tuiIconSearch"\n        class="tui-space_right-3 tui-space_bottom-3"\n        [disabled]="true"\n        (click)="onClick($event)"\n    ></button>\n\n    <button\n        tuiIconButton\n        type="button"\n        [showLoader]="true"\n        (click)="onClick($event)"\n    ></button>\n</p>\n<h3>a[tuiButton]</h3>\n<p>\n    <a\n        tuiButton\n        type="button"\n        href="http://google.com"\n        class="tui-space_right-3 tui-space_bottom-3"\n        [icon]="icon"\n    >\n        Link\n    </a>\n\n    <a tuiButton [showLoader]="true">Loading button</a>\n</p>\n<h3>a[tuiIconButton]</h3>\n<p>\n    <a\n        tuiIconButton\n        type="button"\n        class="tui-space_right-3 tui-space_bottom-3"\n        [icon]="icon"\n        [routerLink]="[\'/tui-dropdown\']"\n    ></a>\n\n    <a\n        tuiIconButton\n        type="button"\n        icon="tuiIconSearch"\n        class="tui-space_right-3 tui-space_bottom-3"\n        [disabled]="true"\n        [routerLink]=""\n        [tuiFocusable]="false"\n    ></a>\n\n    <a\n        tuiIconButton\n        type="button"\n        [showLoader]="true"\n        [routerLink]=""\n        [tuiFocusable]="false"\n    ></a>\n</p>\n'},t.example2={HTML:'<button\n    tuiButton\n    type="button"\n    appearance="primary"\n    class="tui-space_right-3 tui-space_bottom-3"\n>\n    primary\n</button>\n<button\n    tuiButton\n    type="button"\n    appearance="secondary"\n    class="tui-space_right-3 tui-space_bottom-3"\n>\n    secondary\n</button>\n<button\n    tuiButton\n    type="button"\n    appearance="accent"\n    class="tui-space_right-3 tui-space_bottom-3"\n>\n    accent\n</button>\n<button\n    tuiButton\n    type="button"\n    appearance="flat"\n    class="tui-space_right-3 tui-space_bottom-3"\n>\n    flat\n</button>\n<button\n    tuiButton\n    type="button"\n    appearance="outline"\n    class="tui-space_right-3 tui-space_bottom-3"\n>\n    outline\n</button>\n<button\n    tuiIconButton\n    type="button"\n    appearance="icon"\n    icon="tuiIconCloseLarge"\n    class="tui-space_right-3 tui-space_bottom-3"\n></button>\n',TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-button-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiButtonExample2 {}\n"},t.example3={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_ARROW} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'tui-button-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiButtonExample3 {\n    readonly arrow = TUI_ARROW;\n\n    open = false;\n\n    onClick() {\n        this.open = !this.open;\n    }\n}\n",HTML:'<tui-hosted-dropdown\n    tuiDropdownLimitWidth="fixed"\n    [open]="open"\n    [content]="dropdown"\n>\n    <button tuiButton type="button" [iconRight]="arrow" (click)="onClick()">\n        Where could I find such an arrow...?\n    </button>\n</tui-hosted-dropdown>\n<ng-template #dropdown>\n    <div class="content">\n        Use\n        <code>TuiArrowModule</code>\n        from\n        <code>@taiga-ui/kit</code>\n    </div>\n</ng-template>\n',LESS:"@import 'taiga-ui-local';\n\n.icon {\n    .transition(transform);\n\n    &_rotated {\n        transform: rotate(180deg);\n    }\n}\n\n.content {\n    padding: 0.75rem 1.25rem;\n}\n"},t.example4={TypeScript:"import {Component, ViewEncapsulation} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\n\n@Component({\n    selector: 'tui-button-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation: ViewEncapsulation.None,\n    changeDetection,\n})\nexport class TuiButtonExample4 {}\n",HTML:'<button tuiButton appearance="custom">See LESS tab</button>\n',LESS:"// This goes into global, unencapsulated styles\ntui-wrapper[data-appearance='custom'] {\n    background: #bc71c9;\n    color: #fff;\n\n    &[data-state='hovered'] {\n        background: #a381ff;\n    }\n\n    &[data-state='pressed'] {\n        background: #8f75d1;\n    }\n\n    &[data-state='disabled'] {\n        background: #eaecee;\n    }\n}\n"},t.example5={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TUI_BUTTON_OPTIONS, TuiAppearance} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-button-example-5',\n    templateUrl: './index.html',\n    changeDetection,\n    providers: [\n        {\n            provide: TUI_BUTTON_OPTIONS,\n            useValue: {\n                shape: 'rounded',\n                appearance: TuiAppearance.Outline,\n                size: 'm',\n            },\n        },\n    ],\n})\nexport class TuiButtonExample5 {}\n",HTML:"<button tuiButton>Options</button>\n"},t.exampleImportModule="import {TuiButtonModule} from '@taiga-ui/core';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiButtonModule,\n    ],\n...\n",t.exampleInsertTemplate='<button tuiButton type="button" icon="tuiIconSettings">\n    Button\n</button>\n',t.exampleDefineOptions="import {TUI_BUTTON_OPTIONS} from '@taiga-ui/core';\n\n...\n\n@NgModule({\n    providers: [\n        {\n            provide: TUI_BUTTON_OPTIONS,\n            useValue: {\n                appearance: 'flat',\n                size: 'm',\n                shape: 'rounded'\n            },\n        },\n    ]\n...\n",t.disabled=!1,t.showLoader=!1,t.appearanceVariants=["primary","accent","secondary","outline","flat","whiteblock","whiteblock-active","icon"],t.appearance=t.appearanceVariants[0],t.sizeVariants=["xs","s","m","l","xl"],t.size=t.sizeVariants[3],t.shapeVariants=["square","rounded"],t.shape=null,t.icon="",t.iconRight="",t.iconButton=!1,t}return _createClass(n,[{key:"getContentVariants",value:function(t){return["","tuiIconEyeClosed","tuiIconHeartLarge",t]}}]),n}(b.a)).\u0275fac=function(t){return vt(t||Ct)},Ct.\u0275cmp=d["\u0275\u0275defineComponent"]({type:Ct,selectors:[["example-tui-button"]],features:[d["\u0275\u0275ProvidersFeature"]([{provide:m.a,useExisting:Object(d.forwardRef)((function(){return Ct}))}]),d["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","Button","package","CORE","type","components"],["pageTab",""],["id","usage",3,"content",6,"heading"],["id","appearance",3,"content",6,"heading"],["id","dropdown",3,"content",6,"heading"],["id","custom",3,"content",6,"heading"],["id","options",3,"content",6,"heading"],["tuiIconButton","","type","button",3,"appearance","disabled","icon","shape","showLoader","size",4,"ngIf","ngIfElse"],["button",""],[1,"tui-space_horizontal-2",3,"singleColor","ngModel","ngModelChange"],["template",""],["documentationPropertyName","appearance","documentationPropertyMode","input","documentationPropertyType","TuiAppearance | string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","disabled","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","icon","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","iconRight","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","shape","documentationPropertyMode","input","documentationPropertyType","'square' | 'rounded' | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","showLoader","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeXS | TuiSizeXL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["tuiIconButton","","type","button",3,"appearance","disabled","icon","shape","showLoader","size"],["tuiButton","","type","button",1,"tui-space_right-4",3,"appearance","disabled","icon","iconRight","shape","showLoader","size"],["cardNumber","1234","paymentSystem","maestro","size","s",1,"card"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(t,e){1&t&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275template"](1,ct,29,5,"ng-template",1),d["\u0275\u0275template"](2,gt,18,16,"ng-template",1),d["\u0275\u0275template"](3,yt,15,3,"ng-template",1),d["\u0275\u0275elementEnd"]())},directives:[f.a,h.a,_.a,E,w.a,k,D,R,M,z.a,o.t,U.a,a.NgControlStatus,a.NgModel,N.a,G.a,y.a,$.a,F.a],styles:["[_nghost-%COMP%]{display:block}.card[_ngcontent-%COMP%]{background:#87ceeb}"],changeDetection:0}),Object(s.b)([u.tuiPure],Ct.prototype,"getContentVariants",null),Ct),vt=d["\u0275\u0275getInheritedFactory"](Ot),xt=((Tt=_createClass((function t(){_classCallCheck(this,t)}))).\u0275mod=d["\u0275\u0275defineNgModule"]({type:Tt}),Tt.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||Tt)},imports:[[o.c,a.FormsModule,r.TuiCardModule,p.TuiAvatarModule,l.TuiSvgModule,p.TuiToggleModule,u.TuiFocusableModule,l.TuiButtonModule,l.TuiHostedDropdownModule,l.TuiDropdownControllerModule,p.TuiArrowModule,l.TuiNotificationModule,c.i,i.f.forChild(Object(c.p)(Ot)),l.TuiLinkModule]]}),Tt)},pVuH:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o=_createClass((function t(){_classCallCheck(this,t),this.pseudoVariants=[!1,!0],this.focusable=!0,this.pseudoFocused=null,this.pseudoHovered=null,this.pseudoPressed=null}))}}]);