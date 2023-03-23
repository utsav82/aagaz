import React from 'react';
// import Popup from 'reactjs-popup';
import './style/merch.css';
// import img1 from "../res/vipPass1.jpeg"
// import img2 from "../res/normalPass.jpeg"
import img from "../res/merch.jpg"
import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'

const merch = () => {
    return (
        <div>
            <div class="container1">
                <img src={img} alt="Avatar" class="image" />
                <div class="overlay">
                    <div class="text2">
                        <p>Greetings Harcourtians!
                            Score big on style and performance with new Aagaz Jerseys! Get ready to ignite your passion and unleash your potential with Aagaz'23, while playing and hosting various universities from across the country .This is the ultimate platform to showcase your talent and make your mark.
                            Are you ready?!
                            Let’s make it happen!
                            Get ready to dominate the game and look great doing it. Wear it with pride and make a statement that’s all yours.<br></br>
                            UPI I'd:-7607673535@paytm
                            <br /><br />
                            For any further query contact:-
                            <br /><br />
                            Shraddha Katiyar (3rd FT)
                            <br /><br />
                            +917570959272
                            <br /><br />
                            +918707519798.</p>
                        <h3><strong>Regards,<br />Sports Sub-council,<br />USAC, HBTU.</strong></h3><br /><br />
                        <Button variant="danger" size="lg">
                            <a style={{ textDecoration: 'none', fontSize: '16px', fontWeight: '600', color: 'white' }} href='https://forms.gle/AYm2rijhWsSQHVF87' target='_blank' rel="noopener noreferrer">Book your T-Shirt now</a>
                        </Button><br /><br />
                    </div>
                </div>
            </div>
            <div class="text1">
                <p>Greetings Harcourtians!
                    Score big on style and performance with new Aagaz Jerseys! Get ready to ignite your passion and unleash your potential with Aagaz'23, while playing and hosting various universities from across the country .This is the ultimate platform to showcase your talent and make your mark.
                    Are you ready?!
                    Let’s make it happen!
                    Get ready to dominate the game and look great doing it. Wear it with pride and make a statement that’s all yours.<br></br>
                    UPI I'd:-7607673535@paytm

                    For any further query contact:-
                    Shraddha Katiyar (3rd FT)
                    +917570959272
                    +918707519798.</p><br />
                <h3><strong>Regards,<br />Sports Sub-council,<br />USAC, HBTU.</strong></h3><br /><br />
                <Button variant="danger" size="lg">
                    <a style={{ textDecoration: 'none', fontSize: '16px', fontWeight: '600', color: 'white' }} href='https://forms.gle/AYm2rijhWsSQHVF87' target='_blank' rel="noopener noreferrer">Book your T-Shirt now</a>
                </Button>
            </div>
        </div>
    )
}

export default merch