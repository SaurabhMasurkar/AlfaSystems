import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import { ContactComponent } from './contact-us/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BuildingTerraceComponent } from './services/building-terrace/building-terrace/building-terrace.component';
import { FloorComponent } from './services/floor/floor/floor.component';
import { OpenWellComponent } from './services/open-well/open-well/open-well.component';

const routes: Routes = [
    { path : '',
    component: HomeComponent},
    { path : 'home',
    component: HomeComponent},
    { path : 'aboutUs',
    component: AboutUsComponent},
    { path : 'contactUs',
    component: ContactComponent},
    { path : 'building-terrace',
    component: BuildingTerraceComponent},
    { path : 'floor',
    component: FloorComponent},
    { path : 'open-well',
    component: OpenWellComponent},
    { path : '',
    component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
