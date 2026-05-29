import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import CardUser from './components/CardUser';

const nodeHtml = document.getElementById('root')
const vitualNodeHtml = ReactDOM.createRoot(nodeHtml)

let counter = 1
const usuarios = [{ name: `Estudiante ${counter}`, age: counter, job: 'n/a' }]

setInterval(() => {
  counter++

  usuarios.push(
    {
      name: `Estudiante ${counter}`, age: counter, job: 'n/a'
    }
  )

  vitualNodeHtml.render(
    <>
      {
        usuarios.map((user, index) => (
          < CardUser
            key={index}
            name={user.name}
            age={user.age}
            job={user.job}
          />)
        )}
    </>
  )

}, 2000)




