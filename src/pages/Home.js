import "./Home.css";
import React from 'react'
import Search from "../components/Search";
import wavesImg from "../home-waves-image.png";
import wavesImgMobile from "../home-waves-image-mobile.png"

function Home() {
    return (
        <div className="home">
            <div className="home__header">
                    <button>About</button>
                    <button>News</button>
                    <button>Email</button>
                    <button>App</button> 
            </div>
            <div className="home__top">
                <img src="http://clipartmag.com/image/dolphin-fish-drawing-5.jpg"  />
                <h1>ceania</h1>
            </div>
            <Search 
             placeholder="Search to clean our oceans" 
            />
            <div className="home__counter">
                <h1>234 234 234</h1>
                <p>Pieces of of plastic cleaned from our oceans</p>
            </div>
            
            <div className="home__footer">
                <img className="home__footerImg"src={wavesImg}/>
                <img className="home__footerImgMb"src={wavesImgMobile}/>
            </div>
        </div>
    )
}

export default Home;
