(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{"6siK":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiThemeSwitcherModule",(function(){return _}));var i=n("An66"),o=n("3kIJ"),a=n("1VvW"),r=n("SVIu"),c=n("Qq0t"),l=n("dvRg"),s=n("kZht"),d=n("OZlg"),m=n("e0eB"),u=n("aPft"),p=n("iyc4"),f=n("/ASf"),h=n("l4xa");let b=(()=>{class e extends h.AbstractTuiThemeSwitcher{}return e.\u0275fac=function(t){return g(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["elderly"]],features:[s["\u0275\u0275InheritDefinitionFeature"]],decls:0,vars:0,template:function(e,t){},styles:[":root{--tui-primary-text:#fff;--tui-primary:#299d37;--tui-primary-hover:#2c7a35;--tui-primary-active:#2c7a35;--tui-link:#f59726;--tui-link-hover:#fab00b;--tui-selection:#f3fadc}"],encapsulation:2,changeDetection:0}),e})();const g=s["\u0275\u0275getInheritedFactory"](b);var S;function y(e,t){1&e&&s["\u0275\u0275element"](0,"elderly")}S=$localize`:␟57965de445a0e14fc9f275dfa15df51c6588ae2a␟2349548101776240308: Samples of ${"[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:LESS${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE: and ${"[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:TypeScript${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE: are in ${"[\ufffd#2\ufffd|\ufffd#3\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:elderly${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE: component.
`,S=s["\u0275\u0275i18nPostprocess"](S);let T=(()=>{class e{constructor(){this.enabled=!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-theme-switcher-1"]],decls:9,vars:2,consts:[[4,"ngIf"],["size","l",1,"tui-space_right-1",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18nStart"](1,S),s["\u0275\u0275element"](2,"code"),s["\u0275\u0275element"](3,"code"),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](5,y,1,0,"elderly",0),s["\u0275\u0275elementStart"](6,"label"),s["\u0275\u0275elementStart"](7,"tui-toggle",1),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.enabled=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](8," Senior Citizen mode\n"),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("ngIf",t.enabled),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngModel",t.enabled))},directives:[i.t,f.a,o.NgControlStatus,o.NgModel,b],encapsulation:2,changeDetection:0}),e})();const C=["header",$localize`:␟aa28493a738be584031c0ab5ad92491d69ceb7f9␟5051158689905388764:ThemeSwitcher`];var E;E=$localize`:␟84457398979e1b0197f26f4573691c78b3f48394␟6678457305646089074:${"[\ufffd#2\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:AbstractTuiThemeSwitcher${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: is an abstract class to be used for dynamic theme switching. In the sample below you can see a component that extends ${"[\ufffd#2\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:AbstractTuiThemeSwitcher${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: and reassigns some CSS variables. `,E=s["\u0275\u0275i18nPostprocess"](E);const w=["heading",$localize`:␟9e7dfdd12e894b57966fa2f8312284bf76d57389␟4661923683013028003:Green theme`];function v(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18nStart"](1,E),s["\u0275\u0275element"](2,"code"),s["\u0275\u0275element"](3,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"tui-notification",2),s["\u0275\u0275text"](5," Use "),s["\u0275\u0275elementStart"](6,"code"),s["\u0275\u0275text"](7,"*ngIf"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](8," to switch theme on the fly "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"tui-notification",3),s["\u0275\u0275text"](10," Component must have "),s["\u0275\u0275elementStart"](11,"code"),s["\u0275\u0275text"](12,"encapsulation: ViewEncapsulation.None"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](13,"tui-doc-example",4),s["\u0275\u0275i18nAttributes"](14,w),s["\u0275\u0275element"](15,"tui-theme-switcher-1"),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](13),s["\u0275\u0275property"]("content",e.example1)}}let x=(()=>{class e{constructor(){this.example1={TypeScript:"import {Component, ViewEncapsulation} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {AbstractTuiThemeSwitcher} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'elderly',\n    styleUrls: ['./elderly.style.less'],\n    template: '',\n    encapsulation: ViewEncapsulation.None,\n    changeDetection,\n})\nexport class ElderlyComponent extends AbstractTuiThemeSwitcher {}\n",HTML:'<p i18n>\n    Samples of\n    <code>LESS</code>\n    and\n    <code>TypeScript</code>\n    are in\n    <code>elderly</code>\n    component.\n</p>\n<elderly *ngIf="enabled"></elderly>\n<label>\n    <tui-toggle\n        size="l"\n        class="tui-space_right-1"\n        [(ngModel)]="enabled"\n    ></tui-toggle>\n    Senior Citizen mode\n</label>\n',LESS:":root {\n    // Primary\n    --tui-primary-text: #fff;\n    --tui-primary: #299d37;\n    --tui-primary-hover: #2c7a35;\n    --tui-primary-active: #2c7a35;\n\n    // Link\n    --tui-link: #f59726;\n    --tui-link-hover: #fab00b;\n\n    // Selection\n    --tui-selection: #f3fadc;\n}\n"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-theme-switcher"]],decls:3,vars:0,consts:[["package","CDK","path","cdk/abstract/theme-switcher.ts",6,"header"],["pageTab",""],[1,"tui-space_bottom-4"],["status","warning"],["id","green",3,"content",6,"heading"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275i18nAttributes"](1,C),s["\u0275\u0275template"](2,v,16,1,"ng-template",1),s["\u0275\u0275elementEnd"]())},directives:[d.a,m.a,u.a,p.a,T],styles:['.tooltip[_ngcontent-%COMP%]{position:relative}.tooltip[_ngcontent-%COMP%]:hover   .bubble[_ngcontent-%COMP%]{opacity:1}.bubble[_ngcontent-%COMP%]{-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:var(--tui-duration,.3s);transition-duration:var(--tui-duration,.3s);-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;position:absolute;left:3.125rem;bottom:1.875rem;width:15.625rem;background:var(--tui-text-01);color:var(--tui-base-01);border-radius:.25rem;padding:.625rem;opacity:0}.bubble[_ngcontent-%COMP%]:after{content:"";position:absolute;left:50%;bottom:-15px;border-top:15px solid var(--tui-text-01);border-left:10px solid transparent;border-right:10px solid transparent;-webkit-transform:translate(-10px);transform:translate(-10px)}'],changeDetection:0}),e})(),_=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,o.FormsModule,l.TuiToggleModule,c.TuiNotificationModule,r.h,a.f.forChild(Object(r.o)(x))]]}),e})()}}]);