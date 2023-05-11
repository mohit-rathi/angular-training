import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplier',
})
export class MultiplierPipe implements PipeTransform {
  transform(value: number, factor: number = 2): number {
    return value * factor;
  }
}
