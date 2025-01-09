import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import "./About.css"
import { useNavigate } from 'react-router-dom'
import aboutPic from '../assets/about.jpeg'


const About = () => {

  const navigate = useNavigate();

  const handleJoin = () => {
    navigate("/contact"); // Navigate to Contact page
  }


  return (
    <section className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4">
            <Image
              src={aboutPic}
              alt="About Us"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-center">
              <h2 className="section-title">About Us</h2>
            </div>
            
            <p className="text-light">
              Welcome to <strong>GymPro</strong>, your ultimate fitness
              destination. Since our inception, we've been dedicated to
              empowering individuals to achieve their fitness goals in a
              supportive and inclusive environment.
            </p>
            <p className="text-light">
              We provide cutting-edge equipment, certified trainers, and
              tailored fitness programs that cater to all levels. At GymPro, we
              don't just help you exercise; we help you transform.
            </p>
            <div className="d-flex justify-content-center">
              <button onClick={handleJoin} className="btn btn-primary btn-lg">Join Now</button>
            </div>
            
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
