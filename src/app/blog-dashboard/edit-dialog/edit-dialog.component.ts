import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { IBlogPostViewModel } from '../models/blogPostViewModel';
import { BlogsService } from '../blogs.service';
import { IAuthor } from '../models/author';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public post: IBlogPostViewModel,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<EditDialogComponent>,
    private blogService: BlogsService
  ) { }

  authors: IAuthor[];

  cancel() {
    this.dialogRef.close();
  }

  async save() {
    // TODO form validation & error handling
    try {
      await this.blogService.save(this.post);
      this.snackBar.open(`Saved successfully`, null, {
        duration: 1500
      });
      this.dialogRef.close();
    } catch (err) {
      // handle error
    }

  }

  ngOnInit() {
    this.blogService.getAuthors().subscribe(a => this.authors = a);
  }

}
