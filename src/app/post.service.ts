import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "./post";

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  getAllPosts() {
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
  sendPost(post: Post) {
    return this.http.post("https://jsonplaceholder.typicode.com/posts", post);
  }
  editPost(post: Post) {
    return this.http.put(
      " https://jsonplaceholder.typicode.com/posts/" + post.id,
      post
    );
  }
}
