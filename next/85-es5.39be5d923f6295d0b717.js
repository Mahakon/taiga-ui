function _templateObject13(){var e=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"]);return _templateObject13=function(){return e},e}function _templateObject12(){var e=_taggedTemplateLiteral([":\u241fefadc8d4431e8d89cddff062a3ea73f171e1b8db\u241f4453511622032715639: Import ",":START_TAG_CODE:TuiPaginationModule",":CLOSE_TAG_CODE: into a module where you want to use our component "]);return _templateObject12=function(){return e},e}function _templateObject11(){var e=_taggedTemplateLiteral([":\u241fce7a11e7e6703260dd3c380e666f8a12a54128ff\u241f8219649223317915483: Amount of visible pages at the edges "]);return _templateObject11=function(){return e},e}function _templateObject10(){var e=_taggedTemplateLiteral([":\u241f6ce429b0b2501d96eefb0c6f3c52e414e14909ef\u241f7208302007968196085: Amount of visible pages around active page "]);return _templateObject10=function(){return e},e}function _templateObject9(){var e=_taggedTemplateLiteral([":\u241f179c074c54faa08ac2cd371aae91270430094cb4\u241f5919257397270847364: Size "]);return _templateObject9=function(){return e},e}function _templateObject8(){var e=_taggedTemplateLiteral([":\u241f7188b68f4c0ede7f60421cd661e5d0791220c304\u241f4207451728711936955: Total pages count "]);return _templateObject8=function(){return e},e}function _templateObject7(){var e=_taggedTemplateLiteral([":\u241fbf69fc21a86418012f148932ebe5eb91bcae5b45\u241f6937522081049060052: Active page index "]);return _templateObject7=function(){return e},e}function _templateObject6(){var e=_taggedTemplateLiteral([":\u241f30781cbf047ad38e186ad68e325b742909287b00\u241f1810512560805883949: Accepts focus with keyboard "]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral([":\u241fa5c05002b0ac2040f1aede5e727e0ffd06eda819\u241f7590013429208346303:Custom"]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241f47ebd404b33f1353e628e1beaab432a604aa0267\u241f1450301538176787808:Visible edge pages"]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241f7447e99a313dfd660dfdac371c1790c906afdfbc\u241f1343291924581059799:Visible pages around active"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241f380ab580741bec31346978e7cab8062d6970408d\u241f8643289769990675407:Basic"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241fb6b6dd74c9cd7f63f1aa4d62ed5050cfe6280495\u241f8509982288045769283: Pagination component enables the user to select a specific page from a range of pages "]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{G5ph:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiPaginationModule",(function(){return Y}));var a,i,o,r=n("An66"),l=n("3kIJ"),c=n("1VvW"),d=n("SVIu"),u=n("dvRg"),p=n("cWK9"),m=n("kZht"),s=n("OZlg"),g=n("e0eB"),f=n("iyc4"),h=n("cc69"),x=n("X03X"),b=((o=function(){function e(){_classCallCheck(this,e),this.length=64,this.index=10}return _createClass(e,[{key:"goToPage",value:function(e){this.index=e,console.log("New page:",e)}}]),e}()).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=m["\u0275\u0275defineComponent"]({type:o,selectors:[["tui-pagination-example-1"]],decls:2,vars:5,consts:[["secondary","index","size","m",1,"slider",3,"max","quantum","ngModel","ngModelChange"],[3,"length","index","indexChange"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-input-slider",0),m["\u0275\u0275listener"]("ngModelChange",(function(e){return t.index=e})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](1,"tui-pagination",1),m["\u0275\u0275listener"]("indexChange",(function(e){return t.goToPage(e)})),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275property"]("max",t.length-1)("quantum",1)("ngModel",t.index),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("length",t.length)("index",t.index))},directives:[h.a,l.NgControlStatus,l.NgModel,x.a],styles:[".slider[_ngcontent-%COMP%]{width:12.5rem;margin-bottom:1em}"],changeDetection:0}),o),y=((i=function e(){_classCallCheck(this,e),this.activePadding=2}).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=m["\u0275\u0275defineComponent"]({type:i,selectors:[["tui-pagination-example-2"]],decls:2,vars:6,consts:[["secondary","activePadding","size","m",1,"slider",3,"max","quantum","ngModel","ngModelChange"],[3,"activePadding","length","index"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-input-slider",0),m["\u0275\u0275listener"]("ngModelChange",(function(e){return t.activePadding=e})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](1,"tui-pagination",1)),2&e&&(m["\u0275\u0275property"]("max",6)("quantum",1)("ngModel",t.activePadding),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("activePadding",t.activePadding)("length",64)("index",10))},directives:[h.a,l.NgControlStatus,l.NgModel,x.a],styles:[".slider[_ngcontent-%COMP%]{width:12.5rem;margin-bottom:1em}"],changeDetection:0}),i),P=((a=function e(){_classCallCheck(this,e),this.sidePadding=3}).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=m["\u0275\u0275defineComponent"]({type:a,selectors:[["tui-pagination-example-3"]],decls:2,vars:6,consts:[["secondary","sidePadding","size","m",1,"slider",3,"max","quantum","ngModel","ngModelChange"],[3,"sidePadding","length","index"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-input-slider",0),m["\u0275\u0275listener"]("ngModelChange",(function(e){return t.sidePadding=e})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](1,"tui-pagination",1)),2&e&&(m["\u0275\u0275property"]("max",6)("quantum",1)("ngModel",t.sidePadding),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("sidePadding",t.sidePadding)("length",64)("index",10))},directives:[h.a,l.NgControlStatus,l.NgModel,x.a],styles:[".slider[_ngcontent-%COMP%]{width:12.5rem;margin-bottom:1em}"],changeDetection:0}),a);function v(e,t){if(1&e&&m["\u0275\u0275text"](0),2&e){var n=t.$implicit,a=m["\u0275\u0275nextContext"]();m["\u0275\u0275textInterpolate"](a.days[n])}}var C,_,T=((C=function e(){_classCallCheck(this,e),this.days=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}).\u0275fac=function(e){return new(e||C)},C.\u0275cmp=m["\u0275\u0275defineComponent"]({type:C,selectors:[["tui-pagination-example-4"]],decls:3,vars:2,consts:[[3,"length","content"],["test",""]],template:function(e,t){if(1&e&&(m["\u0275\u0275element"](0,"tui-pagination",0),m["\u0275\u0275template"](1,v,1,1,"ng-template",null,1,m["\u0275\u0275templateRefExtractor"])),2&e){var n=m["\u0275\u0275reference"](2);m["\u0275\u0275property"]("length",7)("content",n)}},directives:[x.a],encapsulation:2,changeDetection:0}),C),O=n("EPR0"),j=n("yHor"),M=n("zGJC"),S=n("u8jZ");_=$localize(_templateObject());var V,E,z,w,L,k,N,$,D=["heading",$localize(_templateObject2())],A=["heading",$localize(_templateObject3())],I=["heading",$localize(_templateObject4())],q=["heading",$localize(_templateObject5())];function U(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18n"](1,_),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"tui-doc-example",2),m["\u0275\u0275i18nAttributes"](3,D),m["\u0275\u0275element"](4,"tui-pagination-example-1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"tui-doc-example",3),m["\u0275\u0275i18nAttributes"](6,A),m["\u0275\u0275element"](7,"tui-pagination-example-2"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](8,"tui-doc-example",4),m["\u0275\u0275i18nAttributes"](9,I),m["\u0275\u0275element"](10,"tui-pagination-example-3"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](11,"tui-doc-example",5),m["\u0275\u0275i18nAttributes"](12,q),m["\u0275\u0275element"](13,"tui-pagination-example-4"),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",n.example1),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",n.example2),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",n.example3),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",n.example4)}}function R(e,t){1&e&&m["\u0275\u0275i18n"](0,V)}function H(e,t){1&e&&m["\u0275\u0275i18n"](0,E)}function K(e,t){1&e&&m["\u0275\u0275i18n"](0,z)}function F(e,t){1&e&&m["\u0275\u0275i18n"](0,w)}function G(e,t){1&e&&m["\u0275\u0275i18n"](0,L)}function J(e,t){1&e&&m["\u0275\u0275i18n"](0,k)}function W(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"tui-doc-demo"),m["\u0275\u0275elementStart"](1,"tui-pagination",6),m["\u0275\u0275listener"]("indexChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().index=e})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"tui-doc-documentation"),m["\u0275\u0275template"](3,R,1,0,"ng-template",7),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().focusable=e})),m["\u0275\u0275template"](4,H,1,0,"ng-template",8),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().index=e})),m["\u0275\u0275template"](5,K,1,0,"ng-template",9),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().length=e})),m["\u0275\u0275template"](6,F,1,0,"ng-template",10),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().size=e})),m["\u0275\u0275template"](7,G,1,0,"ng-template",11),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().activePadding=e})),m["\u0275\u0275template"](8,J,1,0,"ng-template",12),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().sidePadding=e})),m["\u0275\u0275elementEnd"]()}if(2&e){var a=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("focusable",a.focusable)("length",a.length)("size",a.size)("activePadding",a.activePadding)("sidePadding",a.sidePadding)("index",a.index),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("documentationPropertyValue",a.focusable),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",a.index),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",a.length),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",a.sizeVariants)("documentationPropertyValue",a.size),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",a.activePadding),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",a.sidePadding)}}function B(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",13),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18nStart"](3,N),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](5,"tui-doc-code",14),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"li"),m["\u0275\u0275elementStart"](7,"p"),m["\u0275\u0275i18n"](8,$),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](9,"tui-doc-code",15),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",n.exampleImportModule),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}V=$localize(_templateObject6()),E=$localize(_templateObject7()),z=$localize(_templateObject8()),w=$localize(_templateObject9()),L=$localize(_templateObject10()),k=$localize(_templateObject11()),N=$localize(_templateObject12(),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),$=$localize(_templateObject13());var Z,X,Q=((X=function e(){_classCallCheck(this,e),this.exampleImportModule="import {TuiPaginationModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiPaginationModule\n    ],\n...\n",this.exampleInsertTemplate='<tui-pagination [length]="pageCount"\n                [index]="currentPage"\n                (indexChange)="goToPage($event)"></tui-pagination>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-pagination-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPaginationExample1 {\n    length = 64;\n\n    index = 10;\n\n    goToPage(index: number) {\n        this.index = index;\n        console.log('New page:', index);\n    }\n}\n",HTML:'<tui-input-slider\n    secondary="index"\n    size="m"\n    class="slider"\n    [max]="length - 1"\n    [quantum]="1"\n    [(ngModel)]="index"\n></tui-input-slider>\n\n<tui-pagination\n    [length]="length"\n    [index]="index"\n    (indexChange)="goToPage($event)"\n></tui-pagination>\n',LESS:n.e(10).then(n.bind(null,"oaEK"))},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-pagination-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPaginationExample2 {\n    activePadding = 2;\n}\n",HTML:'<tui-input-slider\n    secondary="activePadding"\n    size="m"\n    class="slider"\n    [max]="6"\n    [quantum]="1"\n    [(ngModel)]="activePadding"\n></tui-input-slider>\n\n<tui-pagination\n    [activePadding]="activePadding"\n    [length]="64"\n    [index]="10"\n></tui-pagination>\n',LESS:n.e(10).then(n.bind(null,"oaEK"))},this.example3={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-pagination-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPaginationExample3 {\n    sidePadding = 3;\n}\n",HTML:'<tui-input-slider\n    secondary="sidePadding"\n    size="m"\n    class="slider"\n    [max]="6"\n    [quantum]="1"\n    [(ngModel)]="sidePadding"\n></tui-input-slider>\n\n<tui-pagination\n    [sidePadding]="sidePadding"\n    [length]="64"\n    [index]="10"\n></tui-pagination>\n',LESS:n.e(10).then(n.bind(null,"oaEK"))},this.example4={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-pagination-example-4',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPaginationExample4 {\n    readonly days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];\n}\n",HTML:'<tui-pagination [length]="7" [content]="test"></tui-pagination>\n<ng-template #test let-index>{{days[index]}}</ng-template>\n'},this.focusable=!0,this.index=0,this.length=8,this.sizeVariants=["s","m"],this.size=this.sizeVariants[1],this.activePadding=1,this.sidePadding=1}).\u0275fac=function(e){return new(e||X)},X.\u0275cmp=m["\u0275\u0275defineComponent"]({type:X,selectors:[["example-tui-pagination"]],decls:4,vars:0,consts:[["header","Pagination","package","KIT","type","components"],["pageTab",""],["id","base",3,"content",6,"heading"],["id","around",3,"content",6,"heading"],["id","edges",3,"content",6,"heading"],["id","custom",3,"content",6,"heading"],[3,"focusable","length","size","activePadding","sidePadding","index","indexChange"],["documentationPropertyName","focusable","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","index","documentationPropertyMode","input-output","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","length","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","activePadding","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","sidePadding","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275template"](1,U,14,4,"ng-template",1),m["\u0275\u0275template"](2,W,9,13,"ng-template",1),m["\u0275\u0275template"](3,B,10,2,"ng-template",1),m["\u0275\u0275elementEnd"]())},directives:[s.a,g.a,f.a,b,y,P,T,O.a,x.a,j.a,M.a,S.a],encapsulation:2,changeDetection:0}),X),Y=((Z=function e(){_classCallCheck(this,e)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:Z}),Z.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||Z)},imports:[[u.TuiBadgeModule,u.TuiPaginationModule,u.TuiInputSliderModule,r.c,u.TuiRadioListModule,l.FormsModule,l.ReactiveFormsModule,d.h,c.f.forChild(Object(d.o)(Q)),p.c]]}),Z)}}]);