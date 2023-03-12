import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Recipe() {
  const [value, setValue] = useState({});

  const param = useLocation().pathname.slice(7);

  const getDetailsAboutRecipe = async (param) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${param}/information?apiKey=609b1b41025b4005888ad02a53ea7f2d`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }
    );
    const data = await response.json();
    setValue(data);
  };

  useEffect(() => {
    getDetailsAboutRecipe(param);
  }, [param]);

  return (
    <div className="w-full flex flex-row mt-24">
      <div className="w-1/2 flex flex-col items-center">
        <p className="mb-6 w-1/2">
          <span className="text-lg font-bold pr-2">Name of the dish:</span>{" "}
          {value.title}
        </p>
        <p className="mb-6 w-1/2">
          <span className="text-lg font-bold pr-2">Dish Type:</span>
          {value.dishTypes}
        </p>
        <p className="mb-6 w-1/2">
          <span className="text-lg font-bold pr-2">Diets:</span>
          {value.diets}
        </p>
        <div className="w-1/2">
          <p className="text-lg font-bold mb-2 bg-zinc-500">
            Ingridients needed:
          </p>
          <ul className="list-none">
            {value.extendedIngredients?.map((item) => {
              return (
                <li key={item.id} className="pb-1 text-lg">
                  {item.originalName}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <img
          src={value.image}
          alt={value.title}
          className="rounded-lg h-2/3 w-2/3"
        />
      </div>
    </div>
  );
}

export default Recipe;
