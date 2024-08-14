import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp.jsx';
//importamos aquí el styles, en el componente de entrada (padre) de la aplicación, para que se aplique a todo
import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>
);
