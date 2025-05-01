import React, { useEffect, useState } from "react";
import axios from "axios";
import {Helmet} from "react-helmet";
const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: "us",
          category: "technology",
          apiKey: "859f325643af4fc5b6e3a68b7398e8ce",
        },
      })
      .then((response) => setArticles(response.data.articles))
      .catch((error) => console.log(error));
  }, []);

  return (
    
    <div>
      <Helmet>
            <title>News</title>
            <meta name ="author" content="Aesha" /> 
            </Helmet>
      <h2>Latest News</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
