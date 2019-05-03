import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Post } from "../post";
import { PostService } from "../post.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-post",
  templateUrl: "./new-post.component.html",
  styleUrls: ["./new-post.component.css"]
})
export class NewPostComponent implements OnInit {
  constructor(private postService: PostService, private router: Router) {}
  post: Post;
  showPost: Boolean = false;
  ngOnInit() {}
  onSubmit(form: NgForm) {
    this.post = form.value;
    this.postService.sendPost(this.post).subscribe(
      (Response: Post) => {
        console.log(Response);
        this.post = Response;
        // this.router.navigate(["/posts"]);
      },
      error => console.log(error)
    );
    this.showPost = true;
  }
}
