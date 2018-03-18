import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogsService } from './blogs.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '**', component: BlogListComponent }
    ])
  ],
  declarations: [ BlogListComponent ],
  providers: [BlogsService]
})
export class BlogDashboardModule { }
