import React, { useEffect, useState } from 'react'
import axios from "../lib/axios";
import requests from '../lib/request';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovie(request.data.results)
            return request
        }
        fetchData();
    }, [fetchUrl]);

  return (
    <div className="p-5">
      <h2 className="text-2xl md:text-4xl font-medium md:mb-5">{title}</h2>
      <div className="flex space-x-2 py-5 ml-5 overflow-y-hidden overflow-x-scroll scrollbar-hide">
        {movie?.map((movie) => (
          <div
            className={`${
              isLargeRow
                ? "flex-none h-auto p-2"
                : "flex-none group w-80 h-48 hover:scale-110 duration-200 transition transform ease-out cursor-pointer hover:z-20"
            }`}
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }
   `}
              alt={movie?.name}
              className={
                isLargeRow
                  ? "h-48 md:w-48 md:h-72 object-contain cursor-pointer hover:scale-110 transition transform duration-150 ease-out rounded-lg"
                  : "absolute w-full h-full object-cover rounded-2xl hover:brightness-50 z-0"
              }
            />
            <h2
              className={`${
                isLargeRow
                  ? 'hidden'
                  : 'z-50 absolute bottom-5 text-center w-full text-white text-lg font-medium  hidden hover:block cursor-pointer px-5'
              }`}
            >
              {movie?.tile || movie?.name || movie?.original_name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row
