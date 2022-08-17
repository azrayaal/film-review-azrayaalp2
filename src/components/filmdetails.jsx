import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbara from './navbar';
import Spiderman from '../img/spidermanexample.jpg';
import Footer from './footer';

function Filmdetails() {
  const style = {
    position: 'relative',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <>
      <Navbara />
      <div className="bgutama pb-3">
        {/* <Carousel slide={false} className="">
          <Carousel.Item>
            <img className="d-block w-100 crs1" src={zerotwo} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}

        <Container>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row className="py-5">
            <Col xs={12} md={4} className="item-center">
              <div class="card bg-dark text-white" style={style}>
                <img src={Spiderman} alt="" />
                <div class="card-img-overlay">
                  <div class="container-fluid shadow"></div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={8}>
              <div className="my-4">
                <div className="judul">
                  <h2 className="text-white">Lorem ipsum dolor sit amet</h2>
                  <span className="text-white">Umur ⨀ Tanggal release ⨀ Genres ⨀ duration</span>
                </div>
                <div className="deskriptsi my-4">
                  <h3 className="text-white">Description</h3>
                  <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut rerum saepe provident non ab suscipit! Ex magni quis maiores architecto!</p>
                </div>
                <div className="details my-4">
                  <h3 className="text-white">Cast:</h3>
                  <h5 className="text-white">Jonny brad</h5>
                </div>
              </div>
              <div className="">
                <button className="judul bg-danger px-5 py-2 text-white border-white">Watch Trailer</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Filmdetails;
