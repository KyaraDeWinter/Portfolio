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
                <Card.Img className='cardImg' variant="top" src="assets/wireframe.png" alt="Wireframe Maasvallei" />
                    <Card.Body>
                        <Card.Title>Project: Camping de Maasvallei</Card.Title>
                        <Card.Text>
                            <p>Tijdens het vak 'praktijkwijzer' kreeg ik de mogelijkheid om een wireframe en een design te maken voor de website van de fictieve camping de Maasvallei. Samenwerkend met Fabian, Luuk en Tycho maken we een sterk team waar de taken zijn verdeeld naar onze kwaliteiten.</p>
                        </Card.Text>
                        <Row className='tags'>
                            <p className='tag tag-design'>design</p>
                            <p className='tag tag-wireframe'>wireframe</p>
                        </Row>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                <Card.Img className='cardImg' variant="top" src="assets/bardstale.gif" alt="A Bard's Tale GIF" />
                    <Card.Body>
                        <Card.Title>Project: A Bard's Tale</Card.Title>
                        <Card.Text>
                            <p>Met JavaScript heb ik een eenvoudig klik-spel gemaakt waar je kan kiezen tussen verschillende scenarios. Er wordt gebruik gemaakt van textNodes waardoor er gemakkelijk van verhaallijn verwisselt kan worden vanwege de id’s.</p>
                        </Card.Text>
                        <Row className='tags'>
                            <p className='tag tag-javascript'>javascript</p>
                        </Row>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                <Card.Img className='cardImg' variant="top" src="assets/avisi.png" alt="Wireframe Avisi" />
                    <Card.Body>
                        <Card.Title>Project: Avisi</Card.Title>
                        <Card.Text>
                            <p>Aan het eind van het tweede leerjaar heb ik meegewerkt aan een project vanuit het bedrijf Avisi. Hierin heb ik de rol aangenomen als designer en wanneer dit is voltooid, kan ik aan de slag met de front-end van de applicatie.</p>
                        </Card.Text>
                        <Row className='tags'>
                            <p className='tag tag-design'>design</p>
                            <p className='tag tag-wireframe'>wireframe</p>
                            <p className='tag tag-react'>react</p>
                        </Row>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                    <Card.Img className='cardImg' variant="top" src="assets/crud.png" alt="Stage" />
                        <Card.Body>
                            <Card.Title>Project: PHP CRUD</Card.Title>
                            <Card.Text>
                                <p>De basis van een CRUD-systeem heb ik al meerdere keren toegepast in verschillende projecten. Een voorbeeld hiervan is het project Internship Japan waar de functionaliteiten zoals login, tonen van accountgegevens of het bijwerken van data. Wat niet kan ontbreken is natuurlijk een database connectie waar SQL is gebruikt.</p>
                            </Card.Text>
                            <Row className='tags'>
                                <p className='tag tag-php'>php</p>
                                <p className='tag tag-crud'>crud</p>
                             </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card>
                <Card.Img className='cardImg' variant="top" src="assets/vet.jpg" alt="Stage" />
                    <Card.Body>
                        <Card.Title>Ervaring: Stage bij Bureau Vet </Card.Title>
                        <Card.Text>
                            <p>Voor een half jaar heb ik mee mogen lopen bij het in Nijmegen gevestigde bedrijf Bureau Vet. Hier heb ik gewerkt met bijvoorbeeld de programma’s van Adobe zoals Illustrator en Indesign. Ik heb ook ervaring op mogen doen met het maken van een WordPress website en het up to date houden van plugins.</p>
                        </Card.Text>
                            <Row className='tags'>
                                <p className='tag tag-stage'>stage</p>
                                <p className='tag tag-wordpress'>wordpress</p>
                            </Row>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                <Card.Img className='cardImg' variant="top" src="assets/github.png" alt="Github" />
                    <Card.Body>
                        <Card.Title>Github Repositories</Card.Title>
                        <Card.Text>
                            <p>Projecten voor programmeervakken worden gedeeld via mijn GitHub account. Ik kan overweg met het werken in GitHub Desktop en terminal commands doordat vele projecten in een samenwerking worden gemaakt met andere leerlingen.</p>
                        </Card.Text>
                            <Row className='tags'>
                                <p className='tag tag-github'>github</p>
                            </Row>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container> 
  );
}

export default Projects;