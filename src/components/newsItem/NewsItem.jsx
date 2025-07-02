import newsImage from "../../assets/news.jpg"
import "./NewsItem.css"

function NewsItem({ news }) {

    const { author, description, publishedAt, title, url, urlToImage, } = news;

    return (
        <div className="col-12 col-md-4 col-lg-3">
            <div className="card h-100 bg-dark text-light p-2">
                <img src={urlToImage ? urlToImage : newsImage} className="card-img-top" height={210} alt="image..." />
                <div className="card-body">
                    <h5 className="news_title">{title}</h5>
                    <p className="news_text">{description ? description : ""}</p>
                    <a href={url} target="_blank" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;