export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  bark(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('Woof');
    }
  }
}

const firulais = new Animal('Firulais');
firulais.move();
console.log(firulais.greeting());

const malolo = new Dog('Malolo', 'Pochoclo');
malolo.move();
console.log(malolo.greeting());
malolo.bark(3);
console.log(malolo.owner);
