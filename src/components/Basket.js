import React from 'react';

const Basket = ({ basket, setBasket }) => {
  const handleRemove = (index) => {
    const updatedBasket = [...basket];
    updatedBasket.splice(index, 1);
    setBasket(updatedBasket);
  };

  const calculateTotalCost = () => {
    let total = 0;
    basket.forEach((item) => {
      total += item.cost;
    });
    return total;
  };

  return (
    <>
      <h1>Basket</h1>
      <p>View Your Basket</p>
      <ul>
        {basket.map((item, index) => (
          <li key={index}>
            {item.name}: £{item.cost}
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Cost: £{calculateTotalCost()}</p>
    </>
  );
};

export default Basket;




