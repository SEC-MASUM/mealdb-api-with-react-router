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
    <div className="text-center">
      <h2 className="text-4xl text-slate-600 font-medium pt-8">
        Find the food you want
      </h2>
      <input
        className="w-2/5 border-4 outline-0 focus:border-orange-600 border-slate-300 my-5 py-2 px-3"
        onChange={searchFood}
        type="text"
        placeholder="Search the food you want"
      />
      <br />
      <h3>Results Found: {meals.length}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto  mt-16 mb-20">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal}></Meal>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
