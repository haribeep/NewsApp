import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSpinner from "./LoadingSpinner";
import LiveWeather from "./liveweather/Liveweather";
import { retrieveNewsList } from "../slice/news";
import { useDispatch, useSelector } from "react-redux";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  const { newsList } = useSelector((state) => state.news);

  console.log("newslist", newsList);

  const query = {
    apiKey: "ffdf10ca437a44f9b8f5c5f7a6dd2473",
  };

  const dispatch = useDispatch();

  useEffect(() => {
    retrieveNewsList();
  }, []);

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${props.page}&pageSize=${props.pageSize}`;
    setLoading(true);

    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };
  useEffect(() => {
    document.title = `${
      props.category.charAt(0).toUpperCase() + props.category.slice(1)
    } - NewsZilla`;
    updateNews();
  }, []);
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };
  return (
    <>
      News
      <div className="container my-3">
        <LiveWeather />

        <h1 style={{ marginTop: "90px" }} className="text-center">
          NewsViewer -Top{" "}
          {props.category.charAt(0).toUpperCase() + props.category.slice(1)}{" "}
          Headlines
        </h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={loading && <LoadingSpinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div key={element.url} className="col-md-4">
                    <NewsCard
                      author={element.author}
                      date={element.publishedAt}
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default News;
