import { ProductHttpService } from './services/product-http.service';

(async () => {
  const productService = new ProductHttpService();

  console.log('--'.repeat(10));
  console.log('getAll');

  const products = await productService.getAll();
  console.log(products.length);
  console.log(products.map((item) => item.price));

  const productId = products[0]?.id as number;

  console.log('--'.repeat(10));
  console.log('update');

  await productService.update(productId, {
    price: 10000,
    title: 'Nuevo Producto',
    description: 'Nueva descripción.',
  });

  console.log('--'.repeat(10));
  console.log('find');

  const product = await productService.findOne(productId);
  console.log(product);
})();
