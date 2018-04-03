# Vanilla JS with webpack - starter pack

Basic packages and scripts to start app developing in vanilla js and webpack

## Packages
* [bootstrap v.4](https://getbootstrap.com/docs/4.0/getting-started/introduction/) styling
* [page.js](https://www.npmjs.com/package/page) routing
* [lit-html](https://github.com/Polymer/lit-html) template engine
* [redux](https://redux.js.org/) data model
* webpack
    - webpack-dev-server
* postcss

## ToDo

* Mark menu item when route entered

## Getting started

```
$ git clone git@github.com:artemdemo/react-webpack-starter.git YOUR_APP_NAME
```

```
$ cd YOUR_APP_NAME
```

```
$ npm install
```

You also can use `npm i` instead, but yarn is better.

And finally you'll probably want replace `.git` folder with yours:

```
$ rm -rf .git/ && git init
```

## npm commands

* `$ npm start` (alias `$ npm run server:dev`) - build bundle, but without minification and serve it in the browser
* `$ npm run build` - build version of bundle
* `$ npm run stats` - analyze code distribution in bundle files
* `$ npm run eslint` - run eslint for code-styling checks
* `$ npm t` - run tests
* `$ npm run server:prod` - build for production and run simple server to show in the browser

**Notice**

In order to run command in production mode you'll need use env variable `NODE_ENV='production'`

### Check for outdated packages

```
$ npm outdated
```

After that you can upgrade them:

```
$ npm update [-g] [<pkg>...]
```

If you want to upgrade to the latest version use:

```
$ npm update <pkg>@latest
```
