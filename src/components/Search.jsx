import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    navigate("/searched/" + value);
    setValue("");
  };
  return (
    <form className="mt-24 mb-24 relative" onSubmit={handleForm}>
      <div className="relative w-full">
        <FaSearch className="absolute top-1/3 translate-x-5 translate-y-1 text-white" />
        <input
          type="text"
          className="w-full outline-none text-white text-2xl py-4 px-12 bg-gradient-to-r from-neutral-600 to-stone-800 border-0 rounded-2xl"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
}

export default Search;
