import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CommonDataService } from '../../common-data.service'
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  selectedValue : string;

  customerInfoForm = new FormGroup({
    customer_name : new FormControl('', [Validators.required,Validators.minLength(10)]),
    contact_no : new FormControl('', [Validators.required, Validators.maxLength(10)] ),
    email : new FormControl('', [Validators.required, Validators.email ] ),
    req_service : new FormControl('', Validators.required  ),
  })

  constructor( public services : CommonDataService) { }

  AllServices = this.services.AllServices

  ngOnInit(): void {
  }

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
