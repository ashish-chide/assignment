import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

  getPost(id: number) {
    return this.http.get("https://jsonplaceholder.typicode.com/posts/" + id);
  }
  getComments(id: number) {
    return this.http.get(
      "https://jsonplaceholder.typicode.com/posts/" + id + "/comments"
    );
  }
}
