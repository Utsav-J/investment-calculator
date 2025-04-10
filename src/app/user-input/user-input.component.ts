import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInput } from './user-input.model';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = '10000';
  enteredAnnualInvestment = '2000';
  enteredDuration = '5';
  enteredExpectedReturns = '10';

  @Output() calculate = new EventEmitter<UserInput>();

  onSubmit(){
    this.calculate.emit(
      {
        initialInvestment:+this.enteredInitialInvestment,
        annualInvestment:+this.enteredAnnualInvestment,
        expectedReturn: +this.enteredExpectedReturns,
        duration: +this.enteredDuration
      }
    );
    console.log("Submitted");
  }
}
