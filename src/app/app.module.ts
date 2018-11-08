import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PostsService } from './posts/posts.service';
import { PostsComponent } from './posts/posts.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
