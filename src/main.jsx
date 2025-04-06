import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import RouterComponent from './routes/Router.jsx';
const root =  createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
      <RouterComponent />
  </StrictMode> 
)
