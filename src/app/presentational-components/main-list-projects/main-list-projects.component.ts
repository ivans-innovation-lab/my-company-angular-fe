import { Component, OnInit, Input } from '@angular/core';
import { ProjectsDataSource } from '../../projects/projects-list/projects-list.component';

@Component({
  selector: 'app-main-list-projects',
  templateUrl: './main-list-projects.component.html',
  styleUrls: ['./main-list-projects.component.scss']
})
export class MainListProjectsComponent implements OnInit {

  @Input() dataSource: ProjectsDataSource;
  @Input() displayedColumns;

  constructor() { }

  ngOnInit() {
  }

}
