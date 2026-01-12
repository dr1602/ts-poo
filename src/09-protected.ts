export class Animal {
  constructor(protected name: string) {} //no se puede usar de forma externa pero se puede heredar

  move() {
    console.log('parent: Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log('dooooo');
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  bark(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log(`Woof perro ${this.name}!`);
    }
    this.doSomething(); // si es privado, ni siquiera las clases hijas la pueden usar
  }

  move() {
    console.log('child: moving as a dog');
    super.move(); // este lo hereda de la clase padre o animal
  }
}

const firulais = new Animal('Firulais');
firulais.move();
console.log(firulais.greeting());

const malolo = new Dog('Malolo', 'Pochoclo');
// malolo.move();
// console.log(malolo.greeting());
// malolo.bark(3);
// console.log(malolo.owner);
// malolo.name = 'Patrick'; // como es protected, no lo puedo modificar
malolo.bark(1);
malolo.move();
