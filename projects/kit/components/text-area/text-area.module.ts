import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiFocusableModule, TuiFocusedModule, TuiHoveredModule} from '@taiga-ui/cdk';
import {
    TuiDescribedByModule,
    TuiScrollbarModule,
    TuiSvgModule,
    TuiTooltipModule,
    TuiWrapperModule,
} from '@taiga-ui/core';

import {TuiTextAreaComponent} from './text-area.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiFocusableModule,
        TuiFocusedModule,
        TuiHoveredModule,
        TuiScrollbarModule,
        TuiTooltipModule,
        TuiWrapperModule,
        TuiDescribedByModule,
        TuiSvgModule,
    ],
    declarations: [TuiTextAreaComponent],
    exports: [TuiTextAreaComponent],
})
export class TuiTextAreaModule {}
