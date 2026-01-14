// Métodos y propiedades estáticas

console.log(Math.PI);
console.log(Math.max(1, 2, 2, 2, 8, 1, 0, 10));

class MyMath {
  PI: number = 3.141592653589793;
}

// en una declaración normal para acceder a PI se haría:

const math = new MyMath();
console.log(math.PI);

// para lograrlo como lo hace la librería, se haría así:

class AltMyMath {
  static readonly PI: string = '3.141592653589793';

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => (max >= item ? max : item), -Infinity);
  }
}

console.log('AltMyMath.PI', AltMyMath.PI);
// aquí sí se puede cambiar el valor de PI

// AltMyMath.PI = '🐟';

console.log('AltMyMath.max', AltMyMath.max(1, 2, 3, 4, 5, 6, 7, 8));

const numbers = [12, 42, 6237, 34734, 12316, 3264, 3, 14, 1];
console.log('AltMyMath.max', AltMyMath.max(...numbers));

// reto de no poner cero
console.log('AltMyMath.max', AltMyMath.max(-3, -9, -12));
