import { useState, useEffect, useContext } from "react";
import axios from "axios";

import NewsItem from "../newsItem/NewsItem";
import myContext from "../context-api/myContext";

function NewsBoard() {

    const [articles, setArticles] = useState([]);
    let {category} = useContext(myContext);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        axios.get(url)
            .then((response) => {
                setArticles(response.data.articles);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [category]);

    // useEffect(async ()=> {
    //     // let url1 = `https://newsapi.org/v2/everything?q=tesla&apiKey=${import.meta.env.VITE_API_KEY}`;
    //     let url1 = `https://newsapi.org/v2/everything?q=india&apiKey=${import.meta.env.VITE_API_KEY}`;
    //     const data = await axios.get(url1);
    //     console.log(data)
    // }, [])

    return (
        <div className="container-fluid py-5">
            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
            <div className="row row-gap-5">
                {
                    articles.map((news, index) => {
                        return <NewsItem key={index} news={news} />
                    })
                }
            </div>
        </div>
    )
}

export default NewsBoard;