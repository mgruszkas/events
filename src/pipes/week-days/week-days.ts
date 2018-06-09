import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the WeekDaysPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'weekDays',
})
export class WeekDaysPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: Date, ...args) {
    let today = new Date();
    today.setHours(23);
    today.setMinutes(59);

    let tomorrow = new Date();
    tomorrow.setHours(23);
    tomorrow.setMinutes(59);

    if(value < today) {
      return 'Today';
    } else if (value < tomorrow) {
      return 'Tomorrow';
    } else {
      return value.toLocaleString('en-us', {  weekday: 'long' });
    }
  }
}
