# Video App

Este proyecto es una aplicación de gestión de videos, que permite clasificar videos en categorías, eliminarlos, y editarlos mediante un formulario emergente (modal). Está desarrollado en **React** y utiliza **CSS** para el diseño visual.

## Características principales

- Mostrar videos agrupados por categorías.
- Eliminar videos de la lista.
- Editar videos a través de un modal con formulario interactivo.
- Diseño modular con componentes reutilizables.

## Estructura del proyecto

La aplicación está dividida en los siguientes componentes principales:

1. **App.js**: Punto de entrada de la aplicación. Administra el estado global, como las categorías, los videos y la lógica para eliminar o editar un video.
2. **Header**: Muestra la cabecera de la aplicación.
3. **Banner**: Contiene el banner principal.
4. **Categorias**: Administra las categorías y lista los videos que pertenecen a cada una.
5. **Cards**: Componente individual para cada video, con opciones para borrar o editar.
6. **Modal**: Formulario emergente para editar los datos de un video seleccionado.
7. **Footer**: Pie de página de la aplicación.

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. Clona este repositorio:

```bash
https://github.com/tu_usuario/video-app.git
```

2. Navega al directorio del proyecto:

```bash
cd video-app
```

3. Instala las dependencias necesarias:

```bash
npm install
```

4. Inicia el servidor de desarrollo:

```bash
npm start
```

5. Abre la aplicación en tu navegador en `http://localhost:3000`.

## Uso

### Crear nuevas categorías
Actualmente las categorías están predefinidas en el archivo **App.js**. Para agregar nuevas categorías, edita el estado inicial `categorias` dentro de ese archivo.

### Agregar, eliminar y editar videos
- Cada video pertenece a una categoría específica y se muestra como una tarjeta (card).
- Para **eliminar** un video, haz clic en el botón **Borrar** en la tarjeta correspondiente.
- Para **editar** un video, haz clic en el botón **Editar**, actualiza los campos en el formulario emergente y guarda los cambios.

## Archivos clave

### App.js
Gestión del estado global, como las categorías y los videos, y manejo del modal de edición.

### Modal.js
Formulario emergente para editar videos. Utiliza los siguientes subcomponentes:
- **CampoTexto**: Para entradas de texto.
- **ListaOpciones**: Desplegable para seleccionar una categoría.
- **Boton**: Botón de envío.

### Cards.js
Componente que muestra cada video y sus opciones de interacción (borrar/editar).

## Tecnologías utilizadas

- **React**: Biblioteca para construir la interfaz de usuario.
- **CSS**: Para el diseño visual y la estilización.
- **UUID**: Para generar identificadores únicos.

## Próximas mejoras

- **Funcionalidad de agregar videos**: Implementar un formulario para agregar nuevos videos a las categorías existentes.
- **Persistencia de datos**: Integrar una base de datos o almacenamiento local para guardar los videos.
- **Responsive Design**: Mejorar el diseño para dispositivos móviles.


---

¡Gracias por usar esta aplicación! Si tienes preguntas o sugerencias, no dudes en abrir un issue en el repositorio.

