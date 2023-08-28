import React from 'react';
import { Row, Col } from 'react-bootstrap';
// CSS:
import '../css/Ambientes.css';
// utils:
import useWindow from '../utils/useWindowSize';

export default function AmbienteInterno() {
    const window = useWindow();

    return (
        <div>
            <Row
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-once="true"
                className="AmbienteInterno"
                style={{
                    display: 'flex',
                    flex: 1,
                    height: '100%',
                }}>
                <Col md={5}></Col>
                <Col md={7}>
                    <div
                        className="FullTextInterno"
                        style={{ paddingTop: window.height / 4 }}>
                        <h1 className="Title">Ambiente interno</h1>
                        <h3 className="TextAmbiente TextAmbienteInterno">
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
            </Row>
        </div>
    );
}
