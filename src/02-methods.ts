export enum DateEnum {
  Days = 'days',
  Months = 'months',
  Years = 'years',
}

export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.year}/${this.month}/${this.day}`;
  }

  add(amount: number, type: DateEnum) {
    if (type === DateEnum.Years) {
      this.year += amount;
    }
    if (type === DateEnum.Months) {
      if (this.month + amount > 12) {
        // contabiliza la cantidad de años que pueden ser con los meses disponibles
        this.year = this.month + amount / 12;
        // calcula los meses puros que se agregan a la cuenta de meses
        this.month = this.month + (amount % 12) * 12;
      } else {
        this.month += amount;
      }
    }
    if (type === DateEnum.Days) {
      let pendingDays: number;

      // valida si es un año bisiesto
      if (
        this.year % 4 === 0 ||
        (this.year % 100 === 0 &&
          this.year % 400 === 0 &&
          this.day + amount > 365)
      ) {
        this.year = (this.day + amount) / 366;
        pendingDays = amount - 366;

        while (pendingDays > 0) {
          // calcula para febrero
          if (this.month === 2) {
            if (this.day + amount > 29) {
              this.month = this.month + 1;
              pendingDays = amount - 29;
            } else {
              this.day = this.day + amount;
              pendingDays = pendingDays - amount;
            }
          }
          // calcula para meses de 31 días
          else if ([1, 3, 5, 6, 7, 8, 10, 12].includes(this.month)) {
            if (this.day + amount > 31) {
              this.month = this.month + 1;
              pendingDays = amount - 31;
            } else {
              this.day = this.day + amount;
              pendingDays = pendingDays - amount;
            }
          }
          // calcula para meses de 30 días
          else {
            if (this.day + amount > 30) {
              this.month = this.month + 1;
              pendingDays = amount - 30;
            } else {
              this.day = this.day + amount;
              pendingDays = pendingDays - amount;
            }
          }
        }
      }
      // calcula si es un año no bisiesto o normal
      else if (
        this.year % 4 !== 0 ||
        (this.year % 100 !== 0 &&
          this.year % 400 !== 0 &&
          this.day + amount > 365)
      ) {
        this.year = (this.day + amount) / 365;
        pendingDays = amount - 365;

        while (pendingDays > 0) {
          // calcula para febrero
          if (this.month === 2) {
            if (this.day + amount > 28) {
              this.month = this.month + 1;
              pendingDays = amount - 28;
            } else {
              this.day = this.day + amount;
              pendingDays = pendingDays - amount;
            }
          }
          // calcula para meses de 31 días
          else if ([1, 3, 5, 6, 7, 8, 10, 12].includes(this.month)) {
            if (this.day + amount > 31) {
              this.month = this.month + 1;
              pendingDays = amount - 31;
            } else {
              this.day = this.day + amount;
              pendingDays = pendingDays - amount;
            }
          }
          // calcula para meses de 30 días
          else {
            if (this.day + amount > 30) {
              this.month = this.month + 1;
              pendingDays = amount - 30;
            } else {
              this.day = this.day + amount;
              pendingDays = pendingDays - amount;
            }
          }
        }
      }
      this.day += amount;
    }
  }
}

const myDate = new MyDate(1993, 7, 9);
console.log(myDate.printFormat());
myDate.add(3, DateEnum.Days);
console.log(myDate.printFormat());
myDate.add(3, DateEnum.Months);
console.log(myDate.printFormat());

console.log(myDate.year);
console.log(myDate.month);
console.log(myDate.day);
