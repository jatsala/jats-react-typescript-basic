import React, { useState, useEffect } from 'react';
import { getProducts } from '../controllers/ProductListController';
import Product from './Product';

interface ProductInterface {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: object;
  title: string;
}

const ProductList = (): JSX.Element => {
  const [productList, setProducList] = useState<ProductInterface[]>([]);

  useEffect(() => {
    getProducts()
      .then((r) => setProducList(r.data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <>
      {productList.length === 0 ? (
        'No hay productos'
      ) : (
        <div className='mt-4 grid grid-cols-3 md:grid-cols-5 gap-2'>
          {productList.map(
            (product: ProductInterface): JSX.Element => (
              <Product
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            )
          )}
        </div>
      )}
    </>
  );
};

export default ProductList;
