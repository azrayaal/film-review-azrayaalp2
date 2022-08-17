import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './atoms/cards';
import CardsSeries from './atoms/cardsseries';

export default function Series() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    axios
      // .get(`${process.env.REACT_APP_MOVIE_URL}/discover/movie`, {
      .get('https://api.themoviedb.org/3/discover/tv', {
        params: {
          // api_key: process.env.REACT_APP_MOVIE_API_KEY,
          api_key: '8861682de098ff4d4464beac670c09cd',
        },
      })
      .then((response) => {
        console.log('data =>', response.data.results);
        setSeries(response.data.results);
      });
  }, []);

  return (
    <div className="bgutama">
      <div class="hot-news pt-5 pb-3 ">
        <div class="container-fluid">
          <div class="pt-4">
            <h6 class="newest bg-danger">Series</h6>
          </div>
        </div>
      </div>

      <main class="list-film ">
        <div class="container-fluid">
          <div class="row row-cols-2 row-cols-md-2 row-cols-lg-4 g-3 mx-auto">
            <CardsSeries movies={series} />
          </div>
        </div>
      </main>
    </div>
  );
}
