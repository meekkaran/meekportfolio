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
        <h1 className="project-heading">My Recent <strong className="purple">Articles </strong></h1>
        <p style={{ color: "white" }}>"Keep seeking knowledge"</p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
