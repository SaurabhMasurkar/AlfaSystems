import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { ModalPopupComponent } from '../../modal-popup/modal-popup.component';
import { Router } from '@angular/router';


export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-settling-tank',
  templateUrl: './settling-tank.component.html',
  styleUrls: ['./settling-tank.component.css']
})
export class SettlingTankComponent implements OnInit {

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
  navigateToBigUnderground(){
    this.router.navigateByUrl('/underground-tank');
  }


}


