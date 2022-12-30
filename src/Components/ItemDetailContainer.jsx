import { useEffect } from 'react';
import { useState } from 'react';
import ItemDetail from './ItemDetail';

import PacmanLoader from 'react-spinners/PacmanLoader';
import { useParams } from 'react-router-dom';
import { getItemById } from '../helpers/firebaseHelpers';
//ItemDetailContainer recibe por prop un id, que deberá ser el id de un producto determinado

const ItemDetailContainer = ({ id }) => {
  const [product, setProduct] = useState(null);

  const { productsid } = useParams();

  const getProductByID = async () => {
    try {
      const response = await getItemById(productsid, 'instrumentos');
      setProduct(response);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProductByID();
  }, [productsid]);

  return (
    <div className=" flex flex-col items-center bg-white pb-6">
      <h2 className="text-3xl font-semibold text-black mx-auto my-6">
        Detalle
      </h2>
      {product ? (
        <ItemDetail product={product} />
      ) : (
        <PacmanLoader color="#b723c1" />
      )}
    </div>
  );
};
export default ItemDetailContainer;