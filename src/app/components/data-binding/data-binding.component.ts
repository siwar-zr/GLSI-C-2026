import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  firstName: string = "Siwar";
  deNo: number = 22;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceHolder: string = "Enter Full Name";
  div1ClassName: string = "bg-primary";
  selectedCity: string = "";

  constructor(){
    console.log(this.firstName);

  }

  showWelcomeMsg () {
    alert("Welcome to our Class !")
  }

  onCityChange(){
    console.log("City changed !");
  }

}
