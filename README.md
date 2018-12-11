# AngularJasminePlayground

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


#Basic fundamentals of RxJS
##Observables
It can be anything that needs to be observed. It may be a service call, value to be returned from a function or even a simple event handler
##Observers
These are the entities who are watching the Observables. These are nothing but a simple observer interface which consist of following methods:
    - next()    : Pushing next value in the data stream
    - error()   : Call error if there is any
    - complete(): Complete the operation
##Subscribers
These are the parties who would like to receive the values from Observables. This is also a kindo of Observers since it implements Observer interface.

#NOTES
1. Observables are not executed until a object subscribes to it.