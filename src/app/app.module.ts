import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsService } from './posts/posts.service';
import { PostsComponent } from './posts/posts.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentsComponent } from './comments/comments.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  }, 
  {
    path: 'posts',
    component: PostsComponent 
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    PostsService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
