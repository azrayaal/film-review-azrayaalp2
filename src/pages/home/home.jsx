import { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';

import Cards from '../../components/atoms/cards';
import Searchbox from '../../components/atoms/searchbox';
import Footer from '../../components/footer';
import Navbara from '../../components/navbar';
import Pagee from '../../components/pagination';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();

  const getMovieRequest = async () => {
    await axios
      // .get(`https://api.themoviedb.org/3/trending/all/day?api_key=8861682de098ff4d4464beac670c09cd&page=${page}`)
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=8861682de098ff4d4464beac670c09cd&page=${page}`
        // ,{
        //   params: {
        //     api_key: '8861682de098ff4d4464beac670c09cd',
        //   },
        // }
      )
      .then((response) => {
        console.log('data =>', response.data);
        setMovies(response.data.results);
        setNumOfPages(response.data.total_pages);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMovieRequest();
  }, [page]);

  return (
    <div className="bgutama">
      <Container fluid>
        <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />

        <Navbara />
        <Searchbox searchValue={searchValue} setSearchValue={setSearchValue} getMovieRequest={getMovieRequest} />

        <div className=" pb-5 container-fluid">
          <div class="hot-news pb-3">
            <div class="container-fluid">
              <div class="pt-4">
                <h6 id="#boxoffice" class="newest">
                  Box Office
                </h6>
              </div>
            </div>
          </div>
          <main class="list-film">
            <div class="container-fluid">
              <div class="row row-cols-2 row-cols-md-2 row-cols-lg-4 g-3 mx-auto">
                <Cards movies={movies} setMovies={setMovies} />
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
