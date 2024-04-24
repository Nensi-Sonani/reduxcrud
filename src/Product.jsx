import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Action  from './Redux/Action';

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.data);
  const isLoading = useSelector(state => state.isLoading);

  useEffect(() => {
    dispatch(Action());
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {products.map(product => (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
