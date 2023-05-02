import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettlingTankComponent } from './water_storage/settling-tank/settling-tank.component';
import { PlasticTankComponent } from './water_storage/plastic-tank/plastic-tank.component';
import { WaterStorageTankComponent } from './water_storage/water-storage-tank/water-storage-tank.component';
import { OverheadTankComponent } from './water_storage/overhead-tank/overhead-tank.component';
import { UndergroundTankComponent } from './water_storage/underground-tank/underground-tank.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';





@NgModule({
  declarations: [
    SettlingTankComponent,
    PlasticTankComponent,
    WaterStorageTankComponent,
    OverheadTankComponent,
    UndergroundTankComponent,
    
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    RouterModule,
    BrowserModule
  ],

  exports: [
  ]
})
export class ServicesModule { }
