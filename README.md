# [projects](http://ivans-innovation-lab.github.io/projects)/My Company - Angular Frontend [![CircleCI](https://circleci.com/gh/ivans-innovation-lab/my-company-angular-fe.svg?style=svg)](https://circleci.com/gh/ivans-innovation-lab/my-company-angular-fe)

This is an example application. We have tried to find an appropriate balance between complexity and simplicity. It is meant to be complex enough to showcase interesting building blocks provided by [Angular](https://angular.io) framework.

[Atomic design](http://bradfrost.com/blog/post/atomic-web-design/) methodology is used, with the help of [Angular material design components](https://material.angular.io).

The application consumes a [restfull API](#backend---api) that exposes a JWT enabled authorization (OAuth2) endpoints for managing (CRUD operations) 'blog posts' and 'projects'. 

It is generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.0. Current Angular version is 4.2.4.

## Feature Components vs Presentational Components

Feature and Presentational Component Design pattern has been called many things such as:

 - Container Components vs Presentational Components
 - Smart/Dumb Components
 - Stateful/Stateless Components
 
### Feature components

A **Feature component** is a top level component that contains all other components in our feature. This commonly is **a routed component** in Angular. Our feature components are responsible for gathering data from various services for our feature to use. If our user saves data the feature component is responsible to pass that data to our Angular Services to save the data to our server API. Feature components are very slim with the amount of application logic. We try to defer this logic to Services if possible. For this example the [`blog.component`](https://github.com/ivans-innovation-lab/my-company-angular-fe/blob/master/src/app/blog/blog.component.ts) is our Feature Component and **it is composed of many Presentational components**.

### Presentational components

**Presentational Components behave like pure functions** taking in the data via @Input and emitting data via @Output. This allows the majority of our UI to not know the underlying implementation detail of where the data came from. For example a [`side-item.component`](https://github.com/ivans-innovation-lab/my-company-angular-fe/tree/master/src/app/presentational-components/side-menu-item) takes in a @Input of an item to display. This allows the `side-item.component` component to have the only responsibility of rendering the item when the data is passed to it.

Many if not **most Presentational Components can be abstracted into a style guide or UI library** for the project. Using a shared style guide for an organization or project improves reusability, increases the consistency between the different views that form a web application and encourages the communication between the different teams. It can also ensure that a unified brand is used across different products. To get ideas of component design and style guide maintainability I recommend Brad Frost’s book [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/).

There are downsides to this though. As the feature grows in complexity we may have a deeply nested component structure. Since presentation component events only bubble up one level at a time we will have to manually pass up to each parent component. **Introducing other sub feature components** ([`blog-list.component`](https://github.com/ivans-innovation-lab/my-company-angular-fe/tree/master/src/app/blog/blog-list), [`blog-detail.component`](https://github.com/ivans-innovation-lab/my-company-angular-fe/tree/master/src/app/blog/blog-detail), [`blog-new.component`](https://github.com/ivans-innovation-lab/my-company-angular-fe/tree/master/src/app/blog/blog-new)) can help elevate this. The communication between feature components is event driven, and enables loose coupling. For example a `blog-new.component` will trigger an event on successfull creation of a blog post, and `blog-list.component` is subscribed to it so it can re-fetch  and refresh a list of blog posts.

Let's place components into a layout and articulate the design’s underlying content structure:

#### Home 'template'

![My Company - Home](https://github.com/ivans-innovation-lab/my-company-angular-fe/raw/master/MyCompanyFE-Home.png)

#### Blog post detail 'template'

![My Company - Blog](https://github.com/ivans-innovation-lab/my-company-angular-fe/raw/master/MyCompanyFE-Blog.png)

## Progressive web application

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

#### Step 1: Clone the project

```bash
$ git clone https://github.com/ivans-innovation-lab/my-company-monolith.git
```

#### Step 2: Run it

```bash
$ cd my-company-monolith
$ ./mvnw spring-boot:run
```

#### Step 3 (optional): Browse the database

 - Open the browser and navigate to: http://localhost:8080/h2-console
 - Set JDBC URL to: jdbc:h2:mem:my-company
 - Connect

#### Step 4 (optional): Browse the API specification

- Open the browser and navigate to: http://localhost:8080/swagger-ui.html

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

You can choose `blog` or `projects` from the menu on the left. You will be prompted for credentials:
 - username: john.doe    ; password: jwtpass  ; role: USER
 - username: admin.admin ; password: jwtpass  ; role: ADMIN

Blog and Projects require authenticated user in any role, but to create blog or project you should be in the role of ADMIN. Backend API application is using OAuth2 with JWT token.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

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
