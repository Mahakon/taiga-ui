var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_templateObject14,_templateObject15,_templateObject16,_templateObject17,_templateObject18,_templateObject19,_templateObject20,_templateObject21,_templateObject22,_templateObject23,_templateObject24,_templateObject25;function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,o=_getPrototypeOf(e);if(t){var a=_getPrototypeOf(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"iK5/":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputCountModule",(function(){return Te}));var o,a,r,l,i,u,m,c=n("An66"),p=n("3kIJ"),d=n("1VvW"),s=n("SVIu"),f=n("Qq0t"),b=n("dvRg"),_=n("Piem"),O=n("kZht"),T=n("LusI"),C=n("K/iL"),y=n("OZlg"),g=n("e0eB"),x=n("yZWP"),h=n("iyc4"),S=n("1Nkj"),j=n("okGw"),P=n("gEyt"),V=["label",$localize(_templateObject||(_templateObject=_taggedTemplateLiteral([":\u241fb159ec7c42ae077a8407364cc726a54b1adb6b12\u241f4517713429238727398:Step is 1 by default"])))],v=["label",$localize(_templateObject2||(_templateObject2=_taggedTemplateLiteral([":\u241fc81f9040e56ff2939bfcc8f7303ea190fc62a518\u241f2290251155545250605:Step is 100"])))],L=["label",$localize(_templateObject3||(_templateObject3=_taggedTemplateLiteral([":\u241fb4300d745195687ae85fb9b2cbcbdb97af131830\u241f2074374908429047288:Also works with negative values"])))],E=((o=_createClass((function e(){_classCallCheck(this,e),this.testForm=new p.FormGroup({testValue1:new p.FormControl(10,p.Validators.required),testValue2:new p.FormControl(10,p.Validators.required),testValue3:new p.FormControl(-10,p.Validators.required)})}))).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=O["\u0275\u0275defineComponent"]({type:o,selectors:[["tui-input-count-example-1"]],decls:11,vars:8,consts:[[1,"b-form",3,"formGroup"],["tuiLabel","",6,"label"],["formControlName","testValue1",3,"min","max"],["tuiLabel","",1,"tui-space_top-4",6,"label"],["formControlName","testValue2",3,"tuiTextfieldLabelOutside","step"],["formControlName","testValue3",3,"tuiTextfieldLabelOutside","min","max"]],template:function(e,t){1&e&&(O["\u0275\u0275elementStart"](0,"form",0),O["\u0275\u0275elementStart"](1,"label",1),O["\u0275\u0275i18nAttributes"](2,V),O["\u0275\u0275elementStart"](3,"tui-input-count",2),O["\u0275\u0275text"](4," Count something "),O["\u0275\u0275elementEnd"](),O["\u0275\u0275elementEnd"](),O["\u0275\u0275elementStart"](5,"label",3),O["\u0275\u0275i18nAttributes"](6,v),O["\u0275\u0275element"](7,"tui-input-count",4),O["\u0275\u0275elementEnd"](),O["\u0275\u0275elementStart"](8,"label",3),O["\u0275\u0275i18nAttributes"](9,L),O["\u0275\u0275element"](10,"tui-input-count",5),O["\u0275\u0275elementEnd"](),O["\u0275\u0275elementEnd"]()),2&e&&(O["\u0275\u0275property"]("formGroup",t.testForm),O["\u0275\u0275advance"](3),O["\u0275\u0275property"]("min",1)("max",200),O["\u0275\u0275advance"](4),O["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0)("step",100),O["\u0275\u0275advance"](3),O["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0)("min",-100)("max",100))},directives:[p["\u0275angular_packages_forms_forms_y"],p.NgControlStatusGroup,p.FormGroupDirective,S.a,j.a,p.NgControlStatus,p.FormControlName,P.b],encapsulation:2,changeDetection:0}),o),N=n("2wTY"),F=["label",$localize(_templateObject4||(_templateObject4=_taggedTemplateLiteral([":\u241fb159ec7c42ae077a8407364cc726a54b1adb6b12\u241f4517713429238727398:Step is 1 by default"])))],w=["label",$localize(_templateObject5||(_templateObject5=_taggedTemplateLiteral([":\u241fc81f9040e56ff2939bfcc8f7303ea190fc62a518\u241f2290251155545250605:Step is 100"])))],I=((a=_createClass((function e(){_classCallCheck(this,e),this.testForm=new p.FormGroup({testValue1:new p.FormControl(10,p.Validators.required),testValue2:new p.FormControl(10,p.Validators.required)})}))).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=O["\u0275\u0275defineComponent"]({type:a,selectors:[["tui-input-count-example-2"]],decls:7,vars:6,consts:[[1,"b-form",3,"formGroup"],["tuiLabel","",6,"label"],["formControlName","testValue1","tuiTextfieldSize","m",3,"max","tuiTextfieldLabelOutside"],["tuiLabel","",1,"tui-space_top-4",6,"label"],["formControlName","testValue2","tuiTextfieldSize","m",3,"step","max","tuiTextfieldLabelOutside"]],template:function(e,t){1&e&&(O["\u0275\u0275elementStart"](0,"form",0),O["\u0275\u0275elementStart"](1,"label",1),O["\u0275\u0275i18nAttributes"](2,F),O["\u0275\u0275element"](3,"tui-input-count",2),O["\u0275\u0275elementEnd"](),O["\u0275\u0275elementStart"](4,"label",3),O["\u0275\u0275i18nAttributes"](5,w),O["\u0275\u0275element"](6,"tui-input-count",4),O["\u0275\u0275elementEnd"](),O["\u0275\u0275elementEnd"]()),2&e&&(O["\u0275\u0275property"]("formGroup",t.testForm),O["\u0275\u0275advance"](3),O["\u0275\u0275property"]("max",999999)("tuiTextfieldLabelOutside",!0),O["\u0275\u0275advance"](3),O["\u0275\u0275property"]("step",100)("max",999999)("tuiTextfieldLabelOutside",!0))},directives:[p["\u0275angular_packages_forms_forms_y"],p.NgControlStatusGroup,p.FormGroupDirective,S.a,j.a,p.NgControlStatus,p.FormControlName,N.b,P.b],encapsulation:2,changeDetection:0}),a),z=["label",$localize(_templateObject6||(_templateObject6=_taggedTemplateLiteral([":\u241fca426ccdbb6cc86ab33b1135e42c32e2786d4700\u241f5758694726409722369:With custom options"])))],U=["label",$localize(_templateObject7||(_templateObject7=_taggedTemplateLiteral([":\u241fbf0cf1e190f62dac6e22474c00ebd6f99d2889b0\u241f2713636921764569690:With custom options and medium size"])))],A=((r=_createClass((function e(){_classCallCheck(this,e),this.testForm=new p.FormGroup({testValue1:new p.FormControl(10,p.Validators.required),testValue2:new p.FormControl(10,p.Validators.required)})}))).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=O["\u0275\u0275defineComponent"]({type:r,selectors:[["tui-input-count-example-3"]],features:[O["\u0275\u0275ProvidersFeature"]([{provide:b.TUI_INPUT_COUNT_OPTIONS,useValue:Object.assign(Object.assign({},b.TUI_INPUT_COUNT_DEFAULT_OPTIONS),{icons:{up:"tuiIconChevronUp",down:"tuiIconChevronDown"},appearance:"secondary",step:10,min:10,max:100})}])],decls:7,vars:3,consts:[[1,"b-form",3,"formGroup"],["tuiLabel","",6,"label"],["formControlName","testValue1",3,"tuiTextfieldLabelOutside"],["tuiLabel","",1,"tui-space_top-4",6,"label"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"]],template:function(e,t){1&e&&(O["\u0275\u0275elementStart"](0,"form",0),O["\u0275\u0275elementStart"](1,"label",1),O["\u0275\u0275i18nAttributes"](2,z),O["\u0275\u0275element"](3,"tui-input-count",2),O["\u0275\u0275elementEnd"](),O["\u0275\u0275elementStart"](4,"label",3),O["\u0275\u0275i18nAttributes"](5,U),O["\u0275\u0275element"](6,"tui-input-count",4),O["\u0275\u0275elementEnd"](),O["\u0275\u0275elementEnd"]()),2&e&&(O["\u0275\u0275property"]("formGroup",t.testForm),O["\u0275\u0275advance"](3),O["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0),O["\u0275\u0275advance"](3),O["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0))},directives:[p["\u0275angular_packages_forms_forms_y"],p.NgControlStatusGroup,p.FormGroupDirective,S.a,j.a,p.NgControlStatus,p.FormControlName,P.b,N.b],encapsulation:2,changeDetection:0}),r),D=n("EPR0"),G=n("yHor"),M=n("zGJC"),k=n("FSyC"),R=n("u8jZ");l=$localize(_templateObject8||(_templateObject8=_taggedTemplateLiteral([":\u241fb9669bf4d7cd2041365aecab26edefeae395b627\u241f7116640048935486801:",":START_TAG_CODE:InputCount",":CLOSE_TAG_CODE: is a good choice to input integer positive numbers under 999 "])),"\ufffd#2\ufffd","\ufffd/#2\ufffd"),i=$localize(_templateObject9||(_templateObject9=_taggedTemplateLiteral([":\u241f93ac744bf41984c8f980cafd646b71db909b71a3\u241f6434254909743697518: It allows limit value with min and max and handles such cases "]))),u=$localize(_templateObject10||(_templateObject10=_taggedTemplateLiteral([":\u241f756f0b4a649d274f59cdcd92ecebd22121a58de5\u241f3317726340623526124:It does not indicate validation status"]))),m=$localize(_templateObject11||(_templateObject11=_taggedTemplateLiteral([":\u241f0198de482ad16d583e51cf5d513123183dba1f58\u241f3089968062191477089: Number formatting can be customized by using ",":START_LINK:TUI_NUMBER_FORMAT",":CLOSE_LINK:"])),"\ufffd#9\ufffd","\ufffd/#9\ufffd");var $,q,B,W,H,K,J,Z,Q,Y,X,ee=["heading",$localize(_templateObject12||(_templateObject12=_taggedTemplateLiteral([":\u241f380ab580741bec31346978e7cab8062d6970408d\u241f8643289769990675407:Basic"])))],te=["heading",$localize(_templateObject13||(_templateObject13=_taggedTemplateLiteral([":\u241f0d72ce2c862fae2cccbe564228d17758c058bc20\u241f7861254305604213764:Size M"])))],ne=["heading",$localize(_templateObject14||(_templateObject14=_taggedTemplateLiteral([":\u241f24813b8a3e45f0b57136c18d003027262cfe2d1f\u241f8432562579042371182:Options"])))];function oe(e,t){if(1&e&&(O["\u0275\u0275elementStart"](0,"div",2),O["\u0275\u0275i18nStart"](1,l),O["\u0275\u0275element"](2,"code"),O["\u0275\u0275i18nEnd"](),O["\u0275\u0275elementEnd"](),O["\u0275\u0275elementStart"](3,"div",2),O["\u0275\u0275i18n"](4,i),O["\u0275\u0275elementEnd"](),O["\u0275\u0275elementStart"](5,"p"),O["\u0275\u0275i18n"](6,u),O["\u0275\u0275elementEnd"](),O["\u0275\u0275elementStart"](7,"p"),O["\u0275\u0275i18nStart"](8,m),O["\u0275\u0275element"](9,"a",3),O["\u0275\u0275i18nEnd"](),O["\u0275\u0275elementEnd"](),O["\u0275\u0275elementStart"](10,"tui-doc-example",4),O["\u0275\u0275i18nAttributes"](11,ee),O["\u0275\u0275element"](12,"tui-input-count-example-1"),O["\u0275\u0275elementEnd"](),O["\u0275\u0275elementStart"](13,"tui-doc-example",5),O["\u0275\u0275i18nAttributes"](14,te),O["\u0275\u0275element"](15,"tui-input-count-example-2"),O["\u0275\u0275elementEnd"](),O["\u0275\u0275elementStart"](16,"tui-doc-example",6),O["\u0275\u0275i18nAttributes"](17,ne),O["\u0275\u0275element"](18,"tui-input-count-example-3"),O["\u0275\u0275elementEnd"]()),2&e){var n=O["\u0275\u0275nextContext"]();O["\u0275\u0275advance"](10),O["\u0275\u0275property"]("content",n.example1),O["\u0275\u0275advance"](3),O["\u0275\u0275property"]("content",n.example2),O["\u0275\u0275advance"](3),O["\u0275\u0275property"]("content",n.example3)}}function ae(e,t){if(1&e&&(O["\u0275\u0275elementStart"](0,"tui-input-count",15),O["\u0275\u0275text"](1," Number of accounts "),O["\u0275\u0275elementEnd"]()),2&e){var n=O["\u0275\u0275nextContext"](2);O["\u0275\u0275property"]("formControl",n.control)("focusable",n.focusable)("min",n.min)("max",n.max)("hideButtons",n.hideButtons)("step",n.step)("prefix",n.prefix)("postfix",n.postfix)("readOnly",n.readOnly)("tuiTextfieldLabelOutside",n.labelOutside)("tuiTextfieldSize",n.size)}}function re(e,t){1&e&&(O["\u0275\u0275i18nStart"](0,$),O["\u0275\u0275element"](1,"code"),O["\u0275\u0275i18nEnd"]())}function le(e,t){1&e&&O["\u0275\u0275i18n"](0,q)}function ie(e,t){1&e&&O["\u0275\u0275i18n"](0,B)}function ue(e,t){1&e&&(O["\u0275\u0275i18nStart"](0,W),O["\u0275\u0275element"](1,"code"),O["\u0275\u0275i18nEnd"]())}function me(e,t){1&e&&O["\u0275\u0275i18n"](0,H)}function ce(e,t){1&e&&O["\u0275\u0275i18n"](0,K)}function pe(e,t){1&e&&O["\u0275\u0275i18n"](0,J)}function de(e,t){if(1&e){var n=O["\u0275\u0275getCurrentView"]();O["\u0275\u0275elementStart"](0,"tui-doc-demo",7),O["\u0275\u0275template"](1,ae,2,11,"ng-template"),O["\u0275\u0275elementEnd"](),O["\u0275\u0275elementStart"](2,"tui-doc-documentation"),O["\u0275\u0275template"](3,re,2,0,"ng-template",8),O["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return O["\u0275\u0275restoreView"](n),O["\u0275\u0275nextContext"]().disabled=e})),O["\u0275\u0275template"](4,le,1,0,"ng-template",9),O["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return O["\u0275\u0275restoreView"](n),O["\u0275\u0275nextContext"]().hideButtons=e})),O["\u0275\u0275template"](5,ie,1,0,"ng-template",10),O["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return O["\u0275\u0275restoreView"](n),O["\u0275\u0275nextContext"]().min=e})),O["\u0275\u0275template"](6,ue,2,0,"ng-template",11),O["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return O["\u0275\u0275restoreView"](n),O["\u0275\u0275nextContext"]().max=e})),O["\u0275\u0275template"](7,me,1,0,"ng-template",12),O["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return O["\u0275\u0275restoreView"](n),O["\u0275\u0275nextContext"]().prefix=e})),O["\u0275\u0275template"](8,ce,1,0,"ng-template",13),O["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return O["\u0275\u0275restoreView"](n),O["\u0275\u0275nextContext"]().postfix=e})),O["\u0275\u0275template"](9,pe,1,0,"ng-template",14),O["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return O["\u0275\u0275restoreView"](n),O["\u0275\u0275nextContext"]().step=e})),O["\u0275\u0275elementEnd"](),O["\u0275\u0275element"](10,"inherited-documentation")}if(2&e){var o=O["\u0275\u0275nextContext"]();O["\u0275\u0275property"]("control",o.control),O["\u0275\u0275advance"](3),O["\u0275\u0275property"]("documentationPropertyValue",o.disabled),O["\u0275\u0275advance"](1),O["\u0275\u0275property"]("documentationPropertyValue",o.hideButtons),O["\u0275\u0275advance"](1),O["\u0275\u0275property"]("documentationPropertyValue",o.min),O["\u0275\u0275advance"](1),O["\u0275\u0275property"]("documentationPropertyValue",o.max),O["\u0275\u0275advance"](1),O["\u0275\u0275property"]("documentationPropertyValue",o.prefix),O["\u0275\u0275advance"](1),O["\u0275\u0275property"]("documentationPropertyValue",o.postfix),O["\u0275\u0275advance"](1),O["\u0275\u0275property"]("documentationPropertyValues",o.stepValues)("documentationPropertyValue",o.step)}}function se(e,t){if(1&e&&(O["\u0275\u0275elementStart"](0,"ol",16),O["\u0275\u0275elementStart"](1,"li"),O["\u0275\u0275elementStart"](2,"p"),O["\u0275\u0275i18nStart"](3,Z),O["\u0275\u0275element"](4,"code"),O["\u0275\u0275i18nEnd"](),O["\u0275\u0275elementEnd"](),O["\u0275\u0275element"](5,"tui-doc-code",17),O["\u0275\u0275elementEnd"](),O["\u0275\u0275elementStart"](6,"li"),O["\u0275\u0275elementStart"](7,"p"),O["\u0275\u0275i18nStart"](8,Q),O["\u0275\u0275element"](9,"code"),O["\u0275\u0275element"](10,"code"),O["\u0275\u0275i18nEnd"](),O["\u0275\u0275elementEnd"](),O["\u0275\u0275element"](11,"tui-doc-code",18),O["\u0275\u0275elementEnd"](),O["\u0275\u0275elementStart"](12,"li"),O["\u0275\u0275elementStart"](13,"p"),O["\u0275\u0275i18n"](14,Y),O["\u0275\u0275elementEnd"](),O["\u0275\u0275element"](15,"tui-doc-code",19),O["\u0275\u0275elementEnd"](),O["\u0275\u0275elementStart"](16,"li"),O["\u0275\u0275elementStart"](17,"p"),O["\u0275\u0275i18nStart"](18,X),O["\u0275\u0275element"](19,"code"),O["\u0275\u0275i18nEnd"](),O["\u0275\u0275elementEnd"](),O["\u0275\u0275element"](20,"tui-doc-code",17),O["\u0275\u0275elementEnd"](),O["\u0275\u0275elementEnd"]()),2&e){var n=O["\u0275\u0275nextContext"]();O["\u0275\u0275advance"](5),O["\u0275\u0275property"]("code",n.exampleImportModule),O["\u0275\u0275advance"](6),O["\u0275\u0275property"]("code",n.exampleDeclareForm),O["\u0275\u0275advance"](4),O["\u0275\u0275property"]("code",n.exampleInsertTemplate),O["\u0275\u0275advance"](5),O["\u0275\u0275property"]("code",n.exampleDefineOptions)}}$=$localize(_templateObject15||(_templateObject15=_taggedTemplateLiteral([":\u241ff9ccccc44cf2f4f7863a34de68d251cc17ca4072\u241f616675194705061558: Disabled state (use ",":START_TAG_CODE:formControl.disable()",":CLOSE_TAG_CODE: ) "])),"\ufffd#1\ufffd","\ufffd/#1\ufffd"),q=$localize(_templateObject16||(_templateObject16=_taggedTemplateLiteral([":\u241fea14b95b26f0ac7cd0db32a42bd60e8ef5eb7cdc\u241f4295858242233154356: Hide icon buttons "]))),B=$localize(_templateObject17||(_templateObject17=_taggedTemplateLiteral([":\u241f41d4dbb03bf5617301e95d4fbce6b0e39ca47f01\u241f1090761179854672750: Minimum value "]))),W=$localize(_templateObject18||(_templateObject18=_taggedTemplateLiteral([":\u241fff319fe89f5215270e87674b1c4bc8696341e90a\u241f4080008404588596650: Maximum value ( ",":START_TAG_CODE:Infinity",":CLOSE_TAG_CODE: by default) "])),"\ufffd#1\ufffd","\ufffd/#1\ufffd"),H=$localize(_templateObject19||(_templateObject19=_taggedTemplateLiteral([":\u241f658adf15e902084053811153efcee4ab1a098c01\u241f889438292388771446: A prefix symbol, like currency "]))),K=$localize(_templateObject20||(_templateObject20=_taggedTemplateLiteral([":\u241ff5cf6d36f821cf714fb502d79cd966b650bfa4f7\u241f7436553299672149610: Some string after value "]))),J=$localize(_templateObject21||(_templateObject21=_taggedTemplateLiteral([":\u241f95f52be4795cdd2b39ffd9707f83e9721e0e17e9\u241f5700630542385259856: Step for buttons "]))),Z=$localize(_templateObject22||(_templateObject22=_taggedTemplateLiteral([":\u241f4033559e8c5b3ecd794da4fd8d5d21edd63b93eb\u241f5253084050799099966: Import an Angular module for forms and ",":START_TAG_CODE:TuiInputCountModule",":CLOSE_TAG_CODE: in the same module where you want to use our component: "])),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),Q=$localize(_templateObject23||(_templateObject23=_taggedTemplateLiteral([":\u241f456424fe8e0d32d35e8189a73951290607573253\u241f6039324497180220606: Declare a form ( ",":START_TAG_CODE:FormGroup",":CLOSE_TAG_CODE: ) or a control ( ",":START_TAG_CODE:FormControl",":CLOSE_TAG_CODE: ) in your component: "])),"[\ufffd#9\ufffd|\ufffd#10\ufffd]","[\ufffd/#9\ufffd|\ufffd/#10\ufffd]","[\ufffd#9\ufffd|\ufffd#10\ufffd]","[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"),Q=O["\u0275\u0275i18nPostprocess"](Q),Y=$localize(_templateObject24||(_templateObject24=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"]))),X=$localize(_templateObject25||(_templateObject25=_taggedTemplateLiteral([":\u241f73ea80ff7cf51755eaaeda82377f308e5bd9f5ac\u241f1877368257723241539: Optionally use the ",":START_TAG_CODE:TUI_INPUT_COUNT_OPTIONS",":CLOSE_TAG_CODE: injection token to override the default options for the component. "])),"\ufffd#19\ufffd","\ufffd/#19\ufffd");var fe,be,_e=((fe=function(e){_inherits(n,e);var t=_createSuper(n);function n(){var e;return _classCallCheck(this,n),(e=t.apply(this,arguments)).exampleDeclareForm="import {FormControl, FormGroup} from '@angular/forms';\n\n...\n\n@Component({\n...\n})\nexport class MyComponent {\n    testForm = new FormGroup({\n        testValue: new FormControl(10)\n    });\n}\n",e.exampleImportModule="import {FormsModule, ReactiveFormsModule} from '@angular/forms';\nimport {TuiInputCountModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        FormsModule,\n        ReactiveFormsModule,\n        TuiInputCountModule\n    ],\n...\n",e.exampleInsertTemplate='<ng-container [formGroup]="testForm">\n    <tui-input-count formControlName="testValue"></tui-input-count>\n</ng-container>\n',e.exampleDefineOptions="import {TUI_INPUT_COUNT_OPTIONS, TUI_INPUT_COUNT_DEFAULT_OPTIONS} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    providers: [{\n        provide: TUI_INPUT_COUNT_OPTIONS,\n        useValue: {\n            ...TUI_INPUT_COUNT_DEFAULT_OPTIONS,\n            icons: {\n                up: 'tuiIconChevronUp',\n                down: 'tuiIconChevronDown',\n            },\n            appearance: 'secondary',\n            step: 10,\n            min: 10,\n            max: 100,\n        },\n    }],\n...\n",e.example1={HTML:'<form class="b-form" [formGroup]="testForm">\n    <label tuiLabel i18n-label label="Step is 1 by default">\n        <tui-input-count formControlName="testValue1" [min]="1" [max]="200">\n            Count something\n        </tui-input-count>\n    </label>\n\n    <label tuiLabel i18n-label label="Step is 100" class="tui-space_top-4">\n        <tui-input-count\n            formControlName="testValue2"\n            [tuiTextfieldLabelOutside]="true"\n            [step]="100"\n        ></tui-input-count>\n    </label>\n\n    <label\n        tuiLabel\n        i18n-label\n        label="Also works with negative values"\n        class="tui-space_top-4"\n    >\n        <tui-input-count\n            formControlName="testValue3"\n            [tuiTextfieldLabelOutside]="true"\n            [min]="-100"\n            [max]="100"\n        ></tui-input-count>\n    </label>\n</form>\n',TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-input-count-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputCountExample1 {\n    readonly testForm = new FormGroup({\n        testValue1: new FormControl(10, Validators.required),\n        testValue2: new FormControl(10, Validators.required),\n        testValue3: new FormControl(-10, Validators.required),\n    });\n}\n"},e.example2={HTML:'<form class="b-form" [formGroup]="testForm">\n    <label tuiLabel i18n-label label="Step is 1 by default">\n        <tui-input-count\n            formControlName="testValue1"\n            tuiTextfieldSize="m"\n            [max]="999999"\n            [tuiTextfieldLabelOutside]="true"\n        ></tui-input-count>\n    </label>\n\n    <label tuiLabel i18n-label label="Step is 100" class="tui-space_top-4">\n        <tui-input-count\n            formControlName="testValue2"\n            tuiTextfieldSize="m"\n            [step]="100"\n            [max]="999999"\n            [tuiTextfieldLabelOutside]="true"\n        ></tui-input-count>\n    </label>\n</form>\n',TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-input-count-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputCountExample2 {\n    testForm = new FormGroup({\n        testValue1: new FormControl(10, Validators.required),\n        testValue2: new FormControl(10, Validators.required),\n    });\n}\n"},e.example3={HTML:'<form class="b-form" [formGroup]="testForm">\n    <label tuiLabel i18n-label label="With custom options">\n        <tui-input-count\n            formControlName="testValue1"\n            [tuiTextfieldLabelOutside]="true"\n        ></tui-input-count>\n    </label>\n\n    <label\n        tuiLabel\n        i18n-label\n        label="With custom options and medium size"\n        class="tui-space_top-4"\n    >\n        <tui-input-count\n            formControlName="testValue2"\n            tuiTextfieldSize="m"\n            [tuiTextfieldLabelOutside]="true"\n        ></tui-input-count>\n    </label>\n</form>\n',TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_INPUT_COUNT_DEFAULT_OPTIONS, TUI_INPUT_COUNT_OPTIONS} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'tui-input-count-example-3',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_INPUT_COUNT_OPTIONS,\n            useValue: {\n                ...TUI_INPUT_COUNT_DEFAULT_OPTIONS,\n                icons: {\n                    up: 'tuiIconChevronUp',\n                    down: 'tuiIconChevronDown',\n                },\n                appearance: 'secondary',\n                step: 10,\n                min: 10,\n                max: 100,\n            },\n        },\n    ],\n})\nexport class TuiInputCountExample3 {\n    testForm = new FormGroup({\n        testValue1: new FormControl(10, Validators.required),\n        testValue2: new FormControl(10, Validators.required),\n    });\n}\n"},e.min=0,e.max=999,e.step=1,e.stepValues=[1,2,3,4,5],e.sizeVariants=["m","l"],e.size=e.sizeVariants[1],e.hideButtons=!1,e.control=new p.FormControl,e.prefix="",e.postfix="",e}return _createClass(n)}(T.a)).\u0275fac=function(e){return Oe(e||fe)},fe.\u0275cmp=O["\u0275\u0275defineComponent"]({type:fe,selectors:[["example-tui-input-count"]],features:[O["\u0275\u0275ProvidersFeature"]([{provide:C.a,useExisting:Object(O.forwardRef)((function(){return fe}))}]),O["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","InputCount","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-3"],["tuiLink","","routerLink","/utils/tokens"],["id","base",3,"content",6,"heading"],["id","medium-large",3,"content",6,"heading"],["id","options",3,"content",6,"heading"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hideButtons","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","prefix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","postfix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","step","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","focusable","min","max","hideButtons","step","prefix","postfix","readOnly","tuiTextfieldLabelOutside","tuiTextfieldSize"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(O["\u0275\u0275elementStart"](0,"tui-doc-page",0),O["\u0275\u0275template"](1,oe,19,3,"ng-template",1),O["\u0275\u0275template"](2,de,11,9,"ng-template",1),O["\u0275\u0275template"](3,se,21,4,"ng-template",1),O["\u0275\u0275elementEnd"]())},directives:[y.a,g.a,x.a,d.e,h.a,E,I,A,D.a,G.a,M.a,k.a,j.a,p.NgControlStatus,p.FormControlDirective,P.b,N.b,R.a],encapsulation:2,changeDetection:0}),fe),Oe=O["\u0275\u0275getInheritedFactory"](_e),Te=((be=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=O["\u0275\u0275defineNgModule"]({type:be}),be.\u0275inj=O["\u0275\u0275defineInjector"]({factory:function(e){return new(e||be)},imports:[[c.c,p.FormsModule,p.ReactiveFormsModule,b.TuiInputCountModule,f.TuiLabelModule,f.TuiLinkModule,s.i,f.TuiTextfieldControllerModule,_.a,d.f.forChild(Object(s.p)(_e))]]}),be)}}]);