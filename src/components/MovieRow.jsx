import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const MovieRow = ({ title, url }) => {

  const rowId=Math.floor(Math.random()*1000);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setMovies(response.data.results);
      console.log(response.data.results);
    });
  }, [url]);

  const slide=(offset)=>{
    const slider=document.getElementById("slider"+rowId);
    slider.scrollLeft+=offset;
  }

  return (
    <>
      <h2 className="font-nsans-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <FaCircleChevronLeft
        onClick={()=>slide(-500)}
          className="absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
          size={40}
        />
        <div
          id={`slider`+rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
        <FaCircleChevronRight
        onClick={()=>slide(500)}
          className="absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
          size={40}
        />
      </div>
    </>
  );
};

export default MovieRow;
