import '../src/css/App.css';

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/home';
import Home from './pages/home/home';
import Search from './pages/search/search';
import Trending from './pages/trending/trending';
import Series from './pages/series/series';
import Filmdetails from './components/filmdetails';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filmdetails" element={<Filmdetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
