import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import { ContactComponent } from './contact-us/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './pages/modal/modal.component';
import { BuildingTerraceComponent } from './services/building-terrace/building-terrace/building-terrace.component';
import { FloorComponent } from './services/floor/floor/floor.component';
import { OpenWellComponent } from './services/open-well/open-well/open-well.component';
import { OverheadTankComponent } from './services/water_storage/overhead-tank/overhead-tank.component';
import { PlasticTankComponent } from './services/water_storage/plastic-tank/plastic-tank.component';
import { SettlingTankComponent } from './services/water_storage/settling-tank/settling-tank.component';
import { UndergroundTankComponent } from './services/water_storage/underground-tank/underground-tank.component';
import { WaterStorageTankComponent } from './services/water_storage/water-storage-tank/water-storage-tank.component';

const routes: Routes = [
  { path : 'modal',
    component: ModalComponent},
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
    { path : 'settling-tank',
    component: SettlingTankComponent},
    { path : 'plastic-tank',
    component: PlasticTankComponent},
    { path : 'storage-tank',
    component: WaterStorageTankComponent},
    { path : 'overhead-tank',
    component: OverheadTankComponent},
    { path : 'underground-tank',
    component: UndergroundTankComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
