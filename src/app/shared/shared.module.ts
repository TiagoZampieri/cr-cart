import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinPipe } from './pipes/coin.pipe';

@NgModule({
  declarations: [
    CoinPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoinPipe
  ]
})
export class SharedModule { }
