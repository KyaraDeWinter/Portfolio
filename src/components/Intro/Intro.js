import Container from 'react-bootstrap/Container';
import './Intro.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typewriter from 'typewriter-effect';

function Introduction() {
  return (
    <Container>
    <Row>
      <Col sm={5}>
        <img className='Iso-img' src="assets/iso-room.png" alt="Isometric Room"/>
      </Col>
      <Col sm={7} className='type'>
        <Typewriter
         onInit={(typewriter) => {
            typewriter
            .typeString("Hi! This is Kyara's Portfolio")
            .pauseFor(2000)
            .deleteAll()
            .typeString("Student. Software. Developer. ")
            .pauseFor(2000)
            .start();
         }}
        />
      </Col>
    </Row>
  </Container>
  );
}

export default Introduction;