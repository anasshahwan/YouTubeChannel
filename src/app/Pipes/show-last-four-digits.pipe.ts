import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showLastFourDigits',
})
export class ShowLastFourDigitsPipe implements PipeTransform {
  transform(value: string): string {
    const length = value.length;
    let newStr = '';
    for (let i = 0; i < length; i++) {
      if (i < length - 4) newStr += '*';
      else newStr += value[i];
    }
    return newStr;
  }
}
