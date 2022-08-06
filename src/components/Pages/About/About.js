import React from 'react';
import './About.css'
import Container from 'react-bootstrap/Container';

import Pranto from '../../../images/Pranto.JPEG';
import Teacher from '../../../images/masudrana.jpg';
import Sabbir from '../../../images/sabbir.jpg';
import Arefin from '../../../images/arefin.jpg';
import Shiku from '../../../images/shiku.jpg';

const About = () => {
    return (
        <div className='about'>
            <Container>
                <div className="about-section">
                    <h1>About Us</h1>
                </div>

                <h2 className='title'>Our Team</h2>

                <div className="row">
                    <div className="column">
                        <div className="card">
                            <img src={Teacher} alt="Teacher" />
                            <div className="container">
                                <h2>Masud Rana</h2>
                                <p className="title1">Teacher</p>
                                <p>+8801303-156357</p>
                                <p>hasib@example.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <img src={Pranto} alt="Pranto" />
                            <div className="container">
                                <h2>Abdullah Al Hadi</h2>
                                <p className="title1">Designer</p>
                                <p>+8801988-457339</p>
                                <p>pranto@example.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="column">
                        <div className="card">
                            <img src={Sabbir} alt="Sabbir" />
                            <div className="container">
                                <h2>Sabbir Ahmed</h2>
                                <p className="title1">Designer</p>
                                <p>+8801789-104622</p>
                                <p>sabbir@example.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <img src={Arefin} alt="Arefin" />
                            <div className="container">
                                <h2>Sabbir Ahmed</h2>
                                <p className="title1">Designer</p>
                                <p>+8801784-266642</p>
                                <p>arefin@example.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <img src={Shiku} alt="Shiku" />
                            <div className="container">
                                <h2>Sabbir Ahmed</h2>
                                <p className="title1">Designer</p>
                                <p>+8801720-608590</p>
                                <p>shiku@example.com</p>
                                <p><button className="button">Contact</button></p>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default About;