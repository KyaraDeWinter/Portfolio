import Container from 'react-bootstrap/Container';
import './Socials.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

function Social() {
  return (
    <Container className='social'>
        <Row>
        <Col sm={5}>
            <h3>Social Media</h3>
            <p><a href="https://www.linkedin.com/in/kyara-de-winter-7919071b0/" rel="noreferrer" target="_blank"><FaLinkedin className='icon'/>Visit LinkedIn</a></p>
            <p><a href="https://github.com/KyaraDeWinter" rel="noreferrer" target="_blank"><FaGithubSquare className='icon'/>Visit GitHub</a></p>
            <p><a href="https://www.instagram.com/xdewinter/" rel="noreferrer" target="_blank"><FaInstagramSquare className='icon'/>Visit Instagram</a></p>
        </Col>
        <Col sm={2}><div class="vl"></div></Col>
        <Col sm={5}>
            <div>
                <h3>Kyara de Winter</h3>
                <p>Derdejaars Student Software Developer</p>
                <p>ROC Nijmegen, Technovium</p>
                <p>Woonachtig te Cuijk, Noord-Brabant</p>
                <p><a href = "mailto: kyaradewinter@gmail.com"><FaEnvelope className='icon'/>Email: kyaradewinter@gmail.com</a></p>
                <a href="assets/cv_kyara_de_winter.pdf" download="cv_kyara_de_winter.pdf">
                  <p className='cv'><FaDownload className='icon'/>Download Kyara's CV</p>
                </a>
            </div>
        </Col>
        </Row>
    </Container>
  );
}

export default Social;