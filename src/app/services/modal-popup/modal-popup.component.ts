import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../water_storage/settling-tank/settling-tank.component';
import { CommonDataService } from '../../common-data.service'

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})
export class ModalPopupComponent implements OnInit {
  selectedValue : string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, public services : CommonDataService) { }
  
  AllServices = this.services.AllServices
  
  ngOnInit(): void {
  }
  
  

}
