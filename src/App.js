import axios from "axios";
import { useState } from "react";

const API_KEY = "1e7c04c3044c44c099e077e5c66984f6";

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const find = () => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`,
    })
      .then((response) => {
        setResults(response.data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  return (
    <div className="container">
      <h1>Finder</h1>
      <div className="search-field">
        <input
          type="search"
          placeholder="Find anything"
          value={search}
          onChange={searchHandler}
        />
        <button onClick={find}>Find</button>
      </div>

      {loading ? (
      <div className="loading">
        <div className="circle"></div> Loading
      </div>
      ) : (
        <div className="search-results">
          {results.map((item, index) => {
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
                  <img width={100} height={100} src={item.urlToImage} alt="news image" />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
