import axios from 'axios';

import { ProductService } from '../models/product-service.model';
import { Product } from '../models/product.model';
import { UpdateProductDto, CreateProductDto } from '../dtos/product.dto';

export class ProductHttpService implements ProductService {
  private url = 'https://api.escuelajs.co/api/v1/products';
  async getAll() {
    const { data } = await axios.get<Product[]>(this.url);
    return data;
  }

  async update(id: Product['id'], changes: UpdateProductDto) {
    try {
      const { data } = await axios.put(`${this.url}/${id}`, changes);
      return data;
    } catch (error) {
      console.log('Error al actualizar en la Api:', error);
      throw new Error('No se pudo actualizar el producto en el servidor');
    }
  }

  async create(dto: CreateProductDto) {
    const { data } = await axios.post(this.url, dto);
    return data;
  }
  async findOne(id: Product['id']) {
    const { data } = await axios.get(`${this.url}/${id}`);
    return data;
  }
}
