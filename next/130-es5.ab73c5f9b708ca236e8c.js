var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_templateObject14,_templateObject15,_templateObject16,_templateObject17;function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{fugw:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiDropdownSelectionModule",(function(){return ge}));var o,a=n("An66"),i=n("3kIJ"),r=n("1VvW"),l=n("SVIu"),d=n("Qq0t"),c=n("dvRg"),p=n("cWK9"),u=n("kZht"),m=n("OZlg"),s=n("e0eB"),g=n("iyc4"),w=n("bPri"),f=((o=_createClass((function e(){_classCallCheck(this,e)}))).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=u["\u0275\u0275defineComponent"]({type:o,selectors:[["tui-dropdown-selection-example-1"]],decls:3,vars:0,consts:[["tuiDropdownSelection","","tuiDropdownSelectionPosition","selection","tuiDropdownContent","\xa0\xa0Dropdown text\xa0\xa0"]],template:function(e,t){1&e&&(u["\u0275\u0275text"](0,"Dropdown will be shown text selection:\n"),u["\u0275\u0275elementStart"](1,"p",0),u["\u0275\u0275text"](2," Select a text to see dropdown\n"),u["\u0275\u0275elementEnd"]())},directives:[w.a],encapsulation:2,changeDetection:0}),o),h=n("D57K"),y=n("l4xa"),b=n("+SFL"),v=n("oEBb"),D=n("cVyY"),_=n("xcN3"),T=n("cweO");function x(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"button",6),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](n);var e=t.$implicit,o=u["\u0275\u0275nextContext"](3),a=u["\u0275\u0275reference"](1);return o.onClick(e.login,a.nativeFocusableElement)})),u["\u0275\u0275text"](1),u["\u0275\u0275element"](2,"tui-avatar",7),u["\u0275\u0275elementEnd"]()}if(2&e){var o=t.$implicit;u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"](" ",o.name," "),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("rounded",!0)("avatarUrl",o.avatar)("text",o.name)}}function C(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"tui-data-list",4),u["\u0275\u0275listener"]("keydown.escape",(function(){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"](2),u["\u0275\u0275reference"](1).nativeFocusableElement.focus()})),u["\u0275\u0275template"](1,x,3,4,"button",5),u["\u0275\u0275elementEnd"]()}if(2&e){var o=u["\u0275\u0275nextContext"](2),a=u["\u0275\u0275reference"](1);u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngForOf",o.filterItems(a.nativeFocusableElement))}}function S(e,t){if(1&e&&u["\u0275\u0275template"](0,C,2,1,"tui-data-list",3),2&e){u["\u0275\u0275nextContext"]();var n=u["\u0275\u0275reference"](1);u["\u0275\u0275property"]("ngIf",n.nativeFocusableElement)}}var O,P,E=((O=function(){function e(){_classCallCheck(this,e),this.options=y.EMPTY_QUERY,this.value="Type @ to see a dropdown",this.items=[{name:"Alexander Inkin",avatar:b.a,login:"a.inkin"},{name:"Roman Sedov",avatar:"",login:"r.sedov"}],this.predicate=function(e){return Object(c.getWordRange)(e).toString().startsWith("@")}}return _createClass(e,[{key:"focused",get:function(){return!!this.options.length||null}},{key:"onArrow",value:function(e,t){var n=this.options[t];n&&(e.preventDefault(),Object(y.setNativeFocused)(n.nativeElement))}},{key:"filterItems",value:function(e){var t=this.getCurrentSearch(e).replace("@","");return this.getFilteredItems(this.items,t)}},{key:"onClick",value:function(e,t){var n=this.getCurrentSearch(t),o=this.value.replace(n,e),a=o.indexOf(e)+e.length;this.value=o,Object(y.setNativeFocused)(t),t.value=o,t.setSelectionRange(a,a)}},{key:"getFilteredItems",value:function(e,t){return e.filter((function(e){var n=e.name;return e.login.startsWith(t)||n.startsWith(t)}))}},{key:"getCurrentSearch",value:function(e){return e.value.substring(e.value.indexOf("@"),e.selectionStart)}}]),e}()).\u0275fac=function(e){return new(e||O)},O.\u0275cmp=u["\u0275\u0275defineComponent"]({type:O,selectors:[["tui-dropdown-selection-example-2"]],viewQuery:function(e,t){var n;1&e&&u["\u0275\u0275viewQuery"](d.TuiOptionComponent,!0,u.ElementRef),2&e&&u["\u0275\u0275queryRefresh"](n=u["\u0275\u0275loadQuery"]())&&(t.options=n)},decls:5,vars:4,consts:[["tuiDropdownSelectionPosition","word",3,"tuiDropdownContent","tuiDropdownSelection","pseudoFocused","ngModel","ngModelChange","keydown.arrowUp","keydown.arrowDown"],["textarea",""],["dropdown",""],["class","menu",3,"keydown.escape",4,"ngIf"],[1,"menu",3,"keydown.escape"],["tuiOption","",3,"click",4,"ngFor","ngForOf"],["tuiOption","",3,"click"],["size","s",3,"rounded","avatarUrl","text"]],template:function(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"tui-text-area",0,1),u["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e}))("keydown.arrowUp",(function(e){return t.onArrow(e,"last")}))("keydown.arrowDown",(function(e){return t.onArrow(e,"first")})),u["\u0275\u0275text"](2," Type a message\n"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](3,S,1,1,"ng-template",null,2,u["\u0275\u0275templateRefExtractor"])),2&e){var n=u["\u0275\u0275reference"](4);u["\u0275\u0275property"]("tuiDropdownContent",n)("tuiDropdownSelection",t.predicate)("pseudoFocused",t.focused)("ngModel",t.value)}},directives:[v.a,w.a,i.NgControlStatus,i.NgModel,a.t,D.a,a.s,_.a,T.a],styles:[".menu[_ngcontent-%COMP%]{width:12.5rem}"],changeDetection:0}),Object(h.b)([y.tuiPure],O.prototype,"getFilteredItems",null),O),j=n("EPR0"),V=n("yHor"),A=n("zGJC"),M=n("zV1d"),L=n("u8jZ"),k=["header",$localize(_templateObject||(_templateObject=_taggedTemplateLiteral([":\u241f1fd7faad08a61161f51e02619b69abee3d5696e3\u241f8551098621045190194:DropdownSelection"])))];P=$localize(_templateObject2||(_templateObject2=_taggedTemplateLiteral([":\u241f432c55cd71cfc37ae765480b4e27ffbef9174a01\u241f2979268708696318460:",":START_TAG_CODE:tuiDropdownSelection",":CLOSE_TAG_CODE: shows dropdown with custom template on selected text "])),"\ufffd#2\ufffd","\ufffd/#2\ufffd");var R,H,F,I,N,G,z,W,$,U,B,Q,Y,J,K=["heading",$localize(_templateObject3||(_templateObject3=_taggedTemplateLiteral([":\u241f86bd4c895bf70b35a58305b7d107a2f1b67b141c\u241f1238358838717941284:Sample"])))];function Z(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"p"),u["\u0275\u0275i18nStart"](1,P),u["\u0275\u0275element"](2,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"tui-doc-example",2),u["\u0275\u0275i18nAttributes"](4,K),u["\u0275\u0275element"](5,"tui-dropdown-selection-example-1"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"tui-doc-example",3),u["\u0275\u0275element"](7,"tui-dropdown-selection-example-2"),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("content",n.example1),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("content",n.example2)}}function q(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"div",16),u["\u0275\u0275i18nStart"](1,H),u["\u0275\u0275element"](2,"p"),u["\u0275\u0275element"](3,"button",17),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"]())}function X(e,t){1&e&&u["\u0275\u0275i18n"](0,F)}function ee(e,t){1&e&&(u["\u0275\u0275i18nStart"](0,I),u["\u0275\u0275element"](1,"code"),u["\u0275\u0275i18nEnd"]())}function te(e,t){1&e&&u["\u0275\u0275i18n"](0,N)}function ne(e,t){1&e&&u["\u0275\u0275i18n"](0,G)}function oe(e,t){1&e&&u["\u0275\u0275i18n"](0,z)}function ae(e,t){1&e&&(u["\u0275\u0275i18nStart"](0,W),u["\u0275\u0275element"](1,"code"),u["\u0275\u0275i18nEnd"]())}function ie(e,t){1&e&&u["\u0275\u0275i18n"](0,$)}function re(e,t){1&e&&(u["\u0275\u0275i18nStart"](0,U),u["\u0275\u0275element"](1,"strong"),u["\u0275\u0275element"](2,"code"),u["\u0275\u0275i18nEnd"]())}function le(e,t){1&e&&u["\u0275\u0275i18n"](0,B)}function de(e,t){1&e&&u["\u0275\u0275i18n"](0,Q)}function ce(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"tui-doc-demo"),u["\u0275\u0275elementStart"](1,"p",4),u["\u0275\u0275i18nStart"](2,R),u["\u0275\u0275element"](3,"strong"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](4,q,4,0,"ng-template",null,5,u["\u0275\u0275templateRefExtractor"]),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"tui-doc-documentation"),u["\u0275\u0275template"](7,X,1,0,"ng-template",6),u["\u0275\u0275template"](8,ee,2,0,"ng-template",7),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"]().tuiDropdownAlign=e})),u["\u0275\u0275template"](9,te,1,0,"ng-template",8),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"]().tuiDropdownDirection=e})),u["\u0275\u0275template"](10,ne,1,0,"ng-template",9),u["\u0275\u0275template"](11,oe,1,0,"ng-template",10),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"]().tuiDropdownLimitWidth=e})),u["\u0275\u0275template"](12,ae,2,0,"ng-template",11),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"]().tuiDropdownMinHeight=e})),u["\u0275\u0275template"](13,ie,1,0,"ng-template",12),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"]().tuiDropdownMaxHeight=e})),u["\u0275\u0275template"](14,re,3,0,"ng-template",13),u["\u0275\u0275template"](15,le,1,0,"ng-template",14),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"]().position=e})),u["\u0275\u0275template"](16,de,1,0,"ng-template",15),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"]().tuiDropdownSided=e})),u["\u0275\u0275elementEnd"]()}if(2&e){var o=u["\u0275\u0275reference"](5),a=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("tuiDropdownSelectionPosition",a.position)("tuiDropdownContent",o)("tuiDropdownMinHeight",a.tuiDropdownMinHeight)("tuiDropdownMaxHeight",a.tuiDropdownMaxHeight)("tuiDropdownAlign",a.tuiDropdownAlign)("tuiDropdownDirection",a.tuiDropdownDirection)("tuiDropdownLimitWidth",a.tuiDropdownLimitWidth)("tuiDropdownSided",a.tuiDropdownSided),u["\u0275\u0275advance"](7),u["\u0275\u0275property"]("documentationPropertyValues",a.alignVariants)("documentationPropertyValue",a.tuiDropdownAlign),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValues",a.dropdownDirectionVariants)("documentationPropertyValue",a.tuiDropdownDirection),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("documentationPropertyValues",a.tuiDropdownLimitWidthVariants)("documentationPropertyValue",a.tuiDropdownLimitWidth),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValue",a.tuiDropdownMinHeight),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValue",a.tuiDropdownMaxHeight),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("documentationPropertyValues",a.positionVariants)("documentationPropertyValue",a.position),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValue",a.tuiDropdownSided)}}function pe(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"ol",18),u["\u0275\u0275elementStart"](1,"li"),u["\u0275\u0275elementStart"](2,"p"),u["\u0275\u0275i18nStart"](3,Y),u["\u0275\u0275element"](4,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](5,"tui-doc-code",19),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"li"),u["\u0275\u0275elementStart"](7,"p"),u["\u0275\u0275i18n"](8,J),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](9,"tui-doc-code",20),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("code",n.exampleImportModule),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}R=$localize(_templateObject4||(_templateObject4=_taggedTemplateLiteral([":\u241f2a35c99c7df15ae5710562ef89d46774fd4550ea\u241f2266199980508326983: Select a text to ",":START_TAG_STRONG:see a dropdown",":CLOSE_TAG_STRONG:"])),"\ufffd#3\ufffd","\ufffd/#3\ufffd"),H=$localize(_templateObject5||(_templateObject5=_taggedTemplateLiteral([":\u241fd1ecab852a303aac35d35070161452b1a1d5785d\u241f5618338812223057329: Here you can have any content ",":START_PARAGRAPH: You can select a text inside a dropdown and it will not close a dropdown ",":CLOSE_PARAGRAPH:",":START_TAG_BUTTON:Button",":CLOSE_TAG_BUTTON:"])),"\ufffd#2\ufffd","\ufffd/#2\ufffd","\ufffd#3\ufffd","\ufffd/#3\ufffd"),F=$localize(_templateObject6||(_templateObject6=_taggedTemplateLiteral([":\u241fee84d3c7de163b96c6606f2d0af612463026e07d\u241f741899295101860675: Content "]))),I=$localize(_templateObject7||(_templateObject7=_taggedTemplateLiteral([":\u241f4e5cb2c74dfb392802e7e005883b9be2c781fd4a\u241f905186926226823365: Align of dropdown (does not work together with ",":START_TAG_CODE:limitWidth === 'fixed'",":CLOSE_TAG_CODE: ) "])),"\ufffd#1\ufffd","\ufffd/#1\ufffd"),N=$localize(_templateObject8||(_templateObject8=_taggedTemplateLiteral([":\u241fbfe17793e6e84334e10951e36a771ad1ac58ef05\u241f8707958835080744644: Set a vertical direction of dropdown "]))),G=$localize(_templateObject9||(_templateObject9=_taggedTemplateLiteral([":\u241f61d2797cfb021d05ea2691f565dd41ec47478a3c\u241f5413767166426586835: Set dropdown host manually. For example, it will be a target if someone blurs dropdown with Tab/Shift+Tab. Element with a directive is used by default. "]))),z=$localize(_templateObject10||(_templateObject10=_taggedTemplateLiteral([":\u241fda2ca1c17abdc5578724541ebd2b9c6d044d248e\u241f1790691801673246110: Limit dropdown width "]))),W=$localize(_templateObject11||(_templateObject11=_taggedTemplateLiteral([":\u241fe848cc13a18e3647fb148f5d1c19ae5f888e1557\u241f5799599437390794628: Minimum height to calculate that dropdown fits to setted ",":START_TAG_CODE:tuiDropdownDirection",":CLOSE_TAG_CODE:"])),"\ufffd#1\ufffd","\ufffd/#1\ufffd"),$=$localize(_templateObject12||(_templateObject12=_taggedTemplateLiteral([":\u241fb16442aff8c447ade67e3d9a81f268796ea113fa\u241f34813109637476177: Maximum height of dropdown "]))),U=$localize(_templateObject13||(_templateObject13=_taggedTemplateLiteral([":\u241f5c15cd8f1ed7cb2bd17b60a6af84c911cd1699cc\u241f1070006108743271766:",":START_TAG_STRONG:Directive selector",":CLOSE_TAG_STRONG: . Optional: you can also set a handler that gets ",":START_TAG_CODE:Range",":CLOSE_TAG_CODE: and returns show/close dropdown "])),"\ufffd#1\ufffd","\ufffd/#1\ufffd","\ufffd#2\ufffd","\ufffd/#2\ufffd"),B=$localize(_templateObject14||(_templateObject14=_taggedTemplateLiteral([":\u241f7b2fe7a08c93ab872d983500d94a057f31327d32\u241f1537393581077902015: Position of dropdown near text selection "]))),Q=$localize(_templateObject15||(_templateObject15=_taggedTemplateLiteral([":\u241f8ce8395bd49b9bbee585ad617dad9e48eb6a8c49\u241f3925785757038900199: Dropdown is sided by host "]))),Y=$localize(_templateObject16||(_templateObject16=_taggedTemplateLiteral([":\u241f8a62be1bbab6430a7d42c204d2b6d6ba8d65fffe\u241f1816878685679044442: Import ",":START_TAG_CODE:TuiDropdownModule",":CLOSE_TAG_CODE: into a module where you want to use our component "])),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),J=$localize(_templateObject17||(_templateObject17=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"])));var ue,me,se=((me=_createClass((function e(){_classCallCheck(this,e),this.exampleImportModule="import {TuiDropdownSelectionModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiDropdownSelectionModule\n    ],\n...\n",this.exampleInsertTemplate='<div tuiDropdownSelection [tuiDropdownContent]="content">\n    Host element\n</div>\n\n<ng-template #content>\n    Dropdown content\n</ng-template>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-dropdown-selection-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDropdownSelectionExample1 {}\n",HTML:'Dropdown will be shown text selection:\n<p\n    tuiDropdownSelection\n    tuiDropdownSelectionPosition="selection"\n    tuiDropdownContent="&nbsp;&nbsp;Dropdown text&nbsp;&nbsp;"\n>\n    Select a text to see dropdown\n</p>\n'},this.example2={TypeScript:"import {Component, ElementRef, QueryList, ViewChildren} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {EMPTY_QUERY, setNativeFocused, TuiBooleanHandler, tuiPure} from '@taiga-ui/cdk';\nimport {TuiOptionComponent} from '@taiga-ui/core';\nimport {getWordRange} from '@taiga-ui/kit';\n\nimport {default as avatar} from '!!file-loader!../../../../../assets/images/avatar.jpg';\n\nexport interface User {\n    readonly name: string;\n    readonly avatar: string;\n    readonly login: string;\n}\n\n@Component({\n    selector: 'tui-dropdown-selection-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDropdownSelectionExample2 {\n    @ViewChildren(TuiOptionComponent, {read: ElementRef})\n    private readonly options: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;\n\n    value = 'Type @ to see a dropdown';\n\n    readonly items = [\n        {\n            name: 'Alexander Inkin',\n            avatar,\n            login: 'a.inkin',\n        },\n        {\n            name: 'Roman Sedov',\n            avatar: '',\n            login: 'r.sedov',\n        },\n    ];\n\n    get focused(): true | null {\n        return !!this.options.length || null;\n    }\n\n    predicate: TuiBooleanHandler<Range> = range =>\n        getWordRange(range).toString().startsWith('@');\n\n    onArrow(event: KeyboardEvent, which: 'first' | 'last') {\n        const item = this.options[which];\n\n        if (!item) {\n            return;\n        }\n\n        event.preventDefault();\n        setNativeFocused(item.nativeElement);\n    }\n\n    filterItems(textarea: HTMLTextAreaElement): ReadonlyArray<User> {\n        const search = this.getCurrentSearch(textarea).replace('@', '');\n\n        return this.getFilteredItems(this.items, search);\n    }\n\n    onClick(login: string, textarea: HTMLTextAreaElement) {\n        const search = this.getCurrentSearch(textarea);\n        const value = this.value.replace(search, login);\n        const caret = value.indexOf(login) + login.length;\n\n        this.value = value;\n        setNativeFocused(textarea);\n        textarea.value = value;\n        textarea.setSelectionRange(caret, caret);\n    }\n\n    @tuiPure\n    private getFilteredItems(\n        items: ReadonlyArray<User>,\n        search: string,\n    ): ReadonlyArray<User> {\n        return items.filter(\n            ({name, login}) => login.startsWith(search) || name.startsWith(search),\n        );\n    }\n\n    private getCurrentSearch(textarea: HTMLTextAreaElement): string {\n        return textarea.value.substring(\n            textarea.value.indexOf('@'),\n            textarea.selectionStart,\n        );\n    }\n}\n",HTML:'<tui-text-area\n    #textarea\n    tuiDropdownSelectionPosition="word"\n    [tuiDropdownContent]="dropdown"\n    [tuiDropdownSelection]="predicate"\n    [pseudoFocused]="focused"\n    [(ngModel)]="value"\n    (keydown.arrowUp)="onArrow($event, \'last\')"\n    (keydown.arrowDown)="onArrow($event, \'first\')"\n>\n    Type a message\n</tui-text-area>\n<ng-template #dropdown>\n    <tui-data-list\n        *ngIf="textarea.nativeFocusableElement"\n        class="menu"\n        (keydown.escape)="textarea.nativeFocusableElement.focus()"\n    >\n        <button\n            *ngFor="let item of filterItems(textarea.nativeFocusableElement)"\n            tuiOption\n            (click)="onClick(item.login, textarea.nativeFocusableElement)"\n        >\n            {{item.name}}\n            <tui-avatar\n                size="s"\n                [rounded]="true"\n                [avatarUrl]="item.avatar"\n                [text]="item.name"\n            ></tui-avatar>\n        </button>\n    </tui-data-list>\n</ng-template>\n',LESS:".menu {\n    width: 12.5rem;\n}\n"},this.positionVariants=["selection","word","tag"],this.open=!1,this.position="selection",this.tuiDropdownMinHeight=d.DEFAULT_MIN_HEIGHT,this.tuiDropdownMaxHeight=d.DEFAULT_MAX_HEIGHT,this.tuiDropdownSided=!1,this.alignVariants=["right","left"],this.tuiDropdownAlign=this.alignVariants[0],this.dropdownDirectionVariants=["top","bottom"],this.tuiDropdownDirection=null,this.tuiDropdownLimitWidthVariants=["fixed","min","auto"],this.tuiDropdownLimitWidth=this.tuiDropdownLimitWidthVariants[0]}))).\u0275fac=function(e){return new(e||me)},me.\u0275cmp=u["\u0275\u0275defineComponent"]({type:me,selectors:[["example-tui-dropdown-selection"]],decls:5,vars:0,consts:[["package","KIT","type","directives",6,"header"],["pageTab",""],["id","selection",3,"content",6,"heading"],["id","textarea","heading","textarea",3,"content"],["tuiDropdownSelection","",3,"tuiDropdownSelectionPosition","tuiDropdownContent","tuiDropdownMinHeight","tuiDropdownMaxHeight","tuiDropdownAlign","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownSided"],["dropdownContent",""],["documentationPropertyName","tuiDropdownContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent"],["documentationPropertyName","tuiDropdownAlign","documentationPropertyMode","input","documentationPropertyType","TuiHorizontalDirection",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownDirection","documentationPropertyMode","input","documentationPropertyType","TuiVerticalDirection | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownHost","documentationPropertyMode","input","documentationPropertyType","HTMLElement | null"],["documentationPropertyName","tuiDropdownLimitWidth","documentationPropertyMode","input","documentationPropertyType","TuiDropdownWidthT",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownMinHeight","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownMaxHeight","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownSelection","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<Range>"],["documentationPropertyName","tuiDropdownSelectionPosition","documentationPropertyMode","input","documentationPropertyType","'selection' | 'word' | 'tag'",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownSided","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"dropdown"],["tuiButton","","type","button"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275i18nAttributes"](1,k),u["\u0275\u0275template"](2,Z,8,2,"ng-template",1),u["\u0275\u0275template"](3,ce,17,19,"ng-template",1),u["\u0275\u0275template"](4,pe,10,2,"ng-template",1),u["\u0275\u0275elementEnd"]())},directives:[m.a,s.a,g.a,f,E,j.a,w.a,V.a,A.a,M.a,L.a],styles:[".dropdown[_ngcontent-%COMP%]{max-width:20rem;padding:.5rem 1.25rem}"],changeDetection:0}),me),ge=((ue=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=u["\u0275\u0275defineNgModule"]({type:ue}),ue.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||ue)},imports:[[a.c,i.FormsModule,p.c,c.TuiDropdownSelectionModule,d.TuiButtonModule,c.TuiTextAreaModule,c.TuiAvatarModule,d.TuiDataListModule,l.i,r.f.forChild(Object(l.p)(se))]]}),ue)}}]);