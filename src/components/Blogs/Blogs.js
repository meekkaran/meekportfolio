import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Blogcard from "./BlogCard";
import laptopImg from "../../Assets/about.png";

function Blogs() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={10} style={{justifyContent: "center",paddingTop: "10px",paddingBottom: "50px",}}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "10px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Blogcard />
          </Col>
          {/* <Col md={3} style={{ paddingTop: "120px", paddingBottom: "50px" }} className="about-img">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
