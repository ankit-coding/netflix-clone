import React, { useState, useEffect } from 'react'
import axios from 'axios';
import requests from './requests';
import "./Banner.css";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchTopRated);
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)]);
            return request;
        }
        fetchData();
    }, [])
    
    console.log(movie);

    return (
        <header className="banner" style={{backgroundSize: "cover", backgroundImage: `url("https://image.tmdb.org/t/p/original//wzJRB4MKi3yK138bJyuL9nx47y6.jpg")`, backgroundPosition: "center center"}}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    Tenet
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                <h3 className="banner__description">
                Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.
                </h3>

            </div>
            <div className="banner__fadeBottom"></div>
        </header>
    )
}

export default Banner
