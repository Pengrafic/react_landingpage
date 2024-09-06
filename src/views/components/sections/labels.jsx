import React from 'react';
import { Badge } from 'reactstrap';


const Labels = () => {
    return (
        <div>
            <div className="spacer" id="label-component">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <h1 className="title font-bold">La Agencia</h1>
                            <h6 className="subtitle">Creemos en el valor de ser distintos &amp; Buscamos tener clientes excepcionales, aquellos que eligen lo mejor, los que toman riesgos y apuestan por excelentes resultados.
Somos expertos en lo que hacemos. Ayudamos a mantener claros los propósitos de tu proyecto y a eliminar lo que te aleja de lo nuevo: el miedo al cambio.
El éxito de tu proyecto es nuestro principal objetivo..</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <h4 className="card-title">Software</h4>
                            <Badge color="primary" pill>Photoshop</Badge>{' '}
                            <Badge color="secondary" pill>Ilustrator</Badge>{' '}
                            <Badge color="success" pill>Figma</Badge>{' '}
                            <Badge color="danger" pill>CorelDraw</Badge>{' '}
                            <Badge color="warning" pill>Warning</Badge>{' '}
                            <Badge color="info" pill>Info</Badge>{' '}
                            <Badge color="light" className="text-dark" pill>Light</Badge>{' '}
                            <Badge color="dark" pill>Dark</Badge>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <h4 className="card-title">Dominio de technologias</h4>
                            <Badge color="primary">Html</Badge>{' '}
                            <Badge color="secondary">Css</Badge>{' '}
                            <Badge color="success">Javascript</Badge>{' '}
                            <Badge color="danger">React</Badge>{' '}
                            <Badge color="warning">Bootstrap</Badge>{' '}
                            <Badge color="info">Next js</Badge>{' '}
                            <Badge color="light" className="text-dark">Node js</Badge>{' '}
                            <Badge color="dark">Vs. code</Badge>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Labels;
