import moment from 'moment';

export function convertToDate(secondes: number): string {
   return moment(secondes *1000).format('llll');
}