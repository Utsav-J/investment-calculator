import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInput } from './user-input.model';
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = signal<number|string>('10000') ;
  enteredAnnualInvestment = signal<number|string>('2000');
  enteredDuration = signal<number|string>('5');
  enteredExpectedReturns = signal<number|string>('10');

  // @Output() calculate = new EventEmitter<UserInput>();

  constructor(private investmentService : InvestmentService) {}

  onSubmit(){
    this.investmentService.calculateInvestmentResults({
      initialInvestment:+this.enteredInitialInvestment(),
      annualInvestment:+this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedReturns(),
      duration: +this.enteredDuration()
    }); 
      
    console.log("Submitted");
    this.enteredInitialInvestment.set("");
    this.enteredAnnualInvestment.set("");
    this.enteredDuration.set('5');
    this.enteredExpectedReturns.set('10');
  }
}
