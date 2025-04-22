import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body"><b className="yellow">Pankaj Kumar</b>
                <br/>   
                <br/>
                Cybersecurity Enthusiast | Computer Science Undergraduate | Ethical Hacking | Network Security | AI in Cybersecurity
                  <br />
                  <br />
                  I’m Pankaj Kumar from Gurugram, Haryana, currently pursuing a Bachelor's degree in Computer Science and Engineering from Lovely Professional University.
                <br />
                <br />
                  As a
                  <b className="yellow"> Cyber Security </b>expert,  
                  I thrive on solving complex challenges and continuously expanding my technical skillset. I have hands-on experience with tools like

                    <b className="yellow"> Wireshark, </b>
                    and <b className="yellow">Metasploit </b>
                    along with a solid foundation in <b className="yellow"> network security, cryptography, and ethical hacking. </b>

                  <br />
                  <br />
                  My technical proficiency includes programming languages such as <b className="yellow"> C++, Java, Python, and Solidity</b>, as well as experience with <b className="yellow">Kali Linux </b>tools. I'm particularly passionate about building secure web technologies and exploring how <b className="yellow"> Artificial Intelligence </b>can enhance cybersecurity solutions.

                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/Pankajsr4"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://twitter.com/ChPankaj07"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/pankaj-kumar-sr4/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://leetcode.com/kumarpankaj9982/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <SiLeetcode />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About