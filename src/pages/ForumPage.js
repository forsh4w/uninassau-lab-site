import React from 'react';
import { Link } from 'react-router-dom';
import BackLink from '../components/BackLink';

import '../css/ForumPage.css'; // Importe o arquivo CSS
import '../css/responsive.css';

const topics = [
    {
        id: 1,
        title: 'Dicas para reduzir o consumo de plástico',
        author: 'Ana Silva',
        date: '2023-08-25',
    },
    {
        id: 2,
        title: 'Discussão sobre energias renováveis',
        author: 'Pedro Almeida',
        date: '2023-08-24',
    },
    {
        id: 3,
        title: 'Como incentivar a reciclagem na comunidade?',
        author: 'Camila Oliveira',
        date: '2023-08-22',
    },
    {
        id: 4,
        title: 'Impactos das mudanças climáticas',
        author: 'Rafael Santos',
        date: '2023-08-20',
    },
    {
        id: 5,
        title: 'Ideias para redução do consumo de água',
        author: 'Juliana Lima',
        date: '2023-08-18',
    },
    {
        id: 6,
        title: 'Biodiversidade na Amazônia',
        author: 'Lucas Fernandes',
        date: '2023-08-16',
    },
    {
        id: 7,
        title: 'Uso sustentável da energia solar',
        author: 'Mariana Souza',
        date: '2023-08-14',
    },
    {
        id: 8,
        title: 'Desafios da preservação marinha',
        author: 'Giovanna Costa',
        date: '2023-08-12',
    },
    {
        id: 9,
        title: 'Alternativas ao plástico descartável',
        author: 'Henrique Oliveira',
        date: '2023-08-10',
    },
    {
        id: 10,
        title: 'Mobilidade urbana sustentável',
        author: 'Isabela Santos',
        date: '2023-08-08',
    },
];

const ForumPage = () => {
    return (
        <div className="forum-page">

            <BackLink to="/" text="Voltar" />


            <h1>Fóruns de Discussão</h1>
            <div className="topics-list">
                {topics.map((topic) => (
                    <div className="topic" key={topic.id}>
                        <h2>{topic.title}</h2>
                        <p>
                            Por {topic.author}, em {topic.date}
                        </p>
                        <Link to={`/forum/respostas`}>Ver Discussão</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ForumPage;
