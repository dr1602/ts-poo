import { ProductMemoryService } from './services/product-memory.service';

const productService = new ProductMemoryService();

productService.create({
  title: 'Product 1',
  price: 3000,
  description: 'Esta es una descripción',
  categoryId: '12',
  images: [] as string[],
  slug: 'product-1',
  creationAt: new Date(),
  updatedAt: new Date(),
});

const products = productService.getAll();
const productId = Number(products[0]?.id);

// console.log(productService.getAll());

productService.update(productId, {
  title: 'Otro Nombre',
});

const rta = productService.findOne(productId);
console.log(rta);
