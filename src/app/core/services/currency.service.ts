import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Currency } from '../interfaces/currency';
import { API } from '../constants/api';
import { ConvertRequest } from '../interfaces/convertRequest';
import { Conversion } from '../interfaces/conversion';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService extends ApiService {
  constructor() { super(); }

  async getAll(): Promise<Currency[]> {
    const res = await this.getAuth('currency');
    return await res.json();
  }

  async getFavorites(): Promise<Currency[]> {
    const res = await this.getAuth('currency/get-favorites');
    return await res.json();
  }

  async addFavorite(id: number): Promise<boolean> {
    const res = await fetch(API + 'currency/add-user-fav', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + this.auth.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(id)
    });
    if (res.ok) return true;
    return false;
  }

  async removeFavorite(id: number): Promise<boolean> {
    const res = await fetch(API + 'currency/remove-user-fav', {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + this.auth.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(id)
    });
    if (res.ok) return true;
    return false;
  }

  async canConvert(): Promise<boolean> {
    const res = await this.getAuth('converter/can-convert');
    if (!res.ok) return false;
    return Boolean(await res.json()).valueOf();
  }
  
  async convert(conversion: ConvertRequest): Promise<number> {
    const res = await fetch(API + 'converter', {
      method: 'POST',
      headers: {
        Authorization: "Bearer " + this.auth.token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(conversion)
    });
    if (res.ok) {
      const resJson = await res.json();
      return parseInt(resJson);
    } else return -1;
  }

  async getConversions(): Promise<Conversion[]> {
    const res = await this.getAuth('converter/conversions');
    return await res.json();
  }
}
