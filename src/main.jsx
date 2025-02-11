import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.scss';
import Appli from './composants/Appli.jsx';

createRoot(document.getElementById('racine')).render(
  <StrictMode>
    <Appli />
  </StrictMode>,
)
