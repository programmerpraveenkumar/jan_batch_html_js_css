import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'index', component: HomeComponent },
   { path: 'about', component: AboutComponent },
  //two params added in about component
  { path: 'about/:post_id', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component:LoginComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// @NgModule({
//   declarations: [],
//   imports: [
//     RouterModule.forRoot(routes),
//     CommonModule
//   ]
// })
export class AppRoutingModule { }
