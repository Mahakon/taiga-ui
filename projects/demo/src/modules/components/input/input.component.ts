import {Component, forwardRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiHorizontalDirection} from '@taiga-ui/core';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-input',
    templateUrl: './input.template.html',
    styleUrls: ['./input.style.less'],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputComponent),
        },
    ],
})
export class ExampleTuiInputComponent extends AbstractExampleTuiControl {
    readonly exampleImportModule = import(
        '!!raw-loader!./examples/import/import-module.md'
    );

    readonly exampleInsertTemplate = import(
        '!!raw-loader!./examples/import/insert-template.md'
    );

    readonly exampleDeclareForm = import(
        '!!raw-loader!./examples/import/declare-form.md'
    );

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/3/index.ts'),
        HTML: import('!!raw-loader!./examples/3/index.html'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/4/index.ts'),
        HTML: import('!!raw-loader!./examples/4/index.html'),
        LESS: import('!!raw-loader!./examples/4/index.less'),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/5/index.ts'),
        HTML: import('!!raw-loader!./examples/5/index.html'),
        LESS: import('!!raw-loader!./examples/5/index.less'),
    };

    readonly example6: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/6/index.ts'),
        HTML: import('!!raw-loader!./examples/6/index.html'),
        LESS: import('!!raw-loader!./examples/6/index.less'),
    };

    readonly example7: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/7/index.ts'),
        HTML: import('!!raw-loader!./examples/7/index.html'),
        LESS: import('!!raw-loader!./examples/7/index.less'),
    };

    readonly example8: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/8/index.ts'),
        HTML: import('!!raw-loader!./examples/8/index.html'),
        LESS: import('!!raw-loader!./examples/8/index.less'),
    };

    readonly example9: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/9/index.ts'),
        HTML: import('!!raw-loader!./examples/9/index.html'),
        LESS: import('!!raw-loader!./examples/9/index.less'),
    };

    readonly iconVariants = [null, 'tuiIconSearch', 'tuiIconCalendar'];

    icon = this.iconVariants[0];

    readonly iconAlignVariants: ReadonlyArray<TuiHorizontalDirection> = ['left', 'right'];

    iconAlign: TuiHorizontalDirection = this.iconAlignVariants[1];

    readonly control = new FormControl('111', Validators.required);
}
