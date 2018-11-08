import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AppSettings } from "../app.settings";

@Injectable({
    providedIn: 'root'
})
export class CommentsService {

    constructor(private http: HttpClient) { }

    getAllComments(): Observable<Comment[]> {
        return this.http.get<Comment[]>(AppSettings.ServiceUrl + 'comments');
    }

}