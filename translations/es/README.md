[![Abre en GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=526682619)

# ¡Crea tu portafolio web usando Javascript, GitHub Codespaces y Copilot!

_Crea, personaliza e implementa tu propio portafolio web en minutos._  ✨

En esta plantilla tenemos el entorno de desarrollo y una base predeterminada lista para usar. Con todo esto, podrás iniciar inmediatamente tu [Codespace](https://github.com/features/codespaces) y personalizar tu página web usando [Copilot](https://copilot.github.com) para que puedas escribir código de forma más rápida. 

* **¿Para quién es esto?** __Para cualquier persona__ que este buscando crear su portafolio web, desee aprender sobre desarrollo web o probar Codespaces.
* **¿Qué experiencia necesitas?** __Cero experiencia__. Tú decides cuánto deseas personalizar basado en tu experiencia y tiempo disponible. 
* **Herramientas necesarias:** _Ninguna_. ¡No es necesario instalar nada! Todo lo que necesita es un navegador web.
* **Prerrequisitos:** _Ninguno_. Esta plantilla incluye el entorno de desarrollo y la aplicación web implementable para que puedas crear tu sitio web.

## Sobre esta plantilla de Portafolio web

En esta plantilla podrás "elegir tu propia aventura": tenemos una aplicación web basada en [React](https://reactjs.org/) lista para que puedas personalizarla e implementarla fácilmente utilizando solo tu navegador web.

![Aplicación web de perfil JavaScript](/__images__/js-portfolio-site.gif "Aplicación web de perfil JavaScript")

### Inicio rápido

1. Haz clic en el botón **Use this Template** o **Usar esta plantilla** y luego en el botón **Create a new repository** o **Crear un nuevo repositorio**
2. Selecciona el propietario del repositorio (por ejemplo, tu cuenta de GitHub).
3. Escribe un nombre único para el nuevo repositorio.
4. Haz clic en el botón **Code** o **Código**
5. Haz clic en el botón **Crear codespace en el botón principal** o **Create Codespace on main**.
1. [Personaliza el sitio de tu portafolio](#-personaliza-tu-página-web-en-3-pasos)
1. [Sube tu Portafolio a la nube](#-subir-tu-aplicación-web)


<details>
   <summary><b>🎥 Para aprender más sobre Codespaces, ve nuestra serie de tutoriales grabados.</b></summary>
   
   [![Tutorial de Codespaces](https://img.youtube.com/vi/ozuDPmcC1io/0.jpg)](https://aka.ms/CodespacesVideoTutorial "Codespaces Tutorial")
</details>

<br />

## 🗃️ Plantilla: Tu portafolio web con JavaScript

Este repositorio es una plantilla de GitHub para crear una aplicación web frontend de portafolio personal utilizando el framework React. **El objetivo es darte una plantilla que puedas utilizarla inmediatamente para crear tu propia página web a través de Codespaces.**

El repositorio contiene lo siguiente:

* `/.devcontainer`
  - `.devcontainer/Dockerfile`: Archivo de configuración utilizado por Codespaces para determinar el sistema operativo y otros detalles.
  - `.devcontainer/devcontainer.json`: Archivo de configuración utilizado por Codespaces para configurar las opciones de Visual Studio Code, como la habilitación de extensiones adicionales.
* `/src`: Archivos HTML, JS y CSS utilizados para construir tu Portafolio web.
* `.eslintrc`: Configuración de [ESLint](https://eslint.org/)</a> que se incluye para la coherencia y la calidad del código.
* `.prettierrc`: Configuración de [Prettier](https://prettier.io/) que se utiliza para dar formato al código.
* `package.json` y `package-lock.json`: Define la información del proyecto para [Node.js](https://nodejs.org/), los paquetes dependientes y las versiones necesarias de cada uno.

<br />

## 🚀 ¡Comencemos!

Este portafolio web está lleno de datos de ejemplo para que puedas abrirlo inmediatamente en Codespaces, verlo en ejecución y subirlo a la nube en cualquier momento.

Tu entorno de desarrollo está listo para que pueda comenzar. Basado en nuestra [Plantilla de JavaScript (React) con Codespace](https://github.com/microsoft/codespaces-teaching-template-js), esto es lo que ya está configurado y listo para su uso:

* Una aplicación simple de [React](https://reactjs.org/) con componentes para cada sección del Portafolio web
* [Parcel](https://parceljs.org/)  para crear tu página web cuando la subas a la nube. 
* Subrayado y formateado de Codigo utilizando  [ESLint](https://eslint.org/) y [Prettier](https://prettier.io/) para consistencia en el codigo.

### Crea tu Portafolio

1. Crea un repositorio a partir de esta plantilla. Usa este [link para crear el repositorio](https://github.com/microsoft/codespaces-teaching-template-js/generate). Selecciona el propietario del repositorio, proporciona un nombre, una descripción si lo deseas y selecciona si tu nuevo repositorio será público o privado.
2. Antes de crear el Codespace, habilita GitHub Copilot para tu cuenta. Si no está habilitado, dale una mirada a [Personaliza tu Portafolio web usando Copilot](#-customize-your-site-in-3-steps).
3. Dirigete a la página principal del repositorio creado.
3. Debajo del nombre del repositorio, usa el menú desplegable del Código y, en la pestaña de Codespaces selecciona "Create codespace on main".

    <img src="./__images__/createcodespace.png" alt="Crea tu codespace" style="width:270px;"/>
    
4. Espera mientras GitHub inicializa el Codespace.

    <img src="https://user-images.githubusercontent.com/82035/194710065-92f8c325-6f57-4c77-88d7-da8db3c235e9.png" alt="Iniciando el Codespace" style="width: 600px;"/>
    
5. Cuando haya terminado, verás que tu Codespace comenzará con una sección de terminal en la parte inferior. Codespaces instalará todas las extensiones requeridas en tu contenedor, luego verás `npm install` ejecutando. Después de que se complete la instalación de paquetes, ve a la terminal y escribe `npm run start` para iniciar tu aplicación web en tu Codespace.

   Cuando se inicie la aplicación web, verás un mensaje que te indicará que se inició correctamente en el puerto 1234 dentro de tu Codespace:

   <img src="https://user-images.githubusercontent.com/82035/220460347-605293ba-d3d1-483a-8157-71eaabb7ef52.png" alt="Aplicación web iniciada en puerto 1234" style="width: 300px;"/>

<br />

## ✨ Personaliza tu página web en 3 pasos

Este proyecto está diseñado para ser fácilmente personalizable. Cada sección del sitio es un componente separado, y tu información debe establecerse en un solo lugar. Esto no es solo para facilitar la actualización, sino para que puedas ver cómo se pasan los Prop values a los componentes de React.

**Para cada paso, abre el proyecto en Codespaces, luego puedes realizar y confirmar cambios mientras estás dentro de tu Codespace.**

>  Consulta el [uso del control de código fuente en tu codespace](https://docs.github.com/en/codespaces/developing-in-codespaces/using-source-control-in-your-codespace) para obtener más instrucciones sobre el control de código fuente de Codespaces.

### 1️⃣ Agrega tu "Sobre mí" y tus redes sociales

Dentro de `App.jsx` verás una variable llamada `siteProps`. Este es un objeto JavaScript que contiene los pares de valores clave necesarios para personalizar tu nombre, título, correo electrónico y cuentas de redes sociales.

```javascript
const siteProps = {
  name: "Alexandrie Grenier",
  title: "Web Designer & Content Creator",
  email: "alex@example.com",
  gitHub: "microsoft",
  instagram: "microsoft",
  linkedIn: "satyanadella",
  medium: "",
  twitter: "microsoft",
  youTube: "microsoft",
};
```

Actualiza el nombre y el título que quieras que aparezcan en la parte superior de tu sitio web.

_Optional values_ (valores opcionales) son la dirección de correo electrónico y redes sociales. Estos se utilizan en el componente 'Pie de página'. Si algún elemento no está incluido en la lista, o establecido en una cadena vacía (""), no mostrará el ícono y el vínculo.

### 2️⃣ Sube imagenes

**Este portafolio web incluye 3 imágenes**: un fondo para la sección superior, un fondo para la sección "Sobre mí" y uno para la sección de portafolio (escritorio). Estas pueden ser cualquier imagen de tamaño **horizontal** a tu elección de tu propia colección, o que tenga una licencia que le permita usar sin atribución.

Un par de sitios posibles para encontrar fotos son [Pixabay](https://pixabay.com/) y [Unsplash](https://unsplash.com). Fotos, ilustraciones, vectores, ¡tú eliges! Cuando encuentres tus imágenes, guarda cada una en `/src/images` con un nombre de archivo corto y significativo.

Ve a los siguientes componentes para actualizar la línea `import image...` haciendo referencia a la nueva imagen que descargaste para esa sección:

* `Home.jsx` - es la parte superior de la página, la imagen principal que verás cuando se cargue el sitio (mujer de pie junto a la pared del servidor en la muestra)
   ```javascript
      import image from "../images/server-wall.jpg";
   ```
* `About.jsx` - fondo detrás de la sección detallada "Sobre mí" (mosaico abstracto en la muestra)
   ```javascript
      import image from "../images/mosaic.svg";
   ```
* `Portfolio.jsx`- Imagen resaltada en el lado izquierdo de la sección (foto de escritorio de diseño en muestra)
   ```javascript
      import image from "../images/design-desk.jpeg";
   ```

### 3️⃣ Agrega proyectos en los que has trabajado

La sección 'About' _(sobre mi)_ ayuda a dar a las personas un poco más de información acerca de tus habilidades y pasiones. En `/src/Components/About.jsx` encontrarás dos valores que deben ser actualizados:

* `description`: una o dos oraciones cortas describiendote, tus metas en la carrera y/o pasiones.
* `detailOrQuote`: un bloque más largo para añadir más detalles sobre tí, om si gustas, citar una frase que te guste.

La segunda sección que deberás actualizar es la sección del Portafolio, donde resaltarás los proyectos que realizaste. Pueden ser artículos, videos. diseño de logos, poyectos de GitHub, ¡todo lo que te haga resaltar!

Ve a `/src/Components/Portfolio.jsx` a la variable `projectList`. Este es un arreglo de objetos de JavaScript. Cada cosa que quieras resaltar necesita: título, descripción y una URL.

Este ejemplo tiene 4, pero la cantidad que incluyas depende de ti.

```javascript
const projectList = [
  {
    title: "10 Things to know about Azure Static Web Apps 🎉",
    description: "Collaboration to create a beginner friendly....",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Web Development for Beginners",
    description: "Contributed sketch note imagery to accompany...",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "My Resume Site",
    description: "Created from Microsoft's resume workshop...",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "GitHub Codespaces and GitHub.dev",
    description: "Video interview to explain when to use GitHub.dev...",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];
```

<br/>

## 🏃 Subir tu aplicación web

El proyecto incluye la configuración necesaria para implementar **gratis** en [Azure Static Web Apps](https://azure.microsoft.com/products/app-service/static/?WT.mc_id=academic-79839-sagibbon) _**o**_ [GitHub Pages](https://pages.github.com/)</a>. Las instrucciones para ambas se encuentran a continuación:

### Azure Static Web Apps

[Azure Static Web Apps](https://azure.microsoft.com/products/app-service/static/?WT.mc_id=academic-79839-sagibbon) es la solución de hospedaje de Microsoft para sitios estáticos (o sitios que se representan en el navegador del usuario, no en un servidor) a través de Azure. Este servicio ofrece oportunidades adicionales para expandir tu sitio a través de Azure Functions, autenticación, versiones provisionales y ¡mucho más!.

Necesitarás cuentas de Azure y GitHub para implementar la aplicación web. Si aún no tienes una cuenta de Azure, puedes crearla durante el proceso de implementación o desde los siguientes vínculos:

* [Crea una cuenta de Azure para estudiantes (no necesitas tarjeta de crédito).](https://azure.microsoft.com/free/students/?WT.mc_id=academic-79839-sagibbon)
* [Crea una nueva cuenta de Azure.](https://azure.microsoft.com/?WT.mc_id=academic-79839-sagibbon)

Con tu proyecto abierto en Codespaces:

1. Haz clic en el ícono de Azure en la barra lateral izquierda. Inicia sesión si aún no lo has hecho y, si eres nuevo en Azure, sigue las indicaciones para crear tu cuenta.
1. En el menú Azure, haz clic en el signo "+" y, a continuación, en "Create Static Web App".
1. Si no has iniciado sesión en GitHub, se te pedirá que inicies sesión. Si tienes algún cambio de archivo pendiente, se te pedirá que confirmes esos cambios.
1. Ingresa la información de tu aplicación cuando se te solicite:
    1. **Región**: Elige el más cercano a ti.
    1. **Estructura del proyecto**: selecciona "React".
    1. **Ubicación del código de aplicación**: `/`
    1. **Ubicación de compliación**: `dist`
1. Cuando hayas terminado, verás una notificación en la parte inferior de la pantalla y se agregará un nuevo flujo de trabajo de GitHub Action a tu proyecto. Si haces click en "Open Action in GitHub" (Abrir accción en GitHub), verás la acción que se creó para tí y que se está ejecutando en el momento.

![Azure Static Web App deploy](/__images__/swa-deploy.gif "despliegue de Azure Static Web Apps")

1. Para ver el estado de tu despliegue, busca tu recurso de Static Web App en la pestaña de Azure en la barra izquierda de VS Code.
1. Una vez que el despliegue haya sido completado, podrás ver tu aplicación nueva al hacer click derecho en tu recurso de Static Web App y seleccionando "Browse Site" (Navegar por el sitio).

> **¿Problemas?** Cuando creas tu Static Web App, si te piden seleccionar una suscripción de Azure y no puedes hacerlo, revisa la pestaña "Accounts" (Cuentas) en VS Code. Asegúrate de escoger las opciones "Permitir acceso a..." si es que aparecen. En caso de recibir el mensaje "RepositoryToken is invalid. ..." (El token del repositorio es inválido...), cambia al Visual Studio Code para web (vscode.dev) y repite los pasos.

> 🤩 **Bonus**: [Crea un dominio personalizado para tu Azure Static Web App](https://learn.microsoft.com/en-us/shows/azure-tips-and-tricks-static-web-apps/how-to-set-up-a-custom-domain-name-in-azure-static-web-apps-10-of-16--azure-tips-and-tricks-static-w/?WT.mc_id=academic-79839-sagibbon)

### GitHub Pages

[GitHub Pages](https://pages.github.com/) te permite alojar sitios web directamente desde tu repositorio de GitHub. Este proyecto ya está configurado para que puedas subir tu portafolio en GitHub Pages con muy pocos pasos.

Con tu proyecto abierto en Codespaces:

1. Abre `package.json` y actualiza los siguientes valores: 
    1. **homepage**: establezca en  `http://{github-username}.github.io/{repo-name}`, donde `github-username` es tu nombre de usuario de GitHub y `repo-name` es el nombre que del repositorio donde se encuentra tu portafolio.
    1. **build-gh**: reemplaza  `github-username` con tu nombre de usuario de GitHub y `repo-name` con el nombre del repositorio.
1. Confirma y envía esos cambios a `package.json` en tu repositorio remoto de GitHub.
1.  Abre un nuevo terminal desde el menú o presionando `crtl` + `shift` (o abra el menú superior izquierdo, seleccione "Terminal" y "Nuevo terminal")`
1. Dentro de la ventana de terminal, ejecuta el siguiente comando: `npm run deploy`. Esto primero ejecutará el script previo a la implementación para compilar el proyecto, seguido del script de implementación que enviará esos archivos empaquetados a una nueva rama en su repositorio (gh-pages) que se usará para tu sitio de GitHub Pages.
1. Cuando hayas terminado, dentro de tu repositorio, ve a Settings and Pages. Allí verás que se ha configurado una página para usted en la rama gh-pages, y deberías ver la url (que debe coincidir con el valor de "página de inicio" que estableció en package.json)

![Azure Static Web App deploy](/__images__/github-pages-deploy.gif "Azure Static Web App deploy")

<br />

> 🤩 **Bonus**: [Establece un dominio para tu sitio en GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

<br />

## 🏆 Personalizando con Copilot

A continuación, se presentan 4 formas adicionales en que puede continuar personalizando el sitio de tu portafolio y aprender algunos Codespaces, CSS, HTML y JavaScript en el camino.

  1. [Personaliza tu Codespace](#1-personaliza-tu-codespace)
  1. [Actualiza a smooth scroll para desplazarte a una sección](#2-Añade-un-desplazamiento-suave-entre-secciones)
  1. [Anima tu fondo](#3-anima-tu-fondo)
  1. [Añade una nueva sección](#4-agrega-una-nueva-sección)

> 👋 Obteniendo el acceso a Copilot
>
> Si aún no tienes Copilot, puedes [solicitarlo aquí](https://github.com/login?return_to=%2fgithub-copilot%2fsignup). Si eres estudiante, puedes obtener acceso de forma **GRATUITA** [siguiendo estas instrucciones:](https://aka.ms/GitHubCopilot4Edu).
>
>Para asegurarse que Copilot está funcionando correctamente, navega hasta la pestaña de extensión de tu Codespace y fíjate el estado de la extensión de Copilot. Si el estado es inactivo, vuelve a crear el Codespace y habilita la extensión para asegurarte de que esté activada.

### 1. Personaliza tu Codespace

Tu entorno viene con extensiones preinstaladas. Puedes cambiar con qué extensiones comienza tu entorno de Codespaces, aquí te mostramos cómo:

1. Abre el archivo _.devcontainer/devcontainer.json_ y encuentra el siguiente elemento JSON **extensions**

   ```json
   "extensions": [
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode",
        "ms-vscode.azure-account",
        "ms-azuretools.vscode-azurestaticwebapps"
   ]
   ```

1. Agreguemos la extensión `indent-rainbow`. Para ello, ve a la lista **extensions** y agrega:

   ```json
   "oderwat.indent-rainbow"
   ```
  
   Lo que hiciste anteriormente fue agregar el identificador único de la extensión [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow&WT.mc_id=academic-79839-sagibbon). Esto permitirá que Codespaces sepa que esta extensión debe estar preinstalada al inicio.

Para encontrar el identificador único de una extensión:

* Navegue a la página web de la extensión: <a [marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow&WT.mc_id=academic-79839-sagibbon)
* Localiza el campo _Unique Identifier_ en la sección **More info** a tu derecha.* 
-------
⭐ COPILOT BONUS ⭐ 


En `devcontainer.json`, ve a la siguiente línea en los valores de `settings`: `"emmet.triggerExpansionOnTab": true`. Añade una coma al final de la línea y presiona enter. Revisa que otra configuración recomienda Copilot y si estas te ayudarán en tu Codespace. 
   
> 💡 Aprende más sobre [Personalizar tu GitHub Codespace](https://docs.github.com/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account).


### 2. Añade un desplazamiento suave entre secciones

En el encabezado de tu sitio tienes enlaces a cada siguiente sección. Haz clic en uno de estos enlaces y observa cómo se desplaza por la página hasta esa sección. No es realmente un desplazamiento, ¿verdad?

Hagamos una mejor experiencia de usuario para que el usuario tenga una idea de lo que está sucediendo y hacia dónde está navegando en la página. 

1. Abre `styles.css`, que es la hoja de estilo para tu portafolio. Necesitamos agregar un estilo para `html`. Si te fijas, verás que ahora mismo los estilos `html` y `body` se están configurando juntos, sin un estilo definido para `scroll-behavior`. Vamos a darle a Copilot una instrucción para que lo añada por nosotros:

1. Copilot sugerirá a CSS lo siguiente:
    ```css
    html {
      scroll-behavior: smooth;
    }
    ```
1. Presiona la tecla tab para aceptar esta sugerencia. (_Nota: Si no ves exactamente esta sugerencia de Copilot, continua escribiendo la instrucción hasta que la sugerencia aparezca._)

Tu sitio ya debería estar ejecutándose en tu Codespace, y el cambio se volverá a cargar en la página automáticamente. Haz click en un link en el encabezado superior para ver el desplazamiento suave en acción.


### 3. Anima tu fondo

Las animaciones son una forma de agregar fácilmente algo de movimiento a los elementos de tu página para aumentar la interactividad del usuario y resaltar los elementos que deseas que se noten. Vamos a animar la foto de escritorio en la sección de portafolio. 

1. Abre la hoja de estilos de tu sitio, `styles.css` dentro de tu Codespace. Usando Copilot, en el final de tu `styles.css` cita a Copilot con el siguiente comentario:

    ```css
    /* add a slide in animation */
    ```
    
    Esto debería sugerirte la siguiente secuencia animada. Presiona la tecla tab para aceptarla o continúa escribiendo hasta que Copilot complete la sugerencia, y ya tendrás una animación lista para usar.
    ```css
    @keyframes slideInLeft {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0);
      }
    }
    ```
1. Ahora que hemos definido nuestra secuencia de animación `slideIn`, podemos decirle a nuestra foto de escritorio que se anime con esa secuencia. Abre `Portfolio.jsx` y busca la etiqueta `img`. Verás que utiliza inline CSS para establecer su estilo. Dentro de su definición de estilo, agrega lo siguiente:

    ```css
    animation: "1s ease-out 0s 1 slideInLeft";
    ```

    Tu etiqueta se debería ver similar a esto:
    ```html
    <img src={image} style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideInLeft" }} />
    ```

Tu sitio web ya debería estar ejecutándose en tu Codespace, y el cambio se volverá a cargar en la página automáticamente. Desplázate hacia arriba y hacia abajo en la página y observa cómo la foto de tu escritorio se desliza sobre la página.

-------
⭐ COPILOT BONUS ⭐ 

Usa Copilot para animar la flecha de desplazarse hacia abajo en tu componente `Home` para rebotar de arriba a abajo en tu página. 

_Ayuda_: En tu archivo `styles.css`, usa comentarios para decirle a Copilot lo que quieres que haga. Revisa lo que te sugiere, complementa tus instrucciones, y fíjate como te guía en conseguir crear tu flecha para rebotar. 

-------

<br/>

### 4. Agrega una nueva sección

Comenzamos con algunas secciones básicas para tu portafolio web, pero tienes libertad creativa para hacerlo tuyo y agregar nuevas secciones relevantes para lo que deseas en tu página. 

Por ejemplo, agreguemos una sección de educación a tu portafolio.

1. Crea un nuevo componente para la sección dentro de la carpeta `Components`. Agrega un nuevo archivo llamado `Education.jsx`.

1. Hagamos que Copilot nos ayude a comenzar. En lugar de darle instrucciones con un comentario, comencemos tu archivo `Education.jsx` con:
    ```javascript
    import React from "react";
    ```

    Mientras comiences a escribir, este tomará lo que haces y te ofrecerá un autocompletado para esa línea.

1. Presiona `enter` luego de la línea para que Copilot sugiera el código para crear tu componente `Education` . Presiona `tab` para aceptar la solución o `crtl` + `enter` para ver todas las sugerencias de Copilot y seleccionar la que mejor funcione para tí. 

    Al menos, necesitarás un `const` definido y el componente `Education` exportado (un ejemplo abajo). El resto depende de tí. Experimenta con Copilot, enlazándolo con lo que tu desees construir. 
    ```javascript
    import React from "react";
    
    const Education = () => {
        return(
            <section className="light" id="education">
                <h2>Education</h2>
            </section>
        )
    }
    
    export default Education;
    ```
3. En `App.jsx`, importa tu nuevo componente `Education` en la parte superior y observa que Copilot empieza a ver que estás haciendo y dando sugerencias de autocompletado:
   
    ```javascript
    import Footer from "./Components/Footer";
    ```
4. Ahora agrega el componente `Education` donde deseas que se encuentre dentro de la página. Observa que Copilot sabe que deseas añadir en el componente `Education`. Este debería sugerir lo siguiente que podrás aceptar y se añadirá en tu nuevo componente:
    ```javascript
    <Education />
    ``` 

En tu Codespace, tu aplicación con tu portafolio debe estar ejecutándose y volverá a cargar tu sitio web con los cambios.

-------
⭐ COPILOT BONUS ⭐ 

Ahora sabes que GitHub Copilot puede escribir código rápido y también te da unas sugerencias para ahorrar tiempo buscando soluciones.

Revisa como puedes usar Copilot para ayudarte:
* añade Education en la parte superior de tu navegación.
* añade detalles de educación con una instrucción  (_Ayuda_: añade el comentario "grid of 4 education cells" (grilla de 4 celdas para educación)) 
-------

<br />

## 📚 Recursos

* [Documentación de GitHub Codespaces](https://docs.github.com/codespaces/overview)
* [Guía de GitHub Codespaces](https://docs.github.com/en/codespaces/guides)
* [Documentación de GitHub Copilot](https://docs.github.com/en/copilot)
* [Usa contenedores de desarrollo con VS Code y Docker](https://github.com/microsoft/vscode-remote-try-node#vs-code-dev-containers)
* [Desarrollo web para principiantes](https://github.com/microsoft/Web-Dev-For-Beginners)
* [Comienza con React](https://learn.microsoft.com/en-us/training/modules/react-get-started/?WT.mc_id=academic-79839-sagibbon)

> #### Aplicación de navegador Codespaces
>
> Si estás utilizando Edge o Chrome, verás una opción para instalar la aplicación Codespaces cuando inicies tu Codespace. La aplicación Codespaces te permite iniciar tu Codespace dentro de la aplicación para que puedas trabajar fuera del navegador. Busca el icono de la aplicación e instalalo con la ventana emergente para probarla.
>
> <img src="https://user-images.githubusercontent.com/82035/196431310-806a36ca-f122-4739-83f6-79afa1543e7c.png" alt="Aplicación web iniciada en el puerto 1234" style="width: 800px;"/>

<br />

## 🔎 ¿Encontraste un problema o tienes una idea para mejorar?
Ayúdanos a mejorar este repositorio al [¡Déjanos saber abriendo un issue!](/../../issues/new).
