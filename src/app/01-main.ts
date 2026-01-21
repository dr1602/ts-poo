import axios from 'axios';

import { Product } from './models/product.model';

(async () => {
  async function getProducts() {
    // async function getProducts(): Promise<Product[]> {
    // const { data } = await axios.get<Product[]>(
    //   'https://api.escuelajs.co/api/v1/products',
    // );

    const rta = await axios.get<Product[]>(
      'https://api.escuelajs.co/api/v1/products',
    );
    // Type casting
    const data = rta.data as Product[];

    return data;
  }

  const productsV2 = await getProducts();
  console.log(productsV2.map((item) => `${item.id} ~ ${item.title}`));
})();
