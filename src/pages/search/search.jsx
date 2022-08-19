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
    const { data } = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=8861682de098ff4d4464beac670c09cd&query=${searchValue}`);
    setMovies(data.results);
    // setNumOfPages(data.data.total_pages);
  };

  useEffect(() => {
    fetchSearch();
    // setMovies();
  }, [searchValue]);

  return (
    <div className="bgutama">
      <Navbara />
      <h1 className="text-center text-white py-3">azrayaal movie review</h1>

      <main class="list-film py-3">
        <div class="container-fluid">
          <Searchbox setSearchValue={setSearchValue} searchValue={searchValue} />
          <div class="row row-cols-2 row-cols-md-2 row-cols-lg-4 g-3 mx-auto pt-5">
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
      {/* <Pagee setPage={setPage} numOfPages={numOfPages} page={page} /> */}
      <Footer />
    </div>
  );
}
