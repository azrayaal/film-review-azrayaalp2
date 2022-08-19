import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cards from '../../components/atoms/cards';
import Searchbox from '../../components/atoms/searchbox';
import Footer from '../../components/footer';
import Navbara from '../../components/navbar';
import Container from 'react-bootstrap/Container';
import Pagee from '../../components/pagination';

export default function Trending() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();

  const fetchTrending = async () => {
    await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=8861682de098ff4d4464beac670c09cd&page=${page}`).then((response) => {
      console.log('data =>', response.data.results);
      setMovies(response.data.results);
      setNumOfPages(response.data.total_pages);
    });
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <div className="bgutama">
      <Container fluid>
        {/* <Searchbox /> */}
        <Navbara />
        <h1 className="text-center text-white py-3">azrayaal movie review</h1>
        <div className="bgutama pb-5">
          <div class="hot-news pb-3">
            <div class="container-fluid">
              <div class="pt-4">
                <h6 id="#boxoffice" class="newest">
                  Trending
                </h6>
              </div>
            </div>
          </div>
          {/* <!-- end of information --> */}
          <main class="list-film">
            <div class="container-fluid">
              <div class="row row-cols-2 row-cols-md-2 row-cols-lg-4 g-3 mx-auto">
                {movies &&
                  movies.map((m) => (
                    <Cards
                      movies={movies}
                      setMovies={setMovies}
                      key={m.id}
                      id={m.id}
                      poster_path={m.poster_path}
                      title={m.title || m.name}
                      release_date={m.first_air_date || m.release_date}
                      vote_average={m.vote_average}
                      original_language={m.original_language}
                      media_type="movie"
                    />
                  ))}
              </div>
            </div>
          </main>
        </div>
        <Pagee setPage={setPage} numOfPages={numOfPages} page={page} />
      </Container>
      <Footer />
    </div>
  );
}
