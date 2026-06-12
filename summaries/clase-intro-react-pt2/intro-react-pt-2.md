# Repaso de conceptos fundamentales de React

## ¿Qué es React?

React es una biblioteca de JavaScript para construir interfaces de usuario modernas, eficientes y reactivas. Permite crear componentes reutilizables que gestionan su propio estado y se actualizan automáticamente cuando los datos cambian.

## Componentes y JSX

- Los componentes son bloques reutilizables que representan partes de la interfaz.
- JSX es una extensión de JavaScript que permite escribir código similar a HTML dentro de JS.
- Todo componente debe devolver un único elemento padre.
- Los nombres de los componentes deben empezar con mayúscula.
- Los atributos usan camelCase y las expresiones JS se incluyen entre `{}`.

**Ejemplo:**

```jsx
function Perfil({ nombre, edad }) {
  return (
    <div className="perfil">
      <h2>{nombre}</h2>
      <p>Edad: {edad}</p>
    </div>
  );
}
```

## Props y Children

- Las props son datos que se pasan de un componente padre a uno hijo.
- `children` es una prop especial que representa el contenido anidado dentro de un componente.

**Ejemplo:**

```jsx
function Mensaje({ texto = "Hola mundo", children }) {
  return (
    <div>
      <p>{texto}</p>
      {children}
    </div>
  );
}
```

## Virtual DOM y gestión del DOM

- El Virtual DOM es una copia ligera del DOM real, mantenida en memoria por React.
- Cuando el estado de un componente cambia, React actualiza primero el Virtual DOM y luego solo los cambios mínimos en el DOM real.
- Esto hace que las actualizaciones sean rápidas y eficientes.

**Ejemplo:**

```jsx
function Contador() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
```

## Ciclo de vida de los componentes

- **Montaje:** El componente se crea y se inserta en el DOM.
- **Actualización:** Se actualiza cuando cambian sus props o estado.
- **Desmontaje:** Se elimina del DOM.

**Ejemplo con hooks:**

```jsx
import { useEffect } from "react";
function MiComponenteFuncional() {
  useEffect(() => {
    console.log("Montado");
    return () => {
      console.log("Desmontado");
    };
  }, []);
  return <div>Componente funcional</div>;
}
```

---

# El elemento main, el renderizado y el Virtual DOM

En React, el archivo principal suele ser `main.jsx` o `index.jsx`. Aquí se importa React, ReactDOM y el componente principal de la aplicación (por ejemplo, `Home`).

**Ejemplo de main.jsx:**

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
```

- `createRoot` inicializa el sistema de renderizado de React 18+.
- `render` monta el componente principal (`Home`) en el elemento HTML con id `root`.
- Todo lo que se renderiza dentro de `<Home />` se convierte en nodos del Virtual DOM.

## ¿Cómo se crea el Virtual DOM?

- Cuando escribimos JSX, React lo transforma en objetos JavaScript que representan nodos del Virtual DOM.
- Al cambiar el estado o las props, React actualiza el Virtual DOM y compara con el DOM real (reconciliación).
- Solo los cambios necesarios se aplican al DOM real, optimizando el rendimiento.

**Lo fundamental para el Virtual DOM:**

- Usar componentes y JSX.
- Gestionar el estado con hooks (`useState`, `useEffect`).
- Renderizar usando `ReactDOM.createRoot().render()`.

---

---

## ¿Qué es StrictMode en React?

`React.StrictMode` es un componente especial que ayuda a detectar problemas potenciales en la aplicación durante el desarrollo. No renderiza nada en la interfaz, pero activa comprobaciones y advertencias adicionales para sus hijos. Por ejemplo, detecta efectos secundarios inseguros, métodos obsoletos y duplicados de renderizado en modo desarrollo.

**Ejemplo de uso:**

```jsx
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

No es obligatorio, pero es recomendable para desarrollo.

---

## Usar setInterval para renderizar varias veces sin desmontar el componente

Si quieres actualizar el estado de un componente periódicamente (por ejemplo, un reloj), puedes usar `setInterval` dentro de un `useEffect` en el componente. Así, el componente se mantiene montado y solo se actualiza el estado.

**Ejemplo:**

```jsx
import React, { useState, useEffect } from "react";

function Reloj() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setHora(new Date());
    }, 1000);
    return () => clearInterval(timer); // Limpia el intervalo al desmontar
  }, []);

  return <div>{hora.toLocaleTimeString()}</div>;
}
```

El componente `Reloj` se actualiza cada segundo, pero nunca se desmonta mientras esté en pantalla.

---

## Diferencia con usar setInterval en el createRoot

Si usas `setInterval` fuera de React, por ejemplo directamente con `createRoot`, estarías renderizando toda la aplicación desde cero cada vez, lo cual no es eficiente ni recomendable.

**Ejemplo NO recomendado:**

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
setInterval(() => {
  root.render(<App />);
}, 1000);
```

Esto desmonta y vuelve a montar todos los componentes en cada intervalo, perdiendo el estado y el ciclo de vida de los componentes.

**Conclusión:**

- Usa `setInterval` dentro de los componentes con `useEffect` para actualizaciones periódicas sin desmontar.
- No uses `setInterval` con `createRoot` para re-renderizar toda la app, ya que pierdes el estado y el ciclo de vida.

---

¿Quieres ver un ejemplo más avanzado o alguna explicación extra? Consulta la [documentación oficial de React](https://react.dev/).
