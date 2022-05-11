import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettlingTankComponent } from './water_storage/settling-tank/settling-tank.component';
import { PlasticTankComponent } from './water_storage/plastic-tank/plastic-tank.component';
import { WaterStorageTankComponent } from './water_storage/water-storage-tank/water-storage-tank.component';
import { OverheadTankComponent } from './water_storage/overhead-tank/overhead-tank.component';
import { UndergroundTankComponent } from './water_storage/underground-tank/underground-tank.component';



@NgModule({
  declarations: [
    SettlingTankComponent,
    PlasticTankComponent,
    WaterStorageTankComponent,
    OverheadTankComponent,
    UndergroundTankComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { }
