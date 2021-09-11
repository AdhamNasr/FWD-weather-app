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

The main goal of the project is to create an asynchronous web app that uses a Web API and user data to dynamically update the UI. The following are the requirements to pass the project.

### Project Environment

#### **Node and Express Environment**: 

Node and Express should be installed on the local machine. The project file server.js should require express(), and should create an instance of their app using express.

The Express app instance should be pointed to the project folder with .html, .css, and .js files.

#### **Project Dependencies**: 

The ‘cors’ package should be installed in the project from the command line, required in the project file server.js, and the instance of the app should be setup to use cors().

The body-parser package should be installed and included in the project.

#### **Local Server**: 

Local server should be running and producing feedback to the Command Line through a working callback function.

#### **API Credentials**: 

Create API credentials on OpenWeatherMap.com

### APIs And Routes

#### **APP API Endpoint**:

There should be a JavaScript Object named projectData initiated in the file server.js to act as the app API endpoint.

#### **Integrating OpenWeatherMap API**:

The personal API Key for OpenWeatherMap API is saved in a named const variable.

The API Key variable is passed as a parameter to fetch() .

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

The input element with the placeholder property set to “enter zip code here” should have an id of zip.

The textarea included in project HTML should have an id of feelings.

The button included in project HTML should have an id of generate.

#### **Assigning Element Properties Dynamically**:

The div with the id, entryHolder should have three child divs with the ids:

- date
- temp
- content

#### **Event Listeners**:

Adds an event listener to an existing HTML button from DOM using Vanilla JS.

In the file app.js, the element with the id of generate should have an addEventListener() method called on it, with click as the first parameter, and a named callback function as the second parameter.

#### **Dynamically Update UI**:

Sets the properties of existing HTML elements from the DOM using Vanilla JavaScript.

Included in the async function to retrieve that app’s data on the client side, existing DOM elements should have their innerHTML properties dynamically set according to data returned by the app route.

## To-Do

- [x] Create initial files and folder structure
- [ ] Write ReadMe.md and upload initial commit
- [ ] Setup Node environment:
    - [ ] Express
    - [ ] Body-Parser
    - [ ] Cors
- [ ] Update server.js
    - [ ] Create a server
    - [ ] Test server using the console
- [ ] Add a GET route that returns the projectData object in the server code Then, add a POST route that adds incoming data to projectData.
    - [ ] POST route should anticipate receiving three pieces of data from the request body
        - [ ]temperature
        - [ ]date
        - [ ]user response
    - [ ] Make sure POST route is setup to add each of these values with a key to projectData.
- [ ] Acquire API credentials from OpenWeatherMap website. Use credentials and the base url to create global variables at the top of app.js code.
    - [ ] Write an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.
    - [ ] Create an event listener for the element with the id: generate, with a callback function to execute when it is clicked.
    - [ ] Inside that callback function call the async GET request with the parameters:
        - [ ] base url
        - [ ] user entered zip code (see input in html with id zip)
        - [ ] personal API key
- [ ] After successful retrieval of the weather data, chain another Promise that makes a POST request to add the API data, as well as data entered by the user.
    - [ ] Write another async function to make this POST request.
    - [ ] The function should receive a path and a data object.
    - [ ] The data object should include:
        - [ ] temperature
        - [ ] date
        - [ ] user response
- [ ] Finally, chain another Promise that updates the UI dynamically Write another async function that is called after the completed POST request. This function should retrieve data from the app, select the necessary elements on the DOM (index.html), and then update their necessary values to reflect the dynamic values for:
    - [ ] Temperature
    - [ ] Date
    - [ ] User input