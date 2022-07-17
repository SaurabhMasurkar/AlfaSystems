import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalPopupComponent } from '../../modal-popup/modal-popup.component';


export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-settling-tank',
  templateUrl: './settling-tank.component.html',
  styleUrls: ['./settling-tank.component.css']
})
export class SettlingTankComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(ModalPopupComponent, {
     width: '70%'
    });
  }
}


