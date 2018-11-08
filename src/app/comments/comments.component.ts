import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from './comments.service';
import { Post } from '../posts/post.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() post: Post;
  public comments: Comment[];

  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
    this.getAllComments();
  }

  getAllComments() {
    this.commentsService.getAllComments().subscribe(comments => {
      this.comments = comments;
    });
  }
}
