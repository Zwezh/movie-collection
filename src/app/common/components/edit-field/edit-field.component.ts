import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    forwardRef,
    Input,
    Provider
} from '@angular/core';
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR
} from '@angular/forms';

const VALUE_ACCESSOR: Provider = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line: no-use-before-declare
    useExisting: forwardRef(() => EditFieldComponent),
    multi: true
};
@Component({
    selector: 'mc-edit-field',
    templateUrl: './edit-field.component.html',
    styleUrls: ['./edit-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [VALUE_ACCESSOR]
})
export class EditFieldComponent implements ControlValueAccessor {
    private _value;
    get value() {
        return this._value;
    }

    @Input()
    set value(val) {
        this._value = val;
        this._changeDetector.detectChanges();
        this.onChange(this._value);
    }
    @Input() label: string;
    @Input() fieldClass: string;
    @Input() labelClass: string;
    @Input() valueClass: string;

    isDisable: boolean;

    constructor(private _changeDetector: ChangeDetectorRef) {
        this.isDisable = false;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    // tslint:disable-next-line: no-empty
    registerOnTouched(fn: any): void { }

    setDisabledState(isDisabled: boolean): void {
        this.isDisable = isDisabled;
    }

    writeValue(value: any): void {
        this.value = value;
    }

    // tslint:disable-next-line: no-empty
    private onChange = (value: any) => { }

}
