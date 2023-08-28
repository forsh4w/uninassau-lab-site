import React from 'react';
import '../css/CursosPage.css';

import testImage from '../assets/teste2.jpg'

const coursesData = [
  {
    title: 'Curso de Gestão Ambiental',
    description: 'Aprenda os princípios básicos da gestão ambiental e como aplicá-los em diferentes contextos.',
    image: testImage,
  },
  {
    title: 'Curso de Sustentabilidade Empresarial',
    description: 'Descubra como as empresas podem adotar práticas sustentáveis para minimizar seu impacto ambiental.',
    image: testImage,
  },
  {
    title: 'Curso de Energias Renováveis',
    description: 'Explore as diversas fontes de energia renovável e seu papel na transição para um futuro mais sustentável.',
    image: testImage,
  },
  {
    title: 'Curso de Conservação da Biodiversidade',
    description: 'Entenda a importância da conservação da biodiversidade e as estratégias para proteger ecossistemas.',
    image: testImage,
  },
  {
    title: 'Curso de Agricultura Sustentável',
    description: 'Aprenda práticas agrícolas que promovem a sustentabilidade e a preservação dos recursos naturais.',
    image: testImage,
  },
  {
    title: 'Curso de Ecoturismo',
    description: 'Descubra como o ecoturismo pode ser uma ferramenta de conservação ambiental e desenvolvimento local.',
    image: testImage,
  },
  {
    title: 'Curso de Reciclagem e Reutilização',
    description: 'Saiba como implementar práticas de reciclagem e reutilização no seu dia a dia.',
    image: testImage,
  },
  {
    title: 'Curso de Educação Ambiental',
    description: 'Aprenda a promover a conscientização ambiental por meio de atividades educativas e engajadoras.',
    image: testImage,
  },
  {
    title: 'Curso de Mudanças Climáticas',
    description: 'Explore as causas e impactos das mudanças climáticas e as medidas para mitigar seus efeitos.',
    image: testImage,
  },
  {
    title: 'Curso de Ecologia Marinha',
    description: 'Conheça os ecossistemas marinhos e a importância da preservação dos oceanos.',
    image: testImage,
  },
];

const CursosPage = () => {
  return (
    <div className="courses-page">
      <h1>Cursos Disponíveis</h1>
      <div className="courses-list">
        {coursesData.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.image} alt={course.title} />
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CursosPage;
