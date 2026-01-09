import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  enteredInitialInvestment =  '0';
  enteredAnnualInvestment = '0';
  enteredAnnualReturn = '5';
  enteredDuration = '5';


  onSubmit(){
    console.log(this.enteredAnnualInvestment);
    console.log(this.enteredInitialInvestment);
    console.log(this.enteredDuration);
    console.log(this.enteredAnnualReturn);

  }
}
