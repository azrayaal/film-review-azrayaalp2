import React from 'react';
import { useState } from 'react';
import Searchbox from './atoms/searchbox';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default function Navbara(props) {
  const scroll = () => {
    const nav = document.querySelector('Navbar');

    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 100) {
        nav.classList.add('bg-dark', 'shadow');
      } else {
        nav.classList.remove('bg-dark', 'shadow');
      }
    });
  };

  return (
    <>
      <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />

      <Navbar bg="navbar navbar-expand-lg navbar-light " fixed="bottom" expand="lg">
        <Container fluid>
          <Navbar.Brand className="text-white"></Navbar.Brand>
          <Nav className="mx-auto my-2 my-lg-0 pt-1" style={{ maxHeight: '100px', display: 'inline' }} navbarScroll>
            <Row>
              <Col>
                <Link to="/" style={{ display: 'inline', textDecoration: 'none' }}>
                  <i class="bx bxs-tv" style={{ color: '#ffae00', textAlign: 'center' }}>
                    <p className="text-white text-center" style={{ cursor: 'pointer' }}>
                      Home
                    </p>
                  </i>
                </Link>
              </Col>
              <Col>
                <Link to="/trending" style={{ display: 'inline', textDecoration: 'none' }} className="px-3">
                  <i class="bx bxs-hot" style={{ color: '#ffae00', textAlign: 'center' }}>
                    <p className="text-white text-center" style={{ cursor: 'pointer' }}>
                      Trending
                    </p>
                  </i>
                </Link>
              </Col>
              <Col>
                <Link to="/series" style={{ display: 'inline', textDecoration: 'none' }}>
                  <i class="bx bx-tv" style={{ color: '#ffae00', textAlign: 'center' }}>
                    <p className="text-white text-center" style={{ cursor: 'pointer' }}>
                      Series
                    </p>
                  </i>
                  <br />
                </Link>
              </Col>
            </Row>
          </Nav>
        </Container>
      </Navbar>

      {/* <script src={scroll}></script>
      <Searchbox searchValue={searchValue} setSearchValue={setSearchValue} getMovieRequest={props.getMovieRequest} /> */}
    </>
  );
}
