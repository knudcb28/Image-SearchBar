import React from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({onSubmit, setSearchValue}) => {
  const [searchBarText, setSearchBarText] = useState("");

  const handleOnChange = (e) => {
    setSearchBarText(e.target.value);
    setSearchValue(e.target.value)
  };

  return (
    <div>
      <form
        onSubmit={onSubmit}
      >
        <div className="flex justify-center mt-10">
          <div className="relative">
            <input
              className="w-[20rem] md:w-[40rem] rounded-xl border border-slate-600 h-[3rem] hover:shadow-xl pl-12 pb-1 text-xl"
              onChange={handleOnChange}
              value={searchBarText}
              name="imageSearchBar"
              type="text"
            />
            <AiOutlineSearch size={25} className="absolute left-3 bottom-3" />
          </div>
        </div>

        <div className="flex justify-center mt-2">
          <button
            type="submit"
            className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-[2px] font-medium border-slate-600 text-slate-600 w-[5rem]"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-slate-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-slate-600 transition duration-300 group-hover:text-white ease">
              Search
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
