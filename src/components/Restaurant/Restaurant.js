import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";

const Restaurant = () => {
  const [searchText, setSearchText] = useState("");

  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMeals(data.meals);
      });
  }, [searchText]);
  const searchFood = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <h2>Find the food you want</h2>
      <input onChange={searchFood} type="text" />
      <br />
      <h3>Results Found: {meals.length}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto ">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal}></Meal>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
