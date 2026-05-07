import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl: string = 'https://projectapi.gerasim.in/api/BankLoan/';

  constructor(private http : HttpClient) { }

  loadCustomers(){
    return this.http.get(this.apiUrl+"GetAllUsers");
  }

  createNewCustomer(obj:any){
    return this.http.post(this.apiUrl+"RegisterCustomer",obj);
  }
}
