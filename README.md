# frontend-app-workshop-example

## Introduction

This repository contains example Micro-Frontend applications for use during the [Micro-Frontend Micro-Workshop](https://github.com/brian-smith-tcril/mfe-workshop-2023). It has been created using the [`frontend-template-application`](https://github.com/openedx/frontend-template-application) template.

The sample applications are stored in separate branches within this repository and are accompanied by corresponding Pull Requests that offer additional context and information.

| |     Branch     | PR | Description |
| - | - | :---: | - |
| **Hello World** | [`hello-world`](https://github.com/brian-smith-tcril/frontend-app-workshop-example/tree/hello-world) | [![PR Opened](https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/PullRequestOpened.svg)](https://github.com/brian-smith-tcril/frontend-app-workshop-example/pull/1) | An example "Hello World" page. |
| **Hello Username**  | [`hello-username`](https://github.com/brian-smith-tcril/frontend-app-workshop-example/tree/hello-username) | [![PR Opened](https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/PullRequestOpened.svg)](https://github.com/brian-smith-tcril/frontend-app-workshop-example/pull/1) | Displays the username of the logged-in user. |
| **Simple Paragon Component** | [`simple-paragon`](https://github.com/brian-smith-tcril/frontend-app-workshop-example/tree/simple-paragon) | [![PR Opened](https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/PullRequestOpened.svg)](https://github.com/brian-smith-tcril/frontend-app-workshop-example/pull/1) | Displays hardcoded test data in a [Paragon Carousel](https://paragon-openedx.netlify.app/components/carousel/)  component. |
| **Simple API** | [`simple-api`](https://github.com/brian-smith-tcril/frontend-app-workshop-example/tree/simple-api) | [![PR Opened](https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/PullRequestOpened.svg)](https://github.com/brian-smith-tcril/frontend-app-workshop-example/pull/1) | Logs course listing data from the API to the console. |
| **API Data in Paragon Component** | [`paragon-api`](https://github.com/brian-smith-tcril/frontend-app-workshop-example/tree/paragon-api) | [![PR Opened](https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/PullRequestOpened.svg)](https://github.com/brian-smith-tcril/frontend-app-workshop-example/pull/1) | Displays course listing data from the API in a [Paragon Carousel](https://paragon-openedx.netlify.app/components/carousel/)  component. |


## Getting Started

### Prerequisites

* [`devstack`](https://github.com/brian-smith-tcril/mfe-workshop-2023#setting-up-devstack)
* [`nvm`](https://github.com/nvm-sh/nvm) (optional but recommended)
* [`node 16`](https://nodejs.dev/en/)

### Running

* Fork this repository

```sh
$ git clone git@github.com:{YOUR_GITHUB_USERNAME}/frontend-app-workshop-example.git
$ cd frontend-app-workshop-example
$ nvm use
$ npm install
$ npm start
```

* Go to http://localhost:8080
