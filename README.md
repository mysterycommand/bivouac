# Bivouac [![Build Status](https://travis-ci.org/mysterycommand/bivouac.png?branch=master)](https://travis-ci.org/mysterycommand/bivouac)

An ultra-minimal webapp project setup. Uses Thomas Boyt's [More maintainable Gruntfiles](http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html) approach to organizing tasks and options. Tasks and options based on the [Yeoman webapp generator](https://github.com/yeoman/generator-webapp), and Patrick McKenna's [Travis CI generator](https://github.com/pwmckenna/generator-travis-ci).

## Build Process

1. Create a repo on GitHub and check it out.
2. Create your empty `bower.json`, `package.json`, and `Gruntfile.js` files.
    * Optionally create `.editorconfig`, `.gitattributes`, `.gitignore`, `.jshintrc`, and `README.md` files (for the most part I copied these from the [Yeoman webapp generator](https://github.com/yeoman/generator-webapp)'s defaults).
3. Create `./tasks` and `./tasks/options/` folders, per [More maintainable Gruntfiles](http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html).
4. Setup your Gruntfile and create your first options file (I started with the `jshint` task).
5. Create your `./app`, `./app/images/`, `.app/scripts/`, and `.app/styles/` directories, and their respective files (again, I just copied all this from the [Yeoman webapp generator](https://github.com/yeoman/generator-webapp)'s defaults as a starting place).
6. Gut the `index.html` file. I think it's got too much in it to start, and I don't want jQuery by default.
7. Get some dependencies:

    ```bash
    npm install -D grunt-contrib-requirejs
    npm install -D almond
    bower install -D requirejs
    ```
8. Create a tasks/options file for requirejs that builds your code with almond, and puts it in dist. Require your config file via data-main in your index page. Get the build working.
9. Add some more dependencies to get an initial build working:

    ```bash
    npm install -D grunt-contrib-clean
    npm install -D grunt-contrib-connect
    npm install -D grunt-contrib-copy
    npm install -D grunt-contrib-watch
    npm install -D grunt-usereplace
    ```
10. Update the index file to replace the require/data-main script tag with a reference to the r.js'd script.
11. Get the Travis CI generator, and run it:

    ```bash
    npm install -g generator-travis-ci
    yo travis-ci:gh-pages
    ```
12. Get test dependencies:

    ```bash
    bower install -D mocha
    bower install -D chai
    npm install -D grunt-mocha
    ```
13. Create a test directory, and an index.html to serve the tests. Add the mocha CSS and JS, and chai JS in the head, and set them up in the body. Put your tests under test/spec. Maybe use a folder structure that matches your project's class files.
