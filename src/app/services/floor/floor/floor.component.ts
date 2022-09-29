import { Component, OnInit } from '@angular/core';
import { ModalPopupComponent } from '../../modal-popup/modal-popup.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent implements OnInit {

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

  
  navigateToWaterStorageTank(){
    this.router.navigateByUrl('/storage-tank');
  }
  navigateToBuildingTerrace(){
    this.router.navigateByUrl('/building-terrace');
  }
  navigateToOpenWell(){
    this.router.navigateByUrl('/open-well');
  }
}
