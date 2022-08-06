import React from 'react';
import './Footer.css';

import { Container, Row, Col } from 'react-bootstrap';

import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col>
                        <div className='footer-details'>
                            <div className='footer-logo'>
                                <img src={logo} alt='footer logo' />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='footer-right'>
                            <Col>
                                <div className='footer-links'>
                                    <ul>
                                        <li><a href='#'>About Online Food</a></li>
                                        <li><a href='#'>Read Our Blog</a></li>
                                        <li><a href='#'>Sign Up to Deliver</a></li>
                                        <li><a href='#'>Add your Restaurant</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col>
                                <div className='footer-links'>
                                    <ul>
                                        <li><a href='#'>Get Help</a></li>
                                        <li><a href='#'>Read FAQs</a></li>
                                        <li><a href='#'>View All Cities</a></li>
                                        <li><a href='#'>Restaurant Near Me</a></li>
                                    </ul>
                                </div>
                            </Col>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className='footer-bottom'>
                        <Col>
                            <div className='copy-rights'>Copy Right @2022 Online Food</div>
                        </Col>
                        <Col>
                            <div className='site-policy'>
                                <li><a href='#'>Privacy Policy</a></li>
                                <li><a href='#'>Terms and Condition</a></li>
                                <li><a href='#'>Pricing</a></li>
                            </div>
                        </Col>
                    </div>
                </Row>
            </Container>     
        </div>
    );
};

export default Footer;