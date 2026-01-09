import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  @Output() calculate = new EventEmitter<InvestmentInput>();

  enteredInitialInvestment =  '0';
  enteredAnnualInvestment = '0';
  enteredAnnualReturn = '5';
  enteredDuration = '5';


  onSubmit(){
      this.calculate.emit({
        initialInvestment: +this.enteredInitialInvestment,
        duration: +this.enteredDuration,
        annualInvestment: +this.enteredAnnualInvestment,
        expectedReturn: +this.enteredAnnualReturn
      })
  }
}
