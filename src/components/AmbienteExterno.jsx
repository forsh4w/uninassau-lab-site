import React from 'react';
import { Row, Col } from 'react-bootstrap';
// CSS:
import '../css/Ambientes.css';

export default function AmbienteExterno() {
    return (
        <div id="local">
            <Row
                data-aos="fade-right"
                data-aos-duration="800"
                className="AmbienteExterno"
                data-aos-once="true"
                style={{
                    display: 'flex',
                    flex: 1,
                    height: '100%',
                }}>
                <Col md={7}>
                    <div className="FullTextExterno">
                        <h1 className="Title">Ambiente externo</h1>
                        <h3 className="TextAmbiente TextAmbienteExterno">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam faucibus, leo vel aliquet tempus, nibh{' '}
                            <br />
                            <br />
                            Neque dignissim mauris, ac ultrices nulla mi sit
                            amet purus. Etiam dictum justo quis libero
                            vulputate, at tincidunt ex posuere. Morbi
                            pellentesque quis nulla ut scelerisque.
                        </h3>
                    </div>
                </Col>

                <Col
                    md={5}
                    style={{
                        display: 'flex',
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}></Col>
            </Row>
        </div>
    );
}
