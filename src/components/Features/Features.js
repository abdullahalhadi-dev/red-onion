import React from 'react';
import './Features.css';

import { Container, Row, Col } from 'react-bootstrap';

import feature2 from '../../images/feature2.png';
import feature1 from '../../images/feature1.png';
import feature3 from '../../images/feature3.png';

import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';

import arrow1 from '../../images/arrow1.jpg';

const Features = () => {
    return (
        <div className='features'>
            <Container>
                <Row>
                    <Col>
                        <div className='features-title'>
                            <h3>Why you choose us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                             Quisque aliquam felis massa, in facilisis augue tincidunt quis.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className='feature-details'>
                        <Row>
                            <Col>
                                <div className='single-feature'>
                                    <div className='feature-image'>
                                        <img src={feature2} alt='Feature Image 1' />
                                    </div>
                                    <div className='single-feature-details'>
                                        <div className='single-feature-details-icon'>
                                            <img src={icon1} alt='feature details icon' />
                                        </div>
                                        <div className='single-feature-details-text'>
                                            <h3>Fast Delivery</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                 Aenean aliquet felis purus, vitae lobortis velit eleifend eu.</p>
                                            <a href='#'>See more <img src={arrow1} /></a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className='single-feature'>
                                    <div className='feature-image'>
                                        <img src={feature1} alt='Feature Image 1' />
                                    </div>
                                    <div className='single-feature-details'>
                                        <div className='single-feature-details-icon'>
                                            <img src={icon2} alt='feature details icon' />
                                        </div>
                                        <div className='single-feature-details-text'>
                                            <h3>A Good auto Responder</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                 Aenean aliquet felis purus, vitae lobortis velit eleifend eu.</p>
                                            <a href='#'>See more <img src={arrow1} /></a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className='single-feature'>
                                    <div className='feature-image'>
                                        <img src={feature3} alt='Feature Image 1' />
                                    </div>
                                    <div className='single-feature-details'>
                                        <div className='single-feature-details-icon'>
                                            <img src={icon1} alt='feature details icon' />
                                        </div>
                                        <div className='single-feature-details-text'>
                                            <h3>Home Delivery</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                 Aenean aliquet felis purus, vitae lobortis velit eleifend eu.</p>
                                            <a href='#'>See more <img src={arrow1} /></a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Features;