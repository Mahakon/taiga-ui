(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{"5UM4":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiSvgModule",(function(){return C}));var i,o,c,a,r,d=n("An66"),l=n("1VvW"),m=n("SVIu"),u=n("Qq0t"),S=n("4C5Q"),s=n("kZht"),p=n("OZlg"),T=n("e0eB"),f=n("yHor"),g=n("zGJC"),v=n("u8jZ"),E=n("ONKv");function A(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18n"](1,i),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,o),s["\u0275\u0275element"](4,"strong"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"]())}function _(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,c),s["\u0275\u0275elementStart"](1,"p"),s["\u0275\u0275elementStart"](2,"strong"),s["\u0275\u0275element"](3,"code"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275i18nEnd"]())}function O(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-documentation",2),s["\u0275\u0275template"](1,_,4,0,"ng-template",3),s["\u0275\u0275elementEnd"]()),2&e&&s["\u0275\u0275property"]("isAPI",!0)}function b(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",4),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,a),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"tui-doc-code",5),s["\u0275\u0275elementStart"](6,"p"),s["\u0275\u0275i18nStart"](7,r),s["\u0275\u0275element"](8,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"p"),s["\u0275\u0275element"](10,"tui-svg",6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("code",e.injectService)}}i=$localize`:␟62442c600050ca0d3f65a2e8d29ff33d06792537␟3658315716341587729:Service to define SVG to reuse it later`,o=$localize`:␟9bcfad864376d2252a52b5b3a1567d5eb1c99960␟3524578590535618315:${"\ufffd#4\ufffd"}:START_TAG_STRONG:Singleton${"\ufffd/#4\ufffd"}:CLOSE_TAG_STRONG: you do not need to provide it, just inject into your component and use it `,c=$localize`:␟08d10920780a916de27666a0fbc35d87636f82b8␟147498612382264826: Method to define an icon. ${"\ufffd#1\ufffd"}:START_PARAGRAPH:${"\ufffd#2\ufffd"}:START_TAG_STRONG: Warning, name of the icon must not start with " ${"\ufffd#3\ufffd"}:START_TAG_CODE:<${"\ufffd/#3\ufffd"}:CLOSE_TAG_CODE: " ${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:${"\ufffd/#1\ufffd"}:CLOSE_PARAGRAPH: Name should be unique. `,a=$localize`:␟f699abc744f26b11909ae293bc79eb53e880ccda␟4582239652724734441: Inject ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiSvgService${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into your component and define an icon: `,r=$localize`:␟825e0155e46373afbcce08f192409261bb21285f␟8067431247195064069: Show in tempaltes with ${"\ufffd#8\ufffd"}:START_TAG_CODE:tui-svg${"\ufffd/#8\ufffd"}:CLOSE_TAG_CODE: : `;let h=(()=>{class e{constructor(e){this.injectService="import {TuiSvgService, tuiIconTrashLarge} from '@taiga-ui/core';\n...\nconstructor(@Inject(TuiSvgService) tuiSvgService: TuiSvgService) {\n    tuiSvgService.define({tuiIconTrashLarge}); \n} \n...\n",e.define({tuiIconTrashLarge:S.tuiIconTrashLarge})}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](u.TuiSvgService))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-svg"]],decls:4,vars:0,consts:[["header","SvgService","package","CORE","path","core/services/svg.service.ts"],["pageTab",""],[3,"isAPI"],["documentationPropertyName","define","documentationPropertyType","Record<string, string>"],[1,"b-demo-steps"],["filename","myComponent.component.ts",3,"code"],["src","tuiIconTrashLarge"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275template"](1,A,5,0,"ng-template",1),s["\u0275\u0275template"](2,O,2,1,"ng-template",1),s["\u0275\u0275template"](3,b,11,1,"ng-template",1),s["\u0275\u0275elementEnd"]())},directives:[p.a,T.a,f.a,g.a,v.a,E.a],encapsulation:2,changeDetection:0}),e})(),C=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[d.c,u.TuiSvgModule,m.h,l.f.forChild(Object(m.o)(h))]]}),e})()}}]);