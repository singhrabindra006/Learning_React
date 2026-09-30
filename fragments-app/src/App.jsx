import React, { useState } from "react";
import "./App.css";
import FoodItems from "./component/FoodItems";
import ErrorMessage from "./component/ErrorMessage";
import Container from "./component/Container";
import FoodInput from "./component/FoodInput";

const App = () => {
  const [textToShow, setTextToShow] = useState("");
  const [foodItems, setFoodItems] = useState([
    "Dal",
    "Green Vegetable",
    "Roti",
  ]);

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      const newFoodItem = event.target.value;

      setTextToShow(newFoodItem);

      const newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);

      console.log(newFoodItem);

      event.target.value = "";
    }
  };

  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>

      <ErrorMessage foodItems={foodItems} />

      <FoodInput handleOnKeyDown={handleOnKeyDown} />

      <FoodItems foodItems={foodItems} />
    </Container>
  );
};

export default App;
