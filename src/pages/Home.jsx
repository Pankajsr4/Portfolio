import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../assets/about.png'
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';


const imageStyle = {
  // padding: '20px',
  width: '480px',
  height: 'auto',
  borderRadius: '31px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
};


const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Pankaj Kumar</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            

            <Col md={5} style={{ paddingBottom: 20 }}>
            
            
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={ imageStyle}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home