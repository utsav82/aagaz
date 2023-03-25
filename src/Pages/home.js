import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button';
import '../App.css';

import back from "../res/firstbgaagaz.png";
import adhyaay_logo from "../res/aagaztext.png";
import adhyaay_logo_whitered from "../res/onlyaagaz.png";

const home = () => {
    const homeStyle = {
        height: '100vh',
        backgroundImage: `url(${back})`,
        fontSize: '50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    const aboutStyle = {
        height: '500px',
        width: '100%',
        backgroundColor: '',
        backgroundImage:
            "url('https://dhruvil-lakhtaria.github.io/incident-2022/assets/img/xl.svg'), url('https://dhruvil-lakhtaria.github.io/incident-2022/assets/img/sm.svg')",
    };
    return (
        <section>
            <center>
                <div style={homeStyle} className="d-flex align-items-center justify-content-center landingPage">
                    <Image overflow="hidden" src={adhyaay_logo} rounded className="mainPageAdhyaayLogo" />
                    <Button variant="outline-danger" size="lg">
                        <a style={{ textDecoration: 'none', fontWeight: '600', color: 'white' }} href='https://forms.gle/Fh3XgEZ2ShbcnwCt9' target='_blank' rel="noopener noreferrer">Register Now</a>
                    </Button>
                </div>
                <div style={aboutStyle}>
                    <div className='aboutStyleGrid'>
                        <div className='aboutStyleGridText'>
                            <h1>About</h1>
                            <br></br>
                            <p>AAGAZ'23 is the descendant of the program initiated by Sports Sub-Council. The event aims to bring all the sports events under the auspices of a Mega Inter-College sports fest!!
                                <br></br>
                                <br />
                                AAGAZ'23 will be a new & better version of AAGAZ'22 which was a successful event. This will be an invaluable opportunity for brands to advertise themselves in front of the innovative lads.
                            </p>
                        </div>
                        <div className='aboutStyleGridPic'>
                            <Image overflow="hidden" src={adhyaay_logo_whitered} rounded style={{ height: "200px", width: "230px", }} className="adhyaayLogo" />
                        </div>
                    </div>
                </div>
            </center>
            {/* <Footer /> */}
        </section>
    )
}

export default home