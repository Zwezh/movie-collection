import {
    ChangeDetectionStrategy,
    Component,
    Input
} from '@angular/core';

import { IWish } from '../../shared/interfaces';

@Component({
    selector: 'mc-wishes-item',
    templateUrl: './wishes-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishesItemComponent {

    @Input() wish: IWish;

}
