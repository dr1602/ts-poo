const date = new Date();

date.getHours();
date.getTime();
date.toISOString();

const dateDos = new Date(1993, 1, 12); // 0 enero 11 dic

dateDos.getHours();
dateDos.getTime();
dateDos.toISOString();

console.log(date);
console.log(dateDos);

export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(2021, 3, 13);
console.log(myDate);
