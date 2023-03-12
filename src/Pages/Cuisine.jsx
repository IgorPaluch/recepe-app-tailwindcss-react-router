import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

function Cuisine() {
  const [value, setValue] = useState([]);

  let data = useParams();

  const retriveData = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=609b1b41025b4005888ad02a53ea7f2d&cuisine=${name}`
    );
    const data = await api.json();
    setValue(data.results);
  };

  useEffect(() => {
    retriveData(data.type);
  }, [data.type]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-fluid gap-12 mb-20">
        {value?.map((item) => {
          return (
            <Link to={`/recipe/${item.id}`}>
              <div className="min-h-full h-80 rounded-xl overflow-hidden relative">
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
          );
        })}
      </div>
    </motion.div>
  );
}

export default Cuisine;
