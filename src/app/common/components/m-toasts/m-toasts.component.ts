import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mc-toasts',
  templateUrl: './m-toasts.component.html',
  styleUrls: ['./m-toasts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MToastsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
