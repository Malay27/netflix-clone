import axios from "axios";
import React from "react";
import { useEffect,useState } from "react";
import endpoints from "../services/MovieServices";
import play_icon from "../assets/images/play-icon.png";

const Hero = () =>{

    const [movie,setMovie]=useState({});

    useEffect(()=>{
        axios.get(endpoints.popular).then((response)=>{
            const movies=response.data.results;
            const randomMovie=movies[Math.floor(Math.random()*movies.length)];
            console.log(randomMovie.title);

            setMovie(randomMovie);
        })
    },[])

    const truncate = (ov,length) =>{
        if(!ov) return ov;

        return ov.length>length?ov.slice(0,length)+"..." : ov;
    }

    const {title,backdrop_path,release_date,overview}=movie;

    return (
        <div className="w-full h-[550px] lg:h-[850px]">
            <div className="w-full h-full">
                <div className="absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black"/>
                <img className="w-full h-full object-cover object-top" src={`https://image.tmdb.org/t/p//original/${backdrop_path}`} alt={title}/>

                <div className="absolute w-full top-[20%] lg:top-[35%] p-4 md:p-8">
                    <h1 className="text-3xl md:text-6xl font-nsans-bold">{title}</h1>
                    <div className="mt-8 mb-4">
                        <button className="border border-black bg-red-600 text-white py-2 px-5">
                            Play
                        </button>
                        <button className="border border-black bg-gray-300 text-black py-2 px-5 ml-3">
                            Watch Later
                        </button>
                    </div>
                    <p className="text-gray-400 text-sm">{release_date}</p>
                    <p className="w-full md:max-w-[70%] lg:mx-w-[50%] xl:mx-w-[35%] text-gray-200">{truncate(overview,165)}</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;