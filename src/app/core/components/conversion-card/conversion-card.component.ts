import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Conversion } from '../../interfaces/conversion';

@Component({
  selector: 'conversion-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conversion-card.component.html',
  styleUrls: ['./conversion-card.component.scss']
})
export class ConversionCardComponent {
  @Input({required: true}) conversion: Conversion = {
    id: 0,
    date: new Date(),
    amount: 0,
    result: 0,
    fromCurrency: {
      id: 0,
      name: '',
      symbol: '',
      flag: '',
      conversionIndex: 0
    },
    fromCurrencyIndex: 0,
    toCurrency: {
      id: 0,
      name: '',
      symbol: '',
      flag: '',
      conversionIndex: 0
    },
    toCurrencyIndex: 0
  }
}
