import { Pipe, PipeTransform } from '@angular/core';

const ONE_DAY_TIMESPAN = 3600 * 24 * 100;
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
    today.setHours(23, 59);

    let yesterday = new Date(today.getTime() - ONE_DAY_TIMESPAN);
    let tomorrow = new Date(today.getTime() + ONE_DAY_TIMESPAN);
    let week = new Date(today.getTime() + 7 * ONE_DAY_TIMESPAN);

    if(value > yesterday && value < today) {
      return 'Today';
    } else if (value > yesterday && value < tomorrow) {
      return 'Tomorrow';
    } else if (value > yesterday && value < week ){
      return value.toLocaleString('en', {  weekday: 'short' });
    } else {
      return `${value.getDay()} ${value.toLocaleDateString('en', { month: 'short'})}`
    }
  }
}
