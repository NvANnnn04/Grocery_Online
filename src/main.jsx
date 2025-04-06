import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RouterComponent from './routes/Router.jsx';
const root =  createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <RouterComponent />
    </BrowserRouter>
  </StrictMode> 
)
