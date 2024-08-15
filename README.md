# Paycommerce

## E-commerce Angular - Learning Angular 17/18

Este proyecto es un e-commerce desarrollado para aprender y explorar Angular 17/18. A través de la construcción de esta aplicación, se abordan varios conceptos y características clave de Angular, integrando funcionalidades avanzadas como pagos con Stripe y consumo de una API en Node.js.

## Tecnologías Utilizadas

- **Angular 17/18**: Framework principal utilizado para construir la aplicación.
- **Node.js**: Usado para la creación de la API que maneja la lógica del backend.
- **Tailwind CSS**: Utilizado para diseñar la interfaz de usuario de manera rápida y eficiente.
- **Stripe**: Integración para gestionar los pagos dentro de la aplicación.

## Temas y Conceptos Clave

### Signals

Los Signals son una nueva forma de manejar el estado y la reactividad en Angular, permitiendo un flujo de datos más predecible y fácil de seguir. En este proyecto, se utilizan Signals para gestionar cambios de estado y responder a eventos de manera eficiente.

[Aprende más sobre cómo manejar el estado y la reactividad con Signals en Angular](https://angular.dev/guide/signals#what-are-signals)

### rxjs-interop para Programación Reactiva

Con la integración de rxjs-interop, se facilita el uso de programación reactiva en Angular, combinando la potencia de RxJS con la nueva funcionalidad de Signals, mejorando la forma en que se manejan flujos de datos asíncronos.

[Descubre cómo integrar RxJS con Signals para una programación reactiva más eficiente](https://angular.dev/guide/signals/rxjs-interop)

### Input Signals

Los Input Signals permiten que los componentes reciban señales como entradas, proporcionando una manera reactiva y dinámica de manejar las propiedades de entrada en componentes.

[Consulta más detalles sobre el uso de Input Signals en Angular](https://angular.dev/guide/signals/inputs)

### NgRx Signals y Gestión de Estado

NgRx Signals se utiliza para la gestión de estado en la aplicación. Combina el poder de NgRx con la simplicidad de Signals, permitiendo un manejo de estado más eficiente y menos propenso a errores.

[Explora cómo NgRx Signals mejora la gestión de estado en Angular](https://ngrx.io/guide/signals)

### Interceptores

Se utilizan interceptores para manejar y modificar las solicitudes y respuestas HTTP, añadiendo capas de seguridad y manejando errores de manera centralizada.

[Obtén más información sobre el uso de interceptores en Angular](https://angular.dev/guide/http/interceptors)

### Nuevo Control Flow

El nuevo control flow en Angular facilita el manejo de estructuras de control como bucles y condiciones, haciéndolas más intuitivas y fáciles de seguir dentro de las plantillas.

[Aprende a utilizar el nuevo control flow en tus plantillas Angular](https://angular.dev/guide/templates/control-flow)

### runInInjectionContext

El `runInInjectionContext` permite ejecutar código dentro de un contexto de inyección específico, lo que facilita el manejo de dependencias y la ejecución de lógica que requiere acceso a proveedores inyectados.

[Descubre cómo ejecutar código dentro de contextos de inyección en Angular](https://angular.dev/api/core/runInInjectionContext)

### Standalone Components

El uso de componentes standalone permite crear componentes auto-suficientes que no dependen de módulos externos, simplificando la estructura de la aplicación y mejorando su rendimiento.

[Conoce más sobre los componentes standalone y cómo optimizan tu aplicación](https://angular.dev/guide/components/importing#standalone-components)

### SVG como Template

SVG se utiliza como template dentro de algunos componentes, permitiendo una mayor flexibilidad y control sobre el diseño gráfico de la aplicación.

[Aprende a integrar SVG como templates en Angular](https://angular.dev/guide/templates/svg-in-templates)

## Instalación y Uso

1. Clona el repositorio:

```bash
git clone https://github.com/dejeloper/paycommerce.git
```

2. Instala las dependencias:

```bash
pnpm install
```

3. Inicia la aplicación Angular:

```bash
ng serve
```

## Ejecución del Backend Node.js

Para que la integración con Stripe funcione correctamente, el proyecto de Node.js debe estar ejecutándose en paralelo con el frontend de Angular.

1. Abre una nueva terminal en la raíz del proyecto.
2. Navega a la carpeta donde se encuentra el proyecto de Node.js:

```bash
cd server/
```

3. Instala las dependencias del backend:

```bash
pnpm install
```

4. Inicia el servidor de Node.js:

```bash
 pnpm start
```

Mantén esta terminal abierta para asegurarte de que el servidor de Node.js sigue ejecutándose.

### Contribuciones

Este proyecto está en constante desarrollo como parte de mi aprendizaje en Angular. Si tienes sugerencias o quieres aportar, siéntete libre de abrir un issue o enviar un pull request.

¡Espero que este proyecto sea útil para cualquiera que desee aprender Angular 17/18 y explorar sus nuevas características!
