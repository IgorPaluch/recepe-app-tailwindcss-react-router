import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="h-14 top-0 left-0 right-0 fixed m-auto w-4/5 z-50">
      <div className="h-14 w-full flex items-center">
        <Link
          to={"/"}
          className="text-2xl font-semibold text-neutral-700 hover:text-cyan-500 transition ease-in-out delay-75"
        >
          RecipeAPP
        </Link>
      </div>
    </div>
  );
}

export default Nav;
