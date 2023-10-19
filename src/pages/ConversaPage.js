// ConversaPage.js
import React from 'react';
import BackLink from '../components/BackLink'; // Seu componente de link de voltar

import avatar from '../assets/user.jpg';

import '../css/responsive.css';
import '../css/ConversaPage.css'; // Arquivo de estilo para a página do fórum

const responses = [
    {
        id: 1,
        name: 'Usuário 1',
        avatar: avatar,
        content: 'Donec aliquet arcu quis ipsum ullamcorper rutrum. Duis eget tempus nulla, sed vehicula lectus. Nam sed dapibus sem. Sed semper ipsum a imperdiet elementum. Vestibulum sed tellus vulputate, ultrices metus id, suscipit leo. Nullam aliquam ligula et euismod lobortis. Proin et neque ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
        date: '1 de janeiro de 2023',
    },
    {
        id: 2,
        name: 'Usuário 2',
        avatar: avatar,
        content: 'Aenean vel feugiat mi, vitae malesuada est. Mauris scelerisque quam quis tristique vehicula. Suspendisse rutrum sodales dolor, eget placerat est facilisis et. Cras eros dui, semper eget eros vehicula, egestas accumsan dui. Etiam vehicula eu erat id dapibus. Suspendisse eu dui non nulla facilisis interdum. Aenean feugiat rutrum varius. Suspendisse euismod bibendum felis eget consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam nec lectus quis augue sollicitudin fermentum at sed odio. Donec interdum egestas odio ac fringilla.',
        date: '2 de janeiro de 2023',
    },
    {
        id: 3,
        name: 'Usuário 3',
        avatar: avatar,
        content: 'Cras iaculis ipsum sed magna pellentesque rutrum. Sed imperdiet lectus risus, ac volutpat elit ultrices a. Cras ante ligula, lobortis ac condimentum posuere, tincidunt vel leo. Suspendisse eu condimentum odio. Curabitur in diam quis erat condimentum venenatis id vel justo. Sed dignissim ac lacus sed finibus. Vivamus non porta quam. Ut maximus diam arcu, in ullamcorper justo auctor a. Maecenas mattis lectus vitae gravida dictum. Cras dictum arcu vitae erat porta fermentum. Aenean ac nunc hendrerit, elementum tortor tincidunt, dignissim massa.',
        date: '3 de janeiro de 2023',
    },
];

const ConversaPage = () => {
    return (
        <div className="conversa-page">
            <BackLink to="/forum" text="Voltar para Fóruns" />

            <h1>Fórum do SIGA</h1>

            <div className="question">
                <h2>Pergunta Inicial</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris suscipit, porttitor velit a, ornare purus. Vivamus lobortis bibendum dolor non pellentesque. Praesent id risus diam. Duis elementum massa a leo feugiat malesuada. Nulla tristique massa sem. Aliquam maximus mi lacus, eget tempus dolor mollis vel. Donec eu hendrerit mi. Suspendisse potenti. Nunc mi neque, gravida et sollicitudin sodales, ornare sit amet sapien. Mauris pharetra sapien sit amet elit volutpat, ac vulputate mauris viverra. Vestibulum lacinia enim egestas cursus venenatis. Donec nibh erat, auctor a lectus ut, lobortis maximus orci. <p></p>

                    Aenean convallis ullamcorper erat ac aliquet. Cras aliquam accumsan purus, vitae maximus erat tincidunt tempus. Vestibulum sagittis hendrerit posuere. Etiam in leo in tellus ornare egestas vitae in sem. Mauris accumsan sit amet orci in eleifend. Duis semper est eu porttitor condimentum. Nunc volutpat lobortis ex, fringilla dictum arcu egestas at. Curabitur suscipit ullamcorper risus non sollicitudin.
                </p>
            </div>

            <div className="answers">
                <h2>Respostas</h2>
                {responses.map((response) => (
                    <div className="response" key={response.id}>
                        <div className="user-details">
                            <img src={`${response.avatar}`} />
                            <p>{response.name}</p>
                        </div>
                        <div className="response-content">
                            <p>{response.content}</p>
                            <p className="response-date">{response.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConversaPage;
