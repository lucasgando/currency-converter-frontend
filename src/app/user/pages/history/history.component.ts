import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { CurrencyService } from '../../../core/services/currency.service';
import { Conversion } from '../../../core/interfaces/conversion';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  service: CurrencyService = inject(CurrencyService);
  conversions: WritableSignal<Conversion[]> = signal<Conversion[]>([]);

  ngOnInit(): void {
    this.service.getConversions().then(res => {
      this.conversions.set(res.sort((a, b) => {
        return -(new Date(a.date).getTime() - new Date(b.date).getTime());
      }));
    })
  }
}
