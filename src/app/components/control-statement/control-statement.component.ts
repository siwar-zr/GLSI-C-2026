import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-statement',
  imports: [FormsModule, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css'
})
export class ControlStatementComponent {

  div1Visible: boolean = false;
  isChecked: boolean = false;
  dayName: string = '';
  modesOfTransport: string = '';
  cityList: string[] = [
    'Tunis',
    'Nabeul',
    'Beja',
    'Gafsa',
    'Sousse'
  ];
  employeeArray: any[] = [
    {empId: 121, name: 'AAA', city: 'Gafsa', contactNo: '11111111'},
    {empId: 122, name: 'BBB', city: 'Monastir', contactNo: '22222222'},
    {empId: 123, name: 'CCC', city: 'Nabeul', contactNo: '33333333'},
    {empId: 124, name: 'DDD', city: 'Tunis', contactNo: '44444444'},
    {empId: 125, name: 'EEE', city: 'Monastir', contactNo: '55555555'}
  ];

  hideShowDiv1(isShow: boolean){
    this.div1Visible = isShow;
  }
}
