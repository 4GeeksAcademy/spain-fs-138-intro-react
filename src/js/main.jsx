import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'
import PostCrudWithOutFetch from './components/PostCrudWithOutFetch';
import PostCrudWithFetch from './components/PostCrudWithFetch';

// components

const nodeHtml = document.getElementById('root')
const vitualNodeHtml = ReactDOM.createRoot(nodeHtml)


vitualNodeHtml.render(
  <PostCrudWithFetch />
)





