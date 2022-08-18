import React from 'react';
import ModalDetail from './modalDetails';

export default function Cards({ id, poster_path, title, first_air_date, release_date, vote_average, original_language, media_type }) {
  return (
    <>
      <ModalDetail id={id} media_type={media_type}>
        <div class="col">
          <div class="card bg-dark text-white">
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
            <div class="card-img-overlay">
              <div class="container-fluid shadow">
                <p class="card-title">
                  {title}, ({first_air_date || release_date})
                </p>
              </div>
              <p class="card-rating">
                <i class="bx bxs-star"></i> {vote_average}
              </p>
              <p class="card-format">{original_language}</p>
              <div class="tooltip"></div>
              <i class="bx bx-play"></i>
            </div>
          </div>
        </div>
      </ModalDetail>
    </>
  );
}
