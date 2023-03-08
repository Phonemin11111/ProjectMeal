import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";

const Detail = () => {
  const { id } = useParams();
  const [meals, setMeals] = useState({});
  const [items, setItems] = useState({});

  useEffect(() => {
    fetchMeal();
  }, []);

  // useEffect(() => {
  //   const newItem = [{id:1, meals.strIngredient1}];
  // });

  const fetchMeal = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const { meals } = await api.json();
    setMeals(meals[0]);
  };
  return (
    <div className="flex mx-auto w-[80%] gap-10 mt-5 items-center h-screen">
      <img
        src={meals.strMealThumb}
        className="h-500 rounded object-cover"
        alt=""
      />
      <div className="w-[50%]">
        <h2 className="text-4xl font-semibold text-black tracking-wide mb-3">
          {meals.strMeal}
        </h2>
        <div className="text-black py-5">
          <h2 className="text-xl pb-2">Area - {meals.strArea}</h2>
          <h2 className="text-lg pb-2">Category - {meals.strCategory}</h2>
          <p className="text-sm leading-8 tracking-wide py-2">
            {meals.strInstructions}
          </p>
          <a href={meals.strYoutube}>
            <BsYoutube className=" text-red-900 text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Detail;
