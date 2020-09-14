import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Importação do Materialize CSS
 */
import 'materialize-css/dist/css/materialize.min.css';

import './index.css';

import Span from './components/Span';
import Button from './components/Button';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <h1 className="center">Controle Finanaceiro Pessoal</h1>
      <div className="row">
        <Button icon="arrow_back" align="material-icons center" />
        <Button icon="arrow_forward" align="material-icons center" />
      </div>
      <div className="row">
        <Span label="Lançamentos" number="54646" />
        <Span
          label="Receitas"
          number="54646"
          color="green-text text-darken-1"
        />
        <Span label="Despesas" number="54646" color="red-text text-darken-1" />
        <Span label="Saldo" number="54646" />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
