# VARIABLES AND BLOCKS

## VARIABLES

It's important to explicity declare our variables to make the code more readable
and to know where the things are.

Without declare a variable with var, let, const the javascript hoinsting the variables to the top of the application.

```js
var b = 42;
let c = 52;
const j = 62;

function a() {}
```

The function declaration means that we are setting a function inside the "a" variable

## BLOCKS

Blocks is a stylishing notation for say that the things are separated by block

```js
{
}
```

Blocks can precede a condition to be executed after each, using if, loops, functions and many other statements

```js
if () {
}
while () {
}
function x () {
}
```

So all that blocks will run conditionally.

## FUNCTIONS

A function declaration is just

```js
function a() {}
```

And the others are functions expressions attached to a variable declaration

```js
var b = function() {};

var j = function a() {};
```
