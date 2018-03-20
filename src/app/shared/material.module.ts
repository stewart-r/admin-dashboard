import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSidenavModule,
    MatSortModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
