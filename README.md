[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=526682619)

# JavaScript Portfolio Site with GitHub Codespaces

_Create, customize and deploy your own portfolio website in minutes._

With this JavaScript Codespace template repository we have the development environment and base set and ready to go. You can immediately take this template, and focus on how you want to customize without any setup.

* **Who is this for?** Anyone looking to create a portfolio site, learn web development, or just looking to test out Codepsaces.
* **How much experience do you need?** Zero. This template is built ready for all, regardless of experience level. You get to decided how much you'd like to customize and extend.
* **Tools needed:** _None_. No need to install anything! All you need is a web browser.
* **Prerequisites:** _None_. This template will provide you a working and deployable web app you can immediately extend to create your own site with no web development background.

## About this portfolio template

Our goal is to give a way to quickly create, customize and deploy your own portfolio website using GitHub Codespaces. This project is built to be a bit of "choose your own adventure", meaning you can customize it, and give it as much or as little time as you have. 

Using this template you will:

* Learn how to use Codespaces (_all you need is a web browser_)
* Learn a bit of JavaScript, React, HTML and CSS
* Create your own **free** personalized and deployed live website
* Have something you can build on to highlight your work as build new projects


## What is GitHub Codespace and how will it help me?

A Codespace is a development environment that's hosted in the cloud that you can configure.

### Quick Start

1. Click the **Use this Template** button
2. Select the repository owner (e.g. your GitHub account)
3. Enter a unique name for your new repository
4. Click the **Code** button
5. Click **Create Codespace on main** button

### Why use it

* Repeatable environment offering a 0-config experience.
* Runs in the cloud.
* Can be configured and customized.
* Integrates with your repositories on GitHub.

<details>
   <summary><b>🎥 Watch the video tutorial to learn more about Codespaces</b></summary>
   
   [![Codespaces Tutorial](https://img.youtube.com/vi/ozuDPmcC1io/0.jpg)](https://aka.ms/CodespacesVideoTutorial "Codespaces Tutorial")
</details>

## 🗃️ JavsScript portfolio template

This repo is a GitHub template to build a JavaScript personal portfolio frontend web application using the React framework. The goal is to give you a template to you can immediately utilize to create your own website through Codespaces.

The repo contains the following:

* `/.devcontainer`
  - `.devcontainer/Dockerfile`: Configuration file used by Codespaces to determine operating system and other details.
  - `.devcontainer/devcontainer.json`: Configuration file used by Codespaces to configure Visual Studio Code settings, such as the enabling of additional extensions.
* `/src`: HTML, JS and CSS files used to build your portfolio site.
* `.eslintrc`: Settings for <a href="https://eslint.org/" target="_blank">ESLint</a> that is included for code consistency and quality.
* `.prettierrc`: Settings for <a href="https://prettier.io/" target="_blank">Prettier</a> that is used to format code.
* `package.json` and `package-lock.json`: Defines the project information for <a href="https://nodejs.org/" target="_blank">Node.js</a>, dependent packages and the versions needed of each.

## 🚀 Getting started

This portfolio site project is filled with sample data so that you can immediately open in Codespaces, see it running, and deploy at any point.

Your development environment is all set for you to start. Based on our [JavaScript Codespace Template (React)](https://github.com/microsoft/codespaces-teaching-template-js), here is what s already setup and ready for you to use:

* Simple <a href="https://reactjs.org/" target="_blank">React</a> application with components for each section of the portfolio site
* <a href="https://parceljs.org/" target="_blank">Parcel</a> in place to build your site when deploying
* Code linting and formattting using <a href="https://eslint.org/" target="_blank">ESLint</a> and <a href="https://prettier.io/" target="_blank">Prettier</a> for code consistency.

### Create your portfolio

1. Create a repository from this template. Use this [create repo link](https://github.com/microsoft/codespaces-teaching-template-js/generate). Select the repository owner, provide a name, a description if you'd like and if you'd like the new repository to be public or private.
2. Navigate to the main page of the newly created repository.
3. Under the repository name, use the Code drop-down menu, and in the Codespaces tab, select "Create codespace on main".

    <img src="https://docs.github.com/assets/cb-138303/images/help/codespaces/new-codespace-button.png" alt="Create codespace" style="width:270px;"/>
    
4. Wait as GitHub initializes the Codespace.

    <img src="https://user-images.githubusercontent.com/82035/194710065-92f8c325-6f57-4c77-88d7-da8db3c235e9.png" alt="Codespace initializing" style="width: 600px;"/>
    
When complete you will see your Codespace load with a terminal section at the bottom. Here you will see `npm install` executing. When complete you will return to the terminal prompt where you can run the web application by executing: `npm run start` 

When the web application is started you will see a prompt telling you it started successfully on port 1234, and you can open that site within your browser:

   <img src="https://user-images.githubusercontent.com/82035/194709984-7e01f9db-df3e-41dc-bc1d-ce38b16b812d.png" alt="Web application started on port 1234" style="width: 340px;"/>


## ✨ Customize your site in 3 steps

This project is built to be easily customizable. Each section of the site is a separate component, and your information needs to be set in only one spot. This is not only for ease of updating, but so you can see how prop values are passed to React components.

For each step, open the project in Codespaces, then you can make and commit your changes while within your Codespace. 

> See [Using source control in your codespace](https://docs.github.com/en/codespaces/developing-in-codespaces/using-source-control-in-your-codespace) for more Codespaces source control how-tos

### Step 1: Add your "about me" and social accounts

Within `App.jsx` you will see a variable called `siteProps`. This is a JavaScript object that hold the key value pairs needed to customize your name, title, email and social accounts.

Update to the name and title you'd like displayed at the top of your site.

_Optional values_ are email address and social accounts. These are used in the `Footer` component. If any item is not included in the list, or set to an empty string ("") it will not display the icon and link.

### Step 2: Update images

This portfolio site includes 3 images: top section background, "About me" background and portfolio section (desk). These can be any **landscape** sized images of your choosing from your own collection, or found that have a license allowing you to use without attribution.

A couple possible sites to find photos are <a href="https://pixabay.com/" target="_blank">Pixabay</a> and <a href="https://unsplash.com" target="_blank">Unsplash</a>. Photos, illustrations, vectors, your choice! When you found your images, save each one to `/src/images` with a short, meaningful file name.

Go to the following components to update the `import image...` line to reference the new image you downloaded for that section:

* `Home.jsx` - section at top of the page, main image you will see when site loads (woman standing by server wall in sample)
* `About.jsx` - background behind the detailed "about me" section (abstract mosaic in sample)
* `Portfolio.jsx`- image highted in left hand side of section (design desk photo in sample)

### Step 3: Add items you've worked on

The portfolio section is the area for you to highlight items you've worked on. These would be articles, videos, logo designs, GitHub projects, anything that highlights you!

Go to `Portfolio.jsx` to the `projectList` variable. This is a JavaScript array of objects. Each item you want to highlight needs: title, description and URL.

The sample design has 4, but the number you include is up to you. 

## 🏃 Deploy your web application

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
1. When complete you will see notification at the bottom of your screen, and a new GitHub Action workflow will be added to your project. If you click “Open Action in GitHub” you will see the action that was created for you, and it is currently running. 

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
<summary><h4>1. Customize your Codespace</h4></summary>

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
   
> 💡 Learn more here, <https://docs.github.com/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account>

</details>

<details id="challenge-2">
<summary><h4>2. Update to smooth scroll to a section</h4></summary>

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
<summary><h4>3. Animate desk photo</h4></summary>

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
<summary><h4>4. Add a new section</h4></summary>

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

## 📚 Other Resources

* [GitHub Codespaces docs overview](https://docs.github.com/codespaces/overview)
* [Use dev containers locally](https://github.com/microsoft/vscode-remote-try-node)

## 🔎 Found an issue or have an idea for improvement? 
Help us make this template repository better by [letting us know and opening an issue!](/../../issues/new).
