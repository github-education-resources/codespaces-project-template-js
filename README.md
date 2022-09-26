[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=526680454)

# JavaScript Codespace Template (React)

_Extend and use for your Web Development lessons in minutes._

With this JS Codespace template you can immediately create a lesson that provides a consistent starting point for all your students. Allow you as the educator to focus on the web development content you are teaching, and let us handle the environment setup for you.

* **Who is this for?** Educators and teachers of all levels, and those looking for a great boilerplate React template web app to build on.
* **How much experience do students need?** Zero. This template is built with basic elements complete with comments so it can be used in beginner to advanced lessons.
* **Can I use for other JS Frameworks?** Absolutely. We used React here as an example and provide instructions below how you can use this template and update to your framework requirements.
* **Prerequisites:** None. This template will provide you a working and deployable web app you can immediately extend for your needs.

## What is GitHub Codespace and how can I use it in my teaching?

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

### For the Educator

For you as a teacher that means that you can create an environment, in the cloud, for your class that all students can use with 0 or next to 0 configuration regardless of what operating system they are using.

## Codespaces JS template

This repo is a GitHub template for a JavaScript frontend web application using the React framework. The goal here is to give you a template to you can immediately utilize for React, or show you hwo you can adapt it for your particular JS needs.

The repo contains the following:

* `/src`, the sub directory `/src` contains the HTML, JS and CSS for the React web application.
* `.eslintrc`, settings for <a href="https://eslint.org/" target="_blank">ESLint</a> that is included for code consistency and quality.
* `.prettierrc`, settings for <a href="https://prettier.io/" target="_blank">Prettier</a> that is used to format code.
* `CODE_OF_CONDUCT`, Microsoft's Code of Conduct for open source repositories. Learn more by reading the [CODE_OF_CONDUCT](./CODE_OF_CONDUCT) file in this repo.
* `LICENSE`, this project is under MIT license. Learn more by reading the [LICENSE](./LICENSE) file in this repo.
* `package.json` and `package-lock.json`, these 2 files define the project information for <a href="https://nodejs.org/" target="_blank">Node.js</a>, dependent packages and the versions needed of each. 
* `README.md`. this file describes this repository and what's in it.
* `SECURITY`, Microsoft's security policies for open source repositories. Read more in [SECURITY](./SECURITY)
* `SUPPORT`, how best to get assistance with this repo. Read more in [SUPPORT](./SUPPORT)

### About the base React application (`/src` )

As an example of how you can utilize Codespaces we have set this template to be a base <a href="https://reactjs.org/" target="_blank">React</a> application that utilizes <a href="https://parceljs.org/" target="_blank">Parcel</a> to build.

In the source for the React application you will see the bare minimum file structure for a working application. Included in that is a sample component (Header) to demonstrate how to incorporate components into your application. 

We utilize <a href="https://parceljs.org/" target="_blank">Parcel</a> for it's limited configuration required and ease for you to extend or replace if needed.

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

This template is intended to be fully customizable for your particular Web Development teaching needs. Here are a few challenge scenarios we will cover for when you are ready.

<details id=3>
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

<details id=4>
<summary><h3>2. Change to a different frontend framework</h3></summary>

At the core of this template app is <a href="https://nodejs.org/" target="_blank">Node.js</a>. On top of a Node.js base app you can utilize multiple JavaScript frameworks to creating an <a href="http://expressjs.com/" target="_blank">Express</a> backend application.  

To get started customizing for your needs:

1. Open the repo you created from this template in Codespaces. 
1. Remove the packages listed in `dependencies` and `devDependencies` from `package.json` that you will not be using.
1. In the terminal  within your Codespace, run `npm install` to clear the removed packages.
1. You can now install the packages for the project needed for your lesson through the recommended paths provided through the framework documentation.

Once you have your updates packages you will then need to:

* Update/Remove source files referencing React.
* Update ESLint configuration to match nw framework being used.
* Update any Prettier configuration, if required.

In some cases, the initialization of a new framework may overwrite existing `/src` files, not a problem. The Codespace is set to run `npm install` and `npm run start` on start. As long as those are still valid for your framework Codespace will continue to work as expected.

If running `npm install` and `npm run start` in the root of your Codespace are no longer valid, simply open `/.devcontainer/devcontainer.json` and update the `postCreateCommand` for what you require for your updated framework and application.

</details>

<details id=5>
<summary><h3>3. Update the version of Node.js</h3></summary>

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