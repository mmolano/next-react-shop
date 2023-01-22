import moment from "moment";

export function convertToDate(secondes: number): Date {
   return moment(secondes *1000).format('llll');
}