import './Project.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Projects() {
  return (
        <Container className='Projects'>
            <Row>
                <Col>
                <Card>
                <Card.Img className='cardImg' variant="top" src="images/wireframe.png" alt="Wireframe" />
                    <Card.Body>
                        <Card.Title>Camping de Maasvallei</Card.Title>
                        <Card.Text>
                            <p></p>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                <Card.Img className='cardImg' variant="top" src="images/github.png" alt="Github" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                <Card.Img className='cardImg' variant="top" src="images/github.png" alt="Github" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container> 
  );
}

export default Projects;