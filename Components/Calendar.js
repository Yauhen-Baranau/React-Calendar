
function getDaysInMonth(year,month){
        let d = new Date(year,month+1,0)
         return d.getDate()
         }

function getDayofWeek(date){
      const dayOfWeek = date.getDay()
      if (dayOfWeek === 0) return 6
      return dayOfWeek -1
       }    
const DAYS_IN_WEEK = 7;

export default function getMonthData(year,month) {
    const result = [] // Month data model
    const date = new Date(year,month)
    const daysInMonth = getDaysInMonth(year,month)
    const DayOfmonthStartsOn = getDayofWeek(date);
    let day = 1;

    for (let i = 0; i < (daysInMonth + DayOfmonthStartsOn) / DAYS_IN_WEEK; i++) {
    result[i] = [];
        for (let j = 0; j < DAYS_IN_WEEK; j++) {
            if ((i === 0 && j < DayOfmonthStartsOn) || day > daysInMonth) {
            result[i][j] = null;
           } else {
            result[i][j] = new Date(year, month, day++);
           }
        }
    }
return result;
}