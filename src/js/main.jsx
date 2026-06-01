import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import SecondCounter from './components/SecondCounter';
import Counter from './components/Counter';

const nodeHtml = document.getElementById('root')
const vitualNodeHtml = ReactDOM.createRoot(nodeHtml)


vitualNodeHtml.render(
  <SecondCounter />
)





