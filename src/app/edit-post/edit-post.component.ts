import { Component, OnInit } from "@angular/core";
import { Post } from "../post";
import { PostService } from "../post.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit-post",
  templateUrl: "./edit-post.component.html",
  styleUrls: ["./edit-post.component.css"]
})
export class EditPostComponent implements OnInit {
  post: Post;
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
    });
  }

  onSubmit(post: Post) {
    this.postService.editPost(post).subscribe((Response: any) => {
      this.post = Response;
    });
  }
}
