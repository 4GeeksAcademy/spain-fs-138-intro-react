# Guía práctica para principiantes: Cliente-Servidor, Frontend/Backend, REST, CRUD y Fetch

> Una guía paso a paso en español pensada para personas que están
> empezando en desarrollo web. Incluye teoría, ejemplos prácticos con
> `fetch`, promesas (`then` y `async/await`), `Promise.all` y una
> metodología recomendada para trabajar con APIs REST desde React.

---

## Índice

1.  Cliente --- servidor: ¿qué es y diferencias entre frontend y
    backend?
2.  ¿Qué es una API REST? ¿Y un CRUD?
3.  La función `fetch`: cómo funciona y ejemplos CRUD (GET, POST,
    PUT/PATCH, DELETE)
4.  Promesas en JavaScript: `.then()` vs `async/await`
5.  `Promise.all` y cuándo usarlo
6.  Metodología práctica para trabajar con APIs REST en React (para
    hacer CRUD)
7.  Buenas prácticas, errores comunes y recomendaciones

---

## 1. Cliente --- servidor: diferencias entre frontend y backend

- **Cliente**: el navegador o app que usa el usuario. Maneja la UI.
- **Servidor**: procesa lógica, bases de datos, autenticación.
- **Frontend** = interfaz del usuario.
- **Backend** = lógica, seguridad, acceso a datos.

---

## 2. ¿Qué es una API REST? ¿Y un CRUD?

- **API**: interfaz para comunicar sistemas.
- **REST**: arquitectura basada en HTTP, rutas y métodos.
- **CRUD**:
  - Create → POST\
  - Read → GET\
  - Update → PUT/PATCH\
  - Delete → DELETE

## 2.1. ¿Qué son los códigos de estado HTTP (codeStatus)?

Cuando trabajas con APIs REST y la función `fetch`, el servidor responde con un **código de estado HTTP**. Estos códigos indican si la petición fue exitosa o si hubo algún error. Los más importantes son:

- **200 OK**: Todo salió bien, la respuesta contiene los datos solicitados.
- **201 Created**: Recurso creado correctamente (usado en POST).
- **204 No Content**: Operación exitosa, pero sin datos en la respuesta (usado en DELETE o actualizaciones).
- **400 Bad Request**: La petición tiene errores (por ejemplo, datos inválidos).
- **401 Unauthorized**: Falta autenticación o token.
- **403 Forbidden**: No tienes permisos para acceder al recurso.
- **404 Not Found**: El recurso no existe.
- **500 Internal Server Error**: Error inesperado en el servidor.

> **Tip:** Siempre revisa el código de estado con `res.ok` o `res.status` para manejar errores correctamente.

## 3. La función `fetch`: cómo funcionan las peticiones y ejemplos CRUD

### Ejemplo GET

```js
async function getUsers() {
  const res = await fetch("https://api.ejemplo.com/users");
  if (!res.ok) throw new Error("Error al obtener usuarios");
  return res.json();
}
```

### Ejemplo POST

```js
async function createUser(data) {
  const res = await fetch("https://api.ejemplo.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
```

### Ejemplo PUT/PATCH

```js
async function updateUser(id, data) {
  const res = await fetch(`https://api.ejemplo.com/users/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
```

### Ejemplo DELETE

```js
async function deleteUser(id) {
  return fetch(`https://api.ejemplo.com/users/${id}`, { method: "DELETE" });
}
```

---

## 4. Promesas: `.then()` y `async/await`

### `.then()`

```js
fetch("/api/data")
  .then((r) => r.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

### `async/await`

```js
async function load() {
  try {
    const res = await fetch("/api/data");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

---

## 5. Promise.all

```js
const a = fetch("/a").then((r) => r.json());
const b = fetch("/b").then((r) => r.json());

const results = await Promise.all([a, b]);
```

---

## 6. Metodología en React para trabajar con APIs REST

1.  Crear un servicio API (`/api/users.js`)
2.  Crear hooks personalizados (`useUsers`)
3.  Controlar estados: `loading`, `error`, `data`
4.  Componentes que usan el hook
5.  Mutaciones (crear, editar, borrar) + refrescar datos
6.  Manejo de errores y validaciones

---

## 7. Buenas prácticas

- Siempre validar `res.ok`.
- Manejar errores con `try/catch`.
- Separar lógica de API del componente.

---
