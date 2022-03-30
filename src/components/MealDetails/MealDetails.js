import React from "react";

const MealDetails = ({ id }) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  return (
    <div>
      <img
        src={meal.strMealThumb}
        class="card-img-top w-50 rounded-circle mx-auto mt-3"
        alt=""
      />
      <div class="card-body">
        <h5 class="card-title text-center">{meal.strMeal}</h5>
        <p class="card-text">{meal.strInstructions.slice(0, 500)}</p>
        <div class="text-end">
          <a class="btn btn-primary" onclick={() => closeMealDetails()}>
            Close
          </a>
          <a href={meal.strYoutube} class="btn btn-primary ">
            Watch Video
          </a>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
