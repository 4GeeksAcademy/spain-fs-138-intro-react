# ¿Qué son los Hooks en React?

Los **Hooks** son funciones especiales que ofrece React para que puedas usar estado y otras características avanzadas en componentes funcionales. Antes de los hooks, solo los componentes de clase podían tener estado y ciclo de vida. Ahora, con los hooks, puedes hacer lo mismo de forma más sencilla y moderna.

## ¿Por qué son importantes los Hooks?

- Permiten escribir componentes más simples y reutilizables.
- Facilitan la gestión del estado y los efectos secundarios.
- Evitan la necesidad de usar clases en la mayoría de los casos.

---

## useState

El hook `useState` te permite crear y gestionar variables de estado en tus componentes funcionales. El estado es información que puede cambiar con el tiempo (por ejemplo, un contador, un texto, etc.).

**Ejemplo básico:**

```jsx
import React, { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0); // contador es el valor, setContador la función para cambiarlo

  return (
    <div>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
```

- `useState(0)` inicializa el estado en 0.
- `contador` es el valor actual.
- `setContador` es la función para actualizar el valor.

---

## useEffect

El hook `useEffect` te permite ejecutar código cuando el componente se monta, se actualiza o se desmonta. Es útil para efectos secundarios como peticiones a APIs, temporizadores, suscripciones, etc.

**Ejemplo básico:**

```jsx
import React, { useState, useEffect } from "react";

function Reloj() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setHora(new Date());
    }, 1000);
    return () => clearInterval(timer); // Limpia el intervalo al desmontar
  }, []); // [] significa que solo se ejecuta al montar y desmontar

  return <div>{hora.toLocaleTimeString()}</div>;
}
```

- El primer argumento de `useEffect` es una función que se ejecuta después de renderizar.
- El segundo argumento (arreglo de dependencias) indica cuándo debe ejecutarse el efecto.
- Si el arreglo está vacío (`[]`), solo se ejecuta al montar y desmontar.

---

## Resumen

- Los hooks permiten usar estado y ciclo de vida en componentes funcionales.
- `useState` sirve para crear y actualizar variables de estado.
- `useEffect` sirve para ejecutar código en momentos específicos del ciclo de vida.

Para más información, consulta la [documentación oficial de React Hooks](https://react.dev/reference/react/hooks).
