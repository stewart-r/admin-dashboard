import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material.module';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogsService } from './blogs.service';
import { BlogDashboardComponent } from './blog-dashboard/blog-dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
  ],
  entryComponents: [
    EditDialogComponent,
    DeleteDialogComponent
  ],
  declarations: [
    BlogListComponent,
    BlogDashboardComponent,
    SidenavComponent,
    HeaderComponent,
    EditDialogComponent,
    DeleteDialogComponent
  ],
  providers: [BlogsService]
})
export class BlogDashboardModule { }
