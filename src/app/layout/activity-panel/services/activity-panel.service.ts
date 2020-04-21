import {
    Injectable,
    Type
} from '@angular/core';
import { Observable } from 'rxjs';

import { ActivityPanelComponent } from '../components/activity-panel.component';


@Injectable({
    providedIn: 'root'
})
export class ActivityPanelService {

    private activityPanel: ActivityPanelComponent;

    initialize(panel: ActivityPanelComponent) {
        this.activityPanel = panel;
    }

    open(innerComponent: Type<any>, title: string): Observable<any> {
        return this.activityPanel.openPanel(innerComponent, title);
    }

    close(sender?: any): void {
        this.activityPanel.closePanel(sender);
    }

}

