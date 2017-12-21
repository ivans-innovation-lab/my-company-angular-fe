///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ProjectsService } from '../shared/projects.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EventManager } from '../../shared/event-manager.service';
import { ProjectModel } from '../shared/project.model';


@Component({
  selector: 'app-projects-activate',
  templateUrl: './projects-activate.component.html',
  styleUrls: ['./projects-activate.component.scss']
})
export class ProjectsActivateComponent implements OnInit {

  form: FormGroup;
  isSaving: Boolean;
  projectId: string;

  constructor(
    private projectsService: ProjectsService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private eventManager: EventManager
  ) {
    this.form = fb.group({
    });
  }

  ngOnInit() {
    this.route.parent.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        this.projectId = params['id'];
      }
    });
  }

  onSubmit({ value, valid }: { value: ProjectModel, valid: boolean }) {
    this.projectsService.activateProject(this.projectId).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
  }

  private onSaveSuccess(result) {
    this.eventManager.broadcast({ name: 'projectListModification', content: 'OK' });
    this.isSaving = false;
  }

  private onSaveError() {
    this.isSaving = false;
  }

}
