import React, { useState } from "react";
import Item from "./Item";

const FoodItems = ({ foodItems }) => {
  const [activeItems, setActiveItems] = useState([]);

  const onBuyButton = (item) => {
    setActiveItems((prevItems) => [...prevItems, item]);
  };

  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={() => onBuyButton(item)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
