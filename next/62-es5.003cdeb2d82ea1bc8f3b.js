var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_templateObject14,_templateObject15,_templateObject16,_templateObject17,_templateObject18,_templateObject19,_templateObject20;function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,a=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function _iterableToArrayLimit(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,o,r=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(a=n.next()).done)&&(r.push(a.value),!t||r.length!==t);l=!0);}catch(m){i=!0,o=m}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{EqPA:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputDateTimeModule",(function(){return Ce}));var a,o=n("An66"),r=n("3kIJ"),l=n("1VvW"),i=n("SVIu"),m=n("Qq0t"),c=n("dvRg"),u=n("Piem"),d=n("kZht"),p=n("l4xa"),s=n("LusI"),f=n("K/iL"),_=n("OZlg"),T=n("e0eB"),y=n("yZWP"),b=n("iyc4"),C=n("8MTl");a=$localize(_templateObject||(_templateObject=_taggedTemplateLiteral([":\u241fbdc1ac802a9f8ebac5423e543fafda4ef101dcd5\u241f7402895815395298696:Form value:"])));var S,O,h,g,E,A=((S=_createClass((function e(){_classCallCheck(this,e),this.testForm=new r.FormGroup({testValue:new r.FormControl([new p.TuiDay(2017,2,15),null])})}))).\u0275fac=function(e){return new(e||S)},S.\u0275cmp=d["\u0275\u0275defineComponent"]({type:S,selectors:[["tui-input-date-time-example-1"]],decls:9,vars:4,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"form",0),d["\u0275\u0275elementStart"](1,"tui-input-date-time",1),d["\u0275\u0275text"](2," Choose date and time "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"p"),d["\u0275\u0275i18n"](4,a),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"pre"),d["\u0275\u0275elementStart"](6,"code"),d["\u0275\u0275text"](7),d["\u0275\u0275pipe"](8,"json"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("formGroup",t.testForm),d["\u0275\u0275advance"](7),d["\u0275\u0275textInterpolate"](d["\u0275\u0275pipeBind1"](8,2,t.testForm.value)))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,C.a,r.NgControlStatus,r.FormControlName],pipes:[o.k],encapsulation:2,changeDetection:0}),S);O=$localize(_templateObject2||(_templateObject2=_taggedTemplateLiteral([":\u241ff025901df0cbaf314e7b32707720772c7e995008\u241f2473136848054292961:Default:"]))),h=$localize(_templateObject3||(_templateObject3=_taggedTemplateLiteral([":\u241fbc0c7a2511bfa61dc113f7119c46786f9621dffe\u241f48462401577556644:With seconds:"]))),g=$localize(_templateObject4||(_templateObject4=_taggedTemplateLiteral([":\u241f2e7211f1a6997fae0f9857838493f0658007bb74\u241f4462643802911150950:With SS and MS:"]))),E=$localize(_templateObject5||(_templateObject5=_taggedTemplateLiteral([":\u241fbdc1ac802a9f8ebac5423e543fafda4ef101dcd5\u241f7402895815395298696:Form value:"])));var v,D,x,P,M,j,V,L,w=((D=_createClass((function e(){_classCallCheck(this,e),this.testForm=new r.FormGroup({testValue:new r.FormControl([new p.TuiDay(2017,2,15),null])})}))).\u0275fac=function(e){return new(e||D)},D.\u0275cmp=d["\u0275\u0275defineComponent"]({type:D,selectors:[["tui-input-date-time-example-2"]],decls:19,vars:4,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue","timeMode","HH:MM"],["formControlName","testValue","timeMode","HH:MM:SS"],["formControlName","testValue","timeMode","HH:MM:SS.MSS"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"form",0),d["\u0275\u0275elementStart"](1,"p"),d["\u0275\u0275i18n"](2,O),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"tui-input-date-time",1),d["\u0275\u0275text"](4," Choose date and time "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"p"),d["\u0275\u0275i18n"](6,h),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"tui-input-date-time",2),d["\u0275\u0275text"](8," Choose date and time "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"p"),d["\u0275\u0275i18n"](10,g),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](11,"tui-input-date-time",3),d["\u0275\u0275text"](12," Choose date and time "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](13,"p"),d["\u0275\u0275i18n"](14,E),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](15,"pre"),d["\u0275\u0275elementStart"](16,"code"),d["\u0275\u0275text"](17),d["\u0275\u0275pipe"](18,"json"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("formGroup",t.testForm),d["\u0275\u0275advance"](17),d["\u0275\u0275textInterpolate"](d["\u0275\u0275pipeBind1"](18,2,t.testForm.value)))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,C.a,r.NgControlStatus,r.FormControlName],pipes:[o.k],encapsulation:2,changeDetection:0}),D),I=((v=_createClass((function e(){_classCallCheck(this,e),this.control=new r.FormControl([new p.TuiDay(2017,2,15),new p.TuiTime(12,30)])}))).\u0275fac=function(e){return new(e||v)},v.\u0275cmp=d["\u0275\u0275defineComponent"]({type:v,selectors:[["tui-input-date-time-example-3"]],features:[d["\u0275\u0275ProvidersFeature"]([{provide:p.TUI_DATE_FORMAT,useValue:"YMD"},{provide:p.TUI_DATE_SEPARATOR,useValue:"/"}])],decls:2,vars:1,consts:[[1,"b-form",3,"formControl"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-input-date-time",0),d["\u0275\u0275text"](1," Choose date and time\n"),d["\u0275\u0275elementEnd"]()),2&e&&d["\u0275\u0275property"]("formControl",t.control)},directives:[C.a,r.NgControlStatus,r.FormControlDirective],encapsulation:2,changeDetection:0}),v),R=function(){function e(){_classCallCheck(this,e),this.separator=", "}return _createClass(e,[{key:"fromControlValue",value:function(e){var t=_slicedToArray(e.split(this.separator),2),n=t[0],a=t[1],o=void 0===a?"":a;return n?[p.TuiDay.normalizeParse(n),o?p.TuiTime.fromString(o):null]:[null,null]}},{key:"toControlValue",value:function(e){var t=_slicedToArray(e,2),n=t[0],a=t[1];return n?n.toString()+(a?"".concat(this.separator).concat(a.toString()):""):""}}]),e}(),F=((x=_createClass((function e(){_classCallCheck(this,e),this.control=new r.FormControl("19.01.2022, 12:33")}))).\u0275fac=function(e){return new(e||x)},x.\u0275cmp=d["\u0275\u0275defineComponent"]({type:x,selectors:[["tui-input-date-time-example-4"]],features:[d["\u0275\u0275ProvidersFeature"]([{provide:c.TUI_DATE_TIME_VALUE_TRANSFORMER,useClass:R}])],decls:7,vars:2,consts:[[1,"b-form",3,"formControl"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-input-date-time",0),d["\u0275\u0275text"](1," Choose date and time\n"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275text"](3,"Stringified control value:"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"p"),d["\u0275\u0275elementStart"](5,"code"),d["\u0275\u0275text"](6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("formControl",t.control),d["\u0275\u0275advance"](6),d["\u0275\u0275textInterpolate"](t.control.value))},directives:[C.a,r.NgControlStatus,r.FormControlDirective],encapsulation:2,changeDetection:0}),x),G=n("EPR0"),H=n("yHor"),z=n("zGJC"),k=n("FSyC"),N=n("RlDx"),$=n("CDxv"),U=n("eB8V"),Y=n("pQcr"),B=n("gEyt"),W=n("2wTY"),J=n("u8jZ");P=$localize(_templateObject6||(_templateObject6=_taggedTemplateLiteral([":\u241f044a4dc175f6a468120b459545b576929c5ece55\u241f4454597240613417998:",":START_TAG_CODE:InputDateTime",":CLOSE_TAG_CODE: allows to input date and time "])),"\ufffd#2\ufffd","\ufffd/#2\ufffd"),M=$localize(_templateObject7||(_templateObject7=_taggedTemplateLiteral([":\u241f44191f6f2084b7e19ed30289598f45f6dc88ef96\u241f9067186024080940878:DI-tokens for date localization:"]))),j=$localize(_templateObject8||(_templateObject8=_taggedTemplateLiteral([":\u241f4a9f8a78772cf0d29d68a56ec7d2e2e4cde207ba\u241f7722521738393615006:",":START_TAG_DT:",":START_TAG_CODE:TUI_DATE_FORMAT",":CLOSE_TAG_CODE:",":CLOSE_TAG_DT:",":START_TAG_DD: active date format ( ",":START_TAG_CODE:'DMY' | 'MDY' | 'YMD'",":CLOSE_TAG_CODE: ) ",":CLOSE_TAG_DD:",":START_TAG_DT:",":START_TAG_CODE:TUI_DATE_SEPARATOR",":CLOSE_TAG_CODE:",":CLOSE_TAG_DT:",":START_TAG_DD_1:single-character date's separator (dot, slash etc.)",":CLOSE_TAG_DD:"])),"[\ufffd#7\ufffd|\ufffd#11\ufffd]","[\ufffd#8\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd]","[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd]","[\ufffd/#7\ufffd|\ufffd/#11\ufffd]","\ufffd#9\ufffd","[\ufffd#8\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd]","[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd]","[\ufffd/#9\ufffd|\ufffd/#13\ufffd]","[\ufffd#7\ufffd|\ufffd#11\ufffd]","[\ufffd#8\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd]","[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd]","[\ufffd/#7\ufffd|\ufffd/#11\ufffd]","\ufffd#13\ufffd","[\ufffd/#9\ufffd|\ufffd/#13\ufffd]"),j=d["\u0275\u0275i18nPostprocess"](j),V=$localize(_templateObject9||(_templateObject9=_taggedTemplateLiteral([":\u241f1e189ebe2d938d6aaa6a9a2f9adeff1e3b372aac\u241f4839071173512899768:DI-tokens for input-configurations:"]))),L=$localize(_templateObject10||(_templateObject10=_taggedTemplateLiteral([":\u241f9131d0fb644c4d5aaa930d7412f5df510b08e6be\u241f3277359903153257463:",":START_TAG_DT:",":START_TAG_CODE:TUI_DATE_TIME_VALUE_TRANSFORMER",":CLOSE_TAG_CODE:",":CLOSE_TAG_DT:",":START_TAG_DD: custom format of control output ( ",":START_TAG_CODE:[TuiDay | null, TuiTime | null]",":CLOSE_TAG_CODE: is default). ",":START_PARAGRAPH:",":START_LINK: See example ",":CLOSE_LINK: with string as control's output. ",":CLOSE_PARAGRAPH:",":CLOSE_TAG_DD:"])),"\ufffd#22\ufffd","[\ufffd#23\ufffd|\ufffd#25\ufffd]","[\ufffd/#23\ufffd|\ufffd/#25\ufffd]","\ufffd/#22\ufffd","\ufffd#24\ufffd","[\ufffd#23\ufffd|\ufffd#25\ufffd]","[\ufffd/#23\ufffd|\ufffd/#25\ufffd]","\ufffd#26\ufffd","\ufffd#27\ufffd","\ufffd/#27\ufffd","\ufffd/#26\ufffd","\ufffd/#24\ufffd"),L=d["\u0275\u0275i18nPostprocess"](L);var K,Z,q,Q,X,ee,te,ne,ae=["heading",$localize(_templateObject11||(_templateObject11=_taggedTemplateLiteral([":\u241f380ab580741bec31346978e7cab8062d6970408d\u241f8643289769990675407:Basic"])))],oe=["heading",$localize(_templateObject12||(_templateObject12=_taggedTemplateLiteral([":\u241fc2d11aaec69642ed60bc139f0b022de0a9a109d7\u241f6778729094598431749:With control's output as string"])))];function re(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",2),d["\u0275\u0275i18nStart"](1,P),d["\u0275\u0275element"](2,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"h3"),d["\u0275\u0275i18n"](4,M),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"dl"),d["\u0275\u0275i18nStart"](6,j),d["\u0275\u0275elementStart"](7,"dt"),d["\u0275\u0275element"](8,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"dd",3),d["\u0275\u0275element"](10,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](11,"dt"),d["\u0275\u0275element"](12,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](13,"dd"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](14,"p",2),d["\u0275\u0275elementStart"](15,"a",4),d["\u0275\u0275text"](16," See example "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](17," with the usage of these tokens. "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](18,"h3"),d["\u0275\u0275i18n"](19,V),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](20,"dl"),d["\u0275\u0275i18nStart"](21,L),d["\u0275\u0275elementStart"](22,"dt"),d["\u0275\u0275element"](23,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](24,"dd"),d["\u0275\u0275element"](25,"code"),d["\u0275\u0275elementStart"](26,"p"),d["\u0275\u0275element"](27,"a",5),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](28,"tui-doc-example",6),d["\u0275\u0275i18nAttributes"](29,ae),d["\u0275\u0275element"](30,"tui-input-date-time-example-1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](31,"tui-doc-example",7),d["\u0275\u0275element"](32,"tui-input-date-time-example-2"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](33,"tui-doc-example",8),d["\u0275\u0275element"](34,"tui-input-date-time-example-3"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](35,"tui-doc-example",9),d["\u0275\u0275i18nAttributes"](36,oe),d["\u0275\u0275element"](37,"tui-input-date-time-example-4"),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](28),d["\u0275\u0275property"]("content",n.example1),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",n.example2),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",n.example3),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",n.example4)}}function le(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-input-date-time",18),d["\u0275\u0275text"](1," Choose date and time "),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"](2);d["\u0275\u0275property"]("disabledItemHandler",n.disabledItemHandler)("formControl",n.control)("focusable",n.focusable)("min",n.min)("max",n.max)("defaultActiveYearMonth",n.defaultActiveYearMonth)("pseudoFocused",n.pseudoFocused)("pseudoHovered",n.pseudoHovered)("pseudoInvalid",n.pseudoInvalid)("readOnly",n.readOnly)("timeMode",n.mode)("tuiHintContent",n.hintContent)("tuiHintDirection",n.hintDirection)("tuiHintMode",n.hintMode)("tuiTextfieldAutocomplete",n.autocomplete)("tuiTextfieldCleaner",n.cleaner)("tuiTextfieldExampleText",n.exampleText)("tuiTextfieldLabelOutside",n.labelOutside)("tuiTextfieldSize",n.size)}}function ie(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,K),d["\u0275\u0275element"](1,"code"),d["\u0275\u0275i18nEnd"]())}function me(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div"),d["\u0275\u0275text"](1," A handler that gets a date and returns true if it is disabled. "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"strong"),d["\u0275\u0275text"](3,"Must be a pure function"),d["\u0275\u0275elementEnd"]())}function ce(e,t){1&e&&d["\u0275\u0275i18n"](0,Z)}function ue(e,t){1&e&&d["\u0275\u0275i18n"](0,q)}function de(e,t){1&e&&d["\u0275\u0275i18n"](0,Q)}function pe(e,t){1&e&&d["\u0275\u0275i18n"](0,X)}function se(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-doc-demo",10),d["\u0275\u0275template"](1,le,2,19,"ng-template"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-doc-documentation"),d["\u0275\u0275template"](3,ie,2,0,"ng-template",11),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().disabled=e})),d["\u0275\u0275template"](4,me,4,0,"ng-template",12),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().disabledItemHandler=e})),d["\u0275\u0275template"](5,ce,1,0,"ng-template",13),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().min=e})),d["\u0275\u0275template"](6,ue,1,0,"ng-template",14),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().max=e})),d["\u0275\u0275template"](7,de,1,0,"ng-template",15),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().defaultActiveYearMonth=e})),d["\u0275\u0275template"](8,pe,1,0,"ng-template",16),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().mode=e})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](9,"inherited-documentation",17)}if(2&e){var a=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("control",a.control),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("documentationPropertyValue",a.disabled),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",a.disabledItemHandlerVariants)("documentationPropertyValue",a.disabledItemHandler),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",a.minVariants)("documentationPropertyValue",a.min),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",a.maxVariants)("documentationPropertyValue",a.max),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",a.defaultActiveYearMonthVariants)("documentationPropertyValue",a.defaultActiveYearMonth),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",a.modeVariants)("documentationPropertyValue",a.mode),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("dropdown",!0)}}function fe(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",19),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,ee),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",20),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18nStart"](8,te),d["\u0275\u0275element"](9,"code"),d["\u0275\u0275element"](10,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](11,"tui-doc-code",21),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"li"),d["\u0275\u0275i18nStart"](13,ne),d["\u0275\u0275element"](14,"tui-doc-code",22),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",n.exampleImportModule),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("code",n.exampleDeclareForm),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}K=$localize(_templateObject13||(_templateObject13=_taggedTemplateLiteral([":\u241ff9ccccc44cf2f4f7863a34de68d251cc17ca4072\u241f616675194705061558: Disabled state (use ",":START_TAG_CODE:formControl.disable()",":CLOSE_TAG_CODE: ) "])),"\ufffd#1\ufffd","\ufffd/#1\ufffd"),Z=$localize(_templateObject14||(_templateObject14=_taggedTemplateLiteral([":\u241fef3b890c694996695759808838384501533c73fc\u241f7105748595977480347: Min date "]))),q=$localize(_templateObject15||(_templateObject15=_taggedTemplateLiteral([":\u241f9cd5094464a3da726ac76eec86e3b2b42d383faf\u241f6045744383953302270: Max date "]))),Q=$localize(_templateObject16||(_templateObject16=_taggedTemplateLiteral([":\u241f8425c8cac8c070aec902511f4cbee7b38034f803\u241f6827097014556364717: The default active month that is shown when you opens calendar for the first time "]))),X=$localize(_templateObject17||(_templateObject17=_taggedTemplateLiteral([":\u241fc565c714bb04a047bd1bae3404031386d26d05d8\u241f1953362032734413793: Time modes for SS and MS support "]))),ee=$localize(_templateObject18||(_templateObject18=_taggedTemplateLiteral([":\u241f5ac39f9a4865e1fa1076fe6bfc72e1ff99949f29\u241f5541686400640412405: Import an Angular module for forms and ",":START_TAG_CODE:TuiInputDateTimeModule",":CLOSE_TAG_CODE: in the same module where you want to use our component: "])),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),te=$localize(_templateObject19||(_templateObject19=_taggedTemplateLiteral([":\u241f456424fe8e0d32d35e8189a73951290607573253\u241f6039324497180220606: Declare a form ( ",":START_TAG_CODE:FormGroup",":CLOSE_TAG_CODE: ) or a control ( ",":START_TAG_CODE:FormControl",":CLOSE_TAG_CODE: ) in your component: "])),"[\ufffd#9\ufffd|\ufffd#10\ufffd]","[\ufffd/#9\ufffd|\ufffd/#10\ufffd]","[\ufffd#9\ufffd|\ufffd#10\ufffd]","[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"),te=d["\u0275\u0275i18nPostprocess"](te),ne=$localize(_templateObject20||(_templateObject20=_taggedTemplateLiteral([":\u241f76d52ae838e90b2ba174872346714a031dbc612d\u241f8794844667839774096: Use in template: ",":START_TAG_TUI_DOC_CODE:",":CLOSE_TAG_TUI_DOC_CODE:"])),"\ufffd#14\ufffd","\ufffd/#14\ufffd");var _e,Te,ye=((_e=function(e){_inherits(a,e);var t=_createSuper(a);function a(){var e;return _classCallCheck(this,a),(e=t.apply(this,arguments)).today=p.TuiDay.currentLocal(),e.exampleDeclareForm="import {FormControl, FormGroup} from '@angular/forms';\n\n...\n\n@Component({\n    ...\n})\nexport class MyComponent {\n    testForm = new FormGroup({\n        testValue: new FormControl(),\n    });\n}\n",e.exampleImportModule="import {FormsModule, ReactiveFormsModule} from '@angular/forms';\nimport {TuiInputDateTimeModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        FormsModule,\n        ReactiveFormsModule,\n        TuiInputDateTimeModule\n    ],\n...\n",e.exampleInsertTemplate='<form [formGroup]="testForm">\n    <tui-input-date-time formControlName="testValue">\n        Choose date and time\n    </tui-input-date-time>\n</form>\n',e.example1={TypeScript:n.e(265).then(n.bind(null,"J9HU")),HTML:n.e(264).then(n.bind(null,"PgU5"))},e.example2={TypeScript:n.e(267).then(n.bind(null,"JUag")),HTML:n.e(266).then(n.bind(null,"alMF"))},e.example3={TypeScript:n.e(269).then(n.bind(null,"SELf")),HTML:n.e(268).then(n.bind(null,"fD5A"))},e.example4={TypeScript:n.e(271).then(n.bind(null,"sVd8")),HTML:n.e(270).then(n.bind(null,"EpuT")),"value-transformer.ts":n.e(272).then(n.bind(null,"1AoG"))},e.minVariants=[p.TUI_FIRST_DAY,new p.TuiDay(2017,2,5),new p.TuiDay(1900,0,1),[e.today.append({day:-1}),new p.TuiTime(12,20)]],e.min=e.minVariants[0],e.maxVariants=[p.TUI_LAST_DAY,new p.TuiDay(2017,11,11),new p.TuiDay(2020,2,5),new p.TuiDay(2300,0,1),[e.today.append({day:1}),new p.TuiTime(16,20)]],e.max=e.maxVariants[0],e.defaultActiveYearMonthVariants=[p.TuiMonth.currentLocal(),new p.TuiMonth(2020,2),new p.TuiMonth(2017,2)],e.defaultActiveYearMonth=e.defaultActiveYearMonthVariants[0],e.disabledItemHandlerVariants=[p.ALWAYS_FALSE_HANDLER,function(e){return e.day%3==0}],e.disabledItemHandler=e.disabledItemHandlerVariants[0],e.itemsVariants=[[],[new c.TuiNamedDay(p.TUI_LAST_DAY.append({year:-1}),"Unill today")]],e.items=e.itemsVariants[0],e.autocompleteVariants=["off","bday"],e.autocomplete=null,e.cleaner=!1,e.control=new r.FormControl(null,r.Validators.required),e.modeVariants=["HH:MM","HH:MM:SS","HH:MM:SS.MSS"],e.mode=e.modeVariants[0],e}return _createClass(a)}(s.a)).\u0275fac=function(e){return be(e||_e)},_e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:_e,selectors:[["example-tui-input-date-time"]],features:[d["\u0275\u0275ProvidersFeature"]([{provide:f.a,useExisting:Object(d.forwardRef)((function(){return _e}))}]),d["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","InputDateTime","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-9"],[1,"tui-space_bottom-5"],["tuiLink","","routerLink",".","fragment","date-localization"],["tuiLink","","routerLink",".","fragment","string-control-output"],["id","base",3,"content",6,"heading"],["id","modes","heading","Modes",3,"content"],["id","date-localization","heading","Date localization",3,"content"],["id","string-control-output",3,"content",6,"heading"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<TuiDay>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","TuiDay | [TuiDay, TuiTime]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","TuiDay | [TuiDay, TuiTime]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","defaultActiveYearMonth","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","timeMode","documentationPropertyMode","input","documentationPropertyType","TuiTimeMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"dropdown"],[3,"disabledItemHandler","formControl","focusable","min","max","defaultActiveYearMonth","pseudoFocused","pseudoHovered","pseudoInvalid","readOnly","timeMode","tuiHintContent","tuiHintDirection","tuiHintMode","tuiTextfieldAutocomplete","tuiTextfieldCleaner","tuiTextfieldExampleText","tuiTextfieldLabelOutside","tuiTextfieldSize"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275template"](1,re,38,4,"ng-template",1),d["\u0275\u0275template"](2,se,10,13,"ng-template",1),d["\u0275\u0275template"](3,fe,15,3,"ng-template",1),d["\u0275\u0275elementEnd"]())},directives:[_.a,T.a,y.a,l.e,b.a,A,w,I,F,G.a,H.a,z.a,k.a,C.a,r.NgControlStatus,r.FormControlDirective,N.a,$.b,U.b,Y.b,B.b,W.b,J.a],encapsulation:2,changeDetection:0}),_e),be=d["\u0275\u0275getInheritedFactory"](ye),Ce=((Te=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=d["\u0275\u0275defineNgModule"]({type:Te}),Te.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||Te)},imports:[[i.i,u.a,r.ReactiveFormsModule,r.FormsModule,o.c,m.TuiLinkModule,c.TuiInputDateTimeModule,m.TuiHintControllerModule,m.TuiTextfieldControllerModule,l.f.forChild(Object(i.p)(ye))]]}),Te)}}]);