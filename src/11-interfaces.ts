// en la interfaz sólo pones atributos públicos, para los privados no es necesario

export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

// asi solíamos trabajar con las interfaces
// export const driver: Driver = {
//   database: '',
//   password: '',
//   port: 12,
// };

export class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number // private host: number
  ) {}

  connect(): void {
    // Agregas método para conectar, ya requerido por la interface
  }
  disconnect(): void {}
  isConnected(name: string): boolean {
    if (!!name) return true;
    return false;
  }
}

export class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {
    throw new Error('Method no implemented.');
  }
  disconnect(): void {}
  isConnected(name: string): boolean {
    if (!!name) return true;
    return false;
  }
}
