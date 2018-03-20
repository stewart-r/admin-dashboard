import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IBlogPostViewModel } from '../models/blogPostViewModel';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public post: IBlogPostViewModel,
    private dialogRef: MatDialogRef<DeleteDialogComponent>,
    private blogService: BlogsService
  ) {}

  ngOnInit() {
  }

  dismiss() {
    this.dialogRef.close();
  }

  async deleteConfirmed() {
    await this.blogService.delete(this.post.id);
    this.dialogRef.close();
  }
}
