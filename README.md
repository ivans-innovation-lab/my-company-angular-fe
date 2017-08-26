# My Company - Angular Frontend [![CircleCI](https://circleci.com/gh/ivans-innovation-lab/my-company-angular-fe.svg?style=svg)](https://circleci.com/gh/ivans-innovation-lab/my-company-angular-fe)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.0.

It is a Front-end Angular 4 application and it requires my-company restfull API. Please run the [backend application](https://github.com/ivans-innovation-lab/my-company-monolith) first.
Feel free to configure your [environments](https://github.com/ivans-innovation-lab/my-company-angular-fe/tree/master/src/environments).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Progressive Web Application (Work In Progress)

PWAs leverage Transport Layer Security (TLS), webapp manifests, and service workers to make an application installable with offline capabilities. In other words, a PWA is like a native app on your phone, but it’s built with web technologies like HTML5, JavaScript, and CSS3. If built right, a PWA is indistinguishable from a native application.

I like the simple list that Alex Russell lists on [What, Exactly, Makes Something A Progressive Web App?](https://infrequently.org/2016/09/what-exactly-makes-something-a-progressive-web-app/).

 - Originate from a Secure Origin. Served over TLS and green padlock displays (no active mixed content).
 - Load while offline (even if only a custom offline page). By implication, this means that Progressive Web Apps require Service Workers.
 - Reference a Web App Manifest with at least the following properties:
   - name
   - short_name
   - start_url
   - display with a value of standalone or fullscreen. 
   - An icon at least 144×144 large in png format. E.g.: "icons": [ { "src": "/images/icon-144.png", "sizes": "144x144", "type": "image/png" } ]

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
