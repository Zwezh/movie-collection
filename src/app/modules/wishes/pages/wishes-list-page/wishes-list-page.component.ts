import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BaseDto } from '@appApi/base.dto';

@Component({
    selector: 'mc-wishes-list-page',
    templateUrl: './wishes-list-page.component.html',
    styleUrls: ['./wishes-list-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishesListPageComponent implements OnInit {

    wishList: Array<BaseDto>;
    constructor() { 
        this.wishList = new Array<BaseDto>();
    }

    ngOnInit(): void {
        for (let index = 0; index < 20; index++) {
            this.wishList.push(new BaseDto());
        }
    }

}
