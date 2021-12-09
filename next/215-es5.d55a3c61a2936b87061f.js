(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{"4ShE":function(n,t,i){"use strict";i.r(t),t.default='<button tuiButton size="m" (click)="onClick()">\n    Show dialog with carousel\n</button>\n\n<ng-template #header>\n    <div class="header" [style.backgroundImage]="background"></div>\n</ng-template>\n\n<ng-template\n    [tuiDialogOptions]="{ size: \'s\', header: header }"\n    [(tuiDialog)]="open"\n>\n    <div tuiCarouselButtons class="wrapper" (touchstart.passive.stop)="0">\n        <button\n            tuiIconButton\n            tuiMode="onDark"\n            icon="tuiIconChevronLeftLarge"\n            class="tui-space_right-4"\n            (click)="navigate(-1)"\n        ></button>\n        <tui-carousel [(index)]="index">\n            <div *tuiItem>\n                <h2>Carousel is awesome</h2>\n                <p>\n                    It can show arbitrary content and it\'s very easy to control\n                </p>\n            </div>\n            <div *tuiItem>\n                <h2>Pagination</h2>\n                <p>\n                    You can use\n                    <a tuiLink routerLink="/components/pagination">\n                        Pagination\n                    </a>\n                    component with size \'s\' together with it\n                </p>\n            </div>\n            <div *tuiItem>\n                <h2>Buttons</h2>\n                <p>\n                    Use\n                    <code>tuiCarouselButtons</code>\n                    directive to setup navigation buttons\n                </p>\n            </div>\n            <tui-pagination\n                size="s"\n                class="tui-space_top-4"\n                [length]="3"\n                [(index)]="index"\n            ></tui-pagination>\n        </tui-carousel>\n        <button\n            tuiIconButton\n            tuiMode="onDark"\n            icon="tuiIconChevronRightLarge"\n            class="tui-space_left-4"\n            (click)="navigate(1)"\n        ></button>\n    </div>\n    <div class="tui-space_top-4">\n        <button tuiButton appearance="primary" (click)="open = false">\n            Got it!\n        </button>\n    </div>\n</ng-template>\n'}}]);