import axios from "axios";
import React from "react";
import { useEffect,useState } from "react";
import endpoints from "../services/MovieServices";

const Hero = () =>{

    const [movie,setMovie]=useState({});

    useEffect(()=>{
        axios.get(endpoints.popular).then((response)=>{
            const movies=response.data.results;
            const randomMovie=movies[Math.floor(Math.random()*movies.length)];
            console.log(randomMovie.title);
        })
    },[])
    return (
        <div>
            hero
        </div>
    );
}

export default Hero;