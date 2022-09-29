import { Component, OnInit } from '@angular/core';
import { ModalPopupComponent } from '../../modal-popup/modal-popup.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-building-terrace',
  templateUrl: './building-terrace.component.html',
  styleUrls: ['./building-terrace.component.css']
})
export class BuildingTerraceComponent implements OnInit {

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
  navigateToFloor(){
    this.router.navigateByUrl('/floor');
  }
  navigateToOpenWell(){
    this.router.navigateByUrl('/building-terrace');
  }
 
}
