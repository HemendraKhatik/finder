import React from "react";
import { useLocation } from "react-router-dom";
import SearchNews from "../components/SearchNews";

export default function SearchResults() {
  // we use useLocation hook to access data sent from previos page
  const {state} = useLocation();

  return (
    <div>
      <SearchNews />
      <div className="search-results">
        {state.results.map((item, index) => {
          return (
            <div className="search-result" key={index}>
              <div className="description">
                <div>
                  <p>{item.url}</p>
                  <a target="_blank" rel="noreferrer" href={item.url}>
                    <h1>{item.title}</h1>
                  </a>
                  <p>{item.description}</p>
                </div>
                <img
                  width={100}
                  height={100}
                  src={item.urlToImage}
                  alt="news info."
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
