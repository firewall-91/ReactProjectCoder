import React, { useState, useEffect, useContext } from 'react';
import ItemList from './ItemList';

import { useParams } from 'react-router-dom';
import { getItems, getItemsByCondition } from '../helpers/firebaseHelpers';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { categoryid } = useParams();

  const getProductsFromFB = async () => {
    if (!categoryid) {
      const data = await getItems('instrumentos');
      console.log(data);
      setProducts(data);
    } else {
      const data = await getItemsByCondition(
        'category',
        '==',
        categoryid,
        'instrumentos'
      );
      setProducts(data);
    }
  };

  useEffect(() => {
    getProductsFromFB();
  }, [categoryid]);

  return (
    <section className=" flex flex-col items-center p-12 h-min-main">
      <div className="bg-neutral-200 shadow-2xl rounded-lg">
        <ItemList products={products} />
      </div>
    </section>
  );
};
export default ItemListContainer;
