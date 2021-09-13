# Udacity Nano Degree Weather Journal App

## Table of Contents

* [Introduction](#Introduction)
* [Goals](#Goals)
* [To-Do](#To-Do)
* [Content](#Content)

-----
## Introduction

This is the 2nd project for the Udacity & ITIDA - Egypt FWD Front End Web Development Nano Degree scholarship.

For this project there were to options, either to start with their starter project which had some HTML, CSS, and JS code written as a backbone\skeleton, and we basically continue writing the rest of our code, and the other option was to write everything from scratch.

Although writing everything from scratch isn't the easy path, and will be challenging, I insisted on that path so that I can practice my coding skills in all parts, not just what is required for this project.

## Goals

The main goal of the project is to create an asynchronous web app that uses a Web API and user data to dynamically update the UI.

In layman's terms:

Build a weather app that takes the user's zipcode, accompanied with how the user currently feels, searches the proper gateway, provided by an API key from OpenWeatherMap.com, and finally answering back with the current weather report.

The following are the requirements to pass the project.

### Project Environment Setup

#### **Node and Express Environment**:

Node and Express should be installed on the local machine. The project file `server.js` should require `express()`, and should create an instance of their app using express.

The Express app instance should be pointed to the project folder with `.html`, `.css`, and `.js` files.

#### **Project Dependencies**:

The `cors` package should be installed in the project from the command line, required in the project file `server.js`, and the instance of the app should be setup to use `cors()`.

The `body-parser` package should be installed and included in the project.

#### **Local Server**:

Local server should be running and producing feedback to the Command Line through a working callback function.

#### **API Credentials**:

Create API credentials on OpenWeatherMap.com

### APIs And Routes

#### **APP API Endpoint**:

There should be a JavaScript Object named `projectData` initiated in the file `server.js` to act as the app API endpoint.

#### **Integrating OpenWeatherMap API**:

The personal API Key for OpenWeatherMap API is saved in a named `const` variable.

The API Key variable is passed as a parameter to `fetch()`.

Data is successfully returned from the external API.

#### **Return Endpoint Data**:

***GET Route I: Server Side***

There should be a GET route setup on the server side with the first argument as a string naming the route, and the second argument a callback function to return the JS object created at the top of server code.

***GET Route II: Client Side***

There should be an asynchronous function to fetch the data from the app endpoint

#### **POST Route**:

You should be able to add an entry to the project endpoint using a POST route setup on the server side and executed on the client side as an asynchronous function.

The client side function should take two arguments, the URL to make a POST to, and an object holding the data to POST.

The server side function should create a new entry in the apps endpoint (the named JS object) consisting of the data received from the client side POST.

### Dynamic UI

#### **Naming HTML Inputs and Buttons For Interaction**:

The `input` element with the `placeholder` property set to “enter zip code here” should have an `id` of `zip`.

The `textarea` included in project HTML should have an `id` of `feelings`.

The button included in project HTML should have an `id` of `generate`.

#### **Assigning Element Properties Dynamically**:

The div with the id, entryHolder should have three child divs with the ids:

- `date`
- `temp`
- `content`

#### **Event Listeners**:

Adds an event listener to an existing HTML button from DOM using Vanilla JS.

In the file `app.js`, the element with the `id` of `generate` should have an `addEventListener()` method called on it, with `click` as the first parameter, and a named callback function as the second parameter.

#### **Dynamically Update UI**:

Sets the properties of existing HTML elements from the DOM using Vanilla JavaScript.

Included in the async function to retrieve that app’s data on the client side, existing DOM elements should have their `innerHTML` properties dynamically set according to data returned by the app route.

## To-Do

- [X] Create initial files and folder structure
- [X] Write ReadMe.md and upload initial commit
- [X] Setup Node environment:
    - [X] Express
    - [X] Body-Parser
    - [X] Cors
- [X] Update server.js
    - [X] Create a server
    - [X] Test server using the console
- [x] Add a GET route that returns the projectData object in the server code Then, add a POST route that adds incoming data to projectData.
    - [x] POST route should anticipate receiving three pieces of data from the request body
        - [x] temperature
        - [x] date
        - [x] user response
    - [x] Make sure POST route is setup to add each of these values with a key to projectData.
- [x] Acquire API credentials from OpenWeatherMap website. Use credentials and the base url to create global variables at the top of app.js code.
    - [x] Write an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.
    - [x] Create an event listener for the element with the id: generate, with a callback function to execute when it is clicked.
    - [x] Inside that callback function call the async GET request with the parameters:
        - [x] base url
        - [x] user entered zip code (see input in html with id zip)
        - [x] personal API key
- [x] After successful retrieval of the weather data, chain another Promise that makes a POST request to add the API data, as well as data entered by the user.
    - [x] Write another async function to make this POST request.
    - [x] The function should receive a path and a data object.
    - [x] The data object should include:
        - [x] temperature
        - [x] date
        - [x] user response
- [X] Finally, chain another Promise that updates the UI dynamically Write another async function that is called after the completed POST request. This function should retrieve data from the app, select the necessary elements on the DOM (index.html), and then update their necessary values to reflect the dynamic values for:
    - [X] Temperature
    - [X] Date
    - [X] User input

## Content

[website/css/styles.css](https://github.com/AdhamNasr/FWD-weather-app/blob/main/website/css/style.css) \
[website/js/app.js](https://github.com/AdhamNasr/FWD-weather-app/blob/main/website/js/app.js) \
[website/index.html](https://github.com/AdhamNasr/FWD-weather-app/blob/main/website/index.html) \
[.gitignore](https://github.com/AdhamNasr/FWD-weather-app/blob/main/.gitignore) \
[ReadMe.md](https://github.com/AdhamNasr/FWD-weather-app/blob/main/ReadMe.md) \
[package-lock.json](https://github.com/AdhamNasr/FWD-weather-app/blob/main/package-lock.json) \
[package.json](https://github.com/AdhamNasr/FWD-weather-app/blob/main/package.json) \
[server.js](https://github.com/AdhamNasr/FWD-weather-app/blob/main/server.js)