import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '../shared/blog.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { EventManager } from '../../shared/event-manager.service';
import { BlogModel } from '../shared/blog.model';

@Component({
  selector: 'app-blog-new',
  templateUrl: './blog-new.component.html',
  styleUrls: ['./blog-new.component.css']
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
      title: new FormControl(''),
      rawContent: new FormControl(''),
      publicSlug: new FormControl(''),
      draft: new FormControl(true),
      category: new FormControl(''),
      broadcast: new FormControl(true),
      publishAt: new FormControl('')
    });
  }
  onSubmit({ value, valid }: { value: BlogModel, valid: boolean }) {
    const ngbDate = this.form.controls['publishAt'].value;
    value.publishAt = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
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
