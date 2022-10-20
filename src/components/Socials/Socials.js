import Container from 'react-bootstrap/Container';
import './Socials.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';;

function Social() {
  return (
    <Container className='social'>
        <Row>
        <Col sm={5}>
            <h3>Social Media</h3>
            <hr/>
            <p><a href="https://www.linkedin.com/in/kyara-de-winter-7919071b0/" rel="noreferrer" target="_blank">Visit LinkedIn</a></p>
            <p><a href="https://github.com/KyaraDeWinter" rel="noreferrer" target="_blank">Visit GitHub</a></p>
            <p><a href="https://www.instagram.com/xdewinter/" rel="noreferrer" target="_blank">Visit Instagram</a></p>
        </Col>
        <Col sm={7}>
            <div>
                <h3>Kyara de Winter</h3>
                <hr/>
                <p>Derdejaars Student Software Developer</p>
                <p>ROC Nijmegen, Technovium</p>
                <p>Woonachtig in Cuijk, Noord-Brabant</p>
            </div>
        </Col>
        </Row>
    </Container>
  );
}

export default Social;