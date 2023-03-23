import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
// import img from '../res/footerImg.png';
import "../Pages/style/footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <section className='footer'>
            <Container>

                <Row>
                    <Col sm>
                        {/* <img
                            alt="img"
                            src={img}
                            width="300"
                            height="auto"
                            className="d-inline-block align-top"
                        /> */}
                    </Col>
                    <Col md className='contact'>
                        <strong>
                            CONTACT US
                        </strong><br /><hr />
                        <h6><FaMapMarkerAlt />&nbsp; &nbsp; HBTU, Kanpur</h6>
                        <FaPhoneAlt /><a className="numMail" style={{ textDecoration: "none", color: 'rgb(255,255,255)' }} href="tel:+91-7607673535">&nbsp; &nbsp; +91-7607673535</a>,
                        <a className="numMail" style={{ textDecoration: "none", color: 'rgb(255,255,255)' }} href="tel:+91-7355605575">&nbsp;+91-7355605575</a>
                        <br />
                        <FaEnvelope /><a className="numMail" style={{ textDecoration: "none", color: 'rgb(255,255,255)' }} href="mailto:aagaz2k23@gmail.com">&nbsp; &nbsp; aagaz2k23@gmail.com</a>
                        <br />
                        <br />
                        <a style={{ textDecoration: "none" }} className='icons' href="https://www.instagram.com/hbtusports/" target='_blank' rel="noopener noreferrer"><FaInstagram /></a>
                        <br />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Footer