/* eslint-disable */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <div className="footer4 b-t spacer">
            <Container>
                <Row>
                    <Col lg="3" md="6" className="m-b-30">
                        <h5 className="m-b-20">Dirección</h5>
                        <p>Loma del pilar 200, surco, lima</p>
                    </Col>
                    <Col lg="3" md="6" className="m-b-30">
                        <h5 className="m-b-20">Phone</h5>
                        <p>Reception :  +205 123 4567 <br />Office :  +51 992 870 423</p>
                    </Col>
                    <Col lg="3" md="6" className="m-b-30">
                        <h5 className="m-b-20">Email</h5>
                        <p>Office :  <a href="#" className="link">info@pengrafic.com</a> <br />Site :  <a href="#" className="link">ventas@pengrafic.com</a></p>
                    </Col>
                    <Col lg="3" md="6">
                        <h5 className="m-b-20">Social</h5>
                        <div className="round-social light">
                            <a href="https://www.facebook.com/pengrafic3" className="link"><i className="fa fa-facebook"></i></a>
                            <a href="https://gitlab.com/djvamps2007/pengrafic" className="link"><i className="fa fa-pinterest"></i></a>
                            <a href="https://github.com/Pengrafic" className="link"><i className="fa fa-github"></i></a>
                            <a href="https://www.youtube.com/channel/UCHkiWSl818MvgWQk848Cfyg" className="link"><i className="fa fa-youtube-play"></i></a>
                            <a href="https://www.instagram.com/pengrafic_/" className="link"><i className="fa fa-instagram"></i></a>
                        </div>
                    </Col>
                </Row>
                <div className="f4-bottom-bar">
                    <Row>
                        <Col md="12">
                            <div className="d-flex font-14 justify-content-between">
                                <div className="m-t-10 m-b-10 copyright">All Rights Reserved by Pengrafic.</div>
                                <div className="links ms-auto m-t-10 m-b-10">
                                    <a href="#" className="p-10 p-l-0">Terms of Use</a>
                                    <a href="#" className="p-10">Legal Disclaimer</a>
                                    <a href="#" className="p-10">Privacy Policy</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}
export default Footer;
