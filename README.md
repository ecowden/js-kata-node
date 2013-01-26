JavaScript Kata Template Project
================================

The goal of this project is to get you writing code as quickly as possible.

This is a pretty simple setup to do test first development with JavaScript using the Jasmine test framework and
the Testacular test runner.

SugarJS is included for convenience.

This project is designed to be used with IntelliJ IDEA, though there's no reason that it shouldn't work with other
editors as well.

### Before starting:
 1. Install [Node.js](http://nodejs.org/)
 1. Install Testacular

        npm install -g testacular

 1. Install Bower

        npm install -g bower

### Set up the project:
 1. Get the project.  The simplest way is to download the zip archive.  Advanced users are free to fork the
    repository.
 1. Open it in your IDE of choice.
 1. Grab dependencies with Bower.  For IntelliJ IDEA users, there is a build config for this.  For all others:

        bower install

### To start testing:
 *. For IntelliJ IDEA users, Start the "Testacular Start" run configuration
 *. Alternately, run:

        testacular start

### Troubleshooting

 1. I'm getting weird errors when I try to npm install anything.  Also, I'm on a *nix platform.

    You may need to invoke the command with sudo.  This should not happen on MacOS if installed Node using Homebrew.

 1. I installed Testacular and Bower via NPM, but it can't find them when I run them.

    If you installed Node via Homebrew on MacOS, the NPM bin directory might not be on the path.  Try:

        sudo nano /etc/paths

    add /usr/local/share/npm/bin
    hit ctrl-x, then y to save and exit
    restart your terminal

 1. I'm getting errors when I try to start Testacular.

    By default, this project is configured to use PhantomJS as the test browser.  Either:
    * Install PhantomJS.  On MacOS with Homebrew:
          brew install phantomjs
    * - OR - edit testacular.conf.js.  Set the "browsers" element to the browser or browsers of your choice.

### Notes for Posterity

1. We grab Angular via the ZIP distribution provided by Google.  It would be nice if there were a good Bower
   repository for it, but, alas, there's a bunch that have different things, they're all out of date and
   none of them have the testing files.  As such, you'll need to continuously update the version manually.