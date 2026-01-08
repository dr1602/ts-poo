export enum DateEnum {
  Days = 'days',
  Months = 'months',
  Years = 'years',
}

export class MyDate {
  public year: number;
  public month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  public printFormat(): string {
    const day: string = this.addPadding(this.day);
    const month: string = this.addPadding(this.month);
    return `${this.year}/${month}/${day}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }

    return `${value}`;
  }

  public add(amount: number, type: DateEnum) {
    if (type === DateEnum.Years) {
      this.year += amount;
    }
    if (type === DateEnum.Months) {
      this.month += amount;
    }
    if (type === DateEnum.Days) {
      this.day += amount;
    }
  }

  getDay() {
    return this.day;
  }
}

const myDate = new MyDate(1993, 7, 10);
console.log(myDate.printFormat());
console.log(myDate.getDay()); // aunque this.day es privado, el método getDay es público por lo cuál sí se puede acceder a la fecha
