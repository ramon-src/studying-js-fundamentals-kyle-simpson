# FUNCTIONS

The declaration of a function means that we are assign a block of an executable code to a variable assigned before that block

```js
function subtract(a, b) {
  return a - b;
}
```

So we can get our function literally calling subtract

```js
console.log(subtract); // this will print the function itself
```

When we want the value which the function returns we need to call it

```js
console.log(subtract(2, 3)); // this will print the result of subtraction of 2 - 3 = -1
```

## ARGUMENTS AND PARAMETERS

Declaration of the data passed in a function call, is called "arguments" as shown below

```js
sum(2, 3);
```

And the declaration of data inside a function statement block is called "parameters" as shown below as num1, num2

```js
function sum(num1, num2) {
  //...
}
```
