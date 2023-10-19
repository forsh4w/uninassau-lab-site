import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';
import BackLink from '../components/BackLink';
import '../css/responsive.css';
import '../css/CursosPage.css';
import { Link } from 'react-router-dom';


import videoUrl from '../assets/ibama.webm';

const coursesData = [
  {
    title: 'Curso de Gestão Ambiental',
    description: 'Aprenda os princípios básicos da gestão ambiental e como aplicá-los em diferentes contextos.',
    image: "https://wordpress-cms-gc-prod-assets.quero.space/uploads/2023/05/trabalhar-com-esg-2.jpg",
  },
  {
    title: 'Curso de Sustentabilidade Empresarial',
    description: 'Descubra como as empresas podem adotar práticas sustentáveis para minimizar seu impacto ambiental.',
    image: "https://certificadocursosonline.com/wp-content/uploads/2018/09/Curso-de-Pra%CC%81ticas-de-Sustentabilidade-1280x720.jpg",
  },
  {
    title: 'Curso de Energias Renováveis',
    description: 'Explore as diversas fontes de energia renovável e seu papel na transição para um futuro mais sustentável.',
    image: "https://portalidea.com.br/cursos/bsico-de-energias-renovveis.webp",
  },
  {
    title: 'Curso de Conservação da Biodiversidade',
    description: 'Entenda a importância da conservação da biodiversidade e as estratégias para proteger ecossistemas.',
    image: "https://cdn.evg.gov.br/cursos/345_EVG/imagem_curso_345.png",
  },
  {
    title: 'Curso de Agricultura Sustentável',
    description: 'Aprenda práticas agrícolas que promovem a sustentabilidade e a preservação dos recursos naturais.',
    image: "https://planetacampo.com.br/wp-content/uploads/2021/08/environmental-conservation-plant-sustainability-P9QCM9H-1-1024x683.jpg",
  },
  {
    title: 'Curso de Ecoturismo',
    description: 'Descubra como o ecoturismo pode ser uma ferramenta de conservação ambiental e desenvolvimento local.',
    image: "https://portalidea.com.br/cursos/ecoturismo.webp",
  },
  {
    title: 'Curso de Reciclagem e Reutilização',
    description: 'Saiba como implementar práticas de reciclagem e reutilização no seu dia a dia.',
    image: "https://www.cursosabeline.com.br/webroot/cur_cursos/curso-com-certificado-de-reciclagem-1567021998.jpg",
  },
  {
    title: 'Curso de Educação Ambiental',
    description: 'Aprenda a promover a conscientização ambiental por meio de atividades educativas e engajadoras.',
    image: "data:image/jpeg;base64,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",
  },
  {
    title: 'Curso de Mudanças Climáticas',
    description: 'Explore as causas e impactos das mudanças climáticas e as medidas para mitigar seus efeitos.',
    image: "https://import.cdn.thinkific.com/798531%2Fcustom_site_themes%2Fid%2FsChjmQ3TVqqaPGo9n4A0_WhatsApp%20Image%202023-10-05%20at%2009.39.33.jpeg",
  },
  {
    title: 'Curso de Ecologia Marinha',
    description: 'Conheça os ecossistemas marinhos e a importância da preservação dos oceanos.',
    image: "https://i0.wp.com/orientesub.com.br/wp-content/uploads/2023/01/ecologia-marinha-1.webp?fit=600%2C675&ssl=1",
  },
];

const CursosPage = () => {
  useEffect(() => {
    aos.init(); // Inicializa Animate On Scroll
  }, []);

  const goToPage = (page) => {
    window.location.href = `/${page}`;
  };


  return (
    <div className="courses-page">

      <BackLink to="/" text="Voltar" />

      <h1>Cursos Disponíveis</h1>
      <div className="courses-list">
        {coursesData.map((course, index) => (
          <div className="course-card" key={index} onClick={() => goToPage('cursos/video')} data-aos="zoom-in">
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
