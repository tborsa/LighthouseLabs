
---

# MODULES AND TESTING

![Modules](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week1/Day5/lecture/assets/modules.gif)

Notes and code [here](https://github.com/tborsa/LighthouseLabs/tree/master/lectures/Week1/Day5/lecture)

---


### Preamble 📢

Today we will look at:

- Modules  
    - exports
    - require
- npm
- Unit Testing
    - Mocha
    - Chai

---

## What is a Module? 🖥

![Modules](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week1/Day5/lecture/assets/bento.jpg)


A module is a way of encapsulating some functionality(code) so that it can be used in other JavaScript files.

This allows us to:

- Have files with clear and separate purposes.
- Reduce the amount of code in a single file.
- Make code usable across multiple different files and contexts.
- Only expose what a file does not the how.

//Demo

---

## Module Creation

### exports

Within a Node.js JavaScript file the 'module' keyword is a special object that represents the current module.

module.exports or exports is a property (part of the module object) that specifies what the current module will export.

module:
- represents the current module

module.exports:
- tells the module what will be exported.

``` javascript
module.exports = {};
module.exports.thing = something;
```


### require

From another file a module can be imported with require. require retrieves the module.exports from the specified file and makes it available to the current file.

``` javascript
var module = require('module-name');
```

If File A has: 

``` javascript
module.exports = "hello";
```

And in File B we use:

``` javascript
var greeting = require("./fileA.js");
```

Then:

> greeting <=> "hello"

_Similarly..._

If File A has:

``` javascript
module.exports.one = 1;
module.exports.two = 2;
```
And in File B we use

``` javascript
var numbers = require("./fileA.js");
```

Then:

> numbers <=> { one: 1, two: 2}


//make code into module

---

## npm 📬

npm or node package manager is a tool that helps us download and interface with node packages.

## What is a Package?

![Package](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week1/Day5/lecture/assets/package.gif)


A package is one or more modules grouped together to serve a common purpose.

Where a module is a single file, a package is a collection of files packaged together.

People create packages and publish them for others to use. We can use other peoples packages/code instead of having to write similar code ourselves.

[npm](https://www.npmjs.com/) has an index of all published packages.

//look at an example of a package

## package.json

Information about the package/project. It has general information as well as information about configuration and dependencies.

## dependencies?

In a node project dependencies are other packages that the current project depends on or requires in order to run properly.


## Creating and using packages

To use a package we have to initialize our current project with.

```
$ npm init
```

this will create a package.json file in the current folder, letting the package manager know that the current folder is a node project.

Then we have to install the package that we want to use.
There are a few options for installing a package.

To install a package for the current project:
```
$ npm install packagename --save
```

To install a package for development purposes for the current project:

```
$ npm install packagename --save-dev
```

This will:

- update the package.json file to list the newly installed package as a dependency.
- download the package to the node_modules folder, creating it if it does not already exist.

The other option for installing a package is:

```
$ npm install packagename -g
```

This will install a package globally making it accessible anywhere.
This is generally used if the package provides command-line tools and it is not specific to your project.

// init demo project
// use chalk

---

# Break

---

# Unit testing
![unittest](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week1/Day5/lecture/assets/unittest.gif)

Dividing a program into pieces, and individually checking if each piece functions as it should.

Practically this can be as simple as testing whether a function, given a certain input, returns the correct output.

---

### Mocha 📔

Mocha is a JavaScript test framework for Node.js programs. It helps to organize and manage our tests.

[Docs](https://mochajs.org/)

### Chai

Chai is an assertion library. It provides easy syntax for describing how we want things to look/be. 

example:

``` javascript
var assert = require('chai').assert;
var foo = 'bar';
assert.typeOf(foo, 'string'); // without optional message
assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
assert.equal(foo, 'bar', 'foo equal `bar`');
assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
```

If the assertion fails chai throws an error.

[Docs](https://www.chaijs.com/guide/styles/)

//use mocha and chai to test project

---

### Mock Test 📬

![test](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week1/Day5/lecture/assets/test.gif)


- It is open book, meaning you can use previous code and the internet
- You can get help from mentors and peers, but should endeavour to see how much they can do on their own
- You have until Sunday to get 100% on the test, so should make sure they don't get behind on today's work
- It is an assessment of the JS fundamentals you have been working on all week, not a reason to stress
- The main purpose is to get you used to the format of testing at Lighthouse, in prep for the W2D5 test

---

