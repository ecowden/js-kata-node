JavaScript Kata Template Project - Node.js
==========================================

The goal of this project is to get you writing code as quickly as possible.

This is a pretty simple setup to do test first development with JavaScript using the Jasmine test framework and
Node.  It varies from the [js-kata-angular](https://github.com/ecowden/js-kata-angular) template in that it
uses native Node mechanisms for exporting and importing dependencies.  I feel that it makes it conceptually
simpler, but it does introduce new concepts to those accustmed to working with JavaScript in the browser.

This project is designed to be used with IntelliJ IDEA, though there's no reason that it shouldn't work with other
editors as well.

### Before starting
 1. Install [Node.js](http://nodejs.org/)
 1. Install jasmine-node

        npm install -g jasmine-node

### Set up the project
 1. Get the project.  The simplest way is to download the zip archive.  Advanced users are free to fork the
    repository.
 1. Open it in your IDE of choice.

### To start testing

 * For IntelliJ IDEA users, run the "Test" run configuration.
 * Alternately, run:

        jasmine-node test/

### Troubleshooting

 1. I'm getting weird errors when I try to npm install anything.  Also, I'm on a *nix platform.

    You may need to invoke the command with sudo.  This should not happen on MacOS if installed Node using Homebrew.

 1. I installed jasmine-node via NPM, but it can't find them when I run them.

    If you installed Node via Homebrew on MacOS, the NPM bin directory might not be on the path.  Try:

        sudo nano /etc/paths

    add /usr/local/share/npm/bin
    hit ctrl-x, then y to save and exit
    restart your terminal

### Notes for Posterity

1. I'm having unfortunately bad luck with jasmine-node's --autotest argument.  It seems to stop running the tests
   after two or three changes.