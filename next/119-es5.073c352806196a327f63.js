var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7;function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{JSON:function(e,t,n){"use strict";n.r(t),n.d(t,"IconSetModule",(function(){return G}));var a=n("wdR4"),o=n("An66"),i=n("3kIJ"),r=n("1VvW"),l=n("SVIu"),c=n("Qq0t"),d=n("dvRg"),s=n("4C5Q"),p=n("kZht"),u=n("OZlg"),m=n("yZWP"),f=n("zV1d"),_=n("fRC/"),b=n("aPft"),T=n("iyc4"),g=n("Yj6K"),C=n("RlDx"),O=n("eB8V"),S={tuiIconCalendarLarge:"date_range-24px",tuiIconTooltipLarge:"help-24px",tuiIconInfo:"info-16px",tuiIconCloseLarge:"clear-24px",tuiIconChevronLeftLarge:"keyboard_arrow_left-24px",tuiIconChevronRightLarge:"keyboard_arrow_right-24px"};function h(e){return"assets/icons/".concat(S[e],".svg#").concat(S[e])}var y,E,x,k,I,v=((y=_createClass((function e(){_classCallCheck(this,e),this.date=null}))).\u0275fac=function(e){return new(e||y)},y.\u0275cmp=p["\u0275\u0275defineComponent"]({type:y,selectors:[["tui-icon-set-example-1"]],features:[p["\u0275\u0275ProvidersFeature"]([{provide:c.TUI_ICONS_PATH,useValue:h}])],decls:8,vars:2,consts:[[1,"b-form"],["tuiHintContent","You can use any icons you want",1,"tui-space_top-4",3,"tuiTextfieldCleaner","ngModel","ngModelChange"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div",0),p["\u0275\u0275elementStart"](1,"tui-notification"),p["\u0275\u0275text"](2," As usual with the DI this is hierarchical. Meaning you can provide different "),p["\u0275\u0275elementStart"](3,"code"),p["\u0275\u0275text"](4,"TUI_ICONS_PATH"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](5," and use different icons across your app. "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"tui-input-date-range",1),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.date=e})),p["\u0275\u0275text"](7," Pick your favorite date range "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("tuiTextfieldCleaner",!0)("ngModel",t.date))},directives:[b.a,g.a,C.a,O.b,i.NgControlStatus,i.NgModel],encapsulation:2}),y),A=n("u8jZ"),L=n("ER+R"),w=["header",$localize(_templateObject||(_templateObject=_taggedTemplateLiteral([":\u241fc08189fb00c55f045ae49b6c01419138998d0e41\u241f8811200965267882277:Icons set"])))];E=$localize(_templateObject2||(_templateObject2=_taggedTemplateLiteral([":\u241fa323f6e1d7a5309b2fb7299c49581c594087dabb\u241f2310079324053037193: Taiga UI uses ",":START_LINK:",":START_TAG_CODE:tui-svg",":CLOSE_TAG_CODE:",":CLOSE_LINK: component to display SVG icons. It can show icons by name, link or source code. Several icon names are hardcoded into kit components so if you want to switch to a different icon set you would need to provide a mapping. "])),"\ufffd#4\ufffd","\ufffd#5\ufffd","\ufffd/#5\ufffd","\ufffd/#4\ufffd"),x=$localize(_templateObject3||(_templateObject3=_taggedTemplateLiteral([":\u241f7a8e8044ca4515e141068a15b1ae1db83720b34f\u241f1499142201667569835: These are keys of following dictionaries: ",":START_TAG_CODE:tuiCoreIcons",":CLOSE_TAG_CODE: and ",":START_TAG_CODE:tuiKitIcons",":CLOSE_TAG_CODE: . It is not required to provide all those icons, you can gradually add the ones you need depending on components you use. "])),"[\ufffd#14\ufffd|\ufffd#15\ufffd]","[\ufffd/#14\ufffd|\ufffd/#15\ufffd]","[\ufffd#14\ufffd|\ufffd#15\ufffd]","[\ufffd/#14\ufffd|\ufffd/#15\ufffd]"),x=p["\u0275\u0275i18nPostprocess"](x),k=$localize(_templateObject4||(_templateObject4=_taggedTemplateLiteral([":\u241f332a1f831d5445a2f3946ce9f4c2df3bd611903a\u241f2647422940565634909: There are two ways to add icons: bundled and as assets. Bundled icons have the benefit of immediate display but increase your app size. Assets work like regular ",':START_TAG_CODE:img src="xxx"',":CLOSE_TAG_CODE: with all the benefits of caching. In both cases you can control color with CSS ",":START_TAG_CODE:color",":CLOSE_TAG_CODE: style. "])),"[\ufffd#18\ufffd|\ufffd#19\ufffd]","[\ufffd/#18\ufffd|\ufffd/#19\ufffd]","[\ufffd#18\ufffd|\ufffd#19\ufffd]","[\ufffd/#18\ufffd|\ufffd/#19\ufffd]"),k=p["\u0275\u0275i18nPostprocess"](k),I=$localize(_templateObject5||(_templateObject5=_taggedTemplateLiteral([":\u241fe42544aad2fcbdeff1f5b26ec6eb22df483183a4\u241f3568298644042480100: If you want to bundle your icons, you need to provide ",":START_TAG_CODE:TUI_ICONS",":CLOSE_TAG_CODE: token with a dictionary of name to source code. Also you need to process your icons by ",":START_TAG_CODE:processIcons",":CLOSE_TAG_CODE: from ",":START_TAG_CODE:@taiga-ui/icons/scripts",":CLOSE_TAG_CODE: package. Then move icons to the assets folder and provide ",":START_TAG_CODE:TUI_ICONS_PATH",":CLOSE_TAG_CODE: as seen in example below: "])),"[\ufffd#30\ufffd|\ufffd#31\ufffd|\ufffd#32\ufffd|\ufffd#33\ufffd]","[\ufffd/#30\ufffd|\ufffd/#31\ufffd|\ufffd/#32\ufffd|\ufffd/#33\ufffd]","[\ufffd#30\ufffd|\ufffd#31\ufffd|\ufffd#32\ufffd|\ufffd#33\ufffd]","[\ufffd/#30\ufffd|\ufffd/#31\ufffd|\ufffd/#32\ufffd|\ufffd/#33\ufffd]","[\ufffd#30\ufffd|\ufffd#31\ufffd|\ufffd#32\ufffd|\ufffd#33\ufffd]","[\ufffd/#30\ufffd|\ufffd/#31\ufffd|\ufffd/#32\ufffd|\ufffd/#33\ufffd]","[\ufffd#30\ufffd|\ufffd#31\ufffd|\ufffd#32\ufffd|\ufffd#33\ufffd]","[\ufffd/#30\ufffd|\ufffd/#31\ufffd|\ufffd/#32\ufffd|\ufffd/#33\ufffd]"),I=p["\u0275\u0275i18nPostprocess"](I);var j,D=["heading",$localize(_templateObject6||(_templateObject6=_taggedTemplateLiteral([":\u241f0dc56b110b85e3f82dc8a031661e63c1bb5ac2c4\u241f4928000514802786074:Material icons"])))];function M(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-copy",13),p["\u0275\u0275elementStart"](1,"code"),p["\u0275\u0275text"](2),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;p["\u0275\u0275property"]("cdkCopyToClipboard",n),p["\u0275\u0275advance"](2),p["\u0275\u0275textInterpolate"](n)}}j=$localize(_templateObject7||(_templateObject7=_taggedTemplateLiteral([":\u241fcf42264186160f8d2f17a5e1255609c2a37e33ac\u241f7251356129916149731: If you use unsafe icons or ",":START_LINK:Editor component",":CLOSE_LINK: you need to provide ",":START_TAG_CODE:TUI_SANITIZER",":CLOSE_TAG_CODE: token, which is responsible for removing malicious code from the svg. We recommend to use ",":START_LINK_1: NgDompurify ",":CLOSE_LINK: as a sanitizer. This library implements ",":START_LINK_2: DOMPurify ",":CLOSE_LINK: as Angular Sanitizer or Pipe. It delegates sanitizing to DOMPurify and supports the same configuration. "])),"\ufffd#42\ufffd","[\ufffd/#42\ufffd|\ufffd/#44\ufffd|\ufffd/#45\ufffd]","\ufffd#43\ufffd","\ufffd/#43\ufffd","\ufffd#44\ufffd","[\ufffd/#42\ufffd|\ufffd/#44\ufffd|\ufffd/#45\ufffd]","\ufffd#45\ufffd","[\ufffd/#42\ufffd|\ufffd/#44\ufffd|\ufffd/#45\ufffd]"),j=p["\u0275\u0275i18nPostprocess"](j);var R,P,z=((P=function(){function e(){_classCallCheck(this,e),this.exampleSanitizer=n.e(458).then(n.bind(null,"V8qI")),this.example1={"process-icons.js":n.e(457).then(n.bind(null,"QRz6")),TypeScript:n.e(456).then(n.bind(null,"pCrD")),HTML:n.e(455).then(n.bind(null,"Unll"))},this.names=Object.keys(s.tuiKitIcons),this.expanded=!1}return _createClass(e,[{key:"toggle",value:function(){this.expanded=!this.expanded}}]),e}()).\u0275fac=function(e){return new(e||P)},P.\u0275cmp=p["\u0275\u0275defineComponent"]({type:P,selectors:[["icon-set"]],decls:47,vars:4,consts:[[6,"header"],["tuiLink","","routerLink","/components/svg"],["tuiButton","",3,"click"],[3,"expanded"],[1,"wrapper"],[3,"cdkCopyToClipboard",4,"ngFor","ngForOf"],["status","warning"],["id","material",3,"content",6,"heading"],["id","sanitizer",1,"sanitizer-example"],["tuiLink","","routerLink","/components/editor"],["tuiLink","","href","https://github.com/tinkoff/ng-dompurify","target","_blank"],["tuiLink","","href","https://github.com/cure53/DOMPurify","target","_blank"],["filename","app.module.ts",3,"code"],[3,"cdkCopyToClipboard"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275i18nAttributes"](1,w),p["\u0275\u0275elementStart"](2,"p"),p["\u0275\u0275i18nStart"](3,E),p["\u0275\u0275elementStart"](4,"a",1),p["\u0275\u0275element"](5,"code"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"p"),p["\u0275\u0275elementStart"](7,"button",2),p["\u0275\u0275listener"]("click",(function(){return t.toggle()})),p["\u0275\u0275text"](8,"Show names"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](9,"tui-expand",3),p["\u0275\u0275elementStart"](10,"div",4),p["\u0275\u0275template"](11,M,3,2,"tui-doc-copy",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](12,"p"),p["\u0275\u0275i18nStart"](13,x),p["\u0275\u0275element"](14,"code"),p["\u0275\u0275element"](15,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](16,"p"),p["\u0275\u0275i18nStart"](17,k),p["\u0275\u0275element"](18,"code"),p["\u0275\u0275element"](19,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](20,"tui-notification",6),p["\u0275\u0275text"](21," Make sure you mark regions in your icons that need to be colored with "),p["\u0275\u0275elementStart"](22,"code"),p["\u0275\u0275text"](23,'fill="currentColor"'),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](24," or "),p["\u0275\u0275elementStart"](25,"code"),p["\u0275\u0275text"](26,'stroke="currentColor"'),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](27," . "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](28,"p"),p["\u0275\u0275i18nStart"](29,I),p["\u0275\u0275element"](30,"code"),p["\u0275\u0275element"](31,"code"),p["\u0275\u0275element"](32,"code"),p["\u0275\u0275element"](33,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](34,"tui-doc-example",7),p["\u0275\u0275i18nAttributes"](35,D),p["\u0275\u0275element"](36,"tui-icon-set-example-1"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](37,"section",8),p["\u0275\u0275elementStart"](38,"h2"),p["\u0275\u0275text"](39,"Sanitizer"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](40,"p"),p["\u0275\u0275i18nStart"](41,j),p["\u0275\u0275element"](42,"a",9),p["\u0275\u0275element"](43,"code"),p["\u0275\u0275element"](44,"a",10),p["\u0275\u0275element"](45,"a",11),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](46,"tui-doc-code",12),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](9),p["\u0275\u0275property"]("expanded",t.expanded),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngForOf",t.names),p["\u0275\u0275advance"](23),p["\u0275\u0275property"]("content",t.example1),p["\u0275\u0275advance"](12),p["\u0275\u0275property"]("code",t.exampleSanitizer))},directives:[u.a,m.a,r.e,f.a,_.a,o.s,b.a,T.a,v,A.a,L.a,a.a],styles:[".wrapper[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.sanitizer-example[_ngcontent-%COMP%]{display:block;padding-top:3.5rem}"],changeDetection:0}),P),G=((R=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=p["\u0275\u0275defineNgModule"]({type:R}),R.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||R)},imports:[[o.c,i.FormsModule,a.c,l.k,c.TuiLinkModule,c.TuiExpandModule,c.TuiButtonModule,d.TuiInputDateRangeModule,c.TuiNotificationModule,c.TuiTextfieldControllerModule,c.TuiHintControllerModule,l.i,r.f.forChild(Object(l.p)(z))]]}),R)}}]);