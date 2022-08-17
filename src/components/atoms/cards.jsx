import React from 'react';
import { Link } from 'react-router-dom';

export default function Cards(props) {
  return (
    <>
      {props.movies.map((result, index) => (
        <div class="col" key={(index, result)}>
          <Link class="nav-link active text-white" aria-current="page" to="/filmdetails">
            <div class="card bg-dark text-white">
              <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt={result.Title} />
              <div class="card-img-overlay">
                <div class="container-fluid shadow">
                  <p class="card-title">
                    {result.title}, ({result.release_date})
                  </p>
                </div>
                <p class="card-rating">
                  <i class="bx bxs-star"></i> {result.vote_average}
                </p>
                <p class="card-format">{result.original_language}</p>
                <div class="tooltip"></div>
                <i class="bx bx-play"></i>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
