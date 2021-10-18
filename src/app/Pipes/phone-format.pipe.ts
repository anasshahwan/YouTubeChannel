import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat',
})
export class PhoneFormatPipe implements PipeTransform {
  transform(value: string): string {
    return (
      '(' +
      value.substring(0, 3) +
      ') ' +
      value.substring(3, 6) +
      '- ' +
      value.substring(6)
    );
  }
}
