import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-customer',
  imports: [FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customerObj: any = {
  "userId": 0,
  "userName": "",
  "emailId": "",
  "fullName": "",
  "password": ""
  }

  customerArray: any[] = [];

  constructor(private cstSrv: CustomerService){
    this.getCustomers();
  }

  //getCustomers(){
  //  this.http.get("https://projectapi.gerasim.in/api/BankLoan/GetAllUsers").subscribe((res:any)=>{
  //      this.customerArray = res.data;
  //  })
  //}

  getCustomers(){
    this.cstSrv.loadCustomers().subscribe((res:any)=>{
        this.customerArray = res.data;
    })
  }

  onSaveCustomer(){
    this.cstSrv.createNewCustomer(this.customerObj).subscribe((res:any)=>{
      if(res.result){
        alert('Customer Created Successfully !');
        this.getCustomers();
      } else {
        alert(res.message);
      }
    })
  }



}
