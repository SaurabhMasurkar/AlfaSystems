import { Component, OnInit } from '@angular/core';
import data from '../../../assets/docs/client_list.json';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
client_list = data
  constructor() { }

  ngOnInit(): void {

  }

}
