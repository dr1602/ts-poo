// forma controlada de acceder a variables, sobre todo variables privadas
export enum DateEnum {
  Days = 'days',
  Months = 'months',
  Years = 'years',
}

export class MyDate {
  constructor(
    public year: number = 1993, // sólo hace la automatización si le mandas el tipo de acceso
    public month: number = 7, // sin el tipo de acceso la variable sólo se podría acceder en el constructor
    private _day: number = 9
  ) {
    // cone sta estructura no es necesario definir aqui nada,
    // pero las variables tendrán el mismo nombre que los params del constructor
  }

  public printFormat(): string {
    const day: string = this.addPadding(this._day);
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
      this._day += amount;
    }
  }

  get day() {
    // code
    return this._day;
  }

  get isLeapYear(): boolean {
    // tpdps los gets deben retornar algo, no es void
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  // get noReteurn(): void {
  //   // esto es un error
  // }
}

const myDate = new MyDate(1993, 7, 10);
console.log(myDate.printFormat());
console.log(myDate.day);
// myDate.day = 1234; // esto no se puede
console.log('1993 es biciesto ', myDate.isLeapYear);

const myDateTwo = new MyDate(2000, 7, 10);
console.log('2000 es biciesto ', myDateTwo.isLeapYear);

const myDateThree = new MyDate(2001, 8, 12);
console.log('2001 es biciesto ', myDateThree.isLeapYear);

const myDateFour = new MyDate(2004, 2, 11);
console.log('2004 es biciesto ', myDateFour.isLeapYear);
