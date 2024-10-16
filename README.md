# lista-tareas - node

Este es un proyecto de consola desarrollado en Node.js para la gestión de tareas pendientes. El objetivo del proyecto es crear, listar, completar y eliminar tareas, con un sistema de persistencia de datos en un archivo JSON.

## Funcionalidades

- **Crear una nueva tarea**: El usuario puede agregar una nueva tarea con una descripción.
- **Listar todas las tareas**: Muestra un listado completo de las tareas almacenadas.
- **Listar tareas completadas o pendientes**: Permite filtrar las tareas para mostrar solo las completadas o las que están pendientes.
- **Eliminar tareas**: El usuario puede eliminar una tarea seleccionada del listado.
- **Persistencia de datos**: Las tareas se guardan en un archivo `data.json` para que no se pierdan al cerrar el programa.

## Requisitos

- Node.js (v14 o superior)
- Dependencias gestionadas con `npm`

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/danieldelahoz2212/lista-tareas.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd proyecto-tareas
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

## Estructura del Proyecto

```bash
├── db
│   └── data.json           # Archivo JSON donde se almacenan las tareas
├── helpers
│   ├── inquirer.js         # Manejo de prompts con inquirer.js
│   └── saveFile.js         # Funciones para leer y escribir en data.json
├── models
│   ├── tarea.js            # Clase Tarea para gestionar cada tarea individual
│   └── tareas.js           # Clase Tareas para gestionar el listado de tareas
├── app.js                  # Archivo principal de la aplicación
├── .gitignore              # Ignora archivos innecesarios como data.json
└── package.json            # Dependencias y configuración del proyecto
```

## Uso

Para iniciar la aplicación de tareas, utiliza el siguiente comando:

```bash
node app.js
```
