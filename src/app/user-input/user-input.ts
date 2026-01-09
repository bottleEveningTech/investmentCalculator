import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  // @Output() calculate = new EventEmitter<InvestmentInput>();

  // calculate = output<InvestmentInput>();

  enteredInitialInvestment =  signal('0');
  enteredAnnualInvestment = signal('0');
  enteredAnnualReturn = signal('5');
  enteredDuration = signal('5');

  constructor(private investService: InvestmentService){

  }

  onSubmit(){
      // this.calculate.emit({
      //   initialInvestment: +this.enteredInitialInvestment(),
      //   duration: +this.enteredDuration(),
      //   annualInvestment: +this.enteredAnnualInvestment(),
      //   expectedReturn: +this.enteredAnnualReturn()
      // })
      this.investService.calculateInvestmentResults({
        initialInvestment: +this.enteredInitialInvestment(),
        duration: +this.enteredDuration(),
        annualInvestment: +this.enteredAnnualInvestment(),
        expectedReturn: +this.enteredAnnualReturn()
      });
      this.enteredAnnualInvestment.set('0');
      this.enteredDuration.set('0');
      this.enteredInitialInvestment.set('0');
      this.enteredAnnualReturn.set('0');
  }
}
