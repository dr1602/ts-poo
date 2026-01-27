import { Dog } from './08-inheritance';

// function getValue(value: unknown) {
//   return value;
// }

// function getValue(value: number | string) {
//   return value;
// }

// getValue(12).toFixed();
// getValue('12').t();
// getValue([]).toFixed();

// Mandar tipado como parámetro
function getValue<T>(value: T) {
  const array: T[] = [value];
  return value;
}

getValue<number>(12).toFixed();
getValue<string>('12').toLowerCase();
getValue<number[]>([11, 213, 52]).forEach;

const fifi = new Dog('fifi', 'Todd');
getValue<Dog>(fifi).greeting;
getValue<Dog>(fifi).bark;
