import React from 'react';
import { Carousel } from 'react-bootstrap';
// Imagens:
import panelio from '../assets/img/paneolio-destaque-11b7e3e0.jpg';
import massas from '../assets/img/il-mio-piatto-spaghetti2.png';
import polvo from '../assets/img/Peixe-1200x4802.png';
// utils:
import useStateWindow from '../utils/useWindowSize';
// CSS:
import '../css/Cardapio.css';

export default function Cardapio() {
    const window = useStateWindow();

    return (
        <div
            data-aos="zoom-out"
            data-aos-duration="800"
            data-aos-once="true"
            className="Menu"
            id="pratos">
            <Carousel
                style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                }}>
                <Carousel.Item>
                    <img
                        src={panelio}
                        alt="Frutos do mar"
                        width={window.width}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={massas} alt="Massas" width={window.width} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={polvo} alt="Polvo" width={window.width} />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
