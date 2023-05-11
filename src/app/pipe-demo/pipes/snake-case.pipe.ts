import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snakecase',
})
export class SnakeCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toLowerCase().replace(/ /g, '_');
  }
}
