import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import "./Services.css"

const Services = () => {
  return (
    <section className="services-section">
      <Container>
        <h2 className="section-title text-center mb-5">Our Services</h2>

        <Row>


          <Col md={4} className="mb-4">
            <Card className="service-card shadow">
              <Card.Body>
                <Card.Title>Personal Training</Card.Title>
                <Card.Text>
                  Achieve your fitness goals with one-on-one coaching from our
                  expert trainers.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="service-card shadow">
              <Card.Body>
                <Card.Title>Group Classes</Card.Title>
                <Card.Text>
                  Join exciting classes like yoga, Zumba, and functional
                  training to stay motivated.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="service-card shadow">
              <Card.Body>
                <Card.Title>Nutrition Coaching</Card.Title>
                <Card.Text>
                  Get personalized diet plans to complement your fitness journey
                  and goals.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>


        </Row>
      </Container>
    </section>
  )
}

export default Services
