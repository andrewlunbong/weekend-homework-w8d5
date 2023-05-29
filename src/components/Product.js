import React from 'react';

const Product = ({ product, basket, setBasket }) => {
  const listOfProduct = product.map((product, index) => {
    return (
      <li key={index}>
        {product.name}: £{product.cost}
        <button onClick={() => handleSubmit(product)}>Add to Basket</button>
      </li>
    );
  });

  const handleSubmit = (selectedProduct) => {
    const newBasket = [...basket];
    const basketItem = {
      name: selectedProduct.name,
      cost: selectedProduct.cost,
    };
    newBasket.push(basketItem);
    setBasket(newBasket);
  };

  return (
    <>
      <h4>Product</h4>
      <ul>{listOfProduct}</ul>
    </>
  );
};

export default Product;




