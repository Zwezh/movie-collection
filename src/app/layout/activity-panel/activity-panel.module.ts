import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderModule } from '@appComponents';

import { ActivityContentHostComponent } from './components/activity-content-host.component';
import { ActivityPanelComponent } from './components/activity-panel.component';

const COMPONENTS = [
    ActivityPanelComponent,
    ActivityContentHostComponent
];

@NgModule({
    imports: [
        CommonModule,
        HeaderModule
    ],
    declarations: [COMPONENTS],
    exports: [ActivityPanelComponent]
})
export class ActivityPanelModule { }
