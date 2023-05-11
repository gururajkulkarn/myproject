import React from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";

const NewsA = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const handlenews = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2023-03-21&sortBy=publishedAt&apiKey=9cc9b3af0c7b431e9b5b1e8d316b5cbc"
      )
      .then((response) => {
        console.log(response.data.articles);
        setData(response.data.articles);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div
        className="container"
        style={{ color: "red", textAlign: "center", margin: "30px" }}
      >
        <h1>News Articales</h1>
        <button className="btn btn-warning" onClick={handlenews}>
          Latest News
        </button>
      </div>
      {loading ? (
        <div>
          {data.slice(0, 5).map((item) => (
            <div
              className="container m-5"
              style={{
                backgroundColor: "lightblue",
                border: "2px solid black",
              }}
            >
              <h1>{item.author}</h1>
              <h6>{item.description}</h6>
              <div className="container">
                <img
                  src={item.urlToImage}
                  style={{ width: "50%" }}
                  alt="picture"
                />
              </div>
              <button className="btn btn-warning m-3">
                <a
                  href={item.url}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Link
                </a>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="container"
          style={{ color: "red", textAlign: "center", margin: "30px" }}
        >
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default NewsA;
