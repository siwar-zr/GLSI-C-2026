import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  cityList: string[] = ["Tunis", "Nabeul", "Beja", "Bizerte", "Sousse"];

  employeeArray: any[] = [
    {empId: 121, name: 'AAA', city: 'Gafsa', contactNo: '11111111'},
    {empId: 122, name: 'BBB', city: 'Monastir', contactNo: '22222222'},
    {empId: 123, name: 'CCC', city: 'Nabeul', contactNo: '33333333'},
    {empId: 124, name: 'DDD', city: 'Tunis', contactNo: '44444444'},
    {empId: 125, name: 'EEE', city: 'Monastir', contactNo: '55555555'}
  ]

}
