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
  * Add SASS styling
  * Display based on date
  * Set Goal Tracker
  * search query
  * firebase
  * multipage
