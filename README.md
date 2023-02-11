# InteractOut Timeline Visualization

InteractOut timeline visualization.

## Prerequisites

This project requires NodeJS (version 16 or later) and NPM. [Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are easy to install. To make sure you have them available on your machine, try running the following command.

```sh
$ npm -v && node -v
8.19.3
v18.13.0
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone git@github.com:HumanAILab/interactout-timeline-viz.git
$ cd interactout-timeline-viz
```

To install and set up the library, run:

```sh
$ npm install
```

## Usage

### Serving the app

```sh
$ npm start
```

### Building a distribution version

```sh
$ npm run build
```

This task will create a distribution version of the project inside your local `dist/` folder

## Security

Multiple levels of security checks are enforced in this web app.

1. API key restrictions on [Google Cloud Platform](https://console.cloud.google.com/apis/credentials?authuser=1&project=endless-tractor-360801)
2. Authorized domains on [Firebase Console](https://console.firebase.google.com/u/1/project/endless-tractor-360801/authentication/settings)
3. Firebase [App Check](https://console.firebase.google.com/u/1/project/endless-tractor-360801/appcheck/apps) with public keys in `index.html`
4. Firebase [Security Rules](https://console.firebase.google.com/u/1/project/endless-tractor-360801/firestore/rules)

## Resources

* [Cloud Firestore](https://firebase.google.com/docs/firestore)
* [vis-timeline JS Library](https://github.com/visjs/vis-timeline)
* [FirebaseUI for Web](https://github.com/firebase/firebaseui-web/)
* [Bootstrap & Webpack](https://getbootstrap.com/docs/5.2/getting-started/webpack/)
* [PurgeCSS](https://purgecss.com/plugins/postcss.html)
* [HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin)
* [Webpack Production](https://webpack.js.org/guides/production/)
