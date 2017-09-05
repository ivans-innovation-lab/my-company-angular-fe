import { Component, OnInit, Input } from '@angular/core';
import { ProjectModel } from '../../projects/shared/project.model';

@Component({
  selector: 'app-main-detail-project',
  templateUrl: './main-detail-project.component.html',
  styleUrls: ['./main-detail-project.component.scss']
})
export class MainDetailProjectComponent implements OnInit {

  @Input() project: ProjectModel;
  constructor() { }

  ngOnInit() {
  }

}
