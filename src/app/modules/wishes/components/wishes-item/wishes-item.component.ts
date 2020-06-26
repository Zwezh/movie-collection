import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseDto } from '@appApi/base.dto';

@Component({
    selector: 'mc-wishes-item',
    templateUrl: './wishes-item.component.html',
    styleUrls: ['./wishes-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishesItemComponent {

    @Input() wish: BaseDto;

}
