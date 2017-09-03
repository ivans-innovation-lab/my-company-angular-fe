import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-item',
  templateUrl: './side-item.component.html',
  styleUrls: ['./side-item.component.scss']
})
export class SideItemComponent implements OnInit {

  @Input() primaryTitle: string;
  @Input() secondaryTitle: string;
  @Input() icon: string;
  @Input() routerLinkUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
