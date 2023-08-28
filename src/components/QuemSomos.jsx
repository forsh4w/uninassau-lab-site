import React from 'react';
// CSS:
import '../css/QuemSomos.css';

export default function QuemSomos() {
    return (
        <div
            data-aos="zoom-out"
            data-aos-duration="800"
            data-aos-once="true"
            id="about">
            <div
                className="QuemSomos"
                style={{ width: '100%', height: '100%' }}>
                <div className="Text">
                    <h1 className="TitleQuemSomos">Quem Somos?</h1>

                    <h3 className="TextExem">
                        <strong>Lorem ipsum</strong> dolor sit amet, consectetur
                        adipiscing elit. Aliquam faucibus, leo vel aliquet
                        tempus, nibh neque dignissim mauris, ac ultrices nulla
                        mi sit amet purus. <br />
                        <br />
                        Sed non libero sapien. Sed <strong>dapibus</strong>{' '}
                        neque vitae congue sodales. Pellentesque ac est ac risus
                        pretium condimentum ac in dolor. Suspendisse imperdiet
                        auctor eros. In lobortis fermentum lectus in volutpat.
                        Aliquam erat volutpat. <br />
                        <br />
                        Etiam ac dui id <strong>lacus ultrices</strong> blandit.
                        Duis porttitor vehicula est sed elementum. Fusce commodo
                        sagittis enim, sed sagittis purus suscipit quis.
                        Suspendisse feugiat tempor turpis. Fusce vel iaculis
                        risus. Maecenas eu commodo lorem.
                    </h3>
                </div>
            </div>
        </div>
    );
}
