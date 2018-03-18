import { Component, OnInit } from '@angular/core';
import { IBlogPost } from '../models/blogPost';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  constructor(
    private blogsService: BlogsService
  ) { }

  blogPosts: IBlogPost[];
  columnsToDisplay = ['id', 'title'];

  ngOnInit() {
    this.blogsService.getPosts().subscribe(res => {
      this.blogPosts = res;
    });
  }


}
