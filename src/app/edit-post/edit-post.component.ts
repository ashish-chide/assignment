import { Component, OnInit } from "@angular/core";
import { Post } from "../post";
import { PostService } from "../post.service";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-edit-post",
  templateUrl: "./edit-post.component.html",
  styleUrls: ["./edit-post.component.css"]
})
export class EditPostComponent implements OnInit {
  post: Post = {
    userId: 1,
    id: 1,
    title: "This is Title",
    body: "This is Body of the post"
  };
  showPost: boolean = false;

  id: number;
  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params["id"];
    });
    this.postService.getPost(this.id).subscribe((Response: any) => {
      this.post = Response;
      console.log(this.post);
    });
  }

  onSubmit(post: NgForm) {
    console.log(post.value);
    this.post = post.value;
    this.postService.editPost(this.post).subscribe(
      (Response: any) => {
        this.post = Response;
        console.log(Response);
      },
      error => console.log(error)
    );
    this.showPost = true;
  }
}
