import {
  GiBeerStein,
  GiChopsticks,
  GiTacos,
  GiBowlOfRice,
} from "react-icons/gi";
import { NavLink, useLocation } from "react-router-dom";

function Categories() {
  const activeStyle = {
    textDecoration: "underline",
  };
  return (
    <div className="flex justify-center my-5">
      <NavLink
        to={"/cuisine/Mexican"}
        className="w-28 h-28 flex flex-col justify-center items-center  bg-gradient-to-tr from-neutral-600 to-stone-800 rounded-l-full rounded-r-full mr-8 scale-75"
      >
        <GiTacos className="text-white mb-1 font-semibold text-lg" />
        <h4 className="text-white font-semibold text-lg">Mexican</h4>
      </NavLink>
      <NavLink
        to={"/cuisine/Chinese"}
        className="w-28 h-28 flex flex-col justify-center items-center  bg-gradient-to-tr from-neutral-600 to-stone-800 rounded-l-full rounded-r-full mr-8 scale-75"
      >
        <GiBowlOfRice className="text-white mb-1 font-semibold text-lg" />
        <h4 className="text-white font-semibold text-lg">Chinese</h4>
      </NavLink>
      <NavLink
        to={"/cuisine/German"}
        className="w-28 h-28 flex flex-col justify-center items-center  bg-gradient-to-tr from-neutral-600 to-stone-800 rounded-l-full rounded-r-full mr-8 scale-75"
      >
        <GiBeerStein className="text-white mb-1 font-semibold text-lg" />
        <h4 className="text-white font-semibold text-lg">German</h4>
      </NavLink>
      <NavLink
        to={"/cuisine/Japanese"}
        className="w-28 h-28 flex flex-col justify-center items-center  bg-gradient-to-tr from-neutral-600 to-stone-800 rounded-l-full rounded-r-full mr-8 scale-75"
      >
        <GiChopsticks className="text-white mb-1 font-semibold text-lg" />
        <h4 className="text-white font-semibold text-lg">Japanese</h4>
      </NavLink>
    </div>
  );
}

export default Categories;
