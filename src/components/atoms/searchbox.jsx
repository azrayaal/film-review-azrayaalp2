import React from 'react';
// import getMovieRequest from '../home';

export default function Searchbox(props) {
  return (
    <form class="d-flex pt-4 container-fluid" onSubmit={props.fetchSearch}>
      <input value={props.value} onChange={(event) => props.setSearchValue(event.target.value)} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-dark" onClick={(e) => props.fetchSearch(e)}>
        Search
      </button>
    </form>
  );
}
