import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AppSettings } from "../app.settings";
import { Comment } from "./comment.model";

@Injectable({
    providedIn: 'root'
})
export class CommentsService {

    constructor(private http: HttpClient) { }

    getAllComments(): Observable<Comment[]> {
        return this.http.get<Comment[]>(AppSettings.ServiceUrl + 'comments');
    }

    getAllCommentsForPost(postId): Observable<Comment[]> {
        return this.http.get<Comment[]>(AppSettings.ServiceUrl + 'posts/' + postId + '/comments');
    }
}