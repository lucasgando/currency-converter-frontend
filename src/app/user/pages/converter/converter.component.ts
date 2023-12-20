import {
  Component,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { CurrencyService } from './../../../core/services/currency.service';
import { Currency } from './../../../core/interfaces/currency';
import { ConvertRequest } from '../../../core/interfaces/convertRequest';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnInit {
  service: CurrencyService = inject(CurrencyService);
  activatedRoute = inject(ActivatedRoute);

  windowScrolled: WritableSignal<boolean> = signal(false);
  canConvert: WritableSignal<boolean> = signal(true);

  currencies: WritableSignal<Currency[]> = signal<Currency[]>([]);
  favoriteCurrencies: WritableSignal<Currency[]> = signal<Currency[]>([]);
  favoriteIndexes: number[] = [];

  selecting: WritableSignal<string> = signal<string>('none');
  loading: WritableSignal<boolean> = signal<boolean>(false);
  converterError: WritableSignal<boolean> = signal<boolean>(false);

  amount: number = 0;
  fromCurrency: WritableSignal<Currency> = signal<Currency>({
    id: 0,
    name: '',
    symbol: '',
    flag: '',
    conversionIndex: 0,
  });
  toCurrency: WritableSignal<Currency> = signal<Currency>({
    id: 0,
    name: '',
    symbol: '',
    flag: '',
    conversionIndex: 0,
  });

  result: WritableSignal<number> = signal<number>(0);

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.windowScrolled.set(window.scrollY !== 0);
    });
    this.service.canConvert().then((res) => {
      this.canConvert.set(res);
    });
    this.service.getAll().then((res) => {
      this.currencies.set(res);
      this.activatedRoute.params.subscribe((params) => {
        if (params['fromCurrencyId'])
          this.fromCurrency.set(
            this.currencies().find((x) => x.id == params['fromCurrencyId']) ?? {
              id: 0,
              name: '',
              symbol: '',
              flag: '',
              conversionIndex: 0,
            }
          );
        if (params['toCurrencyId'])
          this.toCurrency.set(
            this.currencies().find((x) => x.id == params['toCurrencyId']) ?? {
              id: 0,
              name: '',
              symbol: '',
              flag: '',
              conversionIndex: 0,
            }
          );
      });
    });
    this.service.getFavorites().then(res => {
      this.favoriteCurrencies.set(res);
      this.favoriteIndexes = this.favoriteCurrencies().map(x => x.id);
    });
  }

  selectList(select: string) {
    this.selecting.set(select);
  }

  selectCurrency(select: string, currency: Currency): void {
    if (select == 'from') {
      this.fromCurrency.set(currency);
      if (this.fromCurrency().id == 0) this.selectList('to');
      else this.selectList('none');
      return;
    }
    this.toCurrency.set(currency);
    this.selectList('none');
    return;
  }

  async convert(): Promise<void> {
    const convertData: ConvertRequest = {
      amount: this.amount,
      fromCurrencyId: this.fromCurrency().id,
      toCurrencyId: this.toCurrency().id
    }
    this.canConvert.set(await this.service.canConvert());
    if (!this.canConvert()) {
      this.converterError.set(true);
      return;
    }
    this.loading.set(true);
    this.converterError.set(false);
    this.result.set(await this.service.convert(convertData));
    setTimeout(() => {
      this.loading.set(false);
    }, 250);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
