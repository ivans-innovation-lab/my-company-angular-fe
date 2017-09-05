import { Component, OnInit, Input } from '@angular/core';
import { BlogModel } from '../../blog/shared/blog.model';

@Component({
  selector: 'app-main-detail-blog',
  templateUrl: './main-detail-blog.component.html',
  styleUrls: ['./main-detail-blog.component.scss']
})
export class MainDetailBlogComponent implements OnInit {

  @Input() blogPost: BlogModel;
  constructor() { }

  ngOnInit() {
  }

}
