import { Product } from '../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';

export const products: Product[] = [];

export class ProductMemoryService {
  private products: Product[] = [];

  create(data: CreateProductDto): Product {
    const newProduct: Product = {
      ...data,
      id: 1241543,
      category: {
        id: Number(data.categoryId),
        name: 'Nombre',
        creationAt: new Date(2025, 12, 30),
        updatedAt: new Date(2025, 12, 30),
        slug: '',
        image: '',
      },
    };
    return this.add(newProduct);
  }

  add(product: Product) {
    this.products.push(product);
    return product;
  }

  update(id: Product['id'], changes: UpdateProductDto): Product {
    const index = this.products.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new Error('Product not found');
    }

    const prevData = this.products[index] as Product;

    const updatedProduct: Product = {
      ...prevData,
      ...changes,
      id: prevData.id,
    } as Product;
    this.products[index] = updatedProduct;
    return updatedProduct;
  }

  findOne(id: Product['id']) {
    return this.products.find((item) => item.id === id);
  }
}
