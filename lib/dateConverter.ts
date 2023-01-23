import moment from "moment";

export function convertToDate(secondes: number): moment.Moment {
   return moment(secondes *1000).format('llll');
}