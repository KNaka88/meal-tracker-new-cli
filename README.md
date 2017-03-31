# MealTracker by Koji Nakagawa

#### Javascript 3rd Week Independent Project for Epicodus, 3.30.2017

## Description
* This website is the third independent project for Epicodus "Javascript" class.
* This website offers food log service.


## Specs
|Behavior|Input|Output|
|--------|-----|------|
| User can create comment    | Title, Name, Question  | the question page will be created |
| User can add answer   | Name, Answer  | the answer will be displayed on the question page |
| User can delete question | Click  'Delete Question' | the question and answers will be deleted |
| User can edit question | Click  'Edit' and type | the question will be changed |
| User can delete answers | Click  'Delete Answer' | the answer will be deleted |




## Prerequisites
You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)


## Installation
* `git clone this repository`
* `cd meal-tracker`
* `npm install`
* `bower install`
* `npm install --save @ng-bootstrap/ng-bootstrap`
* `ng s` to start a dev server. Navigate to `http://localhost:4200/`.


## Technologies Used
  * HTML
  * CSS
  * Bootstrap
  * Javascript
  * Typescript
  * Angular
  * Node.js
  * npm
  * bower

  ## Planning

  1. Configuration/dependencies
    * angular CLI
    * bootstrap

  2. Specs

  |Behavior|Input|Output|
  |--------|-----|------|
  | Create Meal Log| Name, Detail, Calories  | show on the page |
  | Edit Meal Log   | Name, Detail, Calories  | change the existing log|
  | Filter by Calories | Choose (All, More than 500, Less than 500) | the result page changes based on the filter |

  3. Integration

    Component
    * app (template page)

    * index
        -- meal-list component
        -- createlog component
        -- editlog component

    Model
    * meal class (name, detail, calories)

    Pipe
    * calories-filter

  4. UX/UI
    * Include and modify bootstrap/materialize/Sass etc.
    * Develop custom style

  5. Extra
    * firebase

##### This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## License
  _Copyright (c) 2017 **Koji Nakagawa**_

  _Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:_

  _The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software._

  _THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE._
