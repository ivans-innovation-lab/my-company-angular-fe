import { Component, OnInit, Input } from '@angular/core';
import { BlogDataSource } from '../../blog/blog-list/blog-list.component';

@Component({
  selector: 'app-main-list-blog',
  templateUrl: './main-list-blog.component.html',
  styleUrls: ['./main-list-blog.component.scss']
})
export class MainListBlogComponent implements OnInit {

  @Input() dataSource: BlogDataSource;
  @Input() displayedColumns;
  constructor() { }

  ngOnInit() {
  }

}
