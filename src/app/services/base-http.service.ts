import axios from 'axios';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { UpdateProductDto } from '../dtos/product.dto';

export class BaseHttpService<TypeClass> {
  //   data: TypeClass[] = [];

  constructor(protected url: string) {}

  async getAll(): Promise<TypeClass[]> {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    try {
      const array: TypeClass[] = [];
      const { data } = await axios.put(`${this.url}/${id}`, changes);
      return data;
    } catch (error) {
      console.log('Error al actualizar en la Api:', error);
      throw new Error('No se pudo actualizar el producto en el servidor');
    }
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
  productService.update<Product['id'], UpdateProductDto>(1, {
    title: 'asa',
  });

  const cartUrl = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(cartUrl);

  const catRes = await categoryService.getAll();
  console.log('categories', catRes.length);
})();
