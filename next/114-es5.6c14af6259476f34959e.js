var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6;function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{dfdC:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiToolbarModule",(function(){return Z}));var o,i,a=n("An66"),r=n("3kIJ"),l=n("1VvW"),c=n("SVIu"),d=n("vgRF"),u=n("l4xa"),s=n("Qq0t"),p=n("kZht"),m=((i=function(){function e(t,n){var o=this;_classCallCheck(this,e),this.elementRef=t,this.renderer=n,this.observer=new MutationObserver((function(){setTimeout((function(){o.onChange(e.processValue(o.elementRef.nativeElement.innerHTML))}))})),this.onTouched=function(){},this.onChange=function(){}}return _createClass(e,[{key:"ngAfterViewInit",value:function(){this.observer.observe(this.elementRef.nativeElement,{characterData:!0,childList:!0,subtree:!0})}},{key:"ngOnDestroy",value:function(){this.observer.disconnect()}},{key:"onInput",value:function(){this.observer.disconnect(),this.onChange(e.processValue(this.elementRef.nativeElement.innerHTML))}},{key:"onBlur",value:function(){this.onTouched()}},{key:"writeValue",value:function(t){this.renderer.setProperty(this.elementRef.nativeElement,"innerHTML",e.processValue(t))}},{key:"registerOnChange",value:function(e){this.onChange=e}},{key:"registerOnTouched",value:function(e){this.onTouched=e}},{key:"setDisabledState",value:function(e){this.renderer.setAttribute(this.elementRef.nativeElement,"contenteditable",String(!e))}}],[{key:"processValue",value:function(e){var t=e||"";return"<br>"===t.trim()?"":t}}]),e}()).\u0275fac=function(e){return new(e||i)(p["\u0275\u0275directiveInject"](p.ElementRef),p["\u0275\u0275directiveInject"](p.Renderer2))},i.\u0275dir=p["\u0275\u0275defineDirective"]({type:i,selectors:[["","contenteditable","","formControlName",""],["","contenteditable","","formControl",""],["","contenteditable","","ngModel",""]],hostBindings:function(e,t){1&e&&p["\u0275\u0275listener"]("input",(function(){return t.onInput()}))("blur",(function(){return t.onBlur()}))},features:[p["\u0275\u0275ProvidersFeature"]([{provide:r.NG_VALUE_ACCESSOR,useExisting:Object(p.forwardRef)((function(){return i})),multi:!0}])]}),i),f=((o=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=p["\u0275\u0275defineNgModule"]({type:o}),o.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||o)}}),o),b=n("OZlg"),h=n("e0eB"),g=n("yZWP"),v=n("iyc4"),C=n("4hRd"),_=n("W2aA"),T=n("OXFH");function w(e,t){if(1&e&&p["\u0275\u0275element"](0,"tui-toolbar",4),2&e){p["\u0275\u0275nextContext"]();var n=p["\u0275\u0275reference"](2);p["\u0275\u0275property"]("editor",n)}}var y,O,x=((y=function(){function e(){_classCallCheck(this,e),this.open=!1,this.model="<p>Lorem ipsum</p><p><b>Lorem ipsum</b></p>"}return _createClass(e,[{key:"onActiveZone",value:function(e){this.open=e}}]),e}()).\u0275fac=function(e){return new(e||y)},y.\u0275cmp=p["\u0275\u0275defineComponent"]({type:y,selectors:[["tui-toolbar-example-1"]],decls:5,vars:5,consts:[[3,"tuiActiveZoneChange"],["contenteditable","","tuiDropdownDirection","top",1,"editor","tui-editor-socket",3,"tuiDropdown","tuiDropdownContent","ngModel","ngModelChange"],["editor",""],["dropdown",""],[3,"editor"]],template:function(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",0),p["\u0275\u0275listener"]("tuiActiveZoneChange",(function(e){return t.onActiveZone(e)})),p["\u0275\u0275elementStart"](1,"div",1,2),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.model=e})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](3,w,1,1,"ng-template",null,3,p["\u0275\u0275templateRefExtractor"]),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275reference"](4);p["\u0275\u0275advance"](1),p["\u0275\u0275classProp"]("editor_active",t.open),p["\u0275\u0275property"]("tuiDropdown",t.open)("tuiDropdownContent",n)("ngModel",t.model)}},directives:[C.a,m,_.a,r.NgControlStatus,r.NgModel,T.a],styles:[".editor[_ngcontent-%COMP%]{padding:1em 2em;outline:none}.editor_active[_ngcontent-%COMP%]{-webkit-box-shadow:0 0 0 2px var(--tui-focus);box-shadow:0 0 0 2px var(--tui-focus)}"],changeDetection:0}),y),j=n("u8jZ"),k=["header",$localize(_templateObject||(_templateObject=_taggedTemplateLiteral([":\u241fdcfe12c1a954a6631d712f4bc7ac57f894e521ef\u241f7972011866667788749:Toolbar"])))],E=["pageTab",$localize(_templateObject2||(_templateObject2=_taggedTemplateLiteral([":\u241fff3774138bffaf62a4b812046dfbb9939c42657e\u241f6492831808763156510:Setup"])))];O=$localize(_templateObject3||(_templateObject3=_taggedTemplateLiteral([":\u241f363d95f95fa40db16d0fe7ca3e7e0569164e58a5\u241f2842002208043947795: Toolbar is a set of edit tools for rich editors. Use ",":START_LINK: @tinkoff/angular-contenteditable-accessor ",":CLOSE_LINK: package for working with a form "])),"\ufffd#2\ufffd","\ufffd/#2\ufffd");var M,S,L=["heading",$localize(_templateObject4||(_templateObject4=_taggedTemplateLiteral([":\u241f380ab580741bec31346978e7cab8062d6970408d\u241f8643289769990675407:Basic"])))];function A(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275i18nStart"](1,O),p["\u0275\u0275element"](2,"a",3),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"tui-doc-example",4),p["\u0275\u0275i18nAttributes"](4,L),p["\u0275\u0275element"](5,"tui-toolbar-example-1"),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",n.example1)}}function D(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",5),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275elementStart"](2,"p"),p["\u0275\u0275i18nStart"](3,M),p["\u0275\u0275element"](4,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](5,"tui-doc-code",6),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"li"),p["\u0275\u0275elementStart"](7,"p"),p["\u0275\u0275i18n"](8,S),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](9,"tui-doc-code",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("code",n.exampleImportModule),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}M=$localize(_templateObject5||(_templateObject5=_taggedTemplateLiteral([":\u241f535541a8f4958f52023b7c89aacff64626b5e9cb\u241f3403070934660955548: Import ",":START_TAG_CODE:TuiEditorModule",":CLOSE_TAG_CODE: into a module where you want to use our component "])),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),S=$localize(_templateObject6||(_templateObject6=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"])));var I,R,P=((R=_createClass((function e(){_classCallCheck(this,e),this.exampleImportModule="import {FormsModule} from '@angular/forms';\nimport {TuiToolbarModule} from '@taiga-ui/addon-editor';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiToolbarModule,\n        FormsModule,\n    ],\n...\n",this.exampleInsertTemplate='<tui-editor\n    exampleText="Example text"\n    [(ngModel)]="model">\n    Placeholder\n</tui-editor>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-toolbar-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiToolbarExample1 {\n    open = false;\n\n    model = '<p>Lorem ipsum</p><p><b>Lorem ipsum</b></p>';\n\n    onActiveZone(active: boolean) {\n        this.open = active;\n    }\n}\n",HTML:'<div (tuiActiveZoneChange)="onActiveZone($event)">\n    <div\n        #editor\n        contenteditable\n        tuiDropdownDirection="top"\n        class="editor tui-editor-socket"\n        [class.editor_active]="open"\n        [tuiDropdown]="open"\n        [tuiDropdownContent]="dropdown"\n        [(ngModel)]="model"\n    ></div>\n    <ng-template #dropdown>\n        <tui-toolbar [editor]="editor"></tui-toolbar>\n    </ng-template>\n</div>\n',LESS:".editor {\n    padding: 1em 2em;\n    outline: none;\n\n    &_active {\n        box-shadow: 0 0 0 2px var(--tui-focus);\n    }\n}\n"}}))).\u0275fac=function(e){return new(e||R)},R.\u0275cmp=p["\u0275\u0275defineComponent"]({type:R,selectors:[["example-tui-toolbar"]],decls:5,vars:0,consts:[["package","ADDON-editor","type","components",6,"header"],["pageTab",""],[6,"pageTab"],["tuiLink","","href","https://github.com/tinkoff/angular-contenteditable-accessor"],["id","basic",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275i18nAttributes"](1,k),p["\u0275\u0275template"](2,A,6,1,"ng-template",1),p["\u0275\u0275template"](3,D,10,2,"ng-template",2),p["\u0275\u0275i18nAttributes"](4,E),p["\u0275\u0275elementEnd"]())},directives:[b.a,h.a,g.a,v.a,x,j.a],encapsulation:2,changeDetection:0}),R),Z=((I=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=p["\u0275\u0275defineNgModule"]({type:I}),I.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||I)},imports:[[a.c,r.FormsModule,f,d.k,s.TuiButtonModule,s.TuiLinkModule,s.TuiDropdownModule,u.TuiActiveZoneModule,c.i,l.f.forChild(Object(c.p)(P))]]}),I)}}]);