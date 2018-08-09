# Feed widget using Taboola APi

Using this widget you can:
* create articles grid.
* any amount of articles.
* set article ratio of 4:3 or 16:9 
* set sponsored or internal articles.
* this is a responsive layout.
* using only vanila js code (es5 ,es6 and even es7).
* placeholder taboola image in case of 404 image not found.
* etc

## Getting Started

Clone this project to your environment

### Installing

First you will need to open terminal in the project root folder and write on cmd:

```
npm run install
```

create  **build folder** inside the project then:

```
npm run build
```

And finally

```
npm start
```

open the url [http://127.0.0.1:8080/](http://127.0.0.1:8080/)

## Importent
for using this grid in external project just create a empty div with class **Taboola-grid-place-holder** and add the bundle js to the end of your html code
example:

```
<!DOCTYPE html>
<html lang="en">
  <head>
      ....
  </head>
  <body>
    <div class="Taboola-grid-place-holder"></div>
    <script src="build/main.bundle.js"></script>
  </body>
</html>
```

## Built With

* [Babel]- compile the es6 and es7
* [webpack] - create the js bundle file

## Authors

[Michael Ziso](https://github.com/mikizi)

