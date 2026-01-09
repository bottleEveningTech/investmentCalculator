import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  // @Output() calculate = new EventEmitter<InvestmentInput>();

  calculate = output<InvestmentInput>();

  enteredInitialInvestment =  signal('0');
  enteredAnnualInvestment = signal('0');
  enteredAnnualReturn = signal('5');
  enteredDuration = signal('5');


  onSubmit(){
      this.calculate.emit({
        initialInvestment: +this.enteredInitialInvestment(),
        duration: +this.enteredDuration(),
        annualInvestment: +this.enteredAnnualInvestment(),
        expectedReturn: +this.enteredAnnualReturn()
      })

      this.enteredAnnualInvestment.set('0');
      this.enteredDuration.set('0');
      this.enteredInitialInvestment.set('0');
      this.enteredAnnualReturn.set('0');
  }
}
