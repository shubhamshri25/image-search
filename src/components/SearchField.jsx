import React, { useState, useContext } from "react";
import { ImageContext } from "../App";

export default function SearchField() {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleInputSearch = (e) => {
    if (e.key === "Enter") {
      fetchData(
        `search/photos?page=1&query=${searchValue}&client_id=${import.meta.env.VITE_ACCESS_KEY}`
      );
      setSearchValue("");
      setSearchImage(searchValue);
    }
  };

  const handelButtonSearch = () => {
    fetchData(
      `search/photos?page=1&query=${searchValue}&client_id=${
        import.meta.env.VITE_ACCESS_KEY
      }`
    );
    setSearchValue("");
    setSearchImage(searchValue);
  };

  return (
    <div className="flex">
      <input
        type="search"
        className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
        placeholder="Search for images..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleInputSearch}
      />
      <button
        className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
        disabled={!searchValue}
        onClick={handelButtonSearch}
      >
        Search
      </button>
    </div>
  );
}
