import React from "react";

const Meal = ({ meal }) => {
  const { strMealThumb, strMeal } = meal;
  return (
    <div>
      <div className="flex flex-col">
        <div>
          <img src={strMealThumb} className="top-0 w-72 h-72" alt="" />
        </div>
        <div className="p-2">
          <h5 className="font-bold text-2xl m-0">{strMeal}</h5>
        </div>
        <div className="bg-slate-50 border-0">
          <button className="bg-orange-500 px-4 py-2 rounded" onClick={""}>
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meal;
