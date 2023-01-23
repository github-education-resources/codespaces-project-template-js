[![Abra no GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=526682619)

# Crie seu portifólio com JavaScript e GitHub Codespaces!

_Crie, personalize e implemente seu propio portifólio web em minutos._  ✨

Neste repositório de templates temos o ambiente de desenvolvimento e a base definida e preparada para execução. Para que possa iniciar imediatamente o Codespaces e o personalizar sem complicações.

* **Para quem é isso?** _Para qualquer pessoa_ que está buscando criar seu portifólio web, deseja aprender desenvolvimento web ou testar o Codespaces.
* **Quanta experiência precisa?** _Zero_. Você decide quanto deseja personalizar baseado em sua experiência e tempo disponível. 
* **Ferramentas necessárias:** _Nenhuma_. Não é preciso instalar nada! Tudo está no navegador web.
* **Pré-requisitos:** _Nenhum_. Esse template já tem o ambiente de desenvolvimento e o aplicativo web para você criar seu próprio site.

## Sobre esse template de portifólio

Neste template de portfólio poderá "escolher sua própria aventura", temos um aplicativo web baseado em [React](https://reactjs.org/) pronto para você personalizar e implantar facilmente usando apenas seu navegador web.

![Aplicativo web JavaScript de perfil](/__images__/js-portfolio-site.gif "Aplicativo web JavaScript de perfil")

### Guia rápido

1. Clique no botão **Use this Template**
1. Selecione o proprietário do repositório (por exemplo, sua conta gitHub)
1. Digite um nome único para o novo repositório
1. Clique no botão **Code**
1. Clique no botão **Criar codespace na main**
1. [Personalize seu site de portfólio](#personalize-seu-site-em-3-passos)
1. [Faça deploy na nuvem](#faca-deploy-na-nuvem)

<details>
   <summary><b>🎥 Para saber mais sobre codespaces, assista à nossa série de tutoriais</b></summary>
   
   [![Tutorial de Codespaces](https://img.youtube.com/vi/ozuDPmcC1io/0.jpg)](https://aka.ms/CodespacesVideoTutorial "Codespaces Tutorial")
</details>

<br />

## 🗃️ Seu Portifólio web com JavaScript

Este repositorio é um template de GitHub para crirar uma aplicação web frontend de  portifólio com JavaScript utilizando React. **O objetivo é fornecer um modelo para que você possa usar imediatamente para criar seu próprio site através do Codespaces

O repositorio contém:

* `/.devcontainer`
  - `.devcontainer/Dockerfile`: Arquivo de configuração utilizado pelo Codespaces para determinar o sistema operacional w outros detalhes.
  - `.devcontainer/devcontainer.json`: Arquivo de configuração utilizado pelo Codespaces para configurar as opções do Visual Studio Code, como habilitar extensões adicionais.
* `/src`: Arquivos HTML, JS e CSS utilizados para construir seu portifólio web.
* `.eslintrc`: Configuração do <a href="https://eslint.org/" target="_blank">ESLint</a> para verificar a coerência e qualidade do código.
* `.prettierrc`: Configuração do <a href="https://prettier.io/" target="_blank">Pretttier</a> que se utiliza para formatar o código.
* `package.json` e `package-lock.json`: DDefine as informações do projeto para o <a href="https://nodejs.org/" target="_blank">Node.js</a>, pacotes dependentes e as versões necessárias de cada um

<br />

## 🚀 Vamos começar!

Este projeto está preenchido com dados de amostra para que você possa abrir imediatamente no Codespaces, vê-los em execução e implantar a qualquer momento.

Seu ambiente de desenvolvimento está pronto para que você possa começar. Com base em nosso [Template de JavaScript (React) com Codespace](https://github.com/microsoft/codespaces-teaching-template-js), aqui está configurado e pronto para utilizar:

* Um simples aplicativo <a href="https://reactjs.org/" target="_blank">em React</a> com componentes para cada seção do Portfólio Web
* <a href="https://parceljs.org/" target="_blank">Parcel</a> para criar seu site quando der deploy. 
* Sublinhando e formatando código usando</a> <a href="https://eslint.org/" target="_blank">ESLint e <a href="https://prettier.io/" target="_blank">Prettier para</a> consistência de código.

### Cria seu Portfólio

1. Crie um repositório a partir deste modelo. Use este [link para criar o repositório](https://github.com/microsoft/codespaces-teaching-template-js/generate). Selecione o proprietário do repositório, forneça um nome, descrição, se desejar, e selecione se seu novo repositório é público ou privado.
2. Vá para a página principal do repositório recém-criado.
3. De acordo com o nome do repositório, use o menu em "Code" e, na guia Codespaces, selecione "Create codespace on main".


    <img src="https://docs.github.com/assets/cb-138303/images/help/codespaces/new-codespace-button.png" alt="Create codespace" style="width:270px;"/>
    
4. Espere enquanto o GitHub inicializa o Codespace.

    <img src="https://user-images.githubusercontent.com/82035/194710065-92f8c325-6f57-4c77-88d7-da8db3c235e9.png" alt="Codespace initializing" style="width: 600px;"/>
    
5. Quando terminar, verá seu Codespace começar com uma seção terminal na parte inferior. Aqui você verá `npm install` em execução. Após o término do NPM, vá para o terminal onde você pode executar o aplicativo web com o seguinte comandondo: `npm run start` 

   Quando o aplicativo da Web for iniciado, você verá uma mensagem dizendo que ela começou com sucesso na porta 1234, e você pode abrir esse site dentro do seu navegador:
  
   <img src="https://user-images.githubusercontent.com/82035/194709984-7e01f9db-df3e-41dc-bc1d-ce38b16b812d.png" alt="Aplicación web iniciada en puerto 1234" style="width: 340px;"/>

<br />

## ✨ Personalize seu site em 3 passos

Este projeto foi feito para ser facilmente personalizável. Cada seção do site é um componente separado, e suas informações precisam ser definidas em apenas um ponto. Isso não é apenas para facilitar a atualização, mas para que você possa ver como os valores de prop são passados para componentes React.

**Para cada etapa, abra o projeto em Codespaces, então você pode fazer e cometer suas alterações enquanto estiver dentro do Seu Codespace.**

>  Veja [Utilizando source control em seu Codespace](https://docs.github.com/en/codespaces/developing-in-codespaces/using-source-control-in-your-codespace) para mais tutoriais de Codespaces usando source control

### 1️⃣ Adicione seu "sobre mim" e contas sociais

Dentro do `App.jsx` você verá uma variável chamada `siteProps`. Este é um objeto JavaScript que detém os principais pares de valores necessários para personalizar seu nome, título, e-mail e contas sociais.

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

Atualize o nome e o título que você gostaria de exibir na parte superior do seu site.

_Alguns valores opcionais_ são endereço de e-mail e contas sociais. Estes são usados no componente 'footer'. Se qualquer item não estiver incluído na lista ou definido como uma sequência vazia ("), ele não exibirá o ícone e o link.

### 2️⃣ Atualize as imagens

**Este site de portfólio inclui 3 imagens**: seção superior, seção "Sobre mim" e a seção de portfólio. Estas podem ser qualquer imagem do tamanho da paisagem de sua escolha a partir de sua própria coleção, ou descobriu que tem uma licença que permite que você use sem atribuição.

Dois sites para encontrar fotos são</a> <a href="https://pixabay.com/" target="_blank">Pixabay e <a href="https://unsplash.com" target="_blank">Unsplash</a>. Fotos, ilustrações, vetores, você decide! Quando achar suas imagens, guarde cada uma em `/src/images` com um nome curto de significativo.

Vá para os seguintes componentes para atualizar a linha `import image...` para referenciar a nova imagem que você baixou para essa seção, bem como o texto alternativo para cada imagem:

* `Home.jsx` - Seção na parte superior da página, imagem principal que você verá quando o site é carregado (mulher parada na parede do servidor no exemplo)
   ```javascript
      import image from "../images/server-wall.jpg";
   ```
* `About.jsx` - Fundo por trás da seção detalhada "sobre mim" (mosaico abstrato no exemplo)
   ```javascript
      import image from "../images/mosaic.svg";
   ```
* `Portfolio.jsx`- Imagem elevada no lado esquerdo da seção (foto de mesa de design no exemplo)
   ```javascript
      import image from "../images/design-desk.jpeg";
   ```

### 3️⃣ Adicione itens em que trabalhou
 
Esta seção do portfólio é a área para destacar os projetos em que você trabalhou. Estes seriam artigos, vídeos, designs de logotipo, projetos do GitHub, qualquer coisa que se destaque para você!

No 'Portfolio.jsx' vá para a variável 'projectList'. Este é um array de objetos JavaScript. Cada elemento que você deseja destacar as necessidades: título, descrição e URL.

O exemplo tem 4, mas o número que você inclui depende de você.
 
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

## 🏃 Faça deploy na nuvem

O projeto inclui a configuração necessária para dar deploy **gratuitamente** em <a href="https://azure.microsoft.com/en-in/products/app-service/static/" target="_blank">Azure Static Web Apps</a> e <a href="https://pages.github.com/" target="_blank">GitHub Pages</a>. 

### Azure Static Web Apps

<a href="https://azure.microsoft.com/en-in/products/app-service/static/" target="_blank">Azure Static Web Apps</a> é a solução de hospedagem da Microsoft para sites estáticos (ou sites que renderizam no navegador do usuário, não em um servidor) através do Azure. Este serviço oferece oportunidades adicionais para expandir seu site através de Funções Azure, autenticação, versões de staging e muito mais!

Você precisará de contas do Azure e do GitHub para implantar seu aplicativo web. Se você ainda não tiver uma conta do Azure, você pode criar uma de dentro durante o processo de implantação ou a partir dos seguintes links:

* [Crie uma conta do Azure para estudantes (sem necessidade de cartão de crédito)](https://azure.microsoft.com/free/students/)
* [Crie uma nova conta do Azure](https://azure.microsoft.com/en-US/)

Com seu projeto aberto em Codespaces:

1. Clique no ícone Azure na barra lateral esquerda. Faça login se você ainda não fez, e se você é novo no Azure, siga as instruções para criar sua conta.
1. No menu do Azure, clique no sinal "+" e clique em "Create Static Web App".
1.  Se você não fez login no GitHub, você será solicitado a fazer login. Se você tiver alguma alteração de arquivo pendente, você será solicitado a confirmar essas alterações.
1. Coloque a informação enquanto solicitado:
    1. **Region**: Coloque a mais próxima
    1. **Estructura del proyecto**: Selecione "React"
    1. **Ubicación del código de aplicación**: `/`
    1. **Ubicación de compliación**: `dist`
1. Quando você terminar, você verá uma notificação na parte inferior da tela e um fluxo de trabalho do GitHub Action será adicionado ao seu projeto. Se você clicar "Open Action in GitHub", você verá a ação que foi criada para você e está atualmente em execução.

![Azure Static Web App deploy](/__images__/swa-deploy.gif "Azure Static Web App deploy")


### GitHub Pages

<a href="https://pages.github.com/" target="_blank">GitHub Pages</a> permite hospedar sites diretamente do repositório do GitHub. Este projeto já está configurado para que você possa dar deploy seu portfólio para páginas do GitHub em apenas alguns passos.

Com seu projeto aberto em Codespaces:

1. Abre `package.json` e atualize os seguintes valores: 
    1. **homepage**: defina para 'http://{github-username}.github.io/{repo-name}', onde 'github-username' é seu nome de usuário GitHub e 'repo-nome' é o nome que chamou este repositório do seu portfólio quando você o criou.
    1. **build-gh**: substitua o  `github-username` pelo seu nome de usuário gitHub e 'repo-nome' por nome do repositório
1. Dê commit e push essas alterações do `package.json` para seu repositório remoto. 
1. Abra um novo terminal do menu ou pressionando `crtl` + `shift` + ` ou abrir o menu superior esquerdo, selecione "Terminal" e "Nuevo terminal")`
1. Dentro da janela do terminal, execute o seguinte comando: `npm run deploy`. Isso executará primeiro o script de pré-implantação para "buildar" o projeto, seguido pelo script de deploy que vai dar push nos arquivos para uma nova branch em seu repositório (gh-pages) que será usado para o site do GitHub Pages..
1. Quando terminar, dentro do repositório, vá para Configurações e Páginas. Lá você verá que uma página foi configurada para você no ramo de páginas gh, e você deve ver a url (que deve corresponder ao valor "página inicial" que você definiu no package.json)

![Azure Static Web App deploy](/__images__/github-pages-deploy.gif "Azure Static Web App deploy")

<br />

## 🏆 Retos

Abaixo estão 4 maneiras adicionais que você pode continuar a personalizar seu site de portfólio e aprender alguns Codespaces, CSS, HTML e JavaScript ao longo do tutorial.
 
  1. [Personalize seu Codespace](#1-personalize-seu-codespace)
  1. [Atualize para ter smooth scroll navegando a uma seção](#2-atualize-para-ter-smooth-scroll-navegando-a-uma-seção)
  1. [Anime o fundo](#3-anime-o-fundo)
  1. [Adicione uma nova seção](#4-adicione-uma-nova-seção)

### 1. Personalize seu Codespace

Seu ambiente vem com extensões pré-instaladas. Você pode alterar quais extensões o ambiente codespaces começa, veja como:

1. Abre o arquivo _.devcontainer/devcontainer.json_ e encontre o seguinte elemento JSON **extensions**

   ```json
   "extensions": [
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode",
        "ms-vscode.azure-account",
        "ms-azuretools.vscode-azurestaticwebapps"
   ]
   ```

1. Vamos adicionar a extensão "indent-rainbow". Para fazer isso, vá para a lista **extensions** e adicione:

   ```json
   "oderwat.indent-rainbow"
   ```
  
  O que você fez anteriormente foi adicionar o identificador único de uma extensão do <a href="https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow" target="_blank">indent-rainbow</a>. Isso permitirá que o Codespaces saiba que essa extensão deve ser pré-instalada na inicialização.

Para encontrar o identificador único de uma extensão:

* Navegue a página web da extensão: <a href="https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow" target="_blank">https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow</a>
* Localize o campo _Unique Identifier_ na seção **More info** a direita.
   
> 💡 Saiba mais aqui, <https://docs.github.com/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account>


### 2. Atualize para ter smooth scroll navegando a uma seção

No cabeçalho do seu site você tem links para cada seção abaixo. Clique em um desses links e assista rolar pela página até essa seção. Não é realmente um scroll, né?

Vamos fazer disso uma melhor experiência de usuário, diminuindo isso para que o usuário tenha uma ideia do que está acontecendo e onde ele está navegando na página.
 
1. Abra 'estilos.css', que é a folha de estilo para o seu portfólio. Precisamos adicionar um estilo para 'html'. Se você notar, verá que agora os estilos 'html' e 'body' estão sendo configurados juntos, então vamos adicionar o seguinte trecho CSS para definir o deslocamento do elemento 'html':


    ```css
    html {
      scroll-behavior: smooth;
    }
    ```

Seu site já deve estar sendo executado no Codespace, e a alteração será recarregada automaticamente na página. Clique em um link no cabeçalho superior para ver a rolagem suave em ação.


### 3. Anime o fundo

As animações são uma maneira de adicionar facilmente algum movimento aos elementos da página para aumentar a interatividade do usuário e destacar elementos que você deseja que eles percebam. Vamos animar a foto da área de trabalho na seção portfólio. 

1. Abra a folha de estilos do seu site, "estilos.css" dentro do seu Codespace. Adicione a sequência de animação adicionando uma definição '@keyframes' para deslizar da esquerda::

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
1. Agora que definimos nossa sequência de animação 'slideInLeft', podemos dizer à nossa foto de desktop para animar com essa sequência. Abra 'Portfolio.jsx' e procure a tag 'img'. Você verá que ele usa CSS inline para definir seu estilo. Dentro de sua definição de estilo, adicione o seguinte:

    ```css
    animation: "1s ease-out 0s 1 slideInLeft";
    ```

    Sua tag de imagem deve se parecer com algo como:
    ```html
    <img src={image} style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideInLeft" }} />
    ```

Seu site já deve estar sendo executado no seu Codespace, e a alteração será recarregada automaticamente na página. Role para cima e para baixo na página e veja sua foto de desktop deslizar sobre a página.

> 🤩 **Extra**: Anime a seta para baixo


### 4. Adicione uma nova seção

Começamos com algumas seções básicas para o seu portfólio web, mas você tem liberdade criativa para torná-lo seu e adicionar novas seções relevantes para o que você quer em seu site.
  
Por exemplo, vamos adicionar uma seção de educação ao site do seu portfólio.

1. Crie um novo componente para a seção dentro da pasta 'Components'. Adicione um novo arquivo chamado 'Education.jsx'.

2. Em 'Education.jsx' adicione a função componente, exportação e informações que você deseja incluir:

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
3. Em 'App.jsx', importe seu novo componente 'Education' no topo adicionando o seguinte:
    ```javascript
    import Footer from "./Components/Footer";
    ```
4. Agora adicione o componente 'Education' onde você deseja que ele esteja dentro da página ao inserir:
    ```javascript
    <Education />
    ``` 

No seu Codespace, seu aplicativo com seu portifólio deve estar sendo executado e irá recarregar seu site com as alterações.
<br />

## 📚 Recursos

* [Visão geral da documentação do GitHub Codespaces](https://docs.github.com/codespaces/overview)
* [Use contêineres de desenvolvimento localmente com VS Code e Docker](https://github.com/microsoft/vscode-remote-try-node#vs-code-dev-containers)

> #### Aplicativo de navegador Codespaces
>
> Se você estiver usando Edge ou Chrome, verá uma opção para instalar o aplicativo Codespaces ao iniciar seu Codespace. O aplicativo Codespaces permite que você inicie seu Codespace dentro do aplicativo para que você possa trabalhar fora do navegador. Encontre o ícone do aplicativo e instale-o com a janela pop-up para testá-lo.
>
> <img src="https://user-images.githubusercontent.com/82035/196431310-806a36ca-f122-4739-83f6-79afa1543e7c.png" alt="Aplicativo web iniciado na porta 1234" style="width: 800px;"/>

<br />

## 🔎 Você encontrou um problema ou tem uma ideia para melhorar?
Ajude-nos a melhorar este repositório [nos informando e abrindo uma issue!](/../../issues/new).
