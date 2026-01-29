export enum AccessType {
  PRIVATE = 'private',
  PUBLIC = 'public',
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  access?: AccessType | undefined;
  creationAt: Date;
  updatedAt: Date;
}
