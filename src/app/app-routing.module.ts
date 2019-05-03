import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostListComponent } from "./post-list/post-list.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { AppComponent } from "./app.component";
import { NewPostComponent } from "./new-post/new-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";

const routes: Routes = [
  { path: "", redirectTo: "/posts", pathMatch: "full" },
  {
    path: "posts",
    component: PostListComponent
  },
  {
    path: "posts/:id",
    component: PostDetailComponent
  },
  {
    path: "new-post",
    component: NewPostComponent
  },
  {
    path: "edit-post/:id",
    component: EditPostComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
