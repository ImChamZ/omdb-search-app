import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'text-alert',
  templateUrl: './text-alert.component.html',
  styleUrls: ['./text-alert.component.scss'],
})
export class TextAlertComponent implements OnInit {
  @Input() type: string;
  @Input() messageText: string;
  constructor() {}

  ngOnInit(): void {}
}
