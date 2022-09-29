import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalPopupComponent } from '../../modal-popup/modal-popup.component';

@Component({
  selector: 'app-underground-tank',
  templateUrl: './underground-tank.component.html',
  styleUrls: ['./underground-tank.component.css']
})
export class UndergroundTankComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(ModalPopupComponent, {
     width: '70%',
     height: '80%',
     data: 'Settling Tank Cleaning Service'
    });
  }

  
  navigateToPlasticWater(){
    this.router.navigateByUrl('/plastic-tank');
  }
  navigateToWaterStorageTank(){
    this.router.navigateByUrl('/storage-tank');
  }
  navigateToBigOverheadTank(){
    this.router.navigateByUrl('/overhead-tank');
  }
  navigateToSettlingTank(){
    this.router.navigateByUrl('/settling-tank');
  }
}
