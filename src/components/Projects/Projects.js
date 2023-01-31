import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import phonestore from "../../Assets/Projects/phonestore.PNG";
import djangoEcommerce from "../../Assets/Projects/djangoEcommerce.PNG";
import iams from "../../Assets/Projects/iams.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phonestore}
              isBlog={false}
              title="Phone store"
              description="A phone store website built using ReactJs and it has the ability to let users view phones in the store, purchase phones phones, add items to cart and view added items."
              ghLink="https://github.com/meekkaran/phoneApp"
              demoLink="https://react-phoneapp.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={djangoEcommerce}
              isBlog={false}
              title="Django Ecommerce"
              description="An ecommerce website built using django framework and it has the ability to let users add items to cart, proceed to checkout and shop both as registered users and guests."
              ghLink="https://github.com/meekkaran/Django_Ecommerce"
              demoLink="https://ecommerce.meekkaran.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iams}
              isBlog={false}
              title="Industrial attachment system"
              description="This is a web-based management system which is developed to solve the problem of dealing with a lot of paperwork, making errors during filling in the logbook, losing the logbook or submitting error prone reports on the logbook. It will enable students to do their attachments from wherever they want without considering distance and the supervisors will supervise students’ logbook from wherever they will be.              "
              ghLink="https://github.com/meekkaran/attachment-system"
              demoLink=""              
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
