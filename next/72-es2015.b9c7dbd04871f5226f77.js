(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{mPyO:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputTagModule",(function(){return Oe}));var a=n("An66"),o=n("3kIJ"),i=n("1VvW"),r=n("SVIu"),l=n("Qq0t"),u=n("dvRg"),d=n("Piem"),c=n("kZht"),p=n("l4xa"),s=n("LusI"),m=n("K/iL"),g=n("OZlg"),f=n("e0eB"),h=n("iyc4"),x=n("p/Ap"),y=n("gEyt");let C=(()=>{class e{constructor(){this.control=new o.FormControl([])}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-tag-example-1"]],decls:4,vars:2,consts:[[1,"b-form",3,"tuiTextfieldLabelOutside","formControl"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-input-tag",0),c["\u0275\u0275text"](1," I'm a "),c["\u0275\u0275elementStart"](2,"i"),c["\u0275\u0275text"](3,"placeholder"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&c["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0)("formControl",t.control)},directives:[x.a,y.b,o.NgControlStatus,o.FormControlDirective],encapsulation:2,changeDetection:0}),e})();var b=n("ZTXN"),T=n("ROBh"),v=n("TLy2"),V=n("jIqt"),P=n("BwBJ"),S=n("fP8s"),w=n("OWJi");function E(e,t){if(1&e&&(c["\u0275\u0275element"](0,"tui-data-list-wrapper",2),c["\u0275\u0275pipe"](1,"async")),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275property"]("items",c["\u0275\u0275pipeBind1"](1,1,e.items$))}}const M=["John Cleese","Eric Idle","Michael Palin","Terry Gilliam","Terry Jones","Graham Chapman"];let I=(()=>{class e{constructor(){this.search$=new b.a,this.value=[],this.items$=this.search$.pipe(Object(v.a)(e=>this.serverRequest(e).pipe(Object(V.a)(null))),Object(V.a)(M))}onSearchChange(e){this.search$.next(e)}serverRequest(e){const t=M.filter(t=>-1!==t.toLowerCase().indexOf(e.toLowerCase()));return Object(T.a)(t).pipe(Object(P.a)(1e3*Math.random()+500))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-tag-example-2"]],decls:3,vars:2,consts:[[1,"b-form",3,"tuiTextfieldLabelOutside","ngModel","ngModelChange","searchChange"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-input-tag",0),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e}))("searchChange",(function(e){return t.onSearchChange(e)})),c["\u0275\u0275text"](1," Choose your Pythons' "),c["\u0275\u0275template"](2,E,2,3,"tui-data-list-wrapper",1),c["\u0275\u0275elementEnd"]()),2&e&&c["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0)("ngModel",t.value)},directives:[x.a,y.b,o.NgControlStatus,o.NgModel,S.a,w.a],pipes:[a.b],encapsulation:2,changeDetection:0}),e})();var L=n("2wTY"),D=n("eB8V");let A=(()=>{class e{constructor(){this.testForm=new o.FormGroup({testValue:new o.FormControl(["I","love","Angular"])})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-tag-example-3"]],decls:13,vars:6,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue","tuiTextfieldSize","s",3,"tuiTextfieldLabelOutside","tuiTextfieldCleaner"],["formControlName","testValue","tuiTextfieldSize","m",1,"tui-space_top-2",3,"tuiTextfieldLabelOutside","tuiTextfieldCleaner"],["formControlName","testValue",1,"tui-space_top-2",3,"tuiTextfieldCleaner"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"form",0),c["\u0275\u0275elementStart"](1,"tui-input-tag",1),c["\u0275\u0275text"](2," I'm a "),c["\u0275\u0275elementStart"](3,"i"),c["\u0275\u0275text"](4,"placeholder"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"tui-input-tag",2),c["\u0275\u0275text"](6," I'm a "),c["\u0275\u0275elementStart"](7,"i"),c["\u0275\u0275text"](8,"placeholder"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](9,"tui-input-tag",3),c["\u0275\u0275text"](10," I'm a "),c["\u0275\u0275elementStart"](11,"i"),c["\u0275\u0275text"](12,"placeholder"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275property"]("formGroup",t.testForm),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0)("tuiTextfieldCleaner",!0),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0)("tuiTextfieldCleaner",!0),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("tuiTextfieldCleaner",!0))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,x.a,o.NgControlStatus,o.FormControlName,L.b,y.b,D.b],encapsulation:2,changeDetection:0}),e})();var O=n("D57K"),H=n("kNZY"),F=n("cVyY"),_=n("xcN3");function $(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"button",5),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275property"]("value",e),c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",e," ")}}function N(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"tui-data-list"),c["\u0275\u0275template"](1,$,2,2,"button",4),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"](2);c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngForOf",e.filtered)}}function z(e,t){1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275template"](1,N,2,1,"tui-data-list",3),c["\u0275\u0275elementContainerEnd"]())}const R=["The Midnight","FM-84","Timecop1983","GUNSHIP"];function G(e){return!/\d/.test(e)}let j=(()=>{class e{constructor(){var e;this.search="",this.tagValidator=G,this.control=new o.FormControl([],(e=G,({value:t})=>(t?t.filter(e):p.EMPTY_ARRAY).length>0?{tags:new p.TuiValidationError("Some tags are invalid")}:null))}get filtered(){return this.filter(this.search,this.control.value)}filter(e,t){return R.filter(n=>Object(p.TUI_DEFAULT_MATCHER)(n,e)&&-1===t.indexOf(n))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-tag-example-4"]],decls:6,vars:6,consts:[[1,"b-form",3,"formControl","tuiTextfieldLabelOutside","tagValidator","search","searchChange"],[4,"ngIf"],[3,"formControl"],[4,"tuiDataList"],["tuiOption","",3,"value",4,"ngFor","ngForOf"],["tuiOption","",3,"value"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"p"),c["\u0275\u0275text"](1,"In this sample, tags with digits are invalid"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"tui-input-tag",0),c["\u0275\u0275listener"]("searchChange",(function(e){return t.search=e})),c["\u0275\u0275text"](3," Try it "),c["\u0275\u0275template"](4,z,2,0,"ng-container",1),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](5,"tui-field-error",2)),2&e&&(c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("formControl",t.control)("tuiTextfieldLabelOutside",!0)("tagValidator",t.tagValidator)("search",t.search),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngIf",t.filtered.length),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("formControl",t.control))},directives:[x.a,o.NgControlStatus,o.FormControlDirective,y.b,a.t,H.a,S.a,F.a,a.s,_.a],encapsulation:2,changeDetection:0}),Object(O.b)([p.tuiPure],e.prototype,"filter",null),e})();var k=n("RlDx");let U=(()=>{class e{constructor(){this.value=["\u06af\u0631\u0627\u0647\u0627\u0645 \u0686\u067e\u0645\u0646","\u062c\u0627\u0646 \u06a9\u0644\u06cc\u0632"]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-tag-example-5"]],decls:1,vars:3,consts:[["icon","tuiIconSearchLarge","iconAlign","left","tuiHintContent","\u0645\u0648\u0646\u062a\u06cc \u067e\u0627\u06cc\u062a\u0648\u0646",1,"input",3,"tuiTextfieldCleaner","tuiTextfieldLabelOutside","ngModel","ngModelChange"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-input-tag",0),c["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e})),c["\u0275\u0275elementEnd"]()),2&e&&c["\u0275\u0275property"]("tuiTextfieldCleaner",!0)("tuiTextfieldLabelOutside",!0)("ngModel",t.value)},directives:[x.a,k.a,D.b,y.b,o.NgControlStatus,o.NgModel],styles:[".input[_ngcontent-%COMP%]{width:20rem;direction:rtl;text-align:right}"],changeDetection:0}),e})();var W,B=n("EPR0"),J=n("yHor"),Y=n("zGJC"),q=n("FSyC"),K=n("SUM+"),Z=n("pQcr"),Q=n("KzL3"),X=n("yZWP"),ee=n("u8jZ");W=$localize`:␟afcbf8b99d1a559f2d4d82b878687bf91c4dc49b␟682295232355881622:${"\ufffd#2\ufffd"}:START_TAG_CODE:InputTag${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: allows to input several tags with autocomplete and list in dropdown. `;const te=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],ne=["heading",$localize`:␟1abaa1c3acfb9987cf9a1c84422e8baef7af845e␟989459206984870037:Async items loading`],ae=["heading",$localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`],oe=["heading",$localize`:␟9f773bc90c4bb84c592f2ed4763f1dbc3320e7e3␟3176539569174538377:Custom validation`],ie=["heading",$localize`:␟e79e58f2fd2e2018afeb160923b2810951e9dbfc␟2885218428372331823:Direction: RTL`];function re(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",2),c["\u0275\u0275i18nStart"](1,W),c["\u0275\u0275element"](2,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"tui-doc-example",3),c["\u0275\u0275i18nAttributes"](4,te),c["\u0275\u0275element"](5,"tui-input-tag-example-1"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"tui-doc-example",4),c["\u0275\u0275i18nAttributes"](7,ne),c["\u0275\u0275element"](8,"tui-input-tag-example-2"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](9,"tui-doc-example",5),c["\u0275\u0275i18nAttributes"](10,ae),c["\u0275\u0275element"](11,"tui-input-tag-example-3"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](12,"tui-doc-example",6),c["\u0275\u0275i18nAttributes"](13,oe),c["\u0275\u0275element"](14,"tui-input-tag-example-4"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](15,"tui-doc-example",7),c["\u0275\u0275i18nAttributes"](16,ie),c["\u0275\u0275element"](17,"tui-input-tag-example-5"),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",e.example1),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",e.example2),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",e.example3),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",e.example4),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",e.example5)}}function le(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tui-input-tag",20),c["\u0275\u0275listener"]("searchChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"](2).search=t})),c["\u0275\u0275text"](1," Please enter Pythons' names "),c["\u0275\u0275elementEnd"]()}if(2&e){const e=c["\u0275\u0275nextContext"](2);c["\u0275\u0275property"]("formControl",e.control)("tuiDropdownAlign",e.dropdownAlign)("tuiDropdownDirection",e.dropdownDirection)("tuiDropdownLimitWidth",e.dropdownLimitWidth)("tuiDropdownMinHeight",e.dropdownMinHeight)("tuiDropdownMaxHeight",e.dropdownMaxHeight)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintMode",e.hintMode)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldExampleText",e.exampleText)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldMaxLength",e.maxLength)("tuiTextfieldSize",e.size)("focusable",e.focusable)("disabledItemHandler",e.disabledItemHandler)("editable",e.editable)("expandable",e.expandable)("icon",e.icon)("iconAlign",e.iconAlign)("readOnly",e.readOnly)("allowSpaces",e.allowSpaces)("tagValidator",e.tagValidator)("inputHidden",e.inputHidden)("pseudoHovered",e.pseudoHovered)("pseudoPressed",e.pseudoPressed)("pseudoFocused",e.pseudoFocused)("pseudoInvalid",e.pseudoInvalid)("search",e.search)}}var ue,de,ce,pe,se,me,ge,fe,he,xe,ye;function Ce(e,t){1&e&&(c["\u0275\u0275i18nStart"](0,ue),c["\u0275\u0275element"](1,"code"),c["\u0275\u0275i18nEnd"]())}function be(e,t){1&e&&(c["\u0275\u0275i18nStart"](0,de),c["\u0275\u0275element"](1,"code"),c["\u0275\u0275i18nEnd"]())}function Te(e,t){1&e&&c["\u0275\u0275text"](0," Allow spaces inside tag ")}function ve(e,t){1&e&&c["\u0275\u0275i18n"](0,ce)}function Ve(e,t){1&e&&c["\u0275\u0275i18n"](0,pe)}function Pe(e,t){1&e&&c["\u0275\u0275i18n"](0,se)}function Se(e,t){1&e&&(c["\u0275\u0275i18nStart"](0,me),c["\u0275\u0275elementStart"](1,"a",21),c["\u0275\u0275element"](2,"code"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275i18nEnd"]())}function we(e,t){1&e&&c["\u0275\u0275i18n"](0,ge)}function Ee(e,t){1&e&&c["\u0275\u0275i18n"](0,fe)}function Me(e,t){1&e&&c["\u0275\u0275i18n"](0,he)}function Ie(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tui-doc-demo",8),c["\u0275\u0275template"](1,le,2,29,"ng-template"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"tui-doc-documentation"),c["\u0275\u0275template"](3,Ce,2,0,"ng-template",9),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().disabled=t})),c["\u0275\u0275template"](4,be,2,0,"ng-template",10),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().search=t})),c["\u0275\u0275template"](5,Te,1,0,"ng-template",11),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().allowSpaces=t})),c["\u0275\u0275template"](6,ve,1,0,"ng-template",12),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().disabledItemHandler=t})),c["\u0275\u0275template"](7,Ve,1,0,"ng-template",13),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().editable=t})),c["\u0275\u0275template"](8,Pe,1,0,"ng-template",14),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().expandable=t})),c["\u0275\u0275template"](9,Se,3,0,"ng-template",15),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().icon=t})),c["\u0275\u0275template"](10,we,1,0,"ng-template",16),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().iconAlign=t})),c["\u0275\u0275template"](11,Ee,1,0,"ng-template",17),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().inputHidden=t})),c["\u0275\u0275template"](12,Me,1,0,"ng-template",18),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().tagValidator=t})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](13,"inherited-documentation",19)}if(2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275property"]("control",e.control),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("documentationPropertyValue",e.disabled),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.search),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.allowSpaces),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.editable),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.expandable),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.iconVariants)("documentationPropertyValue",e.icon),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.iconAlignVariants)("documentationPropertyValue",e.iconAlign),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.inputHidden),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.tagValidatorVariants)("documentationPropertyValue",e.tagValidator),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("dropdown",!0)}}function Le(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"ol",22),c["\u0275\u0275elementStart"](1,"li"),c["\u0275\u0275elementStart"](2,"p"),c["\u0275\u0275i18nStart"](3,xe),c["\u0275\u0275element"](4,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](5,"tui-doc-code",23),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"li"),c["\u0275\u0275elementStart"](7,"p"),c["\u0275\u0275i18n"](8,ye),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](9,"tui-doc-code",24),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("code",e.exampleImportModule),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}ue=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,de=$localize`:␟302c49c0c091a231d37b02ebcadf02b4fd7009eb␟8556696629758299576: Textfield value to subscribe on input or setting it from the outside (emits ${"\ufffd#1\ufffd"}:START_TAG_CODE:null${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: when item from list selected) `,ce=$localize`:␟602d2ca3dd3d6bd61166eb562cbc5a7d3ba64eb6␟7890132259542012587: Handler for deactivation some tags `,pe=$localize`:␟6287011b40da302e14ccffef5a614afb7cc7e283␟6978135358566748527: Tags are editable `,se=$localize`:␟a4cdbbb3982f88a63813e7e82e991b6a6eddc494␟4902838123072095655: Control height can be expanded to show all tags `,me=$localize`:␟d03a90af9bc8467e5d854e31fa1aba2008f712ee␟8224576999847043867: An icon. It can be stringified svg or a name of icon registered in ${"\ufffd#1\ufffd"}:START_LINK:${"\ufffd#2\ufffd"}:START_TAG_CODE:SvgService${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#1\ufffd"}:CLOSE_LINK:`,ge=$localize`:␟ad56fc4e1a9650890c372aa93c2c426f8467baab␟561630626973828969: Icon align `,fe=$localize`:␟6ce45bd4a1fda17e0ac98d65053d1109077c6d83␟1436849720143811983: Hide input field. For example, to prevent adding new tags `,he=$localize`:␟24fc826e9f6d1737ab827b2db51272e81e476b65␟3924647870684137368: A function that cheks that tag is valid `,xe=$localize`:␟a48b1b6fe4f1a0418758cda1de24c138cf8d5ad5␟8882593062505514869: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputTagModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,ye=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let De=(()=>{class e extends s.a{constructor(){super(...arguments),this.exampleImportModule="import {FormsModule, ReactiveFormsModule} from '@angular/forms';\nimport {TuiInputTagModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        FormsModule,\n        ReactiveFormsModule,\n        TuiInputTagModule\n    ],\n...\n",this.exampleInsertTemplate='<ng-container [formGroup]="formName">\n    <tui-input-tag formControlName="controlName"></tui-input-tag>\n</ng-container>\n\n<tui-input-tag [(ngModel)]="model"></tui-input-tag>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-input-tag-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputTagExample1 {\n    readonly control = new FormControl([]);\n}\n",HTML:'<tui-input-tag\n    class="b-form"\n    [tuiTextfieldLabelOutside]="true"\n    [formControl]="control"\n>\n    I\'m a\n    <i>placeholder</i>\n</tui-input-tag>\n'},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {Observable, of, Subject} from 'rxjs';\nimport {delay, startWith, switchMap} from 'rxjs/operators';\n\nconst databaseMockData: readonly string[] = [\n    'John Cleese',\n    'Eric Idle',\n    'Michael Palin',\n    'Terry Gilliam',\n    'Terry Jones',\n    'Graham Chapman',\n];\n\n@Component({\n    selector: 'tui-input-tag-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputTagExample2 {\n    private readonly search$ = new Subject<string>();\n\n    value = [];\n\n    readonly items$ = this.search$.pipe(\n        switchMap(search =>\n            this.serverRequest(search).pipe(startWith<readonly string[] | null>(null)),\n        ),\n        startWith(databaseMockData),\n    );\n\n    onSearchChange(search: string) {\n        this.search$.next(search);\n    }\n\n    /**\n     * Server request emulation\n     */\n    private serverRequest(search: string): Observable<readonly string[]> {\n        const result = databaseMockData.filter(\n            item => item.toLowerCase().indexOf(search.toLowerCase()) !== -1,\n        );\n\n        return of(result).pipe(delay(Math.random() * 1000 + 500));\n    }\n}\n",HTML:'<tui-input-tag\n    class="b-form"\n    [tuiTextfieldLabelOutside]="true"\n    [(ngModel)]="value"\n    (searchChange)="onSearchChange($event)"\n>\n    Choose your Pythons\'\n    <tui-data-list-wrapper\n        *tuiDataList\n        [items]="items$ | async"\n    ></tui-data-list-wrapper>\n</tui-input-tag>\n'},this.example3={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-input-tag-example-3',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputTagExample3 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(['I', 'love', 'Angular']),\n    });\n}\n",HTML:'<form class="b-form" [formGroup]="testForm">\n    <tui-input-tag\n        formControlName="testValue"\n        tuiTextfieldSize="s"\n        [tuiTextfieldLabelOutside]="true"\n        [tuiTextfieldCleaner]="true"\n    >\n        I\'m a\n        <i>placeholder</i>\n    </tui-input-tag>\n    <tui-input-tag\n        formControlName="testValue"\n        tuiTextfieldSize="m"\n        class="tui-space_top-2"\n        [tuiTextfieldLabelOutside]="true"\n        [tuiTextfieldCleaner]="true"\n    >\n        I\'m a\n        <i>placeholder</i>\n    </tui-input-tag>\n    <tui-input-tag\n        formControlName="testValue"\n        class="tui-space_top-2"\n        [tuiTextfieldCleaner]="true"\n    >\n        I\'m a\n        <i>placeholder</i>\n    </tui-input-tag>\n</form>\n'},this.example4={TypeScript:"import {Component} from '@angular/core';\nimport {AbstractControl, FormControl, ValidatorFn} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    EMPTY_ARRAY,\n    TUI_DEFAULT_MATCHER,\n    TuiBooleanHandler,\n    tuiPure,\n    TuiValidationError,\n} from '@taiga-ui/cdk';\n\nfunction createControlValidator(handler: TuiBooleanHandler<string>): ValidatorFn {\n    return ({value}: AbstractControl) => {\n        const invalidTags = value ? value.filter(handler) : EMPTY_ARRAY;\n\n        return invalidTags.length > 0\n            ? {\n                  tags: new TuiValidationError('Some tags are invalid'),\n              }\n            : null;\n    };\n}\n\nconst ITEMS = ['The Midnight', 'FM-84', 'Timecop1983', 'GUNSHIP'];\n\nfunction tagValidator(tag: string) {\n    return !/\\d/.test(tag);\n}\n\n@Component({\n    selector: 'tui-input-tag-example-4',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputTagExample4 {\n    search = '';\n\n    readonly tagValidator = tagValidator;\n\n    readonly control = new FormControl([], createControlValidator(tagValidator));\n\n    get filtered(): readonly string[] {\n        return this.filter(this.search, this.control.value);\n    }\n\n    @tuiPure\n    private filter(search: string, value: readonly string[]): readonly string[] {\n        return ITEMS.filter(\n            item => TUI_DEFAULT_MATCHER(item, search) && value.indexOf(item) === -1,\n        );\n    }\n}\n",HTML:'<p>In this sample, tags with digits are invalid</p>\n\n<tui-input-tag\n    class="b-form"\n    [formControl]="control"\n    [tuiTextfieldLabelOutside]="true"\n    [tagValidator]="tagValidator"\n    [(search)]="search"\n>\n    Try it\n    <ng-container *ngIf="filtered.length">\n        <tui-data-list *tuiDataList>\n            <button *ngFor="let item of filtered" tuiOption [value]="item">\n                {{item}}\n            </button>\n        </tui-data-list>\n    </ng-container>\n</tui-input-tag>\n<tui-field-error [formControl]="control"></tui-field-error>\n'},this.example5={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-input-tag-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputTagExample5 {\n    value = ['\u06af\u0631\u0627\u0647\u0627\u0645 \u0686\u067e\u0645\u0646', '\u062c\u0627\u0646 \u06a9\u0644\u06cc\u0632'];\n}\n",HTML:'<tui-input-tag\n    icon="tuiIconSearchLarge"\n    iconAlign="left"\n    tuiHintContent="\u0645\u0648\u0646\u062a\u06cc \u067e\u0627\u06cc\u062a\u0648\u0646"\n    class="input"\n    [tuiTextfieldCleaner]="true"\n    [tuiTextfieldLabelOutside]="true"\n    [(ngModel)]="value"\n></tui-input-tag>\n',LESS:".input {\n    width: 20rem;\n    direction: rtl;\n    text-align: right;\n}\n"},this.control=new o.FormControl(["John Cleese","Eric Idle","Michael Palin"],o.Validators.required),this.editable=!0,this.expandable=!0,this.allowSpaces=!0,this.iconVariants=["tuiIconSearchLarge"],this.icon=null,this.iconAlignVariants=["left","right"],this.iconAlign=this.iconAlignVariants[1],this.maxLengthVariants=[10,20],this.maxLength=null,this.search="",this.sizeVariants=["s","m","l"],this.size=this.sizeVariants[this.sizeVariants.length-1],this.tagValidatorVariants=[p.ALWAYS_TRUE_HANDLER,e=>"test"===e,e=>"mail"!==e],this.tagValidator=this.tagValidatorVariants[0],this.inputHidden=!1,this.disabledItemHandlerVariants=[p.ALWAYS_FALSE_HANDLER,e=>"T"===e[0]],this.disabledItemHandler=this.disabledItemHandlerVariants[0]}}return e.\u0275fac=function(t){return Ae(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["example-input-tag"]],features:[c["\u0275\u0275ProvidersFeature"]([{provide:m.a,useExisting:Object(c.forwardRef)(()=>e)}]),c["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","InputTag","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-3"],["id","base",3,"content",6,"heading"],["id","async",3,"content",6,"heading"],["id","sizes",3,"content",6,"heading"],["id","validation",3,"content",6,"heading"],["id","rtl",3,"content",6,"heading"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","search","documentationPropertyMode","input-output","documentationPropertyType","string | null",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","allowSpaces","documentationPropertyType","boolean","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<string>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","editable","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","expandable","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","icon","documentationPropertyMode","input","documentationPropertyType","string | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","iconAlign","documentationPropertyMode","input","documentationPropertyType","TuiHorizontalDirection",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","inputHidden","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tagValidator","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<string>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"dropdown"],[3,"formControl","tuiDropdownAlign","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownMinHeight","tuiDropdownMaxHeight","tuiHintContent","tuiHintDirection","tuiHintMode","tuiTextfieldCleaner","tuiTextfieldExampleText","tuiTextfieldLabelOutside","tuiTextfieldMaxLength","tuiTextfieldSize","focusable","disabledItemHandler","editable","expandable","icon","iconAlign","readOnly","allowSpaces","tagValidator","inputHidden","pseudoHovered","pseudoPressed","pseudoFocused","pseudoInvalid","search","searchChange"],["tuiLink","","routerLink","/services/svg-service"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275template"](1,re,18,5,"ng-template",1),c["\u0275\u0275template"](2,Ie,14,16,"ng-template",1),c["\u0275\u0275template"](3,Le,10,2,"ng-template",1),c["\u0275\u0275elementEnd"]())},directives:[g.a,f.a,h.a,C,I,A,j,U,B.a,J.a,Y.a,q.a,x.a,o.NgControlStatus,o.FormControlDirective,K.a,k.a,D.b,Z.b,y.b,Q.b,L.b,X.a,i.e,ee.a],encapsulation:2,changeDetection:0}),e})();const Ae=c["\u0275\u0275getInheritedFactory"](De);let Oe=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,o.FormsModule,o.ReactiveFormsModule,d.a,l.TuiDataListModule,u.TuiDataListWrapperModule,l.TuiLinkModule,u.TuiInputTagModule,u.TuiFieldErrorModule,l.TuiDropdownControllerModule,l.TuiTextfieldControllerModule,l.TuiHintControllerModule,r.i,i.f.forChild(Object(r.p)(De))]]}),e})()}}]);