import React, { useEffect, useState } from "react";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Popular() {
  const [popularItem, setPopularItem] = useState([]);

  useEffect(() => {
    getPopularItems();
  }, []);

  const getPopularItems = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopularItem(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY}&number=12`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopularItem(data.recipes);
    }
  };
  return (
    <div>
      <div className="mt-16 mb-16">
        <h3 className="text-2xl font-bold mb-5">Popular Picks</h3>

        <div>
          <Splide
            options={{
              perPage: 3,
              arrows: true,
              pagination: false,
              drag: "free",
              gap: "2rem",
            }}
          >
            {popularItem?.map((item) => {
              return (
                <SplideSlide key={item.id}>
                  <Link to={`/recipe/${item.id}`}>
                    <div className="min-h-[25rem] rounded-xl overflow-hidden relative">
                      <p className="absolute z-10	 bottom-0 translate-y-1.5 text-white w-full text-center font-medium text-lg h-1/3 flex justify-center items-center">
                        {item.title}
                      </p>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="rounded-xl absolute left-0 w-full h-full object-cover"
                      />
                      <div className="z-[5] absolute w-full h-full bg-gradient-to-t from-black to-black opacity-20"></div>
                    </div>
                  </Link>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
    </div>
  );
}

export default Popular;
