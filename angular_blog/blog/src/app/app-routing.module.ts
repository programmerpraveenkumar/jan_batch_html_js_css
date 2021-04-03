import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationsampleComponent } from './animationsample/animationsample.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { HomeComponent } from './home/home.component';
import { InfscrollComponent } from './infscroll/infscroll.component';
import { KeyframeanimationComponent } from './keyframeanimation/keyframeanimation.component';
import { OneBlogComponent } from './one-blog/one-blog.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
   { path: 'create', component: CreatePostComponent },
   { path: 'animation', component: AnimationsampleComponent },
   { path: 'key_animation', component: KeyframeanimationComponent },
   { path: 'infscroll', component: InfscrollComponent },
   { path: 'blog/:id', component: OneBlogComponent },

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
