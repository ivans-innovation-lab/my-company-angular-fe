import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ProjectModel} from '../../projects/shared/project.model';
import { BlogService } from '../shared/blog.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { EventManager } from '../../shared/event-manager.service';
import { BlogModel } from '../shared/blog.model';

@Component({
  selector: 'app-blog-unpublish',
  templateUrl: './blog-unpublish.component.html',
  styleUrls: ['./blog-unpublish.component.scss']
})
export class BlogUnPublishComponent implements OnInit {

  form: FormGroup;
  isSaving: Boolean;
  blogId: string;
  error: any;


  constructor(
    private blogPostsService: BlogService,
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
        this.blogId = params['id'];
      }
    });
  }
  onSubmit({ value, valid }: { value: BlogModel, valid: boolean }) {
    this.blogPostsService.unPublishBlogPost(this.blogId).subscribe(response => this.onSaveSuccess(response), (err) => this.onSaveError(err));
  }

  private onSaveSuccess(result) {
    this.eventManager.broadcast({ name: 'blogPostListModification', content: 'OK' });
    this.isSaving = false;
  }

  // TODO think of better way of handling exceptions.
  private onSaveError(err) {
    this.isSaving = false;
    this.error = err._body;
  }


}
