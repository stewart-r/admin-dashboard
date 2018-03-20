import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './auth/auth-guard.service';
import { BlogListComponent } from './blog-dashboard/blog-list/blog-list.component';
import { BlogDashboardComponent } from './blog-dashboard/blog-dashboard/blog-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth/auth.service';

const routes: Routes = [
    { path: 'blog-dashboard', component: BlogDashboardComponent, canActivate: [ AuthGuardService ] },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuardService,
        AuthService
    ]
})
export class AppRoutingModule { }
