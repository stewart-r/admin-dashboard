import { Component, OnInit, Output, ViewChild, AfterViewInit } from '@angular/core';
import { IBlogPostViewModel } from '../models/blogPostViewModel';
import { BlogsService } from '../blogs.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit, AfterViewInit {

  constructor(
    private blogsService: BlogsService,
    private editDialogue: MatDialog
  ) { }

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  blogPosts: MatTableDataSource<IBlogPostViewModel>;
  columnsToDisplay = ['id', 'title', 'author', 'actions'];

  ngOnInit() {
    this.blogPosts = new MatTableDataSource<IBlogPostViewModel>();
    this.blogsService.getPosts().subscribe(res => {
      this.blogPosts.data = res;
      this.blogPosts.sort = this.sort;
    });
  }
  ngAfterViewInit() {
    this.blogPosts.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.blogPosts.filter = filterValue;
  }

  openEditDialogue(post: IBlogPostViewModel) {
    this.editDialogue.open();
  }

}
