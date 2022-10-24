[![Abre en GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=526682619)

# ¡Tu propio portafolio con JavaScript y GitHub Codespaces!

_Crea, personaliza e implementa tu propio portafolio web en minutos._  ✨

En esta plantilla tenemos el entorno de desarrollo, la base establecida y lista para funcionar. Para que puedas iniciar inmediatamente Codespaces y personalizarlo sin configuración.

* **¿Para quién es esto?** __Para cualquier persona__ esté este buscando crear su portafolio web, desee aprender sobre desarrollo web o probar Codespaces.
* **¿Cuánta experiencia necesitas?** __Cero experiencia__. Tú decides cuánto deseas personalizar basado en tu experiencia y tiempo disponible. 
* **Herramientas necesarias:** _Ninguna_. ¡No es necesario instalar nada! Todo lo que necesita es un navegador web.
* **Prerrequisitos:** _Ninguno_. Esta plantilla incluye el entorno de desarrollo y la aplicación web implementable para que puedas crear tu sitio web.

## Sobre esta plantilla de Portafolio web

En esta plantilla podrás "elegir tu propia aventura": tenemos una aplicación web basada en [React](https://reactjs.org/) lista para que puedas personalizarla e implementarla fácilmente utilizando solo tu navegador web.

![Aplicación web de perfil JavaScript](/__images__/js-portfolio-site.gif "Aplicación web de perfil JavaScript")

### Inicia rápido

1. Haz clic en el botón **Use this Template**
2. Selecciona el propietario del repositorio (por ejemplo, su cuenta de GitHub)
3. Introduzca un nombre único para el nuevo repositorio
4. Haz clic en el botón **Código**
5. Haz clic en el botón **Crear codespace en el botón principal**
1. [Personaliza el sitio de tu portafolio](#personaliza-tu-pagina-web-en-3-pasos)
1. [Sube tu Portafolio a la nube](#subir-tu-aplicacion-web)

<details>
   <summary><b>🎥 Para obtener más información sobre Codespaces, ve nuestra serie de tutoriales en video</b></summary>
   
   [![Tutorial de Codespaces](https://img.youtube.com/vi/ozuDPmcC1io/0.jpg)](https://aka.ms/CodespacesVideoTutorial "Codespaces Tutorial")
</details>

<br />

## 🗃️ Tu Portafolio web con JavaScript

Este repositorio es una plantilla de GitHub para crear una aplicación web frontend de portafolio personal JavaScript utilizando el framework React. **El objetivo es darte una plantilla que puedas utilizarla inmediatamente para crear tu propia página web a través de Codespaces.**

El repositorio contiene lo siguiente:

* `/.devcontainer`
  - `.devcontainer/Dockerfile`: Archivo de configuración utilizado por Codespaces para determinar el sistema operativo y otros detalles.
  - `.devcontainer/devcontainer.json`: Archivo de configuración utilizado por Codespaces para configurar las opciones de Visual Studio Code, como la habilitación de extensiones adicionales.
* `/src`: Archivos HTML, JS y CSS utilizados para construir tu Portafolio web.
* `.eslintrc`: Configuración de <a href="https://eslint.org/" target="_blank">ESLint</a> que se incluye para la coherencia y la calidad del código.
* `.prettierrc`: Configuración de <a href="https://prettier.io/" target="_blank">Pretttier</a> que se utiliza para dar formato al código.
* `package.json` y `package-lock.json`: Define la información del proyecto para <a href="https://nodejs.org/" target="_blank">Node.js</a>, los paquetes dependientes y las versiones necesarias de cada uno.

<br />

## 🚀 ¡Comencemos!

Este portafolio web está lleno de datos de ejemplo para que puedas abrirlo inmediatamente en Codespaces, verlo en ejecución y subirlo a la nube en cualquier momento.

Tu entorno de desarrollo está listo para que pueda comenzar. Basado en nuestro [Plantilla de JavaScript (React) con Codespace](https://github.com/microsoft/codespaces-teaching-template-js), esto es lo que ya está configurado y listo para su uso:

* Una aplicación simple <a href="https://reactjs.org/" target="_blank">en React</a> con componentes para cada sección del Portafolio web
* <a href="https://parceljs.org/" target="_blank">Parcel</a> para crear tu página web cuando la subas a la nube. 
* Subrayado y formateado de Codigo utilizando <a href="https://eslint.org/" target="_blank">ESLint</a> y <a href="https://prettier.io/" target="_blank">Prettier</a> para consistencia en el codigo.

### Crea tu Portafolio

1. Crea un repositorio a partir de esta plantilla. Usa este [link para crear el repositorio](https://github.com/microsoft/codespaces-teaching-template-js/generate). Selecciona el propietario del repositorio, proporciona un nombre, una descripción si lo deseas y selecciona si tu nuevo repositorio sea público o privado.
2. Ve hasta la página principal del repositorio recién creado.
3. Debajo del nombre del repositorio, use el menú desplegable Código y, en la pestaña Codespaces, seleccione "Create codespace on main".


    <img src="https://docs.github.com/assets/cb-138303/images/help/codespaces/new-codespace-button.png" alt="Create codespace" style="width:270px;"/>
    
4. Espera mientras GitHub inicializa el Codespace.

    <img src="https://user-images.githubusercontent.com/82035/194710065-92f8c325-6f57-4c77-88d7-da8db3c235e9.png" alt="Codespace initializing" style="width: 600px;"/>
    
5. Cuando haya terminado, verás que tu Codespace comenzara con una sección de terminal en la parte inferior. Aquí verás `npm install` ejecutando. Después de que finalice npm, ve a la terminal donde puedes ejecutar la aplicación web con el siguiente comando: `npm run start` 

   Cuando se inicie la aplicación web, verás un mensaje que te indicará que se inició correctamente en el puerto 1234, y puedes abrir ese sitio dentro de su navegador:

   <img src="https://user-images.githubusercontent.com/82035/194709984-7e01f9db-df3e-41dc-bc1d-ce38b16b812d.png" alt="Aplicación web iniciada en puerto 1234" style="width: 340px;"/>

<br />

## ✨ Personaliza tu página web en 3 pasos

Este proyecto está diseñado para ser fácilmente personalizable. Cada sección del sitio es un componente separado, y su información debe establecerse en un solo lugar. Esto no es solo para facilitar la actualización, sino para que puedas ver cómo se pasan los Prop values a los componentes de React.

**Para cada paso, abre el proyecto en Codespaces, luego puede realizar y confirmar sus cambios mientras está dentro de su Codespace.**

>  Consulta el [uso del control de código fuente en tu codespace](https://docs.github.com/en/codespaces/developing-in-codespaces/using-source-control-in-your-codespace) para obtener más instrucciones sobre el control de código fuente de Codespaces.

### 1️⃣ Agrega tu "sobre mí" y tus cuentas sociales

Dentro de `App.jsx` verás una variable llamada `siteProps`. Este es un objeto JavaScript que contiene los pares de valores clave necesarios para personalizar tu nombre, título, correo electrónico y cuentas sociales.

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

_Optional values_ son la dirección de correo electrónico y las cuentas sociales. Estos se utilizan en el componente 'Pie de página'. Si algún elemento no está incluido en la lista, o establecido en una cadena vacía (""), no mostrará el icono y el vínculo.

### 2️⃣ Sube imagenes

**Este sitio de portafolio incluye 3 imágenes**: un fondo para la sección superior, un fondo "Acerca de mí" y uno para la sección de portafolio (escritorio). Estas pueden ser cualquier imagen de tamaño **horizontal** de tu elección de tu propia colección, o que tenga una licencia que le permita usar sin atribución.

Un par de sitios posibles para encontrar fotos son</a> <a href="https://pixabay.com/" target="_blank">Pixabay y <a href="https://unsplash.com" target="_blank">Unsplash</a>. Fotos, ilustraciones, vectores, ¡tú eliges! Cuando encuentre sus imágenes, guarda cada una en `/src/images` con un nombre de archivo corto y significativo.

Ve a los siguientes componentes para actualizar la línea `import image...` para hacer referencia a la nueva imagen que descargó para esa sección:

* `Home.jsx` - es la parte superior de la página, la imagen principal que verás cuando se cargue el sitio (mujer de pie junto a la pared del servidor en la muestra)
   ```javascript
      import image from "../images/server-wall.jpg";
   ```
* `About.jsx` - background detrás de la sección detallada "Acerca de mí" (mosaico abstracto en la muestra)
   ```javascript
      import image from "../images/mosaic.svg";
   ```
* `Portfolio.jsx`- Imagen resaltada en el lado izquierdo de la sección (foto de escritorio de diseño en muestra)
   ```javascript
      import image from "../images/design-desk.jpeg";
   ```

### 3️⃣ Agrega proyectos en los que has trabajado

Esta sección del portafolio es el área para resaltar los proyectos en los que has trabajado. Estos serían artículos, videos, diseños de logotipos, proyectos de GitHub, ¡cualquier cosa que te destaque!

En el `Portfolio.jsx` ve a la variable `projectList`. Esta es un array de objetos JavaScript. Cada elemento que desees resaltar necesita: título, descripción y URL.

El diseño de muestra tiene 4, pero el número que incluya depende de usted.

```javascript
const projectList = [
  {
    title: "10 Things To Know About Azure Static Web Apps 🎉",
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
    title: "GitHub Codespaces and github.dev",
    description: "Video interview to explain when to use GitHub.dev...",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];
```

## 🏃 Subir tu aplicación web

El proyecto incluye la configuración necesaria para implementar **gratis** para <a href="https://azure.microsoft.com/en-in/products/app-service/static/" target="_blank">Azure Static Web Apps</a> y <a href="https://pages.github.com/" target="_blank">GitHub Pages</a>. 

### Azure Static Web Apps

<a href="https://azure.microsoft.com/en-in/products/app-service/static/" target="_blank">Azure Static Web Apps</a> es la solución de hospedaje de Microsoft para sitios estáticos (o sitios que se representan en el explorador del usuario, no en un servidor) a través de Azure. Este servicio ofrece oportunidades adicionales para expandir tu sitio a través de Azure Functions, autenticación, versiones provisionales y ¡mucho más!.

Necesitarás cuentas de Azure y GitHub para implementar la aplicación web. Si aún no tienes una cuenta de Azure, puedes crearla desde dentro durante el proceso de implementación o desde los siguientes vínculos:

* [Crear una cuenta de Azure para estudiantes (no se requiere tarjeta de crédito)](https://azure.microsoft.com/free/students/)
* [Creación de una nueva cuenta de Azure](https://azure.microsoft.com/en-US/)

Con tu proyecto abierto en Codespaces:

1. Haz clic en el icono de Azure en la barra lateral izquierda. Inicie sesión si aún no lo has hecho y, si eres nuevo en Azure, sigue las indicaciones para crear su cuenta.
1. En el menú Azure, haz clic en el signo "+" y, a continuación, en "Create Static Web App".
1. Si no has iniciado sesión en GitHub, se te pedirá que inicies sesión. Si tienes algún cambio de archivo pendiente, se te pedirá que confirmes esos cambios.
1. Ingresa la información de tu aplicación cuando se te solicite:
    1. **Region**: Elige el más cercano a ti
    1. **Estructura del proyecto**: selecciona "React"
    1. **Ubicación del código de aplicación**: `/`
    1. **Ubicación de compliación**: `dist`
1. Cuando hayas terminado, verás una notificación en la parte inferior de la pantalla y se agregará un workflow de GitHub Action a tu proyecto. Si hace clic en "Open Action in GitHub", verás la acción que se creó para ti y se está ejecutando actualmente.

![Azure Static Web App deploy](/__images__/swa-deploy.gif "Azure Static Web App deploy")


### GitHub Pages

<a href="https://pages.github.com/" target="_blank">GitHub Pages</a> te permite alojar sitios web directamente desde tu repositorio de GitHub. Este proyecto ya está configurado para que puedas subir tu portafolio en GitHub Pages con muy pocos pasos.

Con tu proyecto abierto en Codespaces:

1. Abre `package.json` y actualiza los siguientes valores: 
    1. **homepage**: establezca en  `http://{github-username}.github.io/{repo-name}`, donde `github-username` es tu nombre de usuario de GitHub y `repo-name` es el nombre que llamó a este repositorio de tu portafolio cuando lo creaste.
    1. **build-gh**: reemplace  `github-username` con tu nombre de usuario de GitHub y `repo-name` con el nombre del repositorio
1. Confirma y envía esos cambios a `package.json` a tu repositorio remoto de GitHub.
1.  Abre un nuevo terminal desde el menú o presionando `crtl` + `shift` + ` (o abra el menú superior izquierdo, seleccione "Terminal" y "Nuevo terminal")`
1. Dentro de la ventana de terminal, ejecuta el siguiente comando: `npm run deploy`. Esto primero ejecutará el script previo a la implementación para compilar el proyecto, seguido del script de implementación que enviará esos archivos empaquetados a una nueva rama en su repositorio (gh-pages) que se usará para tu sitio de GitHub Pages.
1. Cuando hayas terminado, dentro de tu repositorio, ve a Settings and Pages. Allí verás que se ha configurado una página para usted en la rama gh-pages, y deberías ver la url (que debe coincidir con el valor de "página de inicio" que estableció en package.json)

![Azure Static Web App deploy](/__images__/github-pages-deploy.gif "Azure Static Web App deploy")

<br />

## 🏆 Retos

A continuación, se presentan 4 formas adicionales en que puede continuar personalizando el sitio de tu portafolio y aprender algunos Codespaces, CSS, HTML y JavaScript en el camino.

  1. [Personaliza tu Codespace](#1-personaliza-tu-codespace)
  1. [Actualiza a smooth scroll para desplazarte a una sección](#2-actualiza-a-smooth-scroll-para-desplazarte-a-una-sección)
  1. [Anima tu fondo](#3-anima-tu-fondo)
  1. [Añade una nueva sección](#4-agrega-una-nueva-sección)

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
  
   Lo que hiciste anteriormente fue agregar el identificador único de una extensión del <a href="https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow" target="_blank">indent-rainbow</a>. Esto permitirá que Codespaces sepa que esta extensión debe estar preinstalada al inicio.

Para encontrar el identificador único de una extensión:

* Navegue a la página web de la extensión: <a href="https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow" target="_blank">https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow</a>
* Localiza el campo _Unique Identifier_ en la sección **More info** a tu derecha.
   
> 💡 Obtenga más información aquí, <https://docs.github.com/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account>


### 2. Actualiza a smooth scroll para desplazarte a una sección

En el encabezado de tu sitio tiene enlaces a cada sección a continuación. Haz clic en uno de estos enlaces y observe cómo se desplaza por la página hasta esa sección. No es realmente un scroll, ¿verdad?

Hagamos de esta una mejor experiencia de usuario ralentizando eso para que el usuario tenga una idea de lo que está sucediendo y hacia dónde está navegando en la página. 

1. Abre `styles.css`, que es la hoja de estilo para tu portafolio. Necesitamos agregar un estilo para `html`. Si te fijas, verás que ahora mismo los estilos `html` y `body` se están configurando juntos, así que agreguemos el siguiente fragmento de CSS para establecer el desplazamiento del elemento `html`:


    ```css
    html {
      scroll-behavior: smooth;
    }
    ```

Tu sitio ya debería estar ejecutándose en tu Codespace, y el cambio se volverá a cargar en la página automáticamente. Haz clic en un enlace en el encabezado superior para ver el desplazamiento suave en acción.


### 3. Anima tu fondo

Las animaciones son una forma de agregar fácilmente algo de movimiento a los elementos de tu página para aumentar la interactividad del usuario y resaltar los elementos que deseas que noten. Vamos a animar la foto de escritorio en la sección de portafolio. 

1. Abre la hoja de estilos de tu sitio, `styles.css` dentro de tu Codespace. Añade la secuencia de animación agregando una definición `@keyframes` para deslizar desde la izquierda:

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
1. Ahora que hemos definido nuestra secuencia de animación `slideInLeft`, podemos decirle a nuestra foto de escritorio que se anime con esa secuencia. Abre `Portfolio.jsx` y busca la etiqueta `img`. Verás que utiliza inline CSS para establecer su estilo. Dentro de su definición de estilo, agrega lo siguiente:

    ```css
    animation: "1s ease-out 0s 1 slideInLeft";
    ```

    Your image tag should look something like:
    ```html
    <img src={image} style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideInLeft" }} />
    ```

Tu sitio web ya debería estar ejecutándose en tu Codespace, y el cambio se volverá a cargar en la página automáticamente. Desplázate hacia arriba y hacia abajo en la página y observa cómo la foto de tu escritorio se desliza sobre la página.

> 🤩 **Extra**: Anima la flecha hacia abajo


### 4. Agrega una nueva sección

Comenzamos con algunas secciones básicas para tu portafolio web, pero tienes libertad creativa para hacerlo tuyo y agregar nuevas secciones relevantes para lo que deseas en tu sitio web. 

Por ejemplo, agreguemos una sección de educación a su sitio de portafolio.

1. Crea un nuevo componente para la sección dentro de la carpeta `Components`. Agrega un nuevo archivo llamado `Education.jsx`.

2. En `Education.jsx` agrega la función de componente, exportación e información que deseas incluir:

    ```javascript
    import React from "react";
    
    const Education = () => {
        return(
            <section className="light" id="portfolio">
                <h2>Education</h2>
            </section>
        )
    }
    
    export default Education;
    ```
3. En `App.jsx`, importa tu nuevo componente `Education` en la parte superior agregando lo siguiente:
    ```javascript
    import Footer from "./Components/Footer";
    ```
4. Ahora agrega el componente `Education` donde deseas que se encuentre dentro de la página al insertar:
    ```javascript
    <Education />
    ``` 

En su Codespace, tu aplicación con tu portafolio debe estar ejecutándose y volverá a cargar tu sitio web con los cambios.

<br />

## 📚 Recursos

* [Descripción general de los documentos de GitHub Codespaces](https://docs.github.com/codespaces/overview)
* [Usa los contenedores de desarrollo localmente con VS Code y Docker](https://github.com/microsoft/vscode-remote-try-node#vs-code-dev-containers)

> #### Aplicación de navegador Codespaces
>
> Si estás utilizando Edge o Chrome, verás una opción para instalar la aplicación Codespaces cuando inicies tu Codespace. La aplicación Codespaces te permite iniciar tu Codespace dentro de la aplicación para que puedas trabajar fuera del navegador. Busca el icono de la aplicación e instalalo con la ventana emergente para probarla.
>
> <img src="https://user-images.githubusercontent.com/82035/196431310-806a36ca-f122-4739-83f6-79afa1543e7c.png" alt="Aplicación web iniciada en el puerto 1234" style="width: 800px;"/>

<br />

## 🔎 ¿Encontraste un problema o tienes una idea para mejorar?
Ayúdanos a mejorar este repositorio al [¡avisarnos y abriendo un problema!](/../../issues/new).
