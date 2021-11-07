# news-room

[![Build Status](https://travis-ci.com/swaibat/news-room.svg?branch=main)](https://travis-ci.com/swaibat/news-room)

News Room App is A ReactJS app for fetching news from  [newsapi.org](https://newsapi.org/) that enebales users to :

- Get News detail with image
- Visit Link to open original news
- Have 3 web navigation view at home and it will show a list about:

  i. Top Headline news with image
  
  ii. Custom news based on user preferences (user must be presented with
keyword selection from bitcoin, Apple, earthquake, animal. User can only choose
one keyword)



## Table of Contents
- [File structure](#File-structure)
- [Installation](#Installation)
- [Usage](#Usage)
- [Stacks](#Stacks)
- [Author details](#Author)

## File-structure

<img width="223" alt="Screenshot 2020-12-06 at 10 19 33" src="https://user-images.githubusercontent.com/41104288/101274169-e4f38800-37ac-11eb-91b2-06d37d88256e.png">


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
- 
I have put up a small video tutorial to keep you up to speed with how the application can be used

## Stacks
i have used:
- javascript
- webpack
- babel
**developent**
- eslint
- jest

## Testing
i have used **JEST** as the main testing libriary in order to test on the root folder `cd widget` and run 
 ```sh
 $ npm test
 ```
additionally in order to run tests with coverage use 
```sh
 $ npx jest --coverage
 ```
 

## todo
- I need to provide human readable selector elements
- user should be able to edit the selected title
- test all application cases and incease test coverage currently at `93%`


## Author
[Rumbiiha Swaibu](https://gitlab.com/rswaib)
