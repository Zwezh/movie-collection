import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    Type,
    ViewEncapsulation
} from '@angular/core';
import { Observable } from 'rxjs';

import {
    ActivityPanelService
} from '../services/activity-panel.service';

@Component({
    styleUrls: ['./activity-panel.component.scss'],
    selector: 'mc-activity-panel',
    templateUrl: './activity-panel.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ActivityPanelComponent implements OnInit {

    private _hostClass: string;
    private _observerPanel: any;
    private _open: boolean;
    get open(): boolean {
        return this._open;
    }

    private _backDropUpClick: any;
    private _controlComponentByUp: any;


    innerComponent: Type<any>;
    title: any;
    panelStyle: string;

    constructor(
        private activityPanelService: ActivityPanelService) {
        this._hostClass = 'activity-panel';
        this._open = false;
    }

    ngOnInit(): void {
        this.activityPanelService.initialize(this);
    }

    closePanel(sender?: any): void {
        if (this._open) {
            this._open = false;
            document.body.removeEventListener('mouseup', this._getBackDropUpClick());
            this._controlComponentByUp = null;
            if (this._observerPanel) {
                this._observerPanel.next(sender);
                this._observerPanel.complete();
            }
        }
    }

    openPanel(innerComponent: Type<any>, title: string): Observable<any> {
        if (!this._open) {
            this._open = true;
            this.innerComponent = innerComponent;
            this.title = title;
        }

        const observable = new Observable((observer: any) => {
            this._observerPanel = observer;
        });
        this.onAnimationDone();

        return observable;
    }

    private onAnimationDone(): void {
        if (this._open) {
            document.body.addEventListener('mouseup', this._getBackDropUpClick());
        }
    }
    private _getBackDropUpClick(): any {
        if (!this._backDropUpClick) {
            this._backDropUpClick = (event: any) => {
                this._controlComponentByUp = event.target.closest('.' + this._hostClass);
                if (!this._controlComponentByUp) {
                    this.closePanel();
                }
            };
        }
        return this._backDropUpClick;
    }
}