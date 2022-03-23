import React, { useState, useContext, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { ApiContext } from "./context/ApiContext";

export default function Search() {
  const [search, setSearch] = useState("");
  const inputRef = useRef();
  const { getData } = useContext(ApiContext);

  return (
    <div className="flex-center flex-col">
      <input
        ref={inputRef}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
        type='text'
        placeholder="Enter any emoji"
      />
      <button
        className="search-btn flex-row flex-center"
        onClick={() => {
          getData(`http://localhost:8080/api/${search}`);
          inputRef.current.value = "";
          }}
      >
 <FiSearch />
      </button>
    </div>
  );
}
