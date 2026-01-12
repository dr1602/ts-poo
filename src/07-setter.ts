// forma controlada de acceder a variables, sobre todo variables privadas
export enum DateEnum {
  Days = 'days',
  Months = 'months',
  Years = 'years',
}

export class MyDate {
  constructor(
    public year: number = 1993,
    private _month: number = 7,
    private _day: number = 9
  ) {}

  public printFormat(): string {
    const day: string = this.addPadding(this._day);
    const month: string = this.addPadding(this._month);
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
      this._month += amount;
    }
    if (type === DateEnum.Days) {
      this._day += amount;
    }
  }

  get day() {
    // code
    return this._day;
  }

  get month() {
    return this._month;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  set month(newValue: number) {
    // return 0
    // por definición, set es void. no retorna nada.
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error('month quantity out of range');
    }
  }
}

const myDate = new MyDate(1993, 7, 10);
console.log(myDate.printFormat());
console.log(myDate.day);
console.log('1993 es biciesto ', myDate.isLeapYear);
myDate.month = 4;
console.log('run', myDate.month);
myDate.month = 78; // ¿cómo proteger de estos cambios que son anómalos?
console.log('should not run', myDate.month);
