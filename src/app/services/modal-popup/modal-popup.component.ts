import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../water_storage/settling-tank/settling-tank.component';
import { CommonDataService } from '../../common-data.service'
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})
export class ModalPopupComponent implements OnInit {
  selectedValue : string;

  customerInfoForm : FormGroup = new FormGroup({
    customer_name : new FormControl('', [Validators.required,Validators.minLength(10)]),
    contact_no : new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern("^[0-9]*$")] ),
    email : new FormControl('', [Validators.required, Validators.email ] ),
    req_service : new FormControl('', Validators.required  ),
  })


  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, public services : CommonDataService) { }
  
  AllServices = this.services.AllServices
  
  ngOnInit(): void {
  }
  

  // getErrorMessage() {
  //   if (this.customerInfoForm.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
  
  get customer_name(){
    return this.customerInfoForm.get('customer_name')
  }
  get contact_no(){
    return this.customerInfoForm.get('contact_no')
  }
  get email(){
    return this.customerInfoForm.get('email')
  }
  get req_service(){
    return this.customerInfoForm.get('req_service')
  }

  customerInfo(){
    console.log(this.customerInfoForm.value)
  }
}
