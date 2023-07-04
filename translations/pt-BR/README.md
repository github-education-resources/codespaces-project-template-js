[![Abra no GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=526682619)

# Crie seu portifólio com JavaScript e GitHub Codespaces!

_Crie, personalize e publique seu próprio portifólio web em minutos._  ✨

Neste repositório de modelo temos o ambiente de desenvolvimento e uma base de código definida e preparada para execução. Para que você possa iniciar imediatamente seu ambiente [Codespace](https://github.com/features/codespaces/) e começar a personalizar seu site usando o [Copilot](https://copilot.github.com) para ajudá-lo a escrever código mais rápido.

* **Para quem é isso?** _Para qualquer pessoa_ que está buscando criar seu portifólio web, deseja aprender desenvolvimento web ou testar o Codespaces.
* **Quanta experiência precisa?** _Zero_. Você decide quanto deseja personalizar baseado em sua experiência e tempo disponível. 
* **Ferramentas necessárias:** _Nenhuma_. Não é preciso instalar nada! Tudo está no navegador web.
* **Pré-requisitos:** _Nenhum_. Esse template já tem o ambiente de desenvolvimento e o aplicativo web para você criar seu próprio site.

## Sobre esse template de portifólio

Neste template de portfólio, você poderá "escolher sua própria aventura", temos um aplicativo web baseado em [React](https://reactjs.org/) pronto para você personalizar e implantar facilmente usando apenas seu navegador web.

![Aplicativo web JavaScript de perfil](/__images__/js-portfolio-site.gif "Aplicativo web JavaScript de perfil")

### Guia rápido

1. Clique no botão **Usar este modelo (Use this Template)** e em **Criar um novo repositório (Create a new repository)**
2. Selecione o proprietário do repositório (por exemplo, sua conta gitHub)
3. Digite um nome único para o novo repositório
4. Clique no botão **Code**
5. Clique no botão **Criar codespace na main**
6. [Personalize seu site de portfólio](#-personalize-seu-site-em-3-passos)
7. [Faça deploy (publicação) na nuvem](#-faça-deploy-publicação-na-nuvem)

<details>
   <summary><b>🎥 Para saber mais sobre codespaces, assista à nossa série de tutoriais</b></summary>
   
   [![Tutorial de Codespaces](https://img.youtube.com/vi/ozuDPmcC1io/0.jpg)](https://aka.ms/CodespacesVideoTutorial "Codespaces Tutorial")
</details>

<br />

## 🗃️ Seu Portifólio web com JavaScript

Este repositório é um modelo do GitHub para criar um aplicativo da Web de front-end de portfólio pessoal JavaScript usando a estrutura React. O objetivo é fornecer a você um modelo que você possa utilizar imediatamente para criar seu próprio site através do Codespaces.

O repositorio contém:

* `/.devcontainer`
  - `.devcontainer/Dockerfile`: Arquivo de configuração usado por Codespaces para determinar o sistema operacional e outros detalhes.
  - `.devcontainer/devcontainer.json`: Arquivo de configuração utilizado pelo Codespaces para definir as configurações do Visual Studio Code, como habilitar extensões adicionais.
* `/src`: Arquivos HTML, JS e CSS utilizados para construir seu portifólio web.
* `.eslintrc`: Configuração do [ESLint](https://eslint.org/) para validar a consistência e qualidade do código.
* `.prettierrc`: Configuração do [Prettier](https://prettier.io/), que é utilizado para formatar o código.
* `package.json` e `package-lock.json`: Define as informações do projeto para o [Node.js](https://nodejs.org/), dependências de pacotes e as versões necessárias de cada um

<br />

## 🚀 Vamos começar!

Este projeto está preenchido com dados de amostra para que você possa abrir imediatamente no Codespaces, vê-los em execução e implantar (publicar) a qualquer momento.

Seu ambiente de desenvolvimento está pronto para que você possa começar. Com base em nosso [Template de JavaScript (React) com Codespace](https://github.com/microsoft/codespaces-teaching-template-js), aqui está configurado e pronto para utilizar:

* Um simples aplicativo em [React](https://reactjs.org/) com componentes para cada seção do Portfólio Web
* [Parcel](https://parceljs.org/) para criar seu site quando der deploy. 
* Sublinhando e formatando código usando [ESLint](https://eslint.org/) e [Prettier](https://prettier.io/) para consistência de código.

### Cria seu Portfólio

1. Crie um repositório a partir deste modelo. Use este [link para criar o repositório](https://github.com/microsoft/codespaces-teaching-template-js/generate). Selecione o proprietário do repositório, defina um nome, descrição, se desejar, e selecione se seu novo repositório é público ou privado.
2. Antes de criar o Codespace, habilite o GitHub Copilot para sua conta. Se não estiver habilitado, dê uma olhada em [Personalizar seu site de portfólio usando o Copilot](#-customize-your-site-in-3-steps).
3. Vá para a página principal do repositório recém-criado.
4. Sob o nome do repositório, use o menu "Code" e, na guia Codespaces, selecione "Create codespace on main".

    <img src="../../__images__/createcodespace.png" alt="Create codespace" style="width:270px;"/>

5. Espere enquanto o GitHub inicializa o Codespace.

    <img src="https://user-images.githubusercontent.com/82035/194710065-92f8c325-6f57-4c77-88d7-da8db3c235e9.png" alt="Codespace initializing" style="width: 600px;"/>
    
6. Quando terminar, verá seu Codespace começar com uma seção terminal na parte inferior. Aqui você verá `npm install` em execução. Após o término do NPM, vá para o terminal onde você pode executar o aplicativo web com o seguinte comandondo: `npm run start` 

   Quando o aplicativo da Web for iniciado, você verá uma mensagem dizendo que ela começou com sucesso na porta 1234, e você pode abrir esse site dentro do seu navegador:
  
   <img src="https://user-images.githubusercontent.com/82035/220460347-605293ba-d3d1-483a-8157-71eaabb7ef52.png" alt="Aplicativo da Web iniciado na porta 1234" style="width: 340px;"/>

<br />

## ✨ Personalize seu site em 3 passos

Este projeto foi desenvolvido para ser facilmente personalizável. Cada seção do site é um componente separado e suas informações precisam ser definidas em apenas um local. Isso não é apenas para facilitar a atualização, mas também para que você possa ver como os valores prop são passados para os componentes React.

Para cada etapa, abra o projeto em Codespaces, então você pode fazer e confirmar suas alterações enquanto estiver dentro do seu Codespace.

>  Veja [Utilizando source control em seu Codespace](https://docs.github.com/en/codespaces/developing-in-codespaces/using-source-control-in-your-codespace) para mais tutoriais de Codespaces usando source control

### 1️⃣ Adicione seu "sobre mim" e contas de mídias sociais

Dentro do `App.jsx` você verá uma variável chamada `siteProps`. Este é um objeto JavaScript que detém os principais pares de valores necessários para personalizar seu nome, título, e-mail e contas de mídias sociais.

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

_Alguns valores opcionais_ são endereço de e-mail e contas sociais. Estes são usados no componente 'footer'. Se qualquer item não estiver incluído na lista ou definido como uma sequência vazia (""), ele não exibirá o ícone e o link.

### 2️⃣ Atualize as imagens

Este site de portfólio inclui 3 imagens: seção superior, seção "Sobre mim" e a seção de portfólio. Podem ser imagens de formato **paisagem** de sua escolha, de sua própria coleção ou encontradas que tenham uma licença que permita o uso sem atribuição.

Dois sites para encontrar fotos são [Pixabay](https://pixabay.com/) e [Unsplash](https://unsplash.com). Fotos, ilustrações, vetores, você decide! Quando achar suas imagens, guarde cada uma em `/src/images` com um nome de arquivo curto e significativo.

Vá para os seguintes componentes para atualizar a linha `import image...` para referenciar a nova imagem que você baixou para essa seção, bem como o `imageAltText` para cada imagem:

* `/src/Components/Home.jsx` - Seção na parte superior da página, imagem principal que você verá quando o site é carregado (mulher parada na parede do servidor no exemplo)
   ```javascript
      import image from "../images/server-wall.jpg";
      const imageAltText = "woman holding laptop standing by server room with glass wall";
   ```

* `/src/Components/About.jsx` - Fundo por trás da seção detalhada "sobre mim" (mosaico abstrato no exemplo)
   ```javascript
      import image from "../images/mosaic.svg";
      const imageAltText = "purple and blue abstract background";
   ```

* `/src/Components/Portfolio.jsx` - Imagem destacada no lado esquerdo da seção (foto de mesa de design no exemplo)
   ```javascript
      import image from "../images/design-desk.jpeg";
      const imageAltText = "desktop with books and laptop";
   ```

### 3️⃣ Adicione itens nos quais você trabalhou
 
A seção "Sobre" ajuda a fornecer às pessoas um pouco mais de informações sobre suas habilidades e paixões. Dentro de `/src/Components/About.jsx` você encontrará 2 valores para atualizar:

* `description`: uma ou duas frases curtas, descrevendo a si mesmo, objetivos de carreira e/ou paixões
* `detailOrQuote`: bloco mais longo para você adicionar mais detalhes sobre você, ou até mesmo uma citação que você gosta

A segunda seção a ser atualizada é a seção "Portfólio", onde você destaca os itens nos quais trabalhou. Estes seriam artigos, vídeos, designs de logo, projetos do GitHub, qualquer coisa que destaque você!

Vá para `/src/Components/Portfolio.jsx` e localize a variável `projectList`. Este é um array de objetos em JavaScript. Cada item que você deseja destacar precisa: título, descrição e URL.

O exemplo tem 4, mas o número que você inclui depende de você.

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

## 🏃 Faça deploy (publicação) na nuvem

O projeto inclui a configuração necessária para dar fazer deploy (publicação) **gratuitamente** no [Azure Static Web Apps](https://azure.microsoft.com/products/app-service/static/?WT.mc_id=academic-79839-sagibbon) ou [GitHub Pages](https://pages.github.com/).
Abaixo, você encontra o passo a passo para ambos:

### Azure Static Web Apps

[Azure Static Web Apps](https://azure.microsoft.com/products/app-service/static/?WT.mc_id=academic-79839-sagibbon) é a solução de hospedagem da Microsoft para sites estáticos (ou sites renderizados no navegador do usuário, não em um servidor) por meio do Azure. Este serviço oferece oportunidades adicionais para expandir seu site por meio do Azure Functions, autenticação, versões de preparação (stating ou em português, pré-produção) e muito mais.

Você precisará de contas no Azure e no GitHub para publicar (implantar) seu aplicativo Web. Se você ainda não tem uma conta do Azure, pode criá-la durante o processo de implantação ou nos links abaixo:

* [Crie uma conta do Azure para estudantes (sem necessidade de cartão de crédito)](https://azure.microsoft.com/free/students/?WT.mc_id=academic-79839-sagibbon)
* [Crie uma nova conta do Azure (requer cartão de crédito)](https://azure.microsoft.com/?WT.mc_id=academic-79839-sagibbon)

Com seu projeto aberto no Codespaces:

1. Clique no ícone do Azure na barra lateral esquerda. Faça logon se ainda não o fez e, se for novo no Azure, siga as instruções para criar sua conta.
2. No menu do Azure, clique no sinal “+” e depois em "Criar aplicativo Web estático" (Create Static Web App).
3. Se você não estiver logado no GitHub, você deverá fazer o login. Se você tiver alguma alteração de arquivo pendente, será solicitado que você confirme essas alterações.
4. Defina as informações do seu aplicativo quando solicitado:
    1. **Region**: Coloque a regição mais próxima
    2. **Project structure**: Selecione "React"
    3. **Location of application code**: `/`
    4. **Build location**: `dist`
5. Ao concluir, você verá uma notificação na parte inferior da tela e um novo fluxo de trabalho do GitHub Action será adicionado ao seu projeto. Se você clicar em "Abrir Action no GitHub", verá a ação que foi criada para você, que estará em execução.

![Azure Static Web App deploy](/__images__/swa-deploy.gif "Azure Static Web App deploy")

6. Para visualizar o status de sua publicação (implantação), localize seu recurso Static Web App na guia Azure na barra lateral esquerda do VS Code.
7. Após a conclusão da publicação (implantação), você pode visualizar seu novo aplicativo, acessível ao público clicando com o botão direito do mouse no recurso Static Web App e selecionando "Browse Site".

> **Issues?** Ao criar seu Static Web app, se você for solicitado a selecionar uma assinatura do Azure e não puder selecionar uma assinatura, verifique a guia "Accounts" no VS Code. Certifique-se de escolher as opções "Grant access to ..." (em português, "Conceder acesso a") se essas opções aparecerem. Se você receber a mensagem de erro "RepositoryToken is invalid. ..." (em português, "RepositoryToken é inválido") mude para o Visual Studio Code para a Web (vscode.dev) e repita as etapas lá.

> 🤩 **Bônus**: [Configurar um domínio personalizado para seu aplicativo Web estático do Azure](https://learn.microsoft.com/en-us/shows/azure-tips-and-tricks-static-web-apps/how-to-set-up-a-custom-domain-name-in-azure-static-web-apps-10-of-16--azure-tips-and-tricks-static-w/?WT.mc_id=academic-79839-sagibbon)

### GitHub Pages

[GitHub Pages](https://pages.github.com/) permite hospedar sites diretamente do repositório do GitHub. Este projeto já está configurado para que você possa dar deploy seu portfólio para páginas do GitHub em poucos passos.

Com seu projeto aberto em Codespaces:

1. Abre `package.json` e atualize os seguintes valores: 
    1. **homepage**: defina para `http://{github-username}.github.io/{repo-name}`, onde `github-username` é seu nome de usuário GitHub e `repo-nome` é o nome que você deu a este repositório de portfólio quando o criou
    1. **build-gh**: substitua o  `github-username` pelo seu nome de usuário no GitHub e `repo-name` por nome do repositório
2. Faça um `commit` e `push` destas alterações no `package.json` para seu repositório remoto. 
3. Abra um novo terminal pelo menu ou pressionando `crtl` + `shift` + ` (ou abrir o menu superior esquerdo, selecione "Terminal" e "Novo terminal")
4. Na janela do terminal, execute o comando `npm run deploy`. Isso executará primeiro o script de pré-implantação para criar o projeto, seguido pelo script de implantação, que enviará esses arquivos agrupados para uma nova branch em seu repositório (gh-pages) que será usado para seu site GitHub Pages.
5. Quando concluído, em seu repositório, vá para Configurações e Pages. Lá você verá que uma página foi configurada para você na branch gh-pages e deverá ver a URL (que deve corresponder ao valor "homepage" definido em package.json)

![Azure Static Web App deploy](/__images__/github-pages-deploy.gif "Azure Static Web App deploy")

> 🤩 **Bônus**: [Configure um domínio personalizado para o site no GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

<br />

## 🏆 Personalizando com Copilot

Abaixo estão 4 maneiras adicionais para você continuar personalizando seu site de portfólio e Codespace. Mostraremos como usar o Copilot para fazer sugestões de código para um desenvolvimento mais rápido e ajudá-lo a aprender mais HTML, CSS e JavaScript ao longo do caminho.

  1. [Personalizar seu Codespace](#1-personalizar-seu-codespace)
  2. [Atualizar a navegação entre seções com smooth scroll](#2-atualizar-a-navegação-entre-seções-com-smooth-scroll)
  3. [Animar a imagem fundo](#3-animar-a-imagem-fundo)
  4. [Adicionar uma nova seção](#4-adicionar-uma-nova-seção)

> 👋 Obtendo acesso ao GitHub Copilot
>
> Se você ainda não tem acesso ao Copilot, pode [solicitar aqui](https://github.com/login?return_to=%2fgithub-copilot%2fsignup). Se você é estudante, pode obter o Copilot **GRÁTIS** [seguindo estas instruções](https://aka.ms/copilot-estudantes).
>
> Para garantir que o Copilot esteja sendo executado corretamente, navegue até a guia de extensão em seu Codespace e verifique o status da extensão do Copilot. Se o status for inativo, recrie o Codespace e habilite a extensão para garantir que ela esteja ativada.

### 1. Personalizar seu Codespace

Seu ambiente vem com extensões pré-instaladas. Você pode alterar quais extensões o ambiente codespaces começa, veja como:

1. Abre o arquivo _.devcontainer/devcontainer.json_ e encontre o seguinte elemento JSON **extensions**

   ```json
   "extensions": [
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode",
        "gitHub.copilot",
        "ms-vscode.azure-account",
        "ms-azuretools.vscode-azurestaticwebapps"
   ]
   ```

1. Vamos adicionar a extensão "indent-rainbow". Para fazer isso, vá para a lista **extensions** e adicione:

   ```json
   "oderwat.indent-rainbow"
   ```
  
  O que você fez anteriormente foi adicionar o identificador único de uma extensão do <a href="https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow" target="_blank">indent-rainbow</a>. Isso permitirá que o Codespaces saiba que essa extensão deve ser pré-instalada na inicialização.

Como encontrar o identificador único de uma extensão:

* Navegue a página web da extensão: [marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow&WT.mc_id=academic-79839-sagibbon)
* Localize o campo _Unique Identifier_ na seção **More info** a direita.

-------
⭐ BÔNUS COPILOT ⭐ 

Em `devcontainer.json`, vá para a seguinte linha `settings`: `"emmet.triggerExpansionOnTab": true`. Adicione uma vírgula no final da linha e pressione enter. Veja quais outras configurações o Copilot recomenda e se elas podem ajudá-lo em seu Codespace.

> 💡 Saiba mais aqui, [Personalizar seu GitHub Codespace](https://docs.github.com/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account)

In `devcontainer.json`, go to the following line in the `settings` values: `"emmet.triggerExpansionOnTab": true`. Add a comma at the end of the line and press enter. See what other settings Copilot recommeneds and if they'd help you in your Codespace. 

<br/>


### 2. Atualizar a navegação entre seções com smooth scroll

No cabeçalho do seu site você tem links para cada seção abaixo. Clique em um desses links e observe-o rolar a página até essa seção. Não é realmente um scroll, né?

Vamos melhorar a experiência do usuário diminuindo a velocidade para que o usuário tenha uma noção do que está acontecendo e para onde está navegando na página.
 
1. Abra `styles.css`, que é a folha de estilo para seu site de portfólio. Precisamos adicionar um estilo para `html`. Se você olhar, verá agora que os estilos `html` e `body` estão sendo definidos juntos, sem nenhum estilo definido para `scroll-behavior`. Vamos dar ao Copilot um prompt para adicionar isso para nós.

2. Abaixo do estilo de `html` e `body`, comece a instruir o Copilot com um comentário de:
`/* adiciona uma rolagem suave */`

3. O Copilot irá então sugerir o CSS abaixo:
    ```css
    html {
      scroll-behavior: smooth;
    }
    ```

4. Pressione a tecla tab para aceitar a sugestão. (_Nota: Se você não vir esta sugestão exata do Copilot, continue digitando para que a sugestão apareça._)

Seu site já deve estar em execução no seu Codespace e a alteração será recarregada na página automaticamente. Clique em um link no cabeçalho superior para ver a rolagem suave em ação.

<br/>

### 3. Animar a imagem fundo

As animações são uma maneira fácil de adicionar algum movimento aos elementos da sua página para aumentar a interatividade do usuário e destacar os itens que você deseja garantir que eles notem. Vamos animar a foto da mesa na seção de portfólio.

1. Abra a folha de estilo do seu site, `styles.css` dentro do seu Codespace. Usando o Copilot, na parte inferior do prompt `styles.css` Copilot com o seguinte comentário:
    ```css
    /* adicionar um slide na animação */
    ```
    
    Ele deve então sugerir a seguinte sequência de animação para você. Pressione a tecla tab para aceitar ou continue digitando até que o Copilot conclua as sugestões e você tenha sua animação pronta para uso.

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
2. Com a sequência de animação definida, agora podemos dizer à nossa foto de mesa para se animar com nossa nova sequência de animação `slideIn`. Abra `Portfolio.jsx` e localize a tag `img`. Você verá que ele utiliza CSS embutido para definir seu estilo. Dentro de sua definição de estilo, adicione o seguinte:

    ```css
    animation: "1s ease-out 0s 1 slideIn";
    ```

    Sua tag de imagem deve se parecer com algo como:
    ```html
    <img src={image} style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideInLeft" }} />
    ```

Seu site já deve estar sendo executado no seu Codespace e a alteração será recarregada automaticamente na página. Role para cima e para baixo na página e veja sua foto de desktop deslizar sobre a página.

-------
⭐ BÔNUS COPILOT ⭐ 

Use o Copilot para ajudá-lo a animar a seta de rolagem para baixo, em seu componente `Home`, para saltar para cima e para baixo em sua página.

_Dica_: Em seu arquivo `styles.css`, use comentários para começar a dizer ao Copilot o que você quer fazer. Veja o que é sugerido, ajuste seus prompts e veja como isso o orienta para que sua flecha salte.

-------

### 4. Adicionar uma nova seção

Começamos com algumas seções básicas para o seu portfólio web, mas você tem liberdade criativa para torná-lo seu e adicionar novas seções relevantes para o que você quer em seu site.
  
Por exemplo, vamos adicionar uma seção de educação ao site do seu portfólio.

1. Crie um novo componente para a seção dentro da pasta `Components`. Adicione um novo arquivo chamado `Education.jsx`.

2. Vamos pedir ajuda ao Copilot para começar. Em vez de solicitar um comentário, inicie seu arquivo `Education.jsx` com:

    ```javascript
    import React from "react";
    ```
    
    Conforme você começa a digitar, ele capta o que você está fazendo e pode oferecer um preenchimento automático dessa linha.

3. Pressione `enter` após a linha de importação para que o Copilot sugira o código para criar seu componente `Education`. Pressione `tab` para aceitar a solução ou `crtl` + `enter` para ver todas as sugestões do Copilot e selecione aquela que funciona para você.

  No mínimo, você precisa de um `const` definido e o componente `Education` exportado (exemplo abaixo). O resto é com você. Experimente o Copilot, ajustando-o junto com o que você gostaria que ele construísse.

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

4. Em `App.jsx`, importe seu novo componente `Education` na parte superior adicionando o seguinte e observe como o Copilot começa a ver o que você está fazendo e a fornecer sugestões de preenchimento automático:
    ```javascript
    import Education from "./Components/Education";
    ```
5. Agora adicione o componente `Education` indo para uma nova linha onde você deseja renderizá-lo. O Watch Copilot já sabe que você deseja renderizar o componente 'Educação'. Ele deve sugerir o seguinte que você pode aceitar e renderizar seu novo componente:

    ```javascript
    <Education />
    ```
Em seu Codespace, seu aplicativo de portfólio deve estar em execução e recarregará seu site com as alterações.

-------
⭐ BÔNUS COPILOT ⭐ 

Agora que você sabe como o Copilot pode não apenas ajudá-lo a codificar mais rapidamente, mas também dar sugestões para economizar seu tempo procurando soluções.

Explore como você pode usar o Copilot para ajudá-lo a:
* adicione Educação à sua navegação superior
* inclua detalhes de educação usando o Copilot (_Dica_: adicione o comentário de "grade de 4 células de educação")

-------

<br />

## 📚 Recursos

* [Visão Geral do GitHub Codespaces](https://docs.github.com/codespaces/overview)
* [Guia GitHub Codespaces](https://docs.github.com/en/codespaces/guides)
* [Documentação GitHub Copilot](https://docs.github.com/en/copilot)
* [Use contêineres de desenvolvimento localmente com VS Code e Docker](https://github.com/microsoft/vscode-remote-try-node#vs-code-dev-containers)
* [Desenvolvimento Web para Iniciantes](https://github.com/microsoft/Web-Dev-For-Beginners)
* [Comece a usar o React](https://learn.microsoft.com/en-us/training/modules/react-get-started/?WT.mc_id=academic-79839-sagibbon)


> #### Aplicativo de navegador Codespaces
>
> Se você estiver usando Edge ou Chrome, verá uma opção para instalar o aplicativo Codespaces ao iniciar seu Codespace. O aplicativo Codespaces permite que você inicie seu Codespace dentro do aplicativo para que você possa trabalhar fora do navegador. Encontre o ícone do aplicativo e instale-o com a janela pop-up para testá-lo.
>
> <img src="https://user-images.githubusercontent.com/82035/196431310-806a36ca-f122-4739-83f6-79afa1543e7c.png" alt="Aplicativo web iniciado na porta 1234" style="width: 800px;"/>

<br />

## 🔎 Você encontrou um problema ou tem uma ideia para melhorar?
Ajude-nos a melhorar este repositório [nos informando e abrindo uma issue!](/../../issues/new).
