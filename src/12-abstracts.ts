import { Animal, Dog } from './09-protected';

// abstract nos obliga a tener objetos más específicos no sólo directo del padre
// const animal = new Animal('elite'); // esto no funciona
// animal.greeting();

const brunillo = new Dog('Brunillo', 'Pirilo Sirilo Pajarillo');
brunillo.greeting();
brunillo.bark(3);
