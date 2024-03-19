import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';

const routes:Routes=[
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  }
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class HomeModule { }
