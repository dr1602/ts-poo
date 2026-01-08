export enum DateEnum {
  Days = 'days',
  Months = 'months',
  Years = 'years',
}

export class MyDate {
  constructor(
    public year: number = 1993, // sólo hace la automatización si le mandas el tipo de acceso
    public month: number = 7, // sin el tipo de acceso la variable sólo se podría acceder en el constructor
    private day: number = 9
  ) {
    // cone sta estructura no es necesario definir aqui nada,
    // pero las variables tendrán el mismo nombre que los params del constructor
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
console.log(myDate.getDay());

const myDateTwo = new MyDate();
console.log('() =>', myDateTwo.printFormat());

const myDateThree = new MyDate(2022);
console.log('(2022) =>', myDateThree.printFormat());

const myDateFour = new MyDate(2022, 3);
console.log('(2022, 3) =>', myDateFour.printFormat());
