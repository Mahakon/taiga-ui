var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12;function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{OwDB:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiBadgedContentModule",(function(){return ee}));var o,a=n("An66"),r=n("3kIJ"),i=n("1VvW"),c=n("SVIu"),l=n("Qq0t"),d=n("dvRg"),u=n("kZht"),p=n("OZlg"),m=n("e0eB"),s=n("iyc4"),g=n("X//V"),b=n("cweO"),f=((o=_createClass((function e(){_classCallCheck(this,e)}))).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=u["\u0275\u0275defineComponent"]({type:o,selectors:[["tui-badged-content-example-1"]],decls:14,vars:6,consts:[[1,"row"],["colorTop","var(--tui-error-fill)","size","l",1,"tui-space_right-5",3,"rounded"],["text","a b","size","l",3,"rounded"],["colorBottom","var(--tui-success-fill)","size","l",1,"tui-space_right-5",3,"rounded"],["text","c d","size","l",3,"rounded"],["colorTop","var(--tui-success-fill)","colorBottom","var(--tui-error-fill)","size","l",1,"tui-space_right-5",3,"rounded"],["text","e","size","l",3,"rounded"],[1,"row","tui-space_top-5"],["colorTop","var(--tui-error-fill)","size","l",1,"tui-space_right-5"],["text","a b","size","l"],["colorBottom","var(--tui-success-fill)","size","l",1,"tui-space_right-5"],["text","c d","size","l"],["colorTop","var(--tui-success-fill)","colorBottom","var(--tui-error-fill)","size","l",1,"tui-space_right-5"],["text","e","size","l"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"div",0),u["\u0275\u0275elementStart"](1,"tui-badged-content",1),u["\u0275\u0275element"](2,"tui-avatar",2),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"tui-badged-content",3),u["\u0275\u0275element"](4,"tui-avatar",4),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"tui-badged-content",5),u["\u0275\u0275element"](6,"tui-avatar",6),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"div",7),u["\u0275\u0275elementStart"](8,"tui-badged-content",8),u["\u0275\u0275element"](9,"tui-avatar",9),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](10,"tui-badged-content",10),u["\u0275\u0275element"](11,"tui-avatar",11),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](12,"tui-badged-content",12),u["\u0275\u0275element"](13,"tui-avatar",13),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("rounded",!0),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("rounded",!0),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("rounded",!0),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("rounded",!0),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("rounded",!0),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("rounded",!0))},directives:[g.a,b.a],encapsulation:2,changeDetection:0}),o),v=n("GdrL"),h=n("71sB"),T=n("zV1d");function y(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"div",6),u["\u0275\u0275text"](1,"... and nothing happened"),u["\u0275\u0275elementEnd"]())}var _,x,C,z=((x=function(){function e(){_classCallCheck(this,e),this.value="",this.contentTop=0}return _createClass(e,[{key:"badgeValue",get:function(){return this.value.length}},{key:"color",get:function(){return 50===this.contentTop?"tuiIconCheck":"var(--tui-error-fill)"}},{key:"contentBottom",get:function(){return""}},{key:"onClick",value:function(){this.contentTop++}}]),e}()).\u0275fac=function(e){return new(e||x)},x.\u0275cmp=u["\u0275\u0275defineComponent"]({type:x,selectors:[["tui-badged-content-example-2"]],decls:9,vars:6,consts:[["colorTop","var(--tui-support-01)",3,"contentTop"],[1,"b-form",3,"ngModel","ngModelChange"],[1,"tui-space_top-5"],[3,"contentTop","contentBottom","colorTop"],["tuiButton","","type","button","appearance","secondary","size","xl",3,"disabled","click"],["customBadge",""],[1,"template"]],template:function(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"tui-badged-content",0),u["\u0275\u0275elementStart"](1,"tui-input",1),u["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e})),u["\u0275\u0275text"](2,"Input text"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"div",2),u["\u0275\u0275elementStart"](4,"tui-badged-content",3),u["\u0275\u0275elementStart"](5,"button",4),u["\u0275\u0275listener"]("click",(function(){return t.onClick()})),u["\u0275\u0275text"](6," Let's click 50 times ... "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](7,y,2,0,"ng-template",null,5,u["\u0275\u0275templateRefExtractor"]),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275reference"](8);u["\u0275\u0275property"]("contentTop",t.badgeValue),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngModel",t.value),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("contentTop",t.contentTop)("contentBottom",50===t.contentTop?n:"")("colorTop",t.color),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("disabled",50===t.contentTop)}},directives:[g.a,v.a,h.a,r.NgControlStatus,r.NgModel,T.a],styles:[".template[_ngcontent-%COMP%]{background:var(--tui-primary);color:var(--tui-primary-text);padding:0 .375rem}"],changeDetection:0}),x),B=((_=_createClass((function e(){_classCallCheck(this,e)}))).\u0275fac=function(e){return new(e||_)},_.\u0275cmp=u["\u0275\u0275defineComponent"]({type:_,selectors:[["tui-badged-content-example-3"]],decls:14,vars:10,consts:[[1,"row"],["contentTop","tuiIconCheckCircleLarge","colorTop","var(--tui-error-fill)","size","l",1,"tui-space_right-5",3,"rounded"],["text","a b","size","l",3,"rounded"],["colorBottom","var(--tui-success-fill)","size","l",1,"tui-space_right-5",3,"contentBottom","rounded"],["text","c d","size","l",3,"rounded"],["contentBottom","tuiIconSettings","colorTop","var(--tui-success-fill)","colorBottom","var(--tui-error-fill)","size","l",1,"tui-space_right-5",3,"contentTop","rounded"],["text","e","size","l",3,"rounded"],[1,"row","tui-space_top-5"],["colorTop","var(--tui-error-fill)","size","l",1,"tui-space_right-5",3,"contentTop"],["text","a b","size","l"],["contentBottom","tuiIconSettings","colorBottom","var(--tui-success-fill)","size","l",1,"tui-space_right-5"],["text","c d","size","l"],["contentBottom","tuiIconCheckCircleLarge","colorBottom","var(--tui-error-fill)","size","l",1,"tui-space_right-5",3,"contentTop"],["text","e","size","l"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"div",0),u["\u0275\u0275elementStart"](1,"tui-badged-content",1),u["\u0275\u0275element"](2,"tui-avatar",2),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"tui-badged-content",3),u["\u0275\u0275element"](4,"tui-avatar",4),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"tui-badged-content",5),u["\u0275\u0275element"](6,"tui-avatar",6),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"div",7),u["\u0275\u0275elementStart"](8,"tui-badged-content",8),u["\u0275\u0275element"](9,"tui-avatar",9),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](10,"tui-badged-content",10),u["\u0275\u0275element"](11,"tui-avatar",11),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](12,"tui-badged-content",12),u["\u0275\u0275element"](13,"tui-avatar",13),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("rounded",!0),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("rounded",!0),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("contentBottom",64)("rounded",!0),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("rounded",!0),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("contentTop",64)("rounded",!0),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("rounded",!0),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("contentTop",64),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("contentTop",64))},directives:[g.a,b.a],encapsulation:2,changeDetection:0}),_),S=n("EPR0"),P=n("yHor"),E=n("zGJC"),O=n("u8jZ");C=$localize(_templateObject||(_templateObject=_taggedTemplateLiteral([":\u241f955141bd8a279601d271380dab8e72db391b8cbc\u241f5350008780160113262: BadgedContent is a wrapper for other components to add badges and notifications to them. "])));var V,w,j,k,L,I,M,D,$=["heading",$localize(_templateObject2||(_templateObject2=_taggedTemplateLiteral([":\u241f2cafd3774163dbba7bfd8f323d1ec5e5daf29370\u241f5069453316184338315:with notification"])))],A=["heading",$localize(_templateObject3||(_templateObject3=_taggedTemplateLiteral([":\u241f09a7c1494df8e6916cbb3701edb1684ab3dc87bb\u241f929436895344517188:with different components"])))],N=["heading",$localize(_templateObject4||(_templateObject4=_taggedTemplateLiteral([":\u241f911b7fce6f9839becf82349838934c39f049a9bd\u241f4352677288238793646:with a badge and icon"])))];function R(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"p"),u["\u0275\u0275i18n"](1,C),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"tui-doc-example",2),u["\u0275\u0275i18nAttributes"](3,$),u["\u0275\u0275element"](4,"tui-badged-content-example-1"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"tui-doc-example",3),u["\u0275\u0275i18nAttributes"](6,A),u["\u0275\u0275element"](7,"tui-badged-content-example-2"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](8,"tui-doc-example",4),u["\u0275\u0275i18nAttributes"](9,N),u["\u0275\u0275element"](10,"tui-badged-content-example-3"),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("content",n.example1),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("content",n.example2),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("content",n.example3)}}function X(e,t){1&e&&u["\u0275\u0275element"](0,"tui-avatar",14),2&e&&u["\u0275\u0275property"]("rounded",!0)}function U(e,t){1&e&&(u["\u0275\u0275i18nStart"](0,V),u["\u0275\u0275element"](1,"b"),u["\u0275\u0275i18nEnd"]())}function G(e,t){1&e&&(u["\u0275\u0275i18nStart"](0,w),u["\u0275\u0275element"](1,"b"),u["\u0275\u0275i18nEnd"]())}function H(e,t){1&e&&u["\u0275\u0275i18n"](0,j)}function J(e,t){1&e&&u["\u0275\u0275i18n"](0,k)}function W(e,t){1&e&&u["\u0275\u0275i18n"](0,L)}function Z(e,t){1&e&&u["\u0275\u0275i18n"](0,I)}function q(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"tui-doc-demo"),u["\u0275\u0275elementStart"](1,"tui-badged-content",5),u["\u0275\u0275element"](2,"tui-avatar",6),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](3,X,1,1,"ng-template",null,7,u["\u0275\u0275templateRefExtractor"]),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"tui-doc-documentation"),u["\u0275\u0275template"](6,U,2,0,"ng-template",8),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"]().contentBottom=e})),u["\u0275\u0275template"](7,G,2,0,"ng-template",9),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"]().contentTop=e})),u["\u0275\u0275template"](8,H,1,0,"ng-template",10),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"]().colorBottom=e})),u["\u0275\u0275template"](9,J,1,0,"ng-template",11),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"]().colorTop=e})),u["\u0275\u0275template"](10,W,1,0,"ng-template",12),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"]().size=e})),u["\u0275\u0275template"](11,Z,1,0,"ng-template",13),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"]().rounded=e})),u["\u0275\u0275elementEnd"]()}if(2&e){var o=u["\u0275\u0275reference"](4),a=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("contentTop","Template"===a.contentTop?o:a.contentTop)("contentBottom","Template"===a.contentBottom?o:a.contentBottom)("rounded",a.rounded)("colorTop",a.colorTop)("colorBottom",a.colorBottom)("size",a.size),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("rounded",a.rounded)("size",a.size),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("documentationPropertyValues",a.contentVariants)("documentationPropertyValue",a.contentBottom),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValues",a.contentVariants)("documentationPropertyValue",a.contentTop),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValue",a.colorBottom),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValue",a.colorTop),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValues",a.sizeVariants)("documentationPropertyValue",a.size),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValue",a.rounded)}}function F(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"ol",15),u["\u0275\u0275elementStart"](1,"li"),u["\u0275\u0275elementStart"](2,"p"),u["\u0275\u0275i18nStart"](3,M),u["\u0275\u0275element"](4,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](5,"tui-doc-code",16),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"li"),u["\u0275\u0275elementStart"](7,"p"),u["\u0275\u0275i18n"](8,D),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](9,"tui-doc-code",17),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("code",n.exampleImportModule),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}V=$localize(_templateObject5||(_templateObject5=_taggedTemplateLiteral([":\u241ff7b141c8e74dba7316d16136643abac488fcddb5\u241f932985549614577710: Bottom right content. If it is a number, badge shows it. If it is a string, it will be used as icon. ",":START_BOLD_TEXT:Warning:",":CLOSE_BOLD_TEXT: use big icons for all sizes except 'xs'. "])),"\ufffd#1\ufffd","\ufffd/#1\ufffd"),w=$localize(_templateObject6||(_templateObject6=_taggedTemplateLiteral([":\u241f9ba0c6486b55335258d65d9dee344b7e600d5af9\u241f5899109405640997746: Top right content. If it is a number, badge shows it. If it is a string, it will be used as icon. ",":START_BOLD_TEXT:Warning:",":CLOSE_BOLD_TEXT: use big icons for all sizes except 'xs'. "])),"\ufffd#1\ufffd","\ufffd/#1\ufffd"),j=$localize(_templateObject7||(_templateObject7=_taggedTemplateLiteral([":\u241fdfb01c41c9e72b0c7cd50ee2c10464b9c4c9384a\u241f6293557483223795355: Bottom right content color. If there is no content, shows a small circle of this color. "]))),k=$localize(_templateObject8||(_templateObject8=_taggedTemplateLiteral([":\u241f28f5361172f173bd0b8879082e6dd777dc7f7cc8\u241f4344708617084344520: Top right content color. If there is no content, shows a small circle of this color. "]))),L=$localize(_templateObject9||(_templateObject9=_taggedTemplateLiteral([":\u241f179c074c54faa08ac2cd371aae91270430094cb4\u241f5919257397270847364: Size "]))),I=$localize(_templateObject10||(_templateObject10=_taggedTemplateLiteral([":\u241f6f3bd0a381b0f06876aa2784116206982c42c257\u241f8720720071780904257: Rounded mode "]))),M=$localize(_templateObject11||(_templateObject11=_taggedTemplateLiteral([":\u241fc4c036235fe0d58089ec47e1c5874ba94a02284e\u241f7293437017109719147: Import ",":START_TAG_CODE:TuiBadgedContentModule",":CLOSE_TAG_CODE: into a module where you want to use our component "])),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),D=$localize(_templateObject12||(_templateObject12=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"])));var K,Q,Y=((Q=_createClass((function e(){_classCallCheck(this,e),this.exampleImportModule="import {TuiBadgedContentModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiBadgedContentModule\n    ],\n...\n",this.exampleInsertTemplate='<tui-badged-content\n    [contentTop]="contentTop"\n    [colorTop]="colorTop"\n>\n    Content to wrap\n</tui-badged-content>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-badged-content-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiBadgedContentExample1 {}\n",HTML:'<div class="row">\n    <tui-badged-content\n        colorTop="var(--tui-error-fill)"\n        size="l"\n        class="tui-space_right-5"\n        [rounded]="true"\n    >\n        <tui-avatar text="a b" size="l" [rounded]="true"></tui-avatar>\n    </tui-badged-content>\n\n    <tui-badged-content\n        colorBottom="var(--tui-success-fill)"\n        size="l"\n        class="tui-space_right-5"\n        [rounded]="true"\n    >\n        <tui-avatar text="c d" size="l" [rounded]="true"></tui-avatar>\n    </tui-badged-content>\n\n    <tui-badged-content\n        colorTop="var(--tui-success-fill)"\n        colorBottom="var(--tui-error-fill)"\n        size="l"\n        class="tui-space_right-5"\n        [rounded]="true"\n    >\n        <tui-avatar text="e" size="l" [rounded]="true"></tui-avatar>\n    </tui-badged-content>\n</div>\n\n<div class="row tui-space_top-5">\n    <tui-badged-content\n        colorTop="var(--tui-error-fill)"\n        size="l"\n        class="tui-space_right-5"\n    >\n        <tui-avatar text="a b" size="l"></tui-avatar>\n    </tui-badged-content>\n\n    <tui-badged-content\n        colorBottom="var(--tui-success-fill)"\n        size="l"\n        class="tui-space_right-5"\n    >\n        <tui-avatar text="c d" size="l"></tui-avatar>\n    </tui-badged-content>\n\n    <tui-badged-content\n        colorTop="var(--tui-success-fill)"\n        colorBottom="var(--tui-error-fill)"\n        size="l"\n        class="tui-space_right-5"\n    >\n        <tui-avatar text="e" size="l"></tui-avatar>\n    </tui-badged-content>\n</div>\n'},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-badged-content-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiBadgedContentExample2 {\n    value = '';\n\n    contentTop = 0;\n\n    get badgeValue(): number {\n        return this.value.length;\n    }\n\n    get color(): string {\n        return this.contentTop === 50 ? 'tuiIconCheck' : 'var(--tui-error-fill)';\n    }\n\n    get contentBottom(): string {\n        return this.contentTop === 50 ? '' : '';\n    }\n\n    onClick() {\n        this.contentTop++;\n    }\n}\n",LESS:".template {\n    background: var(--tui-primary);\n    color: var(--tui-primary-text);\n    padding: 0 0.375rem;\n}\n",HTML:'<tui-badged-content colorTop="var(--tui-support-01)" [contentTop]="badgeValue">\n    <tui-input class="b-form" [(ngModel)]="value">Input text</tui-input>\n</tui-badged-content>\n\n<div class="tui-space_top-5">\n    <tui-badged-content\n        [contentTop]="contentTop"\n        [contentBottom]="contentTop === 50 ? customBadge : \'\'"\n        [colorTop]="color"\n    >\n        <button\n            tuiButton\n            type="button"\n            appearance="secondary"\n            size="xl"\n            [disabled]="contentTop === 50"\n            (click)="onClick()"\n        >\n            Let\'s click 50 times ...\n        </button>\n    </tui-badged-content>\n\n    <ng-template #customBadge>\n        <div class="template">... and nothing happened</div>\n    </ng-template>\n</div>\n'},this.example3={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-badged-content-example-3',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiBadgedContentExample3 {}\n",HTML:'<div class="row">\n    <tui-badged-content\n        contentTop="tuiIconCheckCircleLarge"\n        colorTop="var(--tui-error-fill)"\n        size="l"\n        class="tui-space_right-5"\n        [rounded]="true"\n    >\n        <tui-avatar text="a b" size="l" [rounded]="true"></tui-avatar>\n    </tui-badged-content>\n\n    <tui-badged-content\n        colorBottom="var(--tui-success-fill)"\n        size="l"\n        class="tui-space_right-5"\n        [contentBottom]="64"\n        [rounded]="true"\n    >\n        <tui-avatar text="c d" size="l" [rounded]="true"></tui-avatar>\n    </tui-badged-content>\n\n    <tui-badged-content\n        contentBottom="tuiIconSettings"\n        colorTop="var(--tui-success-fill)"\n        colorBottom="var(--tui-error-fill)"\n        size="l"\n        class="tui-space_right-5"\n        [contentTop]="64"\n        [rounded]="true"\n    >\n        <tui-avatar text="e" size="l" [rounded]="true"></tui-avatar>\n    </tui-badged-content>\n</div>\n\n<div class="row tui-space_top-5">\n    <tui-badged-content\n        colorTop="var(--tui-error-fill)"\n        size="l"\n        class="tui-space_right-5"\n        [contentTop]="64"\n    >\n        <tui-avatar text="a b" size="l"></tui-avatar>\n    </tui-badged-content>\n\n    <tui-badged-content\n        contentBottom="tuiIconSettings"\n        colorBottom="var(--tui-success-fill)"\n        size="l"\n        class="tui-space_right-5"\n    >\n        <tui-avatar text="c d" size="l"></tui-avatar>\n    </tui-badged-content>\n\n    <tui-badged-content\n        contentBottom="tuiIconCheckCircleLarge"\n        colorBottom="var(--tui-error-fill)"\n        size="l"\n        class="tui-space_right-5"\n        [contentTop]="64"\n    >\n        <tui-avatar text="e" size="l"></tui-avatar>\n    </tui-badged-content>\n</div>\n'},this.rounded=!1,this.sizeVariants=["xs","s","m","l","xl","xxl"],this.size=this.sizeVariants[2],this.colorTop="",this.colorBottom="",this.contentTop="",this.contentBottom="",this.contentVariants=["",1,5,155,"tuiIconCheck","Template","tuiIconCheckCircleLarge"]}))).\u0275fac=function(e){return new(e||Q)},Q.\u0275cmp=u["\u0275\u0275defineComponent"]({type:Q,selectors:[["example-avatar"]],decls:4,vars:0,consts:[["header","BadgedContent","package","KIT","type","components"],["pageTab",""],["id","base",3,"content",6,"heading"],["id","components",3,"content",6,"heading"],["id","badge",3,"content",6,"heading"],[3,"contentTop","contentBottom","rounded","colorTop","colorBottom","size"],["text","daenerys targaryen",3,"rounded","size"],["example",""],["documentationPropertyName","contentBottom","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","contentTop","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","colorBottom","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","colorTop","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyType","TuiSizeXS | TuiSizeXXL","documentationPropertyMode","input",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","rounded","documentationPropertyType","boolean","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValueChange"],["text","Example","size","s","avatarUrl","https://ng-web-apis.github.io/dist/assets/images/web-api.svg",3,"rounded"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275template"](1,R,11,3,"ng-template",1),u["\u0275\u0275template"](2,q,12,17,"ng-template",1),u["\u0275\u0275template"](3,F,10,2,"ng-template",1),u["\u0275\u0275elementEnd"]())},directives:[p.a,m.a,s.a,f,z,B,S.a,g.a,b.a,P.a,E.a,O.a],encapsulation:2,changeDetection:0}),Q),ee=((K=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=u["\u0275\u0275defineNgModule"]({type:K}),K.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||K)},imports:[[a.c,r.FormsModule,d.TuiAvatarModule,d.TuiBadgedContentModule,d.TuiInputModule,l.TuiButtonModule,c.i,i.f.forChild(Object(c.p)(Y))]]}),K)}}]);