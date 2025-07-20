# Relación entre JSON y componentes en React + Vite

El archivo `src/data/buhos.json` contiene los datos de los personajes del videojuego. Este archivo es importado directamente en el componente `BuhosList.jsx` usando la sintaxis:

```js
import buhos from './data/buhos.json';
```

Luego, en `BuhosList.jsx`, se recorre el arreglo de búhos y se renderiza cada uno como una tarjeta visual:

```jsx
buhos.map((buho) => (
  <div key={buho.id}>
    <img src={buho.img} alt={buho.nombre} />
    <h3>{buho.nombre}</h3>
    <p>{buho.descripcion}</p>
  </div>
))
```

El componente `BuhosList` es importado y usado en `App.jsx`, por lo que los datos del JSON aparecen en la pantalla principal de la app:

```js
import BuhosList from './BuhosList.jsx';
...
<BuhosList />
```

## Diagrama de flujo

```
[buhos.json] → [BuhosList.jsx] → [App.jsx] → Pantalla
```

- **buhos.json**: almacena los datos.
- **BuhosList.jsx**: importa el JSON y lo transforma en componentes visuales.
- **App.jsx**: integra el listado en la interfaz principal.

Así, cualquier cambio en el JSON se refleja automáticamente en la interfaz.
