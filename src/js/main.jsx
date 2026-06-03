import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'
import BasicForm from './components/BasicForm';
import Shop from './components/Shop';

// components

const nodeHtml = document.getElementById('root')
const vitualNodeHtml = ReactDOM.createRoot(nodeHtml)


vitualNodeHtml.render(
  <Shop />
)





