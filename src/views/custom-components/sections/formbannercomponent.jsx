import React from 'react';
import { Row, Col, Container, Form } from 'reactstrap';

import banner from '../../../assets/images/form-banners/banner1/banner-img.png';

const FormBannerComponent = () => {
    return (
        <div>
            <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Form Banner</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="bg-light">
                <section>
                    <div id="banner1" className="banner spacer">
                        <Container>
                            <Row>
                                <Col lg="5" md="7" className="align-self-center">
                                    <h2 className="title font-bold">¡Dale un impulso real a tu negocio ahora!</h2>
                                    <p className="m-t-40 m-b-30">Para lograr grandes cosas, no sólo debemos actuar, sino también soñar; no sólo planificar, sino también creer.</p>
                                    <Form className="m-t-40">
                                        <input type="text" name="email" placeholder="Enter Email Address" className="font-16" />
                                        <input type="submit" value="Get Started" className="bg-success-gradiant font-semibold font-16 btn-rounded text-uppercase text-white text-center" />
                                    </Form>
                                </Col>
                                <Col lg="6" md="5" className="align-self-center ms-auto">
                                    <img src={banner} alt="We are Digital Agency" className="img-fluid" />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default FormBannerComponent;
