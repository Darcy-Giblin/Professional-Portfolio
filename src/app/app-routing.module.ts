import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//main page
import {MainComponent} from './main/main.component';

//extra pages
import {AboutMeComponent} from './pages/about-me/about-me.component';
import {ContactComponent} from './pages/contact/contact.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent} from './pages/projects/projects.component';
import {ResumeComponent} from './pages/resume/resume.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/about'},
  {path: 'home', component:MainComponent},
  {path: '', component:MainComponent, children: [
    {path: 'about', component:AboutMeComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'experience', component:ExperienceComponent},
    {path: 'projects', component:ProjectsComponent},
    {path: 'resume', component:ResumeComponent},
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
