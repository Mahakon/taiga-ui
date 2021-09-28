import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-rating-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiRatingExample2 {
    public one = 5;
    public two = 3;
    public three = 4;
}
