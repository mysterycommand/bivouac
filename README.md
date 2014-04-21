# Bivouac [![Build Status](https://travis-ci.org/mysterycommand/bivouac.png?branch=master)](https://travis-ci.org/mysterycommand/bivouac)
An ultra-minimal webapp project setup. Uses Thomas Boyt's [More maintainable Gruntfiles](http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html) approach to organizing tasks and options. Tasks and options based on the [Yeoman webapp generator](https://github.com/yeoman/generator-webapp), and Patrick McKenna's [Travis CI generator](https://github.com/pwmckenna/generator-travis-ci).

## Build Process

###### Initial Setup

1. Create a repo on GitHub and check it out.
2. Create your empty `bower.json`, `package.json`, and `Gruntfile.js` files.
    * Optionally create `.editorconfig`, `.gitattributes`, `.gitignore`, `.jshintrc`, and `README.md` files (for the most part I copied these from the [Yeoman webapp generator](https://github.com/yeoman/generator-webapp)'s defaults).
3. Create `./tasks` and `./tasks/options/` folders, per [More maintainable Gruntfiles](http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html).
4. Setup your Gruntfile and create your first options file (I started with the `jshint` task).
5. Create your `./app`, `./app/images/`, `.app/scripts/`, and `.app/styles/` directories, and their respective files (again, I just copied all this from the [Yeoman webapp generator](https://github.com/yeoman/generator-webapp)'s defaults as a starting place).
6. Gut the `index.html` file. I think it's got too much in it to start, and I don't want jQuery by default.

At this point you should have a base project. All it does for now is lint your Gruntfile, but it's ready to get awesome.

###### Get Serve/Build Dependencies
```bash
npm install -D grunt-contrib-requirejs
npm install -D almond
bower install -D requirejs
```

The RequireJS Grunt task will bundle your scripts up using r.js. Almond will be used to provide a minimal wrapper to the require/define calls you make in your project's script files. RequireJS itself will be used during development so that you can work with the live files, load them asynchronously and not have to have a build step between your making changes and your getting feedback.

To get this all working, you'll need a few more dependencies, for development:

```bash
npm install -D grunt-contrib-connect
npm install -D grunt-contrib-watch
```

… and for building:

```bash
npm install -D grunt-contrib-clean
npm install -D grunt-contrib-copy
npm install -D grunt-usereplace
```

Connect will serve folders via NodeJS to your localhost or IP for development and testing. Watch will monitor your script files for changes and automatically reload your site when they happen.

The clean task will remove previously built files. Copy … copies files during build. Usereplace is my own utility package based (very loosely) on [grunt-contrib-usemin](https://github.com/tinganho/grunt-contrib-usemin). It looks for specially formatted comments in HTML files and replaces everything between them with a different string that you provide it. It will be used during build to replace the script tag that loads RequireJS and your project's entry point via data-main with a script tag that just load the "built" JavaScript.

###### Get the Travis CI Generator and Run It
```bash
npm install -g generator-travis-ci
yo travis-ci:gh-pages
```

I like to swap out the default commit message with something that will be different with each successful deployment to GH Pages, so on line 53 of .travis.yml put `"Travis build ${TRAVIS_BUILD_NUMBER}. [ci skip]"` … if you're into that.

###### Get Test Dependencies
```bash
bower install -D mocha
bower install -D chai
npm install -D grunt-mocha
```

We're nearly done. Create a test directory, and an index.html to serve the tests. Add the mocha CSS and JS, and chai JS in the head, and set them up in the body. Put your tests under test/spec. Maybe use a folder structure that matches your project's class files (if I have a class called `App.js`, I like to have a test called `App.test.js`, or `modules/ModuleA.js` and `modules/ModuleA.test.js`, etc.). Each test should require the class it's meant to test. To test in the browser you can do `grunt connect:test:keepalive` and point your browser to http://localhost:9001/test/ … to run them in PhantomJS, simply run the Mocha task with `grunt test` (it will serve the above page to PhantomJS and run the tests with the Spec reporter … change that in the config if you prefer something else).

---

That's it! You should be all set!
