import { Component, OnInit, Output, ViewChild, AfterViewInit, Input, OnChanges } from '@angular/core';
import { IBlogPostViewModel } from '../models/blogPostViewModel';
import { BlogsService } from '../blogs.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit, AfterViewInit {

  constructor(
    private blogsService: BlogsService,
    private editDialog: MatDialog,
    private deleteDialog: MatDialog
  ) { }

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  blogPosts: MatTableDataSource<IBlogPostViewModel>;
  columnsToDisplay = ['id', 'title', 'author', 'actions'];

  @Input()
  set filter(filterValue: string) {
    if (filterValue) {
      filterValue = filterValue.trim();
      filterValue = filterValue.toLowerCase();
      this.blogPosts.filter = filterValue;
    }
  }

  openEditDialogue(post: IBlogPostViewModel) {
    this.editDialog.open(EditDialogComponent, {
      width: '80%',
      height: '90%',
      data: post
    });
  }

  openDeleteDialog(post: IBlogPostViewModel) {
    this.deleteDialog.open(DeleteDialogComponent, {
      data: post
    });
  }

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
}
