/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';

import img1 from '../../../assets/images/features/feature13/img1.jpg';
import img2 from '../../../assets/images/features/feature13/img2.jpg';
import img3 from '../../../assets/images/features/feature13/img3.jpg';
import img4 from '../../../assets/images/features/feature13/img4.jpg';
import img5 from '../../../assets/images/features/feature30/img1.jpg';

const FeatureComponent = () => {
    return (
        <div>
            <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Diseño y Creación de Páginas Web</h1>
                            <h6 className="subtitle">Diseño de páginas web de acuerdo a stándares de usabilidad y con objetivos comerciales o informativos. Obtén un desarrollo web que cumpla con atraer, seducir y convencer para conseguir nuevos prospectos. Todo con una estrategia digital.</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="spacer feature4">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <span className="label label-danger label-rounded">Desarrollo Web</span>
                            <h2 className="title">Diseño de Paginas Webs</h2>
                            <h6 className="subtitle">Creamos páginas web y las posicionamos
                                                    en Google, para negocios que están listos
                                                    para crecer en Perú. Explora el Universo del Desarrollo web y
                                                    Exhibe la mejor versión de tu empresa
                                                    en todos los dispositivos con nuestro
                                                    Servicio de Diseño Web en Lima.</h6>
                        </Col>
                    </Row>
                    <Row className="m-t-40">
                        <Col md="4" className="wrap-feature4-box">
                            <Card>
                                <CardBody>
                                    <div className="icon-round bg-light-info"><i className="fa fa-star"></i></div>
                                    <h5 className="font-medium">Landing Page</h5>
                                    <p className="m-t-20">Desarrollamos LANDING PAGES según los objetivos que tenga tu campaña de marketing digital. Enfocadas en generar leads, super visuales, con piezas gráficas llamativas y adaptadas a todos los dispositivos. Obtén una landing page 100% Analítica y comercial.</p>
                                    <a href="#" className="linking text-themecolor">Explore More<i className="ti-arrow-right"></i></a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4" className="wrap-feature4-box">
                            <Card>
                                <CardBody>
                                    <div className="icon-round bg-light-info"><i className="fa fa-check-circle"></i></div>
                                    <h5 className="font-medium">Sitio Web </h5>
                                    <p className="m-t-20">Diseño de páginas web de acuerdo a stándares de usabilidad y con objetivos comerciales o informativos. Obtén un desarrollo web que cumpla con atraer, seducir y convencer para conseguir nuevos prospectos. Todo con una estrategia digital. </p>
                                    <a className="linking text-themecolor" href="#">Explore More <i className="ti-arrow-right"></i></a>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4" className="wrap-feature4-box">
                            <Card>
                                <CardBody>
                                    <div className="icon-round bg-light-info"><i className="fa fa-star"></i></div>
                                    <h5 className="font-medium">Tienda Virtual</h5>
                                    <p className="m-t-20">Vende 100% online, Diseñamos e-commerce o tiendas virtuales con el objetivo de vender. Diseño adaptado a todo dispositivo para que no pierdas oportunidades y diseñada para que tu empresa se muestre de manera profesional y full ventas.</p>
                                    <a href="#" className="linking text-themecolor">Explore More<i className="ti-arrow-right"></i></a>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="bg-light spacer feature20 up">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <span className="label label-success label-rounded">Marketing Digital</span>
                            <h2 className="title">Somos Especialistas en SEO y Soluciones de comunicación digital</h2>
                            <h6 className="subtitle">Como agencia especializada en Marketing Digital hemos desarrollado un concepto y metodología propia con un proceso ágil, personalizado y optimizado para atender y cumplir con los objetivos de nuestros clientes, concebimos el marketing digital como parte fundamental de la estrategia de comunicación de una marca o empresa y debe de estar alineada a una planificación y ejecución profesional.</h6>
                        </Col>
                    </Row>
                    <Row className="wrap-feature-20">
                        <Col lg="6">
                            <Card>
                                <Row>
                                    <Col md="8">
                                        <CardBody className="d-flex no-block">
                                            <div className="m-r-20"><img src={img1} width="70" className="rounded" alt="img" /></div>
                                            <div>
                                                <h5 className="font-medium">SEO – posicionamiento web.</h5>
                                            </div>
                                        </CardBody>
                                    </Col>
                                    <Col md="4" className="text-center">
                                        <a href="#" className="text-white linking bg-success-gradiant">Lets Talk <i className="ti-arrow-right"></i></a>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card>
                                <Row>
                                    <Col md="8">
                                        <CardBody className="d-flex no-block">
                                            <div className="m-r-20"><img src={img2} width="70" className="rounded" alt="img" /></div>
                                            <div>
                                                <h5 className="font-medium">SEM – Google Ads.</h5>
                                            </div>
                                        </CardBody>
                                    </Col>
                                    <Col md="4" className="text-center">
                                        <a href="#" className="text-white linking bg-success-gradiant">Lets Talk <i className="ti-arrow-right"></i></a>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card>
                                <Row>
                                    <Col md="8">
                                        <CardBody className="d-flex no-block">
                                            <div className="m-r-20"><img src={img3} width="70" className="rounded" alt="img" /></div>
                                            <div>
                                                <h5 className="font-medium">Publicidad en Redes Sociales.</h5>
                                            </div>
                                        </CardBody>
                                    </Col>
                                    <Col md="4" className="text-center">
                                        <a href="#" className="text-white linking bg-success-gradiant">Lets Talk <i className="ti-arrow-right"></i></a>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card>
                                <Row>
                                    <Col md="8">
                                        <CardBody className="d-flex no-block">
                                            <div className="m-r-20"><img src={img4} width="70" className="rounded" alt="img" /></div>
                                            <div>
                                                <h5 className="font-medium">Community manager.</h5>
                                            </div>
                                        </CardBody>
                                    </Col>
                                    <Col md="4" className="text-center">
                                        <a href="#" className="text-white linking bg-success-gradiant">Hablemos <i className="ti-arrow-right"></i></a>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="spacer ">
                <Container className="feature30">
                    <Row>
                        <Col lg="10"><img src={img5} className="rounded img-responsive" alt="wrappixel" /></Col>
                        <Col lg="5" md="7" className="text-center wrap-feature30-box">
                            <Card className="card-shadow">
                                <CardBody>
                                    <div className="p-20">
                                        <span className="label label-info label-rounded">Branding</span>
                                        <h3 className="title">Conocemos lo que necesita tu marca.
                                        Tu imagen es un aspecto fundamental</h3>
                                        <p>En Pengrafic Perú tu Branding es fundamental y nuestro equipo se enfoca en analizar tu marca y proponerte una línea gráfica adecuada para tu negocio..</p>
                                        <a className="btn btn-info-gradiant btn-md btn-arrow m-t-20" href="#"><span>Explore More <i className="ti-arrow-right"></i></span></a>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default FeatureComponent;
