import {
  Component,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { Currency } from './../../../core/interfaces/currency';
import { CurrencyService } from './../../../core/services/currency.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  currencyService: CurrencyService = inject(CurrencyService);
  searchValue: string = '';
  favoriteCurrencies: WritableSignal<Currency[]> = signal<Currency[]>([]);
  favoriteIndexes: WritableSignal<number[]> = signal<number[]>([]);
  allCurrencies: WritableSignal<Currency[]> = signal<Currency[]>([]);
  currencies: WritableSignal<Currency[]> = signal<Currency[]>([]);

  windowScrolled: WritableSignal<boolean> = signal(false);
  openDropdown: WritableSignal<number> = signal(-1); //

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.windowScrolled.set(window.scrollY !== 0);
    });
    this.currencyService.getFavorites().then(res => {
      this.favoriteCurrencies.set(res);
      this.favoriteIndexes.set(this.favoriteCurrencies().map(x => x.id));
    });
    this.currencyService.getAll().then((r) => {
      this.allCurrencies.set(r);
      this.currencies.set(r);
    });
  }

  toggleDropdown(id: number): void {
    if (this.openDropdown() != -1) this.openDropdown.set(-1);
    else this.openDropdown.set(id);
  }

  filter(): void {
    this.currencies.set(
      this.allCurrencies().filter(
        (c) =>
          c.name.includes(this.searchValue)
          || c.symbol.includes(this.searchValue)
      )
    );
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  addFavorite(id: number): void {
    this.currencyService.addFavorite(id).then(res => {
      if (res) {
        this.currencyService.getFavorites().then(res => {
          this.favoriteCurrencies.set(res);
          this.favoriteIndexes.set(this.favoriteCurrencies().map(x => x.id));
          this.openDropdown.set(-1);
        });
      }
    });
  }

  removeFavorite(id: number): void {
    console.log(id);
    this.currencyService.removeFavorite(id).then(res => {
      if (res) {
        this.currencyService.getFavorites().then(res => {
          this.favoriteCurrencies.set(res);
          this.favoriteIndexes.set(this.favoriteCurrencies().map(x => x.id));
          this.openDropdown.set(-1);
        });
      }
    });
  }
}
