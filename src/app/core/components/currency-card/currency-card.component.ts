import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Currency } from './../../interfaces/currency';

@Component({
  selector: 'currency-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent {
  @Input({required: true}) currency: Currency = {
    id: 0,
    name: '',
    symbol: '',
    conversionIndex: 0,
    flag: ''
  };
}
