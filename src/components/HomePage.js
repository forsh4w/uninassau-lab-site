import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import 'aos/dist/aos.css';
import aos from 'aos';

import '../css/HomePage.css';

const HomePage = () => {
  useEffect(() => {
    aos.init(); // Inicializa Animate On Scroll
  }, []);

  const goToPage = (page) => {
    window.location.href = `/${page}`;
  };

  return (
    <div className="home-page">
      <div className="intro" data-aos="fade-up">
        <h1>Bem-vindo à Plataforma de Conscientização Ambiental do IBAMA</h1>
        <p>
          Nossa missão é promover a conscientização ambiental, oferecer cursos sobre gestão ambiental e fornecer um espaço para discussões e sugestões de melhoria. Junte-se a nós na preservação do meio ambiente!
        </p>
      </div>
      <div className="blocks">
        <div className="block" onClick={() => goToPage('cursos')} data-aos="zoom-in">
          <h2>Cursos</h2>
          <p>Explore nossos cursos online sobre gestão ambiental e sustentabilidade.</p>
          <Button variant="primary">Ver Cursos</Button>
        </div>
        <div className="block" onClick={() => goToPage('foruns')} data-aos="zoom-in">
          <h2>Fóruns</h2>
          <p>Participe de discussões e compartilhe ideias com a comunidade.</p>
          <Button variant="primary">Ver Fóruns</Button>
        </div>
        <div className="block" onClick={() => goToPage('sistema-integrado')} data-aos="zoom-in">
          <h2>Sistema Integrado</h2>
          <p>Saiba mais sobre o Sistema Integrado de Gestão Ambiental (SIGA).</p>
          <Button variant="primary">Saiba Mais</Button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;