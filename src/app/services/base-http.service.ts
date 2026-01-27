import axios from 'axios';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

export class BaseHttpService<TypeClass> {
  //   data: TypeClass[] = [];

  constructor(private url: string) {}

  async getAll(): Promise<TypeClass[]> {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }
}

// const service = new BaseHttpService<string>();
// service.data.

// const serviceOne = new BaseHttpService<number>();
// serviceOne.data

// const service = new BaseHttpService<string>();
// service.getAll();

// const serviceOne = new BaseHttpService<Category>();
// serviceOne.getAll;

(async () => {
  const prodUrl = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(prodUrl);

  const prodRes = await productService.getAll();
  console.log('products', prodRes.length);

  const cartUrl = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(cartUrl);

  const catRes = await categoryService.getAll();
  console.log('categories', catRes.length);
})();
