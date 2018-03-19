import { Component, OnInit, Output, ViewChild, AfterViewInit } from '@angular/core';
import { IBlogPost } from '../models/blogPost';
import { BlogsService } from '../blogs.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit, AfterViewInit {

  constructor(
    private blogsService: BlogsService
  ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  blogPosts: MatTableDataSource<IBlogPost>;
  columnsToDisplay = ['id', 'title'];

  ngOnInit() {
    this.blogPosts = new MatTableDataSource<IBlogPost>();
    this.blogsService.getPosts().subscribe(res => {
      this.blogPosts.data = res;
    });
  }
  ngAfterViewInit() {
    this.blogPosts.paginator = this.paginator;
  }

}
