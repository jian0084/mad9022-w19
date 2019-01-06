# Node and NPM

You will be learning a lot about Node and NPM in MAD9124 this semester but I want you to have a basic reference for the things that we will be doing with them too.

When you install NodeJS from [https://nodejs.org/en/](https://nodejs.org/en/) you will also get NPM and NPX installed too.

## Creating a Node Project

Once you have created the folder for your project through `Finder` or `Windows Explorer` or with `mkdir` on the command line, you should navigate to that folder in the Terminal or Command Prompt.

We can then turn the folder into one that is managed by NPM like this:

```
npm init -y
```

This will create a file called `package.json` which will hold all the information about your project: the version number, the name, the starting point, a list of all dependencies (other code that you project relies on), and scripts that you can run from the command line to help manage your project.

## package.json Files

The `package.json` file contains all the settings and dependencies about your project. If you place a `package.json` file inside of an empty folder, you can run a single command to install all the dependencies defined in the file.

```
npm install
```

The shorthand version of the install command is `npm i`.

This will create the `node_modules` folder, download and install the dependencies.

A basic `package.json` file looks like this:

```
{
  "name": "MyProject",
  "description": "Description of my Project",
  "author": {
    "name": "Steve Griffith",
    "email": "griffis@algonquincollege.com"
  },
  "version": "1.0.0",
  "devDependencies": {
    "cowsay": "^1.4.0"
  },
  "scripts": {
    "abc": "mkdir abc && cd abc"
  }
}
```

Some important properties in the file are:
- `name` the name of the project;
- `version` the version number of the project
- `devDependencies` the npm modules that will be installed when you run `npm install`. The property label is the name of the package. The value is the semantic version number. See the resources section below for more details about semantic versioning.
- `scripts` a list of commands that you can run. You would write `npm run` followed by the label in front of the command. In the sample above the label is `abc`.


## Adding Dependencies

There are two important types of dependencies that you can add in your `package.json` file. There are `dependencies` and `devDependencies`. `dependencies` are ones that will be downloaded by the browser and used by the end user as the website or app runs. `devDependencies` are things that the developer needs to use while creating the project but that will not ever be loaded into the browser.

When we add an npm module to the project we can just run the install command (or the shorthand)

```
npm i bootstrap
```

This will add the bootstrap module to the `node_modules` folder and it will be available to use in the current project. However, in older versions of npm, nothing is changed in the `package.json` file. New versions of npm will save to the `dependencies` section by default. To add it to the `package.json` file we need to add either `--save-prod` or `--save-dev` to the end of the command. 

```
npm i bootstrap --save
npm i bootstrap --save-prod
npm i bootstrap -P

npm i webpack --save-dev
npm i webpack -D
```

The first three lines in the example above will all save the package entry in the `dependencies` section. The last two lines will save the package entry in the `devDependencies` section.


## Adding Scripts

Inside the scripts section of the `package.json` file we can add anything that we would type and run on the command line. We then give it a label so we can make it run with `npm run`.

If you want to run multiple commands you can put an `&&` between the commands.

The sample in the `package.json` above is `mkdir abc && cd abc`. This will create a directory called `abc` and then navigate into that directory.

When you create a default `package.json` file you will be given a script with the label `test`. It runs the command `echo \"Error: no test specified\" && exit 1`.  The `exit 1` part at the end will finish the script with an error message. Change the exit value to zero to finish without an error. The `echo` command will write something out on the command line.

## NPX

`npx` is a small program included with Node and NPM that allows you to load an npm module into memory and run it without having to download and install it.

If you wanted to run the npm module `cowsay`, you can use npx to do that like this:

```
npx cowsay 'hello'
```

This will load cowsay into memory and run it while passing `hello` as a parameter to the cowsay module.


## Running Node from the CLI

If you ever want to run a JavaScript file using node then you can type the following on the command line:

```
node myscript.js
```

If you just want to open the Node equivalent to the Browser console, just type:

```
node
```

Then you will have a node terminal open. You can run any JavaScript commands you want here just like the interactive browser console. To exit, hold the Control key and press C `CTRL+C`.


## Video Tutorials

#### NPM Fundamentals for Managing Projects

<YouTube title="NPM Fundamentals for Managing Projects" url="https://www.youtube.com/embed/_LqgURg3BXw">

#### Semantic Versioning

<YouTube title="Semantic Versioning" url="https://www.youtube.com/embed/mpkC6MmKgsQ" />


## Other Resources

- [NodeJS website](https://nodejs.org/en/)
- [NPM website](https://www.npmjs.com/)
