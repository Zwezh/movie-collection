import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FADE_IN_CONTENT_BY_OPACITY } from '@appConstants';

@Component({
    selector: 'mc-validation-messages',
    templateUrl: './validation-messages.component.html',
    styleUrls: ['./validation-messages.component.scss'],
    animations: [FADE_IN_CONTENT_BY_OPACITY]
})
export class ValidationMessagesComponent {

    @Input() control: AbstractControl;
    @Input() required: string;
    @Input() maxLength: string;
    @Input() minLength: string;
    @Input() pattern: string;
    @Input() equalValues: string;
    @Input() dateTimeInvalid: string;
    @Input() max: string;
    @Input() min: string;
    @Input() other: string;
}
