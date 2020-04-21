import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'm-toasts',
  templateUrl: './m-toasts.component.html',
  styleUrls: ['./m-toasts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MToastsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
