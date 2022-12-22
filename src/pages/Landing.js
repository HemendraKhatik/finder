import { useEffect, useState } from "react";
import SearchNews from "../components/SearchNews";
import axios from "axios";

const API_KEY = "1e7c04c3044c44c099e077e5c66984f6";

const generateId = () => Math.ceil(Math.random() * 1000000).toString();
const countries = [
  {
    id: generateId(),
    name: "India",
    code: "in",
  },
  {
    id: generateId(),
    name: "United States",
    code: "us",
  },
  {
    id: generateId(),
    name: "Ukraine",
    code: "ua",
  },
  {
    id: generateId(),
    name: "Canada",
    code: "ca",
  },
];
export default function Landing() {
  const [topNews, setTopNews] = useState([]);

  function fetchTopNews(country = "in") {
    axios({
      method: "GET",
      url: `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`,
    })
      .then((response) => {
        setTopNews(response.data.articles);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }

  // const fetchNews = (e) => {
  //   fetchTopNews(e.target.value);
  // };
  useEffect(() => {
    fetchTopNews();
  }, []);

  return (
    <div className="container">
      <SearchNews />
      <div className="topHeadlines">
        <h1>Top Headlines</h1>

        <div className="countries">
          {countries.map((country) => {
            return <span onClick={()=>fetchTopNews(country.code)} key={country.id} className="country">{country.name}</span>;
          })}
        </div>
        <select onChange={(e)=>fetchTopNews(e.target.value)}>
          {countries.map((country) => {
            return (
              <option key={country.id} value={country.code}>
                {country.name}
              </option>
            );
          })}
        </select>
      </div>

      {topNews.map((news) => {
        return (
          <div className="topNews">
            <h1>{news.title}</h1>
            <img width={100} height={100} src={news.urlToImage} />
          </div>
        );
      })}
    </div>
  );
}
