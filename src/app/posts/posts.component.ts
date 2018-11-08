import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Post } from './post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts: Post[];

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getAllPosts()
      .subscribe( posts => this.posts = posts );
  }
}
