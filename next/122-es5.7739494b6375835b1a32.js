var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10;function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{o3Pr:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiDefaultPropModule",(function(){return $}));var a,o,l,r,i,c,u=n("An66"),d=n("3kIJ"),p=n("1VvW"),m=n("SVIu"),s=n("Qq0t"),f=n("dvRg"),_=n("kZht"),b=n("OZlg"),O=n("e0eB"),T=n("yZWP"),g=n("D57K"),C=n("l4xa"),S=((a=_createClass((function e(){_classCallCheck(this,e),this.quantity=10}))).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=_["\u0275\u0275defineComponent"]({type:a,selectors:[["example-tui-default-prop-demo"]],inputs:{quantity:"quantity"},decls:1,vars:1,template:function(e,t){1&e&&_["\u0275\u0275text"](0),2&e&&_["\u0275\u0275textInterpolate1"]("Value: ",t.quantity,"")},encapsulation:2,changeDetection:0}),Object(g.b)([Object(C.tuiDefaultProp)((function(e){return Number.isInteger(e)&&e>=5}),"Should be integer number more than min value")],a.prototype,"quantity",void 0),a),E=n("okGw"),y=n("zV1d"),A=n("yHor"),h=n("zGJC"),j=n("u8jZ"),v=["header",$localize(_templateObject||(_templateObject=_taggedTemplateLiteral([":\u241fbd478366cc63c9ccb5b3e92f86050c481b7591b5\u241f522844369784178860:DefaultProp"])))];o=$localize(_templateObject2||(_templateObject2=_taggedTemplateLiteral([":\u241fb479593d371922844693f61ecc8c2d2c83095263\u241f7864857168300771288: Decorator for ",":START_TAG_CODE:@Input",":CLOSE_TAG_CODE: with default value "])),"\ufffd#2\ufffd","\ufffd/#2\ufffd"),l=$localize(_templateObject3||(_templateObject3=_taggedTemplateLiteral([":\u241f1a3f8851a234dde79761d6a9557bf35119e641f5\u241f513026917173447768:",":START_TAG_STRONG:Warning:",":CLOSE_TAG_STRONG: decorator overrides getter/setter of input "])),"\ufffd#5\ufffd","\ufffd/#5\ufffd"),r=$localize(_templateObject4||(_templateObject4=_taggedTemplateLiteral([":\u241fce730aff0a61b1c6dfdeb771c0166dab8f049638\u241f611516430062620827: Decorator stops ",":START_TAG_CODE:undefined",":CLOSE_TAG_CODE: values if they were passed into input. If it gets ",":START_TAG_CODE:undefined",":CLOSE_TAG_CODE: , it will use default value and show an error message about the problem in console in dev mode. "])),"[\ufffd#8\ufffd|\ufffd#9\ufffd]","[\ufffd/#8\ufffd|\ufffd/#9\ufffd]","[\ufffd#8\ufffd|\ufffd#9\ufffd]","[\ufffd/#8\ufffd|\ufffd/#9\ufffd]"),r=_["\u0275\u0275i18nPostprocess"](r),i=$localize(_templateObject5||(_templateObject5=_taggedTemplateLiteral([":\u241f1966746bf1c3090742685460bf263070f01e6d1b\u241f8401742800971685051: See ",":START_LINK: RequiredSetter ",":CLOSE_LINK: for work with setters "])),"\ufffd#12\ufffd","\ufffd/#12\ufffd"),c=$localize(_templateObject6||(_templateObject6=_taggedTemplateLiteral([":\u241fbbd1f9f56a2c3fe7bb73c5fd19c82bb37d867b3f\u241f1191829810746348448:See console. Min value is 5"])));var D,G,L,w,P=function(){return["/decorators/required-setter"]};function R(e,t){if(1&e){var n=_["\u0275\u0275getCurrentView"]();_["\u0275\u0275elementStart"](0,"div",2),_["\u0275\u0275i18nStart"](1,o),_["\u0275\u0275element"](2,"code"),_["\u0275\u0275i18nEnd"](),_["\u0275\u0275elementEnd"](),_["\u0275\u0275elementStart"](3,"div",2),_["\u0275\u0275i18nStart"](4,l),_["\u0275\u0275element"](5,"strong"),_["\u0275\u0275i18nEnd"](),_["\u0275\u0275elementEnd"](),_["\u0275\u0275elementStart"](6,"p"),_["\u0275\u0275i18nStart"](7,r),_["\u0275\u0275element"](8,"code"),_["\u0275\u0275element"](9,"code"),_["\u0275\u0275i18nEnd"](),_["\u0275\u0275elementEnd"](),_["\u0275\u0275elementStart"](10,"div"),_["\u0275\u0275i18nStart"](11,i),_["\u0275\u0275element"](12,"a",3),_["\u0275\u0275i18nEnd"](),_["\u0275\u0275elementEnd"](),_["\u0275\u0275elementStart"](13,"div"),_["\u0275\u0275elementStart"](14,"p"),_["\u0275\u0275i18n"](15,c),_["\u0275\u0275elementEnd"](),_["\u0275\u0275element"](16,"example-tui-default-prop-demo",4),_["\u0275\u0275elementStart"](17,"tui-input-count",5),_["\u0275\u0275listener"]("ngModelChange",(function(e){return _["\u0275\u0275restoreView"](n),_["\u0275\u0275nextContext"]().quantity=e})),_["\u0275\u0275text"](18," quantity "),_["\u0275\u0275elementEnd"](),_["\u0275\u0275elementStart"](19,"button",6),_["\u0275\u0275listener"]("click",(function(){return _["\u0275\u0275restoreView"](n),_["\u0275\u0275nextContext"]().setUndefined()})),_["\u0275\u0275text"](20," Set undefined "),_["\u0275\u0275elementEnd"](),_["\u0275\u0275elementEnd"]()}if(2&e){var a=_["\u0275\u0275nextContext"]();_["\u0275\u0275advance"](12),_["\u0275\u0275property"]("routerLink",_["\u0275\u0275pureFunction0"](3,P)),_["\u0275\u0275advance"](4),_["\u0275\u0275property"]("quantity",a.quantity),_["\u0275\u0275advance"](1),_["\u0275\u0275property"]("ngModel",a.quantity)}}function k(e,t){1&e&&(_["\u0275\u0275i18nStart"](0,G),_["\u0275\u0275elementStart"](1,"p"),_["\u0275\u0275element"](2,"strong"),_["\u0275\u0275element"](3,"code"),_["\u0275\u0275element"](4,"code"),_["\u0275\u0275element"](5,"code"),_["\u0275\u0275elementEnd"](),_["\u0275\u0275i18nEnd"]())}function q(e,t){1&e&&_["\u0275\u0275i18n"](0,L)}function x(e,t){1&e&&(_["\u0275\u0275elementStart"](0,"p"),_["\u0275\u0275i18nStart"](1,D),_["\u0275\u0275element"](2,"code"),_["\u0275\u0275element"](3,"code"),_["\u0275\u0275i18nEnd"](),_["\u0275\u0275elementEnd"](),_["\u0275\u0275elementStart"](4,"tui-doc-documentation"),_["\u0275\u0275template"](5,k,6,0,"ng-template",7),_["\u0275\u0275template"](6,q,1,0,"ng-template",8),_["\u0275\u0275elementEnd"]())}function z(e,t){if(1&e&&(_["\u0275\u0275elementStart"](0,"ol",9),_["\u0275\u0275elementStart"](1,"li"),_["\u0275\u0275elementStart"](2,"p"),_["\u0275\u0275i18nStart"](3,w),_["\u0275\u0275element"](4,"code"),_["\u0275\u0275i18nEnd"](),_["\u0275\u0275elementEnd"](),_["\u0275\u0275element"](5,"tui-doc-code",10),_["\u0275\u0275elementEnd"](),_["\u0275\u0275elementEnd"]()),2&e){var n=_["\u0275\u0275nextContext"]();_["\u0275\u0275advance"](5),_["\u0275\u0275property"]("code",n.exampleDecorator)}}D=$localize(_templateObject7||(_templateObject7=_taggedTemplateLiteral([":\u241ffd547a44cc6f9486b6864a55181ebf1c628dbca5\u241f4085809733886142878: You can also pass contract function of type ",":START_TAG_CODE:TuiBooleanHandler<T>",":CLOSE_TAG_CODE: with the component instance as ",":START_TAG_CODE:this",":CLOSE_TAG_CODE: . If check is unsuccessful, it shows an error message about the problem in console in dev mode. "])),"[\ufffd#2\ufffd|\ufffd#3\ufffd]","[\ufffd/#2\ufffd|\ufffd/#3\ufffd]","[\ufffd#2\ufffd|\ufffd#3\ufffd]","[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"),D=_["\u0275\u0275i18nPostprocess"](D),G=$localize(_templateObject8||(_templateObject8=_taggedTemplateLiteral([":\u241f77790f440794cded519a7b5def63eb463bb8720b\u241f148735004910297762: Optional argument, contract function ",":START_PARAGRAPH:",":START_TAG_STRONG:Warning:",":CLOSE_TAG_STRONG: Angular Compiler does not allow arrow functions in decorators with ",":START_TAG_CODE:strictMetadataEmit",":CLOSE_TAG_CODE: (by default). Add ",":START_TAG_CODE:// @dynamic",":CLOSE_TAG_CODE: comment right above your ",":START_TAG_CODE:@Component",":CLOSE_TAG_CODE: decorator to use them ",":CLOSE_PARAGRAPH:"])),"\ufffd#1\ufffd","\ufffd#2\ufffd","\ufffd/#2\ufffd","[\ufffd#3\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd]","[\ufffd/#3\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd]","[\ufffd#3\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd]","[\ufffd/#3\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd]","[\ufffd#3\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd]","[\ufffd/#3\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd]","\ufffd/#1\ufffd"),G=_["\u0275\u0275i18nPostprocess"](G),L=$localize(_templateObject9||(_templateObject9=_taggedTemplateLiteral([":\u241febcfa697b45b5a9b73277d1ce04941b18254fb2f\u241f6460611501050052701: Arguments for console.error if check is unsuccessful "]))),w=$localize(_templateObject10||(_templateObject10=_taggedTemplateLiteral([":\u241f70fdf68f9880c2f40203f1ff7fe9c47e379498b9\u241f5682654845346006339: Add ",":START_TAG_CODE:@tuiDefaultProp",":CLOSE_TAG_CODE: to input of your component "])),"\ufffd#4\ufffd","\ufffd/#4\ufffd");var I,M,N=((M=function(){function e(){_classCallCheck(this,e),this.exampleDecorator="@Input()\n@tuiDefaultProp(\n    quantity => Number.isInteger(quantity) && quantity >= 5,\n    'Should be integer number more than min value'\n)\nquantity = 10;\n",this.quantity=10}return _createClass(e,[{key:"setUndefined",value:function(){this.quantity=void 0}}]),e}()).\u0275fac=function(e){return new(e||M)},M.\u0275cmp=_["\u0275\u0275defineComponent"]({type:M,selectors:[["example-tui-default-prop"]],decls:5,vars:0,consts:[["package","CDK","path","cdk/decorators/default-prop.ts",6,"header"],["pageTab",""],[1,"tui-space_bottom-3"],["tuiLink","",3,"routerLink"],[3,"quantity"],[1,"tui-space_top-4",3,"ngModel","ngModelChange"],["tuiButton","","type","button",1,"tui-space_top-4","tui-space_bottom-8",3,"click"],["documentationPropertyName","assertion","documentationPropertyType","TuiBooleanHandler<T>"],["documentationPropertyName","args","documentationPropertyType","any"],[1,"b-demo-steps"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(_["\u0275\u0275elementStart"](0,"tui-doc-page",0),_["\u0275\u0275i18nAttributes"](1,v),_["\u0275\u0275template"](2,R,21,4,"ng-template",1),_["\u0275\u0275template"](3,x,7,0,"ng-template",1),_["\u0275\u0275template"](4,z,6,1,"ng-template",1),_["\u0275\u0275elementEnd"]())},directives:[b.a,O.a,T.a,p.e,S,E.a,d.NgControlStatus,d.NgModel,y.a,A.a,h.a,j.a],encapsulation:2,changeDetection:0}),M),$=((I=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=_["\u0275\u0275defineNgModule"]({type:I}),I.\u0275inj=_["\u0275\u0275defineInjector"]({factory:function(e){return new(e||I)},imports:[[u.c,d.FormsModule,s.TuiLinkModule,f.TuiInputCountModule,s.TuiButtonModule,m.i,p.f.forChild(Object(m.p)(N))]]}),I)}}]);