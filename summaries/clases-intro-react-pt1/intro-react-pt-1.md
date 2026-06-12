# Introducción a React

[Documentación oficial de React](https://react.dev/)

## ¿Qué es React?

React es una biblioteca de JavaScript desarrollada por Facebook para construir interfaces de usuario interactivas y eficientes, especialmente para aplicaciones web de una sola página (SPA). React permite crear componentes reutilizables que gestionan su propio estado y se actualizan de manera eficiente cuando los datos cambian.

## Creación de componentes

Los componentes seran secciones de codigos escritos en archivos jsx.

## ¿Qué es JSX?

**JSX** (JavaScript XML) es una extensión de sintaxis para JavaScript que permite escribir código similar a HTML dentro de archivos JavaScript. React usa JSX para describir cómo debe verse la interfaz de usuario.

### Normas de JSX y componentes

- Todo componente debe devolver un único elemento html padre en el return.
- Los nombres de los componentes deben comenzar con mayúscula (PascalCase).
- Las expresiones JavaScript se incluyen entre llaves `{}`.
- Los atributos en JSX usan camelCase (`onClick`, `className`).--> IGUAL QUE EL DOM
- No se puede usar `class`, se debe usar `className`.
- Los componentes deben ser funciones puras: no modifican sus props ni el estado global directamente.

### Ejemplo de componente correcto

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

Hay dos formas principales de crear componentes en React:

### 1. Componentes de función

```jsx
function Saludo(props) {
  return <h1>Hola, {props.nombre}</h1>;
}
```

### 2. Componentes de clase (DEPRECADO)

```jsx
class Saludo extends React.Component {
  render() {
    return <h1>Hola, {this.props.nombre}</h1>;
  }
}
```

## ¿Qué son las props?

Las **props** (propiedades) son datos que se pasan de un componente padre a un componente hijo. Permiten que los componentes sean reutilizables y configurables.

### Ejemplo de uso de props

```jsx
function Tarjeta(props) {
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>{props.contenido}</p>
    </div>
  );
}

// Uso:
<Tarjeta titulo="React" contenido="Biblioteca para interfaces" />;
```

### Props por defecto y `children`

- **children** es una prop especial que representa el contenido anidado dentro de un componente.
- Puedes definir props por defecto usando `defaultProps` en componentes de clase o valores por defecto en la función.

```jsx
function Mensaje({ texto = "Hola mundo", children }) {
  return (
    <div>
      <p>{texto}</p>
      {children}
    </div>
  );
}

// Uso:
<Mensaje texto="¡Bienvenido!">
  <span>Este es un mensaje adicional.</span>
</Mensaje>;
```

## Gestión del DOM y el Virtual DOM

El **DOM** (Document Object Model) es la representación estructurada de los elementos HTML en una página web. Manipular el DOM directamente puede ser costoso en términos de rendimiento, especialmente cuando hay muchos cambios.

React introduce el concepto de **Virtual DOM**:

- El Virtual DOM es una copia ligera del DOM real, mantenida en memoria por React.
- Cuando el estado de un componente cambia, React actualiza primero el Virtual DOM.
- Luego, compara el Virtual DOM con el DOM real (proceso llamado "reconciliación") y realiza solo los cambios mínimos necesarios en el DOM real.

Esto hace que las actualizaciones sean mucho más rápidas y eficientes.

### Ejemplo de actualización del Virtual DOM

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

Cuando haces clic en el botón, solo el texto del contador se actualiza en el DOM real, gracias al Virtual DOM.

## Ciclo de vida de los componentes

El ciclo de vida de un componente en React describe las etapas por las que pasa un componente desde su creación hasta su destrucción:

1. **Montaje (Mounting):** El componente se crea y se inserta en el DOM.
2. **Actualización (Updating):** El componente se actualiza cuando cambian sus props o estado.
3. **Desmontaje (Unmounting):** El componente se elimina del DOM.

![alt text](../src/img/image.png)
[Diagrama ciclo vida](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

### Ciclo de vida en componentes funcionales (Hooks)

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

## Resumen

React es una herramienta poderosa para crear interfaces de usuario modernas y eficientes. Su uso del Virtual DOM, el ciclo de vida de los componentes, las props y JSX lo hacen flexible y fácil de aprender. Para más información, consulta la [documentación oficial de React](https://react.dev/).
