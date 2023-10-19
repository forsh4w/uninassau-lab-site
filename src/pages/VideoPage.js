import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import BackLink from '../components/BackLink';
import '../css/responsive.css';
import '../css/VideoPage.css';
import videoUrl from '../assets/ibama.webm'

const VideoPage = ({ courseTitle }) => {
  return (
    <div className="video-page">
      <BackLink to="/cursos" text="Voltar para Cursos" />
      <h1>Aula 1</h1>
      <div className="video-container">
        <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
      </div>
    </div>
  );
}

export default VideoPage;