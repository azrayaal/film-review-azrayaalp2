import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import '../../css/modal.css';

const style = {
  backgroundColor: '#39445a',
  border: '1px solid #282c34',
  borderRadius: 5,
  color: 'black',
  height: '80%',
  width: '90%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export default function ModalDetail({ children, media_type, id, title }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [show, setShow] = useState(false);
  const [content, setContent] = useState();
  const handleClose = () => setOpen(false);

  const fetchData = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/63247?api_key=8861682de098ff4d4464beac670c09cd&language=en-US`);
    console.log('data dari id=>', data);
    setContent(data);
    // console.log(data);
  };

  useEffect(() => {
    fetchData();
    // fetchVideo();
    // eslint-disable-next-line
  }, []);

  return (
    // <>
    //   <div className="media" style={{ cursor: 'pointer' }} color="inherit" onClick={handleOpen}>
    //     {children}
    //   </div>

    //   <Modal show={show} onHide={handleClose} animation={false}>
    //     <Modal.Header closeButton>
    //       <Modal.Title>Modal heading</Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body>
    //       <Row className="py-5">
    //         <Col xs={12} md={4} className="item-center">
    //           <div class="card bg-dark text-white" style={style}>
    //             {/* <img src={Spiderman} alt="" /> */}
    //             <div class="card-img-overlay">
    //               <div class="container-fluid shadow"></div>
    //             </div>
    //           </div>
    //         </Col>
    //         <Col xs={12} md={8}>
    //           <div className="my-4">
    //             <div className="judul">
    //               <h2 className="text-white">Lorem ipsum dolor sit amet</h2>
    //               <span className="text-white">Umur ⨀ Tanggal release ⨀ Genres ⨀ duration</span>
    //             </div>
    //             <div className="deskriptsi my-4">
    //               <h3 className="text-white">Description</h3>
    //               <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut rerum saepe provident non ab suscipit! Ex magni quis maiores architecto!</p>
    //             </div>
    //             <div className="details my-4">
    //               <h3 className="text-white">Cast:</h3>
    //               <h5 className="text-white">Jonny brad</h5>
    //             </div>
    //           </div>
    //           <div className="">
    //             <button className="judul bg-danger px-5 py-2 text-white border-white">Watch Trailer</button>
    //           </div>
    //         </Col>
    //       </Row>
    //     </Modal.Body>

    //     <Modal.Footer>a</Modal.Footer>
    //   </Modal>
    // </>
    <div>
      <div className="media" style={{ cursor: 'pointer' }} color="inherit" onClick={handleOpen}>
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <div className="row">
                <div className="ContentModal col-lg-4">
                  {/* <h1>hai</h1> */}
                  <img src={content.poster_path ? `https://image.tmdb.org/t/p/w300/${content.poster_path}` : `https://www.movienewz.com/img/films/poster-holder.jpg`} alt={content.name || content.title} className="ContentModal__portrait " />
                  {/* {/* <img
                  src={content.backdrop_path ? `https://image.tmdb.org/t/p/w500/${content.backdrop_path}` : `https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg`}
                  alt={content.name || content.title}
                  className="ContentModal__landscape"
                /> */}
                </div>
                <div className="ContentModal__about col-lg-8">
                  {' '}
                  <h1 className="ContentModal__title">
                    {content.name || content.title} ({(content.first_air_date || content.release_date || '-----').substring(0, 4)}){' '}
                  </h1>
                  <br />
                  <br />
                  {/* {content.tagline && <i className="tagline">{content.tagline}</i>} */}
                  <span className="ContentModal__description">{content.overview}</span>{' '}
                </div>
              </div>
              {/* <Row className="py-5">
                <Col xs={12} md={4} className="item-center"></Col>
                <Col xs={12} md={8}> */}
              {/* </Col>
              </Row> */}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}></Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
