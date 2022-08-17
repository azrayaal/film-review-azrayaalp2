import React from 'react';
import Footer from '../../components/footer';
import Navbara from '../../components/navbar';
import axios from 'axios';
import CardsSeries from '../../components/atoms/cardsseries';
import { useState } from 'react';
import { useEffect } from 'react';
import Searchbox from '../../components/atoms/searchbox';
import Container from 'react-bootstrap/Container';
import Pagee from '../../components/pagination';

export default function Series() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();

  const fetchSeries = async () => {
    await axios.get(`https://api.themoviedb.org/3/discover/tv/?api_key=8861682de098ff4d4464beac670c09cd&page=${page}`).then((response) => {
      console.log('data =>', response.data.results);
      setMovies(response.data.results);
      setNumOfPages(response.data.total_pages);
    });
  };

  useEffect(() => {
    fetchSeries();
  }, [page]);

  return (
    <>
      <div className="bgutama">
        <Container fluid>
          <Navbara />

          <Searchbox />
          <div className="bgutama pb-5">
            <div class="hot-news pb-3">
              <div class="container-fluid">
                <div class="pt-4">
                  <h6 id="#boxoffice" class="newest">
                    Series
                  </h6>
                </div>
              </div>
            </div>
            {/* <!-- end of information --> */}
            <main class="list-film">
              <div class="container-fluid">
                <div class="row row-cols-2 row-cols-md-2 row-cols-lg-4 g-3 mx-auto">
                  <CardsSeries movies={movies} setMovies={setMovies} />
                </div>
              </div>
            </main>
          </div>
          <Pagee setPage={setPage} numOfPages={numOfPages} page={page} />
        </Container>
        <Footer />
      </div>
    </>
  );
}
