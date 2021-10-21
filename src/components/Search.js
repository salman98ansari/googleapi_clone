import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import Links from "./Links";

import { useResultContext } from "../contexts/StateContextProvider";

const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm } = useResultContext();
  const { debouncedValue } = useDebounce(text, 300);

  const search = () => {
    setSearchTerm(text);
  };

  // useEffect(() => {
  //   setSearchTerm(text);
  // }, [debouncedValue]);
  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        value={text}
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="🔎 Search Google or type URL"
        onChange={(e) => setText(e.target.value)}
      />
      {/* {text !== "" && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-2xl text-gray-500 "
          onClick={() => setText("")}
        >
          x
        </button>
      )} */}
      <button
        onClick={() => {
          search();
        }}
        type="button"
        className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg"
      >
        Search
      </button>
      <Links />
    </div>
  );
};

export default Search;
