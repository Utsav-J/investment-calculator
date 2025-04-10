import { Component, input, Input, Output } from '@angular/core';
import { ResultData } from './investment-results.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  results = input<ResultData[]>();
  // @Input({required:false})  results?: ResultData[];
  
}
