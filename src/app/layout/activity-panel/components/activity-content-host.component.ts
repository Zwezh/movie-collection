import {
    AfterViewInit,
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    Input,
    Type,
    ViewChild,
    ViewContainerRef
} from '@angular/core';

@Component({
    selector: 'mc-activity-content-host',
    template: '<ng-template #dynamicComponent></ng-template>'

})
export class ActivityContentHostComponent implements AfterViewInit {

    @ViewChild('dynamicComponent', { read: ViewContainerRef }) myRef: ViewContainerRef;
    @Input('innerComponent') innerComponent: Type<any>;

    componentRef: ComponentRef<Type<any>>;

    constructor(private resolver: ComponentFactoryResolver) { }

    ngAfterViewInit(): void {
        this.myRef.clear();
        const factory = this.resolver.resolveComponentFactory(this.innerComponent);
        this.componentRef = this.myRef.createComponent(factory);
    }
}