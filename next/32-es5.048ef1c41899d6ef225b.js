var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9;function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{X4lf:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiRingChartModule",(function(){return J}));var a,r=n("An66"),i=n("1VvW"),o=n("UTYu"),l=n("T8fS"),c=n("SVIu"),u=n("cWK9"),m=n("l4xa"),p=n("Qq0t"),s=n("kZht"),d=n("OZlg"),h=n("e0eB"),g=n("iyc4"),f=n("pdBE"),y=((a=_createClass((function e(){_classCallCheck(this,e),this.value=[40,30,20,10]}))).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=s["\u0275\u0275defineComponent"]({type:a,selectors:[["tui-ring-chart-example-1"]],decls:5,vars:4,consts:[[1,"wrapper"],["size","s",1,"tui-space_right-4",3,"value"],["size","m",1,"tui-space_right-4",3,"value"],["size","l",1,"tui-space_right-4",3,"value"],["size","xl",1,"tui-space_right-4",3,"value"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275element"](1,"tui-ring-chart",1),s["\u0275\u0275element"](2,"tui-ring-chart",2),s["\u0275\u0275element"](3,"tui-ring-chart",3),s["\u0275\u0275element"](4,"tui-ring-chart",4),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("value",t.value),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("value",t.value),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("value",t.value),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("value",t.value))},directives:[f.a],styles:[".wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}"],changeDetection:0}),a),b=n("0/K7");function v(e,t){if(1&e&&(s["\u0275\u0275element"](0,"tui-money",2),s["\u0275\u0275elementStart"](1,"div"),s["\u0275\u0275text"](2),s["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit,a=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("singleColor",!0)("value",a.getValue(n)),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](a.getLabel(n))}}var x,_,C,T,O,V,P,j=((x=function(){function e(){_classCallCheck(this,e),this.labels=["Food","Cafe","Open Source","Taxi","other"],this.value=[13769,12367,10172,3018,2592],this.sum=Object(m.sum).apply(void 0,_toConsumableArray(this.value))}return _createClass(e,[{key:"getValue",value:function(e){return Number.isNaN(e)?this.sum:this.value[e]}},{key:"getLabel",value:function(e){return Number.isNaN(e)?"Total":this.labels[e]}}]),e}()).\u0275fac=function(e){return new(e||x)},x.\u0275cmp=s["\u0275\u0275defineComponent"]({type:x,selectors:[["tui-ring-chart-example-2"]],decls:3,vars:2,consts:[[3,"value","content"],["content",""],[3,"singleColor","value"]],template:function(e,t){if(1&e&&(s["\u0275\u0275element"](0,"tui-ring-chart",0),s["\u0275\u0275template"](1,v,3,3,"ng-template",null,1,s["\u0275\u0275templateRefExtractor"])),2&e){var n=s["\u0275\u0275reference"](2);s["\u0275\u0275property"]("value",t.value)("content",n)}},directives:[f.a,b.a],styles:["[_nghost-%COMP%]{--tui-chart-0:#c779d0;--tui-chart-1:#feac5e;--tui-chart-2:#ff5f6d;--tui-chart-3:#4bc0c8;--tui-chart-4:#9795cd}"],changeDetection:0}),x),I=n("EPR0"),S=n("yHor"),z=n("zGJC"),w=n("u8jZ"),A=["header",$localize(_templateObject||(_templateObject=_taggedTemplateLiteral([":\u241f00214e46cd923ee161d8a9dc643a348f16675b61\u241f8113053841165912126:RingChart"])))],E=["heading",$localize(_templateObject2||(_templateObject2=_taggedTemplateLiteral([":\u241f10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd\u241f5960739619447908905:sizes"])))],N=["heading",$localize(_templateObject3||(_templateObject3=_taggedTemplateLiteral([":\u241f20fea4a90c025dc5f782601c437174dcdc02db7e\u241f1028344547250868618:With labels"])))];function L(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-example",2),s["\u0275\u0275i18nAttributes"](1,E),s["\u0275\u0275element"](2,"tui-ring-chart-example-1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"tui-doc-example",3),s["\u0275\u0275i18nAttributes"](4,N),s["\u0275\u0275element"](5,"tui-ring-chart-example-2"),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("content",n.example1),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",n.example2)}}function M(e,t){1&e&&s["\u0275\u0275i18n"](0,_)}function k(e,t){1&e&&s["\u0275\u0275i18n"](0,C)}function R(e,t){1&e&&s["\u0275\u0275i18n"](0,T)}function $(e,t){1&e&&s["\u0275\u0275i18n"](0,O)}function D(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-doc-demo"),s["\u0275\u0275elementStart"](1,"tui-ring-chart",4),s["\u0275\u0275listener"]("activeItemIndexChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().activeItemIndex=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"tui-doc-documentation"),s["\u0275\u0275template"](3,M,1,0,"ng-template",5),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().activeItemIndex=e})),s["\u0275\u0275template"](4,k,1,0,"ng-template",6),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().content=e})),s["\u0275\u0275template"](5,R,1,0,"ng-template",7),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().size=e})),s["\u0275\u0275template"](6,$,1,0,"ng-template",8),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().value=e})),s["\u0275\u0275elementEnd"]()}if(2&e){var a=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("value",a.value)("content",a.content)("size",a.size)("activeItemIndex",a.activeItemIndex),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("documentationPropertyValues",a.activeItemIndexVariants)("documentationPropertyValue",a.activeItemIndex),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",a.contentVariants)("documentationPropertyValue",a.content),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",a.sizeVariants)("documentationPropertyValue",a.size),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",a.valueVariants)("documentationPropertyValue",a.value)}}function H(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",9),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,V),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"tui-doc-code",10),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"li"),s["\u0275\u0275elementStart"](7,"p"),s["\u0275\u0275i18n"](8,P),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](9,"tui-doc-code",11),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("code",n.exampleImportModule),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}_=$localize(_templateObject4||(_templateObject4=_taggedTemplateLiteral([":\u241f3723984460cea02b3cfdfdd74bf637291ba195b1\u241f2888725611708468887: Active fragment "]))),C=$localize(_templateObject5||(_templateObject5=_taggedTemplateLiteral([":\u241f886c66708b7cfa5865a9b99e1ef5149d923fcd5c\u241f3956660088795559444: Content in the middle of ring. It gets index of active segment and total sum in context "]))),T=$localize(_templateObject6||(_templateObject6=_taggedTemplateLiteral([":\u241f179c074c54faa08ac2cd371aae91270430094cb4\u241f5919257397270847364: Size "]))),O=$localize(_templateObject7||(_templateObject7=_taggedTemplateLiteral([":\u241f616f8c85cb0c4ed37b94e8ba9c52e117da1a90c3\u241f206010917694362071: Value "]))),V=$localize(_templateObject8||(_templateObject8=_taggedTemplateLiteral([":\u241f76dcbcd752be692265a3b79e5ef1a60d9fdecc08\u241f3397391964644299834: Import ",":START_TAG_CODE:TuiRingChartModule",":CLOSE_TAG_CODE: into a module where you want to use our component "])),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),P=$localize(_templateObject9||(_templateObject9=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"])));var U,W,G=((W=_createClass((function e(){_classCallCheck(this,e),this.exampleImportModule="import {TuiRingChartModule} from '@taiga-ui/addon-charts';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiRingChartModule\n    ],\n...\n",this.exampleInsertTemplate='<tui-ring-chart [value]="value"></tui-ring-chart>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-ring-chart-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiRingChartExample1 {\n    readonly value = [40, 30, 20, 10];\n}\n",HTML:'<div class="wrapper">\n    <tui-ring-chart\n        size="s"\n        class="tui-space_right-4"\n        [value]="value"\n    ></tui-ring-chart>\n    <tui-ring-chart\n        size="m"\n        class="tui-space_right-4"\n        [value]="value"\n    ></tui-ring-chart>\n    <tui-ring-chart\n        size="l"\n        class="tui-space_right-4"\n        [value]="value"\n    ></tui-ring-chart>\n    <tui-ring-chart\n        size="xl"\n        class="tui-space_right-4"\n        [value]="value"\n    ></tui-ring-chart>\n</div>\n',LESS:".wrapper {\n    display: flex;\n    align-items: center;\n}\n"},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {sum} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-ring-chart-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiRingChartExample2 {\n    private readonly labels = ['Food', 'Cafe', 'Open Source', 'Taxi', 'other'];\n    readonly value = [13769, 12367, 10172, 3018, 2592];\n    readonly sum = sum(...this.value);\n\n    getValue(index: number): number {\n        return Number.isNaN(index) ? this.sum : this.value[index];\n    }\n\n    getLabel(index: number): string {\n        return Number.isNaN(index) ? 'Total' : this.labels[index];\n    }\n}\n",HTML:'<tui-ring-chart [value]="value" [content]="content"></tui-ring-chart>\n\n<ng-template #content let-index>\n    <tui-money [singleColor]="true" [value]="getValue(index)"></tui-money>\n    <div>{{getLabel(index)}}</div>\n</ng-template>\n',LESS:":host {\n    --tui-chart-0: #c779d0;\n    --tui-chart-1: #feac5e;\n    --tui-chart-2: #ff5f6d;\n    --tui-chart-3: #4bc0c8;\n    --tui-chart-4: #9795cd;\n}\n"},this.valueVariants=[[40,30,20,10],[13769,10172,3018,2592]],this.value=this.valueVariants[0],this.activeItemIndexVariants=[NaN,0,1,2],this.activeItemIndex=this.activeItemIndexVariants[0],this.sizeVariants=["s","m","l","xl"],this.size=this.sizeVariants[1],this.contentVariants=["",function(e){var t=e.$implicit,n=e.value;return isNaN(t)?"":Object(m.round)(100*n[t]/Object(m.sum).apply(void 0,_toConsumableArray(n)),2)+" %"},function(e){var t=e.$implicit,n=e.value;return isNaN(t)?Object(p.formatNumber)(Object(m.sum).apply(void 0,_toConsumableArray(n)))+"\nTotal":"".concat(Object(p.formatNumber)(n[t]),"\nSegment \u2116").concat(t+1)}],this.content=this.contentVariants[0]}))).\u0275fac=function(e){return new(e||W)},W.\u0275cmp=s["\u0275\u0275defineComponent"]({type:W,selectors:[["example-tui-ring-chart"]],decls:5,vars:0,consts:[["package","ADDON-CHARTS","type","components",6,"header"],["pageTab",""],["id","sizes",3,"content",6,"heading"],["id","labels",3,"content",6,"heading"],[1,"chart",3,"value","content","size","activeItemIndex","activeItemIndexChange"],["documentationPropertyName","activeItemIndex","documentationPropertyMode","input-output","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","content","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent<TuiRingChartContext>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS | TuiSizeXL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","readonly number[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275i18nAttributes"](1,A),s["\u0275\u0275template"](2,L,6,2,"ng-template",1),s["\u0275\u0275template"](3,D,7,12,"ng-template",1),s["\u0275\u0275template"](4,H,10,2,"ng-template",1),s["\u0275\u0275elementEnd"]())},directives:[d.a,h.a,g.a,y,j,I.a,f.a,S.a,z.a,w.a],styles:[".chart[_ngcontent-%COMP%]{margin:0 auto}"],changeDetection:0}),W),J=((U=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=s["\u0275\u0275defineNgModule"]({type:U}),U.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||U)},imports:[[r.c,i.f,o.TuiRingChartModule,l.TuiMoneyModule,u.c,c.i,i.f.forChild(Object(c.p)(G))]]}),U)}}]);