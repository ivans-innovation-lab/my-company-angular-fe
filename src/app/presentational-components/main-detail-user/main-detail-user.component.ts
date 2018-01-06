import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../../users/shared/user.model';

@Component({
  selector: 'app-main-detail-user',
  templateUrl: './main-detail-user.component.html',
  styleUrls: ['./main-detail-user.component.scss']
})
export class MainDetailUserComponent implements OnInit {

  @Input() user: UserModel;
  @Input() editRouterLinkUrl: string;
  constructor() { }

  ngOnInit() {
  }

}
