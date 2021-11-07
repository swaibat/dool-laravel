# fnWidget

This is the funnel widget that allows users to configure HotJar funnels by automatically selecting site URLs and and css Selectors they wish to track (for example: visit to www.site.com, click on #purchase-button in www.site.com/product, visit to www.site.com/cart).

<iframe width="560" height="315" src="https://www.youtube.com/embed/It_S04B7tt8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Testing](#Testing)
- [Stacks](#Stacks)
- [Author details](#Author)


## Installation
*in order to install this project make sure you have nodejs installed on your local machine*
- clone the repository
open the project by `$ cd demosite` and to install the dependencies. run
```sh
 $ npm install
 ```
 start the application by running
```sh
 $ npm start
 ```
 - open a new terminal window and `$ cd widget` and to install the dependencies. run
```sh
 $ npm install
 ```
 start the application by running
 ```sh
 $ npm start
 ```
the app will be accessible on `localhost:3000`

## Usage
- when a user presses **ALT+P** a new step is automatically added to the widget
- when a user clicks on **ALT+Click** a selector pops up
    - user can move the visual selector accross the application
    - on selecting an element by single click an element is highlited with options to select the event type to save
    - on clicking save a new task is added to the widget
    - a user can edit or delete a step for the widget
    - a user can close a selector
- user can close a funnel by clicking on the close button
- a user can re-open the funnel by clicking on open button

I have put up a small video tutorial to keep you up to speed with how the application can be used

## Testing
i have used **JEST** as the main testing libriary in order to test on the root folder `cd widget` and run 
 ```sh
 $ npm test
 ```
additionally in order to run tests with coverage use 
```sh
 $ npx jest --coverage
 ```
 
## Stacks
i have used:
- javascript
- webpack
- babel
**developent**
- eslint
- jest


## todo
- I need to provide human readable selector elements
- user should be able to edit the selected title
- test all application cases and incease test coverage currently at `93%`
- add gitlab ci
- fix eslint issues

## Author
[Rumbiiha Swaibu](https://gitlab.com/rswaib)
