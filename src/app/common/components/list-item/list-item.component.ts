import {
    ChangeDetectionStrategy,
    Component,
    Input
} from '@angular/core';

@Component({
    selector: 'mc-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {
    @Input() label: string;
    @Input() value: string;
    @Input() fieldClass: string;
    @Input() labelClass: string;
    @Input() valueClass: string;
}
