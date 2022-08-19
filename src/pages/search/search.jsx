import Footer from '../../components/footer';
import Navbara from '../../components/navbar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Pagee from '../../components/pagination';
import Searchbox from '../../components/atoms/searchbox';
import Cards from '../../components/atoms/cards';

export default function Search() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  console.log(searchValue);

  const fetchSearch = async () => {
    await axios
      .get(`https://api.themoviedb.org/3/search/multi?api_key=8861682de098ff4d4464beac670c09cd&query=${searchValue}&page=${page}`)

      .then((response) => {
        // console.log('data dari search =>', response.data.results);
        setSearchValue(response.data.results);
        setNumOfPages(response.data.total_pages);
      });
  };

  useEffect(() => {
    fetchSearch(searchValue);
  }, [searchValue, page]);

  return (
    <>
      <Navbara />
      {/* <Searchbox setSearchValue={setSearchValue} /> */}
      <input onChange={(e) => setSearchValue(e.target.value)} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

      <div class="container-fluid">
        <h1>azra</h1>
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
      <Pagee setPage={setPage} numOfPages={numOfPages} page={page} />
      <Footer />
    </>
  );
}
