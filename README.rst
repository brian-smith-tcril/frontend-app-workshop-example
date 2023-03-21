frontend-app-workshop-example
==============================

Introduction
------------

This repository contains example Micro-Frontend applications for use during the `Micro-Frontend Micro-Workshop <https://github.com/brian-smith-tcril/mfe-workshop-2023>`_. It has been created using the `frontend-template-application <https://github.com/openedx/frontend-template-application>`_ template.

The sample applications are stored in separate branches within this repository and are accompanied by corresponding Pull Requests that offer additional context and information.

.. list-table::
   :widths: 15 10 30 30
   :header-rows: 1

   * - 
     - Branch
     - PR
     - Description
   * - **Hello World**
     - |helloworldbranch|_
     - //todo
     - An example "Hello World" page.
   * - **Hello Username**
     - //todo
     - //todo
     - Displays the username of the logged-in user
   * - **Simple Paragon Component**
     - //todo
     - //todo
     - Displays hardcoded test data in a `Paragon Carousel <https://paragon-openedx.netlify.app/components/carousel/>`_  component
   * - **Simple API**
     - //todo
     - //todo
     - Logs course listing data from the API to the console
   * - **API Data in Paragon Component**
     - //todo
     - //todo
     - Displays course listing data from the API in a `Paragon Carousel <https://paragon-openedx.netlify.app/components/carousel/>`_  component

Getting Started
---------------

Prerequisites
^^^^^^^^^^^^^

* `devstack <https://github.com/brian-smith-tcril/mfe-workshop-2023#setting-up-devstack>`_
* `nvm <https://github.com/nvm-sh/nvm>`_ (optional but recommended)
* `node 16 <https://nodejs.dev/en/>`_

Running
^^^^^^^

* Fork this repository

.. code:: sh

  $ git clone git@github.com:{YOUR_GITHUB_USERNAME}/frontend-app-workshop-example.git
  $ cd frontend-app-workshop-example
  $ nvm use
  $ npm install
  $ npm start

* Go to http://localhost:8080


.. |helloworldbranch| replace:: ``hello-world``
.. _helloworldbranch: https://github.com/brian-smith-tcril/frontend-app-workshop-example/tree/hello-world