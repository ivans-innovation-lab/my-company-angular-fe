import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '../shared/blog.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { EventManager } from '../../shared/event-manager.service';
import { BlogModel } from '../shared/blog.model';

@Component({
  selector: 'app-blog-new',
  templateUrl: './blog-new.component.html',
  styleUrls: ['./blog-new.component.scss']
})
export class BlogNewComponent implements OnInit {

  form: FormGroup;
  isSaving: Boolean;

  constructor(
    private blogPostsService: BlogService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private eventManager: EventManager
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      rawContent: new FormControl('', Validators.required),
      publicSlug: new FormControl('', Validators.required),
      draft: new FormControl(true),
      category: new FormControl(''),
      broadcast: new FormControl(true),
      publishAt: new FormControl(new Date(), Validators.required)
    });
  }
  onSubmit({ value, valid }: { value: BlogModel, valid: boolean }) {
    this.blogPostsService.addBlogPost(value).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
  }

  private onSaveSuccess(result) {
    this.eventManager.broadcast({ name: 'blogPostListModification', content: 'OK' });
    this.isSaving = false;
  }

  private onSaveError() {
    this.isSaving = false;
  }

}
