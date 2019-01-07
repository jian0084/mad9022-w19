# Yarn Package Manager

The Yarn Package Manager was developed to try and improve the performance of dependency management for node projects.

[Yarn website](https://yarnpkg.com/en/)

## Installation

To install on OSX, we would use [HomeBrew]() to install Yarn. You need to visit the HomeBrew website and install HomeBrew first. Then use HomeBrew to install Yarn

```
brew install yarn
```

To install Yarn on Windows we need to download the `.msi` file and run the installation program from [this webpage](https://yarnpkg.com/en/docs/install#windows-stable).


## Usage

To convert a folder into a Node project with Yarn (the equivalent of `npm init`):

```
yarn init
```

To download and install a Node package and add it to the `package.json` file as a dependency (the equivalent of `npm install bootstrap`)

```
yarn add bootstrap
yarn add babel --dev
```

By default, using `yarn add` will add the package to the `package.json` file as a dependency.

Adding the `--dev` option will add the package to the `package.json` file as a devDependency.

## Global or Version Specific Installs

To globally install a package with Yarn 

```
yarn global add <pkg>
```

Where `<pkg>` is the name of the package that you want installed globally. Eg: `cordova`.

This would be the equivalent of `npm install -g <pkg>`.

When you want to have a specific version of a package installed, it works the same way in NPM and Yarn. Just add `@` with a version number after the package name.

```
npm install cowsay@1.4.0
yarn add cowsay@1.4.0
```

[Full Reference for Yarn CLI Commands](https://yarnpkg.com/en/docs/cli/)

<YouTube 
    title="How to use Yarn"
    url="https://www.youtube.com/embed/223uxFCu74s"
/>

