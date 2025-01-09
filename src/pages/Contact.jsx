import React from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import "./Contact.css"

const Contact = () => {
  return (
    <section className="contact-section">
      <Container>
        <h2 className="section-title text-center mb-5">Contact Us</h2>
        <Row>
          <Col md={6}>
            <h4 className="text-light">Get in Touch</h4>
            <p className="text-light">
              Have questions or need assistance? We'd love to hear from you!
            </p>
            <p className="text-light">
              Email: <strong>info@gympro.com</strong>
            </p>
            <p className="text-light">Phone: <strong>+123 456 7890</strong></p>
            <p className="text-light">
              Address: 123 Fitness Street, ABC City, 456789
            </p>
          </Col>
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
