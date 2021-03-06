# [projects](http://ivans-innovation-lab.github.io/projects)/My Company - Angular Frontend [![CircleCI](https://circleci.com/gh/ivans-innovation-lab/my-company-angular-fe.svg?style=svg)](https://circleci.com/gh/ivans-innovation-lab/my-company-angular-fe)

This application is generated with [Angular CLI](https://github.com/angular/angular-cli).

This is a multi-repo version of the lab, and represents a successor of a [mono-repo version](http://ivans-innovation-lab-monorepos.github.io/). Within this version of the lab each [project (app or lib)](https://github.com/search?q=topic%3Afrontend+org%3Aivans-innovation-lab&type=Repositories) has its dedicated repository (one project = one repository).

Every project has a specific deployment pipeline. In addition, projects don't need to share the same dependencies any more. Hence, all projects are versioned with a concrete version numbers (not SNAPSHOT), and everyone can use any version. You have to deal with a private NPM in order to share all versions of projects.

Some teams are writing successful applications leveraging libraries, and at companies like Google and Facebook there is a long tradition of using mono-repos.

![Multirepo](https://github.com/ivans-innovation-lab/ivans-innovation-lab.github.io/raw/master/img/multirepo.png)


[Atomic design](http://bradfrost.com/blog/post/atomic-web-design/) methodology is used, with the help of [Angular material design components](https://material.angular.io).

The application consumes a [restfull API](#backend---api) that exposes a JWT enabled authorization (OAuth2) endpoints for managing `blog posts`, `projects` and `teams`. 

[StackBlitz](https://stackblitz.com/github/ivans-innovation-lab/my-company-angular-fe) is a lightning fast online IDE that allows you to live edit and view this Angular CLI project in-browser: [https://stackblitz.com/github/ivans-innovation-lab/my-company-angular-fe](https://stackblitz.com/github/ivans-innovation-lab/my-company-angular-fe)

## Table of contents

   * My Company - Angular  
      * [Feature Components vs Presentational Components](#feature-components-vs-presentational-components)
         * [Feature components](#feature-components)
         * [Presentational components](#presentational-components)
            * [Home template](#home-template)
            * [Blog post detail 'template'](#blog-post-detail-template)
      * [Theming our custom presentational components](#theming-our-custom-presentational-components)
      * [Progressive Web Application](#progressive-web-application)
      * [Backend - API](#backend---api)
         * [Prerequisite](#prerequisite)
         * [Step 1: Clone the project](#step-1-clone-the-project)
         * [Step 2: Run it](#step-2-run-it)
         * [Step 3 (optional): Browse the database](#step-3-optional-browse-the-database)
         * [Step 4 (optional): Browse the API specification](#step-4-optional-browse-the-api-specification)
      * [Development server](#development-server)
      * [Code scaffolding](#code-scaffolding)
      * [Build](#build)
      * [Running unit tests](#running-unit-tests)
      * [Running end-to-end tests](#running-end-to-end-tests)
      * [References and Further help](#references-and-further-help)


## Feature Components vs Presentational Components

Feature and Presentational Component Design pattern has been called many things such as:

 - Container Components vs Presentational Components
 - Smart/Dumb Components
 - Stateful/Stateless Components
 
### Feature components

A **Feature component** is a top level component that contains all other components in our feature. This commonly is **a routed component** in Angular. Our feature components are responsible for gathering data from various services for our feature to use. If our user saves data the feature component is responsible to pass that data to our Angular Services to save the data to our server API. Feature components are very slim with the amount of application logic. We try to defer this logic to Services if possible. For this example the [`blog.component`](https://github.com/ivans-innovation-lab/my-company-angular-fe-blog/blob/master/libs/blog/src/blog.component.ts) is our Feature Component and **it is composed of many Presentational components**.

[Feature components](https://github.com/search?q=topic%3Afeature+org%3Aivans-innovation-lab&type=Repositories) are packaged in [libs/modules](https://www.npmjs.com/settings/my-company-frontend/packages).

### Presentational components

**Presentational Components behave like pure functions** taking in the data via @Input and emitting data via @Output. This allows the majority of our UI to not know the underlying implementation detail of where the data came from. For example a [`side-item.component`](https://github.com/ivans-innovation-lab/my-company-angular-fe-presentational-components/blob/master/libs/presentational-components/src/side-menu-item/side-menu-item.component.ts) takes in a @Input of an item to display. This allows the `side-item.component` component to have the only responsibility of rendering the item when the data is passed to it.

Many if not **most Presentational Components can be abstracted into a style guide or UI library** for the project. Using a shared style guide for an organization or project improves reusability, increases the consistency between the different views that form a web application and encourages the communication between the different teams. It can also ensure that a unified brand is used across different products. To get ideas of component design and style guide maintainability I recommend Brad Frost’s book [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/).

There are downsides to this though. As the feature grows in complexity we may have a deeply nested component structure. Since presentation component events only bubble up one level at a time we will have to manually pass up to each parent component. **Introducing other sub feature components** ([`blog-list.component`](https://github.com/ivans-innovation-lab/my-company-angular-fe-blog/blob/master/libs/blog/src/blog-list/blog-list.component.ts), [`blog-detail.component`](https://github.com/ivans-innovation-lab/my-company-angular-fe-blog/blob/master/libs/blog/src/blog-detail/blog-detail.component.ts), [`blog-new.component`](https://github.com/ivans-innovation-lab/my-company-angular-fe-blog/blob/master/libs/blog/src/blog-new/blog-new.component.ts)) can help elevate this. The communication between feature components is event driven, and enables loose coupling. For example a `blog-new.component` will trigger an event on successfull creation of a blog post, and `blog-list.component` is subscribed to it so it can re-fetch  and refresh a list of blog posts.

[Presentational components](https://github.com/ivans-innovation-lab/my-company-angular-fe-presentational-components)  are packaged in a [lib/module].(https://www.npmjs.com/package/@my-company-frontend/presentational-components)

Let's place components into a layout and articulate the design’s underlying content structure:

#### Home template

![My Company - Home](https://github.com/ivans-innovation-lab/my-company-angular-fe/raw/master/MyCompanyFE-Home.png)

#### Blog post detail 'template'

![My Company - Blog](https://github.com/ivans-innovation-lab/my-company-angular-fe/raw/master/MyCompanyFE-Blog.png)

## Theming our custom presentational components

Our application supports use of potentially unlimited number of [different themes](https://github.com/ivans-innovation-lab/my-company-angular-fe/blob/master/src/styles/_theme.scss). This is useful in itself but these themes will only style components provided by the Angular Material library itself.

We put our general layout and styling to the [`main-list-blog.component.scss`](https://github.com/ivans-innovation-lab/my-company-angular-fe/blob/master/src/app/presentational-components/main-list-blog/_main-list-blog.component.theme.scss), but we also create a new file [`main-list-blog.component.theme.scss`](https://github.com/ivans-innovation-lab/my-company-angular-fe/blob/master/src/app/presentational-components/main-list-blog/main-list-blog.component.scss) where we are using style rules which have something to do with the color. In our mixin, we retrieved all the necessary theme variables needed for the styling of our custom component.

To use our custom component theme, we have to include it in main [styles.scss](https://github.com/ivans-innovation-lab/my-company-angular-fe/blob/master/src/styles/styles.scss) file.

## Progressive Web Application

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

For this application I have choosen (beta 16) version of @angular/service-worker. It integrates with Angular CLI, search for configuration `"serviceWorker": true` in `angular-cli.json`. You can find more about the plans for Angular PWA support here: https://medium.com/@webmaxru/a-new-angular-service-worker-creating-automatic-progressive-web-apps-part-1-theory-37d7d7647cc7

Please use [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en). It is an open-source, automated tool for improving the performance, quality, and correctness of your web apps. It will generate a nice report for you.

## Backend - API

This application requires a [restfull API](https://github.com/ivans-innovation-lab/my-company-monolith). 

Please follow the instructions below to run it:

### Prerequisite

- [Java JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [Git](https://git-scm.com/) 

### Step 1: Clone the project

```bash
$ git clone https://github.com/ivans-innovation-lab/my-company-monolith.git
```

### Step 2: Run it

```bash
$ cd my-company-monolith
$ ./mvnw spring-boot:run
```

### Step 3 (optional): Browse the database

 - Open the browser and navigate to: http://localhost:8080/h2-console
 - Set JDBC URL to: jdbc:h2:mem:my-company
 - Connect

### Step 4 (optional): Browse the API specification

- Open the browser and navigate to: http://localhost:8080/swagger-ui.html

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

You can login with credentials:
 - username: john.doe    ; password: jwtpass  ; role: USER
 - username: admin.admin ; password: jwtpass  ; role: ADMIN

Please note that only ADMIN role is authorized to manage (create, update, delete) `blog`, `projects` and `teams`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

```
$ cd src/app
$ ng g module users
$ ng g component users
$ ng g component users/users-new
$ ng g component users/users-list
$ ng g component users/users-detail
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## References and Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

 - https://coryrylan.com/blog/angular-design-patterns-feature-and-presentation-components
 - http://bradfrost.com/blog/post/atomic-web-design/
 - https://angular.io/guide/quickstart
 - https://medium.com/@amcdnl/service-worker-pwas-with-the-angular-cli-98a8f16d62d6
 - https://medium.com/@webmaxru/a-new-angular-service-worker-creating-automatic-progressive-web-apps-part-1-theory-37d7d7647cc7
 - https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1
 
---
Created by [Ivan Dugalic][idugalic]@[lab][lab].
Need Help?  [Join our Slack team][slack].

[idugalic]: http://idugalic.pro
[lab]: http://lab.idugalic.pro
[slack]: https://communityinviter.com/apps/idugalic/idugalic
[atomist]: https://www.atomist.com/

