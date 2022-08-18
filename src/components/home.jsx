import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import '../../src/css/App.css';
import Cards from './atoms/cards';
import Searchbox from './atoms/searchbox';
// import Series from './series';
import Filmdetails from './filmdetails';
import Footer from './footer';
import Navbara from './navbar';

export default function Home(props) {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue);

  const getMovieRequest = async (setSearchValue) => {
    await axios
      .get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: '8861682de098ff4d4464beac670c09cd',
          query: searchValue,
        },
      })

      .then((response) => {
        console.log('data =>', response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMovieRequest();
  }, [searchValue]);

  //

  return (
    <div>
      <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />

      <Navbara />

      <div className="bgutama pb-5">
        <div class="hot-news pt-5 pb-3">
          <div class="container-fluid">
            <div class="pt-4">
              <h6 id="#boxoffice" class="newest">
                Box Office
              </h6>

              
              <Searchbox searchValue={searchValue} setSearchValue={setSearchValue} getMovieRequest={getMovieRequest} />
            </div>
          </div>
        </div>
        {/* <!-- end of information --> */}
        <main class="list-film">
          <div class="container-fluid">
            <div class="row row-cols-2 row-cols-md-2 row-cols-lg-4 g-3 mx-auto">
             {movies && movies.map((m) => <Cards 
                movies={movies} 
                setMovies={setMovies} 
                key={m.id} 
                poster_path={m.poster_path} 
                title={m.title || m.name} 
                release_date={m.first_air_date || m.release_date} 
                vote_average={m.vote_average} 
                original_language={m.original_language} 
                />)}

              {/* <Cards movies={movies} searchValue={searchValue} /> */}
            </div>
          </div>
        </main>
      </div>

      {/* <Series /> */}
      <Footer />
    </div>
  );
}
