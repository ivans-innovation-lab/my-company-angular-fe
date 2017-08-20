import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/blog.service';
import { BlogModel } from '../shared/blog.model';
import { EventManager } from '../../shared/event-manager.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogPosts: BlogModel[];
  errorMessage: string;

  constructor(private blogService: BlogService, private eventManager: EventManager) { }

  ngOnInit(): void {
    this.getBlogPosts();
    this.registerChange();
  }

  registerChange() {
      this.eventManager.subscribe('blogPostListModification', (response) => this.getBlogPosts());
  }

  getBlogPosts(): void {
    this.blogService.getBlogPosts().subscribe(
                                      blogPosts => this.blogPosts = blogPosts,
                                      error =>  this.errorMessage = <any>error);
  }
}
