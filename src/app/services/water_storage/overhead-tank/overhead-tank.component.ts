import { Component, OnInit } from '@angular/core';
import { ModalPopupComponent } from '../../modal-popup/modal-popup.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overhead-tank',
  templateUrl: './overhead-tank.component.html',
  styleUrls: ['./overhead-tank.component.css']
})
export class OverheadTankComponent implements OnInit {

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
  navigateToSettlingTank(){
    this.router.navigateByUrl('/settling-tank');
  }
  navigateToBigUnderground(){
    this.router.navigateByUrl('/underground-tank');
  }
}
