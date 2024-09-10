# Checklist del Proyecto

1. Inicialización del Proyecto {cm:2024-09-09}
  - Instalar Bun y Vite para crear el entorno de desarrollo.
  - Crear el proyecto base con Vite y React con TypeScript. {cm:2024-09-09}
    ```bash {cm:2024-09-09}
    bun create vite nombre-proyecto --template react-ts {cm:2024-09-09}
    ``` {cm:2024-09-09}
  - Configurar el entorno para que todo funcione correctamente con Bun en lugar de Node.js. {cm:2024-09-09}
  - Asegúrate de tener configurado ESLint y Prettier para mantener un código limpio y legible. {cm:2024-09-09}

2. Conexión a la API (PokeAPI) {cm:2024-09-09}
  - Crear un hook personalizado (usePokemonData) para gestionar la conexión a la API. {cm:2024-09-09}
  - Implementar la lógica de paginación con un scroll infinito (paginación de 30). {cm:2024-09-09}
  - Implementar un sistema de loading (ícono de carga) mientras se obtienen los datos de la API. {cm:2024-09-09}

3. Renderizado de Tarjetas de Pokémon {cm:2024-09-09}
  - Diseñar el componente PokemonCard basado en el ejemplo proporcionado. {cm:2024-09-09}
  - Mostrar la imagen SVG de cada Pokémon en la tarjeta. {cm:2024-09-09}
  - Si no hay imagen, mostrar una imagen de "placeholder" por defecto. {cm:2024-09-09}
  - Implementar el color de fondo dinámico según el tipo de Pokémon (tipos como Grass, Poison, etc.).
  - Asegurarse de que los colores sean consistentes para los tipos, pero aleatorios dentro de un mismo tipo.

4. Scroll Infinito con Paginación {cm:2024-09-09}
  - Implementar el scroll infinito con React para cargar más Pokémon al acercarse al final de la lista. {cm:2024-09-09}
  - Hacer que cada carga de 30 Pokémon muestre un ícono de "cargando" mientras la información llega de la API. {cm:2024-09-09}

5. Popup con Detalles del Pokémon
  - Implementar un popup modal que se despliegue al hacer clic en una tarjeta de Pokémon.
  - Mostrar estadísticas detalladas y el nombre de los lugares donde se puede encontrar el Pokémon.
  - Incluir un botón para cerrar el popup.

6. Panel de Estadísticas
  - Crear un panel de estadísticas con un diagrama de barras y un gráfico circular.
    - Diagrama de barras: Mostrar la cantidad de Pokémon por tipo.
    - Gráfico circular: Mostrar el porcentaje de Pokémon por tipo.
  - Incluir un filtro para que al hacer clic en una barra o porción del gráfico, se filtren las tarjetas según el tipo seleccionado.

7. Subida del Proyecto
  - Subir el código a un repositorio en GitHub, Gitlab, Bitbucket o similar.
  - Incluir un archivo README con las instrucciones de instalación y ejecución.
  - Añadir en el README las librerías, templates y componentes de terceros que fueron utilizados.

# bun run dev