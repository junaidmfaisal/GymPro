import React from 'react'
import { Container, Button } from 'react-bootstrap'
import './Home.css'
import { useNavigate } from 'react-router-dom'



const Home = () => {

  const navigate = useNavigate();

  const handleJoin = () => {
    navigate("/contact"); // Navigate to Contact page
  }

  const handleLearn = () => {
    navigate("/about"); // Navigate to About page
  }

  return (
    <div className="hero">
      <Container className="text-center text-dark">
        <h1>Welcome to GymPro</h1>
        <p className="lead">Achieve your fitness goals with us.</p>
        <Button onClick={handleJoin} variant="primary" size="lg" className="me-2">Join Now</Button>
        <Button onClick={handleLearn} variant="outline-light" size="lg">Learn More</Button>
      </Container>
    </div>
  )
}

export default Home