import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { HomeComponent } from './home/home.component';
import { OneBlogComponent } from './one-blog/one-blog.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
   { path: 'create', component: CreatePostComponent },
   { path: 'blog/:id', component: OneBlogComponent },

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
