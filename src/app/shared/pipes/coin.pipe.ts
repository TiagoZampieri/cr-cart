import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'coin'
})
export class CoinPipe implements PipeTransform {

  transform(value: number, currencyCode: string = 'BRL', symbolDisplay: boolean = true, digits?: string): string {
    if (!value) {
      return '';
    }

    const coinPipe: CurrencyPipe = new CurrencyPipe('pt-BR');
    const transformed: string = coinPipe.transform(value, currencyCode, symbolDisplay, digits);

    return transformed;
  }

}
