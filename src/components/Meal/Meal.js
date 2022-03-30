import React from "react";

const Meal = ({ meal }) => {
  const { strMealThumb, strMeal } = meal;
  return (
    <div>
      <div className="flex flex-col justify-items-center bg-slate-50 border border-4 rounded items-center shadow-lg">
        <div>
          <img src={strMealThumb} className="top-0" alt="" />
        </div>
        <div className="p-2">
          <h5 className="text-slate-600 font-bold text-2xl m-0">{strMeal}</h5>
        </div>
        <div className="p-3">
          <button
            className="text-white text-xl bg-orange-500 px-4 py-2 rounded"
            onClick={""}
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meal;
