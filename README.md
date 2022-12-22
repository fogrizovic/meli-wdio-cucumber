# meli-wdio-cucumber
# Install
## Pre requisites
* Install Node.js 18.12.1 (npm 8.19.2)
    * mac/linux: You can install [nvm](https://github.com/nvm-sh/nvm) to manage npm and node versions. 
    * windows: You can install [nvm-windows](https://github.com/coreybutler/nvm-windows) to manage npm and node versions.
* Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* Install the latest chrome browser
## Clone repo
Clone [meli-wdio-cucumber](git@github.com:fogrizovic/meli-wdio-cucumber.git) repository.
```console
foo@bar:~$ git clone git@github.com:fogrizovic/meli-wdio-cucumber.git
```
## Install npm dependencies
```console
foo@bar:~$ npm i
```
# Run 
## Scripts
- wdio: for running test scenarios
- lint: for running linter
### Command line parameters
- ENV: *REQUIRED* {prd, qa}
- DEBUG: *OPTIONAL* Used when debbing.You need to add *browser.debug()* on the point you want to stop execution.
### Examples
We run tests by using cucumber tags.

MAC/LINUX
```console
foo@bar:~$ ENV=<environmentName> npm run wdio -- --cucumberOpts.tagExpression=<tag> 
```
e.g:
```console
foo@bar:~$ ENV=prd npm run wdio -- --cucumberOpts.tagExpression=@web
```
