var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6;function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{xggc:function(e,t,n){"use strict";n.r(t),n.d(t,"IconsModule",(function(){return G}));var i,a,c,o,r=n("An66"),l=n("3kIJ"),s=n("1VvW"),p=n("SVIu"),u=n("Qq0t"),d=n("dvRg"),f=n("kZht"),m=n("4C5Q"),b=["tuiIconElectron","tuiIconMaestro","tuiIconMastercard","tuiIconMir","tuiIconVisa"],g=function(){var e=[],t=[],n=new Set(b);for(var i in m)n.has(i)||"tuiCoreIcons"===i||"tuiKitIcons"===i||(i.includes("Large")?e.push(i):t.push(i));return{LARGE:e,NORMAL:t}}(),h=g.LARGE,y={"Description and examples":{"Normal interface icons (16px)":g.NORMAL,"Large interface icons (24px)":h,"Payment systems":b}},_=new f.InjectionToken("Icons",{factory:function(){return y}}),O=n("OZlg"),v=n("e0eB"),C=n("yZWP"),j=n("D57K"),T=n("wdR4"),k=n("l4xa"),w=n("GdrL"),x=n("71sB"),I=n("RlDx"),M=n("2wTY"),L=n("gEyt"),S=n("zV1d"),E=((i=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"transform",value:function(e,t){return t.length>1&&Object(k.TUI_DEFAULT_MATCHER)(e,t)}}]),e}()).\u0275fac=function(e){return new(e||i)},i.\u0275pipe=f["\u0275\u0275definePipe"]({name:"iconHighlight",type:i,pure:!0}),i);a=$localize(_templateObject||(_templateObject=_taggedTemplateLiteral([":\u241fd3482a2fe17d28c2051e895925c9f35d47dbcc29\u241f1035150703896968730:Search by name"]))),c=$localize(_templateObject2||(_templateObject2=_taggedTemplateLiteral([":\u241fc8c9758c8595df7a1f438b97d0bdb29ee9eaf6b2\u241f696084215486677597: Input icon name to highlight\n"]))),o=$localize(_templateObject3||(_templateObject3=_taggedTemplateLiteral([":\u241f6dcdb49844a66f097baad6ff6e439198e1240ce8\u241f3794049220169119758:",":INTERPOLATION:"])),"\ufffd0\ufffd");var P=["title",$localize(_templateObject4||(_templateObject4=_taggedTemplateLiteral([":\u241f1979da7460819153e11d2078244645d94291b69c\u241f4323470180912194028:Copy"])))];function z(e,t){if(1&e){var n=f["\u0275\u0275getCurrentView"]();f["\u0275\u0275elementStart"](0,"button",5),f["\u0275\u0275i18nAttributes"](1,P),f["\u0275\u0275listener"]("click",(function(){f["\u0275\u0275restoreView"](n);var e=t.$implicit;return f["\u0275\u0275nextContext"](2).copyPath(e)})),f["\u0275\u0275pipe"](2,"iconHighlight"),f["\u0275\u0275elementEnd"]()}if(2&e){var i=t.$implicit,a=f["\u0275\u0275nextContext"](2);f["\u0275\u0275classProp"]("icon_highlighted",f["\u0275\u0275pipeBind2"](2,4,i,a.search)),f["\u0275\u0275property"]("icon",i),f["\u0275\u0275attribute"]("aria-label",i)}}function A(e,t){if(1&e&&(f["\u0275\u0275elementContainerStart"](0),f["\u0275\u0275elementStart"](1,"h2",0),f["\u0275\u0275i18n"](2,o),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](3,"div",3),f["\u0275\u0275template"](4,z,3,7,"button",4),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementContainerEnd"]()),2&e){var n=t.$implicit,i=f["\u0275\u0275nextContext"]();f["\u0275\u0275advance"](2),f["\u0275\u0275i18nExp"](n),f["\u0275\u0275i18nApply"](2),f["\u0275\u0275advance"](2),f["\u0275\u0275property"]("ngForOf",i.iconsValues[n])}}var F,R,N=((F=function(){function e(t,n){_classCallCheck(this,e),this.clipboard=t,this.notifications=n,this.iconsValues={},this.keys=[],this.search=""}return _createClass(e,[{key:"icons",set:function(e){this.keys=Object.keys(e),this.iconsValues=e}},{key:"copyPath",value:function(e){this.clipboard.copy(e),this.notifications.show("The name ".concat(e," copied"),{status:"success"}).subscribe()}}]),e}()).\u0275fac=function(e){return new(e||F)(f["\u0275\u0275directiveInject"](T.b),f["\u0275\u0275directiveInject"](u.TuiNotificationsService))},F.\u0275cmp=f["\u0275\u0275defineComponent"]({type:F,selectors:[["icons-group"]],inputs:{icons:"icons"},decls:5,vars:3,consts:[[1,"title"],["tuiHintContent","You can copy icon's name with a click","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside","ngModel","ngModelChange"],[4,"ngFor","ngForOf"],[1,"icons"],["tuiIconButton","","type","button","size","m","appearance","icon","class","icon",3,"icon_highlighted","icon","click",4,"ngFor","ngForOf",6,"title"],["tuiIconButton","","type","button","size","m","appearance","icon",1,"icon",3,"icon","click",6,"title"]],template:function(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"h2",0),f["\u0275\u0275i18n"](1,a),f["\u0275\u0275elementEnd"](),f["\u0275\u0275elementStart"](2,"tui-input",1),f["\u0275\u0275listener"]("ngModelChange",(function(e){return t.search=e})),f["\u0275\u0275i18n"](3,c),f["\u0275\u0275elementEnd"](),f["\u0275\u0275template"](4,A,5,2,"ng-container",2)),2&e&&(f["\u0275\u0275advance"](2),f["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0)("ngModel",t.search),f["\u0275\u0275advance"](2),f["\u0275\u0275property"]("ngForOf",t.keys))},directives:[w.a,x.a,I.a,M.b,L.b,l.NgControlStatus,l.NgModel,r.s,S.a],pipes:[E],styles:[".title[_ngcontent-%COMP%]{font:var(--tui-font-heading-6);margin:1.875rem 0 .75rem}.icons[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 -.75rem}.icon[_ngcontent-%COMP%]{margin:.75rem;border-radius:0}.icon_highlighted[_ngcontent-%COMP%]{-webkit-transform:scale(1.6);transform:scale(1.6);-webkit-filter:drop-shadow(.125rem .0625rem 0 var(--tui-primary));filter:drop-shadow(.125rem .0625rem 0 var(--tui-primary))}"],changeDetection:0}),Object(j.b)([Object(k.tuiRequiredSetter)()],F.prototype,"icons",null),F),$=["header",$localize(_templateObject5||(_templateObject5=_taggedTemplateLiteral([":\u241fc51604c3bfceeac96ceabb51c1a0caee70f85aa6\u241f990341683702498937:Icons"])))];function V(e,t){if(1&e&&(f["\u0275\u0275elementStart"](0,"p"),f["\u0275\u0275i18nStart"](1,R),f["\u0275\u0275element"](2,"a",3),f["\u0275\u0275i18nEnd"](),f["\u0275\u0275elementEnd"](),f["\u0275\u0275element"](3,"icons-group",4)),2&e){var n=f["\u0275\u0275nextContext"]().$implicit,i=f["\u0275\u0275nextContext"]();f["\u0275\u0275advance"](3),f["\u0275\u0275property"]("icons",i.icons[n])}}function B(e,t){1&e&&f["\u0275\u0275template"](0,V,4,1,"ng-template",2),2&e&&f["\u0275\u0275property"]("pageTab",t.$implicit)}R=$localize(_templateObject6||(_templateObject6=_taggedTemplateLiteral([":\u241f160ab2f8367182879bce31a0124ff3bbdf2af420\u241f6811848323908488450: These icons can be used by name in ",":START_LINK:Svg",":CLOSE_LINK: component and all Taiga UI component accepting icons as input. "])),"\ufffd#2\ufffd","\ufffd/#2\ufffd");var D,H,K=((H=_createClass((function e(t){_classCallCheck(this,e),this.icons=t,this.keys=Object.keys(this.icons)}))).\u0275fac=function(e){return new(e||H)(f["\u0275\u0275directiveInject"](_))},H.\u0275cmp=f["\u0275\u0275defineComponent"]({type:H,selectors:[["icons"]],decls:3,vars:1,consts:[[6,"header"],[4,"ngFor","ngForOf"],[3,"pageTab"],["tuiLink","","routerLink","/components/svg"],[3,"icons"]],template:function(e,t){1&e&&(f["\u0275\u0275elementStart"](0,"tui-doc-page",0),f["\u0275\u0275i18nAttributes"](1,$),f["\u0275\u0275template"](2,B,1,1,void 0,1),f["\u0275\u0275elementEnd"]()),2&e&&(f["\u0275\u0275advance"](2),f["\u0275\u0275property"]("ngForOf",t.keys))},directives:[O.a,r.s,v.a,C.a,s.e,N],encapsulation:2,changeDetection:0}),H),G=((D=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=f["\u0275\u0275defineNgModule"]({type:D}),D.\u0275inj=f["\u0275\u0275defineInjector"]({factory:function(e){return new(e||D)},imports:[[l.ReactiveFormsModule,l.FormsModule,r.c,u.TuiLinkModule,u.TuiSvgModule,d.TuiMarkerIconModule,d.TuiInputModule,u.TuiButtonModule,u.TuiTextfieldControllerModule,u.TuiHintControllerModule,p.i,s.f.forChild(Object(p.p)(K))]]}),D)}}]);