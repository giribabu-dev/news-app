import { useContext } from "react"

import "./Navbar.css";
import myContext from "../context-api/myContext";
import livenews from "../../assets/livenewslogo.png";

function Navbar() {

    let { setCategory } = useContext(myContext);

    return (
        <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: 'skyblue' }}>
            <div className="container">
                <div className="navbar-brand news_logo">
                    <img src={livenews} alt="logo" className="w-100 h-100" />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav mx-auto" style={{ cursor: 'pointer' }}>
                        <div className="nav-item">
                            <div className="nav-link" onClick={() => setCategory('business')}>Business</div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link" onClick={() => setCategory('entertainment')}>Entertainment</div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link" onClick={() => setCategory('general')}>General</div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link" onClick={() => setCategory('health')}>Health</div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link" onClick={() => setCategory('science')}>Science</div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link" onClick={() => setCategory('sports')}>Sports</div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link" onClick={() => setCategory('technology')}>Technology</div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar