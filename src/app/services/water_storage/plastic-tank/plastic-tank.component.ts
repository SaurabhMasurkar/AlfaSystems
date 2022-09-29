import { Component, OnInit } from '@angular/core';
import { ModalPopupComponent } from '../../modal-popup/modal-popup.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plastic-tank',
  templateUrl: './plastic-tank.component.html',
  styleUrls: ['./plastic-tank.component.css']
})
export class PlasticTankComponent implements OnInit {

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

  
  navigateToSettlingTank(){
    this.router.navigateByUrl('/settling-tank');
  }
  navigateToWaterStorageTank(){
    this.router.navigateByUrl('/storage-tank');
  }
  navigateToBigOverheadTank(){
    this.router.navigateByUrl('/overhead-tank');
  }
  navigateToBigUnderground(){
    this.router.navigateByUrl('/underground-tank');
  }
}
