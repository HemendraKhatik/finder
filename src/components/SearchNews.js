import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_KEY = "1e7c04c3044c44c099e077e5c66984f6";

export default function SearchNews() {
  const [search, setSearch] = useState("");

  // used to navigate between pages
  const navigate = useNavigate();

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const find = () => {
    axios({
      method: "GET",
      url: `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`,
    })
      .then((response) => {
        navigate("/results", {
          state: {
            results: response.data.articles,

          },
        });
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };
  return (
    <div>
      <h1>World News</h1>
      <div className="search-field">
        <input
          type="search"
          placeholder="Find anything"
          value={search}
          onChange={searchHandler}
        />
        <button onClick={find}>Find</button>
      </div>
    </div>
  );
}
