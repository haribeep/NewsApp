import React,{useState,useEffect} from 'react'


const News = (props) => {
    const [articles,setArticles]=useState([])
    const [loading,setLoading]=useState(false)
    const [totalResults,setTotalResults]=useState(0)

    const  updateNews=async()=> {
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
        props.setProgress(100)
      }
      useEffect(()=>{
        document.title=`${(props.category).charAt(0).toUpperCase()+(props.category).slice(1)} - NewsZilla`;
        updateNews();
      },[])
  return (
    <>News</>
  )
}

export default News