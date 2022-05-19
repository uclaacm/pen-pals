import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import App from './components/App';
import Congratulations from './components/Congratulations';

ReactDOM.render(
  <StrictMode>

    <Congratulations />
  </StrictMode>,
  document.getElementById('root')
);
