<br />

<p align="center">
  <img alt="Logo" src="./.github/logo.png" width="130px" />
</p>

<h1 align="center" style="text-align: center;">GoMarketplace</h1>

<p align="center">
	<a href="https://github.com/LuizFerK">
		<img alt="Author" src="https://img.shields.io/badge/author-Luiz%20Fernando-FF872C?style=flat" />
	</a>
	<a href="#">
		<img alt="Languages" src="https://img.shields.io/github/languages/count/LuizFerK/GoMarketplace?color=%23FF872C&style=flat-" />
	</a>
	<a href="hhttps://github.com/LuizFerK/GoMarketplace/stargazers">
		<img alt="Stars" src="https://img.shields.io/github/stars/LuizFerK/GoMarketplace?color=FF872C&style=flat" />
	</a>
	<a href="https://github.com/LuizFerK/GoMarketplace/network/members">
		<img alt="Forks" src="https://img.shields.io/github/forks/LuizFerK/GoMarketplace?color=%23FF872C&style=flat" />
	</a>
	<a href="https://github.com/LuizFerK/GoMarketplace/graphs/contributors">
		<img alt="Contributors" src="https://img.shields.io/github/contributors/LuizFerK/GoMarketplace?color=FF872C&style=flat" />
	</a>
</p>

<p align="center">
	<b>The best way to shop faster and security!</b><br />
	<span>Created with React Native and Typescript.</span><br />
	<sub>Made with ❤️</sub>
</p>

<br />

<p align="center">
	<img alt="Dashboard" src="./.github/dashboard.jpg" width="300px" />
  <img alt="Cart" src="./.github/cart.jpg" width="300px" />
</p>

<br />

# :pushpin: Contents

- [Features](#rocket-features)
- [Installation](#wrench-installation)
- [Getting started](#bulb-getting-started)
- [Techs](#fire-techs)
- [Issues](#bug-issues)
- [License](#book-license)

# :rocket: Features

- Chose items from the dashboard
- Save your favorite items in the cart
- Increment or decrement the total quantity for each item to purchase

# :wrench: Installation

### Required :warning:
- Yarn
- Node.js

### SSH

SSH URLs provide access to a Git repository via SSH, a secure protocol. If you have an SSH key registered in your GitHub account, clone the project using this command:

```git clone git@github.com:LuizFerK/GoMarketplace.git```

### HTTPS

In case you don't have an SSH key on your GitHub account, you can clone the project using the HTTPS URL, run this command:

```git clone https://github.com/LuizFerK/GoMarketplace.git```

**Both of this commands will generates a folder called GoMarketplace, with all the project**

# :bulb: Getting started

### Server

This app use a fake api. In the project folder, run ```yarn json-server server.json -p 3333 -H YOUR-IPV4-ADDRESS```.
> Example: ```yarn json-server server.json -p 3333 -H 192.168.1.11```

### Mobile

1. Open the folder and run ```yarn``` to install the dependencies;
2. In ```src/services/api.ts``` change the baseURL for your IPv4 address: ```baseURL: 'http://YOUR-IPV4-ADDRESS:3333'```;
> Example: ```baseURL: 'http://192.168.1.11:3333'```
3. Connect your device to your computer and enable the [debugger mode](https://developer.android.com/studio/debug/dev-options) on the developer tools;
4. Run ```yarn android``` to install the app on your **Android** or ```yarn ios``` to run on your **IOS**;
5. Run ```yarn start``` to open the metro-bundler and get access to the server app on mobile; (close the app and open again)

# :fire: Techs

### Typescript (language)

### JSON Server (fake API)

### React Native (mobile)
- Axios
- Styled Components
- @React Navigation | Stack
- @React Native Community | Async Storage

# :bug: Issues

Find a bug or error on the project? Please, feel free to send me the issue on the [GoMarketplace issues area](https://github.com/LuizFerK/GoMarketplace/issues), with a title and a description of your found!

If you know the origin of the error and know how to resolve it, please, send me a pull request, I will love to review it!

# :book: License

Released in 2020.

This project is under the [MIT license](https://github.com/LuizFerK/GoMarketplace/blob/master/LICENSE).

<p align="center">
	< keep coding /> :rocket: :heart:
</p>
