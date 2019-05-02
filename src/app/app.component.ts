import { Component } from "@angular/core";
import { Post } from "./post";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "assignment";
  post: Post;
  showPost = false;

  onPostClicked(post: Post) {
    this.post = post;
    this.showPost = true;
    console.log(this.post);
  }
}
