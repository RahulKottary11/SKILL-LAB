import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <div className="container mt-4">
      <Carousel className="home-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxpZ2h0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <Carousel.Caption>
            <h3>Fly to your favourite destination</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="https://images.unsplash.com/photo-1604629142630-11d209431dd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZsaWdodHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Fly safe and cheap</h3>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Items for additional slides */}
      </Carousel>

      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVtYmFpfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" />
            <Card.Body>
              <Card.Title>Mumbai</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1590716209211-ea74d5f63573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN5ZG5leXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" />
            <Card.Body>
              <Card.Title>Sydney</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. At augue eget arcu dictum varius duis at consectetur lorem. Massa placerat duis ultricies lacus sed. Nunc sed blandit libero volutpat. Eros donec ac odio tempor orci. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Pretium aenean pharetra magna ac placerat. Urna nec tincidunt praesent sempe
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9uZG9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" />
            <Card.Body>
              <Card.Title>London</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at. Libero volutpat sed cras ornare arcu dui. Pellentesque massa placerat duis ultricies lacus. Consequat ac felis donec et odio pellentesque diam volutpat commodo. Morbi tristique senectus et netus et malesuada fame
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2023 Your Travel Agency. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
