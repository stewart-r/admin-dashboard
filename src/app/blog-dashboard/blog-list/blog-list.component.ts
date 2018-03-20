import { Component, OnInit, Output, ViewChild, AfterViewInit } from '@angular/core';
import { IBlogPostViewModel } from '../models/blogPostViewModel';
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

  blogPosts: MatTableDataSource<IBlogPostViewModel>;
  columnsToDisplay = ['id', 'title'];

  ngOnInit() {
    this.blogPosts = new MatTableDataSource<IBlogPostViewModel>();
    this.blogsService.getPosts().subscribe(res => {
      this.blogPosts.data = res;
    });
  }
  ngAfterViewInit() {
    this.blogPosts.paginator = this.paginator;
  }

}
