import { Injectable } from '@angular/core';

interface Services {
  name: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})


export class CommonDataService {
  AllServices: Services[] = [
    {name: 'Settling Tank Cleaning Service', value: 'Settling Tank Cleaning Service'},
    {name: 'Plastic Water Storage Tanks Cleaning Service', value: 'Plastic Water Storage Tanks Cleaning Service'},
    {name: 'Water Storage Tanks Cleaning Service', value: 'Water Storage Tanks Cleaning Service'},
    {name: 'Big Over Head Tank Cleaning Service', value: 'Big Over Head Tank Cleaning Service'},
    {name: 'Big Underground Tank Cleaning Service', value: 'Big Underground Tank Cleaning Service'},
    {name: 'Open Well Cleaning Service', value: 'Open Well Cleaning Service'},
    {name: 'Floor Cleaning Service', value: 'Floor Cleaning Service'},
    {name: 'Building Terrace Cleaning Service', value: 'Building Terrace Cleaning Service'}    
  ];

  constructor() { }
}
