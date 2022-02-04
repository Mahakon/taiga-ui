(window.webpackJsonp=window.webpackJsonp||[]).push([[460],{BVtx:function(n,e,t){"use strict";t.r(e),e.default="import {Component, HostListener, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiStringHandler} from '@taiga-ui/cdk';\nimport {\n    NumberFormatSettings,\n    TUI_NUMBER_FORMAT,\n    TuiNotificationsService,\n} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-copy-processor-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiCopyProcessorExample1 {\n    value = 12345.67;\n\n    constructor(\n        @Inject(TUI_NUMBER_FORMAT) private readonly format: NumberFormatSettings,\n        @Inject(TuiNotificationsService)\n        private readonly notificationsService: TuiNotificationsService,\n    ) {}\n\n    @HostListener('copy', ['$event'])\n    onCopy(event: ClipboardEvent) {\n        this.notificationsService\n            .show(event.clipboardData?.getData('text/plain') ?? '')\n            .subscribe();\n    }\n\n    readonly processor: TuiStringHandler<string> = text =>\n        text\n            .replace(this.format.decimalSeparator, '.')\n            .replace(new RegExp(this.format.thousandSeparator, 'g'), '');\n}\n"}}]);