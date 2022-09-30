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
* Create your own **free** personalized and deployed live website
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

## Getting started

This portfolio site project is filled with sample data so that you can immediately open in Codespaces, see it running, and deploy at any point.

Your development environment is all set for you to start. Based on our [JavaScript Codespace Template (React)](https://github.com/microsoft/codespaces-teaching-template-js), here is what s already setup and ready for you to use:

* Simple <a href="https://reactjs.org/" target="_blank">React</a> application with components for each section of the portfoli site
* <a href="https://parceljs.org/" target="_blank">Parcel</a> in place to build your site when deploying
* Code linting and formattting using <a href="https://eslint.org/" target="_blank">ESLint</a> and <a href="https://prettier.io/" target="_blank">Prettier</a> for code consistency.

All elements have been commented with notes, tips and directions. As you are working within the code you can use those are your guide, as well as this README.

### Run this template to see sample site

To run what's in this repo, you need to first start a Codespaces instance.

1. Navigate to the main page of the newly created repository.
2. Under the repository name, use the Code drop-down menu, and in the Codespaces tab, select "Create codespace on main".
<img src="https://docs.github.com/assets/cb-138303/images/help/codespaces/new-codespace-button.png" alt="Create codespace" style="width:270px; padding: 1rem;"/>

This will trigger a creation of a new Codespaces development environment, and launch that environment in a new tab for you to start working in.

When complete you will see VS Code load with a terminal section at the bottom. Here you will see `npm install` and `npm run start` automatically executing for you so that you can immediately view the React app running.

### Utilize this template to create your site

This repo is created as a template for you to customize, extend and deploy as your own site. To do this, click the "Use this template" button at the top of this repo, or us this [link to generate your own Codespaces Teaching JS Template](https://github.com/microsoft/codespaces-teaching-template-js/generate).

You will then be taken to a page to select the owner, provide a name and a description for this new repository and if you'd like it public or private.

When all is selected, press the "Create repository from template" button the bottom to create your own repo from this template.

</details>

## Customize your site in 3 steps

This project is built to be easily customizable. Each section of the site is a separate component, and your information needs to be set in only one spot. This is not only for ease of updating, but so you can see how prop values are passed to React components.

For each step, open the project in Codespaces, then you can make and commit your changes while within your Codespace. 

> See [Using source control in your codespace](https://docs.github.com/en/codespaces/developing-in-codespaces/using-source-control-in-your-codespace) for more Codespaces source control how-tos

<details id="customize-1">
<summary><h3>1. Add your "about me" and social accounts</h3></summary>

Within `App.js` you will see a variable called `siteProps`. This is a JavaScript object that hold the key value pairs needed to customize your name, title, email and social accounts.

Update to the name and title you'd like displayed at the top of your site.

_Optional values_ are email address and social accounts. These are used in the `Footer` component. If any item is not included in the list, or set to an empty string ("") it will not display the icon and link.
</details>

<details id="customize-3">
<summary><h3>2. Update images</h3></summary>

This portfolio site includes 3 images: top section background, "About me" background and portfolio section (desk). These can be any **landscape** sized images of your choosing from your own collection, or found that have a license allowing you to use without attribution.

A couple possible sites to find photos are <a href="https://pixabay.com/" target="_blank">Pixabay</a> and <a href="https://unsplash.com" target="_blank">Unsplash</a>. Photos, illustrations, vectors, your choice! When you found your images, save each one to `/src/images` with a short, meaningful file name.

Go to the following components to update the `import image...` line to reference the new image you downloaded for that section:

* `Home.jsx` - section at top of the page, main image you will see when site loads (woman standing by server wall in sample)
* `About.jsx` - background behind the detailed "about me" section (abstract mosaic in sample)
* `Portfolio.jsx`- image highted in left hand side of section (design desk photo in sample)
</details>

<details id="customize-3">
<summary><h3>3. Add items you've worked on</h3></summary>

The portfolio section is the area for you to highlight items you've worked on. These would be articles, videos, logo designs, GitHub projects, anything that highlights you!

Go to `Portfolio.jsx` to the `projectList` variable. This is a JavaScript array of objects. Each item you want to highlight needs: title, description and URL.

The sample design has 4, but the number you include is up to you. 

</details>

## Deploy your web application

Project includes the setup needed for you to deploy **free** to both <a href="https://azure.microsoft.com/en-in/products/app-service/static/" target="_blank">Azure Static Web Apps</a> and <a href="https://pages.github.com/" target="_blank">GitHub Pages</a>.

### Azure Static Web Apps

<a href="https://azure.microsoft.com/en-in/products/app-service/static/" target="_blank">Azure Static Web Apps</a> is Microsoft's hosting solution through Azure for static sites (or sites that are rendered in the user's browser, not on a server). Will provide you additional opportunities to expand your site through Azure Functions, authentication, staging versions and more.

With your project open in Codespaces:

1. Go to the Azure icon in the left sidebar. Log in if you are not already. If you are new to Azure, follow the provide prompts to create your account.
1. From Azure menu click “+” sign and then “Create Static Web App”.
1. If you are not logged into GitHub you will be prompted to log in, and if you have any pending file changes you will then be prompted to commit those changes. 
1. You will be prompted to set you application information:
    1. **Region**: pick the one closest to you
    1. **Project structure**: select "React"
    1. **Location of application code**: `/`
    1. **Build location**: `dist`
1. When complete you will see notification at the bottom of your screen, and a new GitHub Action workflow will be added to your poroject. If you click “Open Action in GitHub” you will see the action that was created for you, and it is currently running. 

### GitHub Pages

<a href="https://pages.github.com/" target="_blank">GitHub Pages</a> allows you to host websites directly from your GitHub repository. This project is already set up for you to get your portfolio deployed to GitHub pages with minimal steps. 

With your project open in Codespaces:

1. Go to `package.json` and find the "homepage" value, and update it to `http://{github-username}.github.io/{repo-name}`, where `github-username` is your GitHub username and `repo-name` is the what you named this portfolio repo when you created it.
1. Commit and push that change to `package.json` to your GitHub remote repo.
1. Open a new terminal from the menu or by pressing `crtl` + `shift` + `\``
1. Within the terminal window run `npm run deploy`. This will first run the predeploy script to build the project, followed by the deploy script that will push those bundled files to a new branch on your repo (gh-pages) that will be used for you GitHub Pages site.
1. When completed, within your repo, go to Settings and Pages. There you will see that a page has been set up to for you against the gh-pages branch, and you should see the url (that should match the “homepage” value you set in package.json)


## Challenges

<details id="challenge-1">
<summary><h3>1. Add an extension</h3></summary>

Your environment comes with preinstalled extensions. You can change which extensions your Codespaces environment starts with, here's how:

1. Open file _.devcontainer/devcontainer.json_ and locate the following JSON element **extensions**

   ```json
   "extensions": [
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode",
        "ms-vscode.azure-account",
        "ms-azuretools.vscode-azurestaticwebapps"
   ]
   ```

1. Let's add the `indent-rainbow` extension. To do this, go to the **extensions** list and add:

   ```json
   "oderwat.indent-rainbow"
   ```
  
   What you did above was to add the unique identifier of an extension of the <a href="https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow" target="_blank">indent-rainbow</a>. This will let Codespaces know that this extension should be pre-installed upon startup.

To find the unique identifier of an extension:

* Navigate to the extension's web page, like so <a href="https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow" target="_blank">https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow</a>
* Locate the _Unique Identifier_ field under **More info** section on your right side.

</details>

<details id="challenge-2">
<summary><h3>2. Update to smooth scroll to a section</h3></summary>

In your site header you have links to each section below. Click one of these links and watch it scroll the page to that section. Not really a scroll right?

Let's make this a better user experience by slowing that down so the user has a sense of what is happening, and where they are navigating to on the page. 

Open `styles.css`, which is the stylesheet for your portfolio application. We need to add a style for `html`. If you look, you'll see right now `html` and `body` styles are being set together, so let's add the following css snippet to set the scrolling for the `html` element:

```css
html {
  scroll-behavior: smooth;
}
```

Your site should already be running in your Codespace, and the change will reload onto the page automatically. Click a link in the top header to see the smooth scroll in action.

</details>

<details id="challenge-3">
<summary><h3>3. Animate desk photo</h3></summary>

Animations are a way you can easily add some motion to elements on your page to increase user interactivity, and highlight items you want to make sure they notice. Let's animate the desk photo in the portfolio section. 

Start by opening your site's stylesheet, `styles.css` within your Codespace. We are going to first define the animation sequence by adding a `@keyframes` definition to slide in from the left:

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

Now that we have defined our `slideInLeft` animation sequence we can tell our desk photo to animate itself with that sequence. Open up the `Portfolio.jsx` component in your Codespaces, and find the `img` tag. You wills ee it utilizes inline CSS to set it's styling. Within it's style definition add the following:

```css
animation: "1s ease-out 0s 1 slideInLeft";
```

Your image tag should look something like:
```html
<img src={image} style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideInLeft" }} />
```

Your site should already be running in your Codespace, and the change will reload onto the page automatically. Scroll up and down the page and watch your desk photo slide onto the page.

> **Bonus**: Animate scroll down arrow
</details>

<details id="challenge-4">
<summary><h3>4. Add a new section</h3></summary>

We started you off with a few basic sections for your portfolio site, but you have creative freedom to make it your own. That includes adding new sections. For example, let's add an education section to your site. 

Start by creating the new component for the section. Within the `Components` folder, add a new file `Education.jsx`. This will be our new education section. 

Within that file add the component function, export and information you'd like to include:

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

Now, let's import this new component into our `App.jsx` and have it render. Within your `App.jsx` file import your new `Education` component at the top by adding the following:
```javascript
import Footer from "./Components/Footer";
```

Then below in the rendering of `App`, add the `Education` component were you would like it to render within the page by inserting:
```javascript
<Education />
```

In your Codespace, your portfolio application should be running and will reload your site with the changes. 

</details>

## Learn more

* [GitHub Codespaces docs overview](https://docs.github.com/en/codespaces/overview)
* [GitHub Codespaces docs quickstart](https://docs.github.com/en/codespaces/getting-started/quickstart)
