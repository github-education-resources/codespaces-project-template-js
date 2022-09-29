[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=526682619)

# JavaScript React Portfolio Site with GitHub Codespaces

_Create and deploy your own portfolio website in minutes._

With this template repository you can quickly create, customize and deploy your own website using the <a href="https://reactjs.org/" target="_blank">React</a> framework. We have the development environment ready so that you can focus on the project, and how you want to utilize it for yourself.

* **Who is this for?** Anyone looking to create a portfolio site, learn web development, learn React, or just looking to test out Codepsaces.
* **How much experience do students need?** Zero. This template is built ready for all, regardless of experience level. You get to decided how much you'd like to customize and extend. 
* **Tools needed:** _None_. No need to install anything! All you need is a web browser.
* **Prerequisites:** _None_. This template will provide you a working and deployable web app you can immediately extend to create your own site with no web development background.

## About this portfolio template

Our goal is to give a way to quickly create, customize and deploy your own portfolio website using GitHub Codespaces.

Using this template you will:

* Learn how to use Codespaces (_all you need is a web browser_)
* Learn a bit of JavaScript, React, HTML and CSS
* Create your own __free__ personalized and deployed live website
* Have something you can build on to highlight your work as build new projects

This project is built to be a bit of "choose your own adventure", meaning you can customize it, and give it as much or as little time as you have. Below we will guide you through how to customize and challenges to extend, you choose your path.

## What is GitHub Codespace and how will it help me?

A Codespace is a development environment that's hosted in the cloud that you can configure.

### Why use it

* Repeatable environment offering a 0-config experience.
* Runs in the cloud.
* Can be configured and customized.
* Integrates with your repositories on GitHub.

### Customization

You can customize your project for GitHub Codespaces by committing configuration files to your repository (often known as Configuration-as-Code), which creates a repeatable Codespace configuration for all users of your project.

You can configure things like:

* Extensions, you can specify what extensions should be preinstalled.
* Dotfiles and settings.

> Learn more here, <https://docs.github.com/en/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account>

## Get familiar with project files and folders

This repo is a GitHub template to build a JavaScript personal portfolio frontend web application using the React framework. The goal is to give you a template to you can immediately utilize to create your own website through Codespaces.

The repo contains the following:

* `/.devcontainer`, containers the Codespaces configuration files
* `/src`, where you will find all the HTML, JS and CSS to that is used to build your portfolio site.
* `.eslintrc`, settings for <a href="https://eslint.org/" target="_blank">ESLint</a> that is included for code consistency and quality.
* `.prettierrc`, settings for <a href="https://prettier.io/" target="_blank">Prettier</a> that is used to format code.
* `CODE_OF_CONDUCT`, Microsoft's Code of Conduct for open source repositories. Learn more by reading the [CODE_OF_CONDUCT](./CODE_OF_CONDUCT) file in this repo.
* `LICENSE`, this project is under MIT license. Learn more by reading the [LICENSE](./LICENSE) file in this repo.
* `package.json` and `package-lock.json`, these 2 files define the project information for <a href="https://nodejs.org/" target="_blank">Node.js</a>, dependent packages and the versions needed of each. 
* `README.md`. this file describes this repository and what's in it.
* `SECURITY`, Microsoft's security policies for open source repositories. Read more in [SECURITY](./SECURITY)
* `SUPPORT`, how best to get assistance with this repo. Read more in [SUPPORT](./SUPPORT)

### Getting started

This project is filled with sample data so that you can immediately open in Codespaces, see it running, and deploy at any point.

Your development environment is all set for you to start. Based on our [JavaScript Codespace Template (React)](https://github.com/microsoft/codespaces-teaching-template-js), here is what s already setup and ready for you to use:
* Simple <a href="https://reactjs.org/" target="_blank">React</a> application with components for each section of the portfoli site
* <a href="https://parceljs.org/" target="_blank">Parcel</a> in place to build your site when deploying
* Code linting and formattting using <a href="https://eslint.org/" target="_blank">ESLint</a> and <a href="https://prettier.io/" target="_blank">Prettier</a> for code consistency


<details id=1>
<summary><h3>Run this template</h3></summary>

To run what's in this repo, you need to first start a Codespaces instance.

1. Navigate to the main page of the newly created repository.
2. Under the repository name, use the Code drop-down menu, and in the Codespaces tab, select "Create codespace on main".
<img src="https://docs.github.com/assets/cb-138303/images/help/codespaces/new-codespace-button.png" alt="Create codespace" style="width:270px; padding: 1rem;"/>

This will trigger a creation of a new Codespaces development environment, and launch that environment in a new tab for you to start working in.

When complete you will see VS Code load with a terminal section at the bottom. Here you will see `npm install` and `npm run start` automatically executing for you so that you can immediately view the React app running.
</details>

<details id=2>
<summary><h3>Utilize this template</h3></summary>

This repo is created as a template for you to extend into your own lesson as your own repository for you to customize as needed.

To do this, click the "Use this template" button at the top of this repo, or us this [link to generate your own Codespaces Teaching JS Template](https://github.com/microsoft/codespaces-teaching-template-js/generate).

You will then be taken to a page to select the owner, provide a name and a description for this new repository and if you'd like it public or private.

When all is selected, press the "Create repository from template" button the bottom to create your own repo from this template.

</details>

## Next Steps

### Customize your site

<details id=3>
<summary><h3>1. Add your "about me" and social accounts</h3></summary>
</details>

<details id=4>
<summary><h3>2. Update photos</h3></summary>
</details>

<details id=5>
<summary><h3>3. Add items you've worked on</h3></summary>
</details>

### Deploy your web application

#### Azure Static Web Apps

#### GitHub Pages

### Challenges

<details id=6>
<summary><h3>1. Add an extension</h3></summary>

Your environment comes with preinstalled extensions. You can change which extensions your codespaces environment starts with, here's how:

1. Open file _.devcontainer/devcontainer.json_ and locate the following JSON element **extensions**

   ```json
   "extensions": [
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode",
        "ms-vscode.azure-account",
        "ms-azuretools.vscode-azurestaticwebapps"
   ]
   ```

1. Add the following entry to **extensions** list:

   ```json
   "codespaces-Contrib.codeswing"
   ```
  
   What you did above was to add the unique identifier of an extension of the [CodeSwing extension](https://marketplace.visualstudio.com/items?itemName=codespaces-Contrib.codeswing). This will let Codespaces know that this extension should be pre installed upon startup.

To find the unique identifier of an extension:

* Navigate to the extension's web page, like so <https://marketplace.visualstudio.com/items?itemName=codespaces-Contrib.codeswing>
* Locate the _Unique Identifier_ field under **More info** section on your right side.

</details>

<details id=7>
<summary><h3>2. Update to smooth scroll to a section</h3></summary>

</details>

<details id=8>
<summary><h3>3. Animate desk photo</h3></summary>
    Bonus: Animate scroll down arrow
</details>

<details id=9>
<summary><h3>4. Add a new section</h3></summary>

</details>

<details id=10>
<summary><h3>5. Update the version of Node.js</h3></summary>

Let's say you want to change what version of Node.js this project is utilizing. This is something you can control.

Open *.devcontainer/devcontainer.json* and replace the following section:

```json
"VARIANT": "16-bullseye"
```

with the following instruction:

```json
"VARIANT": "18.9-bullseye"
```

this change will use Node.js 18.9 instead of 16. The complete list of all Node.js variants available can be found at [hub.docker.com/_/node](https://hub.docker.com/_/node)
</details>

## Learn more

* [GitHub Codespaces docs overview](https://docs.github.com/en/codespaces/overview)
* [GitHub Codespaces docs quickstart](https://docs.github.com/en/codespaces/getting-started/quickstart)