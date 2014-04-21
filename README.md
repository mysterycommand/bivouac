# Bivouac

An ultra-minimal webapp project setup. Uses Thomas Boyt's [More maintainable Gruntfiles](http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html) approach to organizing tasks and options. Tasks and options based on the [Yeoman webapp generator](https://github.com/yeoman/generator-webapp), and Patrick McKenna's [Travis CI generator](https://github.com/pwmckenna/generator-travis-ci).

## Build Process

1. Create a repo on GitHub and check it out.
2. Create your empty `bower.json`, `package.json`, and `Gruntfile.js` files.
    * Optionally create `.editorconfig`, `.gitattributes`, `.gitignore`, `.jshintrc`, and `README.md` files (for the most part I copied these from the [Yeoman webapp generator](https://github.com/yeoman/generator-webapp)'s defaults).
3. Create `./tasks` and `./tasks/options/` folders, per [More maintainable Gruntfiles](http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html).
4. Setup your Gruntfile and create your first options file (I started with the `jshint` task).
5. Create your `./app`, `./app/images/`, `.app/scripts/`, and `.app/styles/` directories, and their respective files (again, I just copied all this from the [Yeoman webapp generator](https://github.com/yeoman/generator-webapp)'s defaults as a starting place).
6. Gut the `index.html` file. I think it's got too much in it to start, and I don't want jQuery by default.
