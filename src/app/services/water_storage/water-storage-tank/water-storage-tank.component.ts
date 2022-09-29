import { Component, OnInit } from '@angular/core';
import { ModalPopupComponent } from '../../modal-popup/modal-popup.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-water-storage-tank',
  templateUrl: './water-storage-tank.component.html',
  styleUrls: ['./water-storage-tank.component.css']
})
export class WaterStorageTankComponent implements OnInit {

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
  navigateToSettlingTank(){
    this.router.navigateByUrl('/settling-tank');
  }
  navigateToBigOverheadTank(){
    this.router.navigateByUrl('/overhead-tank');
  }
  navigateToBigUnderground(){
    this.router.navigateByUrl('/underground-tank');
  }
}
