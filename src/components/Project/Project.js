import './Project.css'
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Projects() {
  return (
        <Container className='Projects'>
            <Row className='row'>
                <Col>
                <Card>
                <Card.Img className='cardImg' variant="top" src="images/wireframe.png" alt="Wireframe Maasvallei" />
                    <Card.Body>
                        <Card.Title>Project: Camping de Maasvallei</Card.Title>
                        <Card.Text>
                            <p>Tijdens het vak 'praktijkwijzer' kreeg ik de mogelijkheid om een wireframe en een design te maken voor de website van de fictieve camping de Maasvallei.</p>
                        </Card.Text>
                        {/* <Button variant="primary">Lees meer..</Button> */}
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                <Card.Img className='cardImg' variant="top" src="images/bardstale.gif" alt="A Bard's Tale GIF" />
                    <Card.Body>
                        <Card.Title>Project: A Bard's Tale</Card.Title>
                        <Card.Text>
                            <p></p>
                        </Card.Text>
                        {/* <Button variant="primary">Lees meer..</Button> */}
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                <Card.Img className='cardImg' variant="top" src="images/avisi.png" alt="Wireframe Avisi" />
                    <Card.Body>
                        <Card.Title>Project: Avisi</Card.Title>
                        <Card.Text>
                            <p>Aan het eind van het tweede leerjaar heb ik meegewerkt aan een project vanuit het bedrijf Avisi. Hierin heb ik de rol aangenomen als designer en wanneer dit is voltooid, kan ik aan de slag met de front-end van de applicatie.</p>
                        </Card.Text>
                        {/* <Button variant="primary">Lees meer..</Button> */}
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                <Card>
                <Card.Img className='cardImg' variant="top" src="images/" alt="" />
                    <Card.Body>
                        <Card.Title>Title</Card.Title>
                        <Card.Text>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Card.Text>
                        {/* <Button variant="primary">Lees meer..</Button> */}
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                <Card.Img className='cardImg' variant="top" src="images/" alt="Stage" />
                    <Card.Body>
                        <Card.Title>Ervaring: Stage bij Bureau Vet </Card.Title>
                        <Card.Text>
                            <p>Voor een half jaar heb ik mee mogen lopen bij het in Nijmegen gevestigde bedrijf Bureau Vet. Hier heb ik gewerkt met bijvoorbeeld de programma’s van Adobe zoals Illustrator en Indesign.</p>
                        </Card.Text>
                        {/* <Button variant="primary">Lees meer..</Button> */}
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                <Card.Img className='cardImg' variant="top" src="images/github.png" alt="Github" />
                    <Card.Body>
                        <Card.Title>Github Repositories</Card.Title>
                        <Card.Text>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Card.Text>
                        {/* <Button variant="primary">Lees meer..</Button> */}
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container> 
  );
}

export default Projects;