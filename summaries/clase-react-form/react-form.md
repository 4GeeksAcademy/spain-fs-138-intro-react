# Formularios en React para principiantes

En React, los formularios se utilizan para recoger información del usuario, como textos, números, correos, etc. A diferencia de HTML tradicional, en React gestionamos los valores de los inputs mediante el estado del componente.

## ¿Cómo funciona un formulario en React?

1. Creamos un estado para cada campo del formulario usando `useState`.
2. Asociamos el valor del input al estado.
3. Actualizamos el estado cada vez que el usuario escribe en el input usando el evento `onChange`.
4. Al enviar el formulario, gestionamos los datos desde React y evitamos el comportamiento por defecto del navegador.

**Ejemplo básico:**

```jsx
import React, { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    alert(`Hola, ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Escribe tu nombre"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

## ¿Por qué usamos el evento `preventDefault`?

En los formularios HTML tradicionales, al hacer submit, el navegador recarga la página y envía los datos. En React, queremos controlar el proceso y evitar que la página se recargue. Por eso usamos `e.preventDefault()` en el manejador de envío (`onSubmit`). Así podemos procesar los datos, validarlos, enviarlos a una API, etc., sin perder el estado ni la interfaz.

**Resumen:**

- Los formularios en React se gestionan con estado y eventos.
- Usamos `preventDefault` para evitar la recarga y controlar el flujo desde JavaScript.

---

## ¿Por qué al presionar Enter en un input se ejecuta el onSubmit?

En HTML y React, cuando tienes un formulario (`<form>`) con un input, al presionar la tecla Enter dentro de ese input, el navegador interpreta que quieres enviar el formulario. Por eso, automáticamente se dispara el evento `onSubmit` del formulario, igual que si hubieras hecho clic en el botón de enviar.

Esto es el comportamiento estándar de los formularios en la web y React lo respeta para mantener la accesibilidad y la experiencia de usuario. Así, puedes enviar el formulario fácilmente usando el teclado, sin necesidad de hacer clic en el botón.

**Resumen:**

- Presionar Enter en un input dentro de un formulario ejecuta el `onSubmit`.
- Es útil para accesibilidad y rapidez al interactuar con formularios.
