import Container from 'react-bootstrap/Container';
import './Intro.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TypeWriterEffect from 'react-typewriter-effect';

function Introduction() {
  return (
    <Container className='introduction'>
    <Row>
      <Col lg={5} className='img'>
        <img className='Iso-img' src="assets/room_nobg.png" alt="Isometric Room"/>
      </Col>
      <Col lg={7} className='type'>
        <TypeWriterEffect
          startDelay={2000}
          cursorColor="#3F3D56"
          multiText={[
            "This is Kyara's Portfolio",
            'Student',
            'Software',
            'Developer',
            'Kyara de Winter | Portfolio'
          ]}
          multiTextDelay={1000}
          typeSpeed={30}
      />
      </Col>
    </Row>
  </Container>
  );
}

export default Introduction;