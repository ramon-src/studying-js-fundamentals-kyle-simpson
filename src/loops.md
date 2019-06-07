# LOOPS

A simple for has three statements
A loop runs until something is false

initialization | stop condition | update

```js
for (x = 1; x < 10; x = x + 1) {}
```

This for should runs forever not because he have a stop condition that fails
He runs forever because he doens't have a stop condition declared

```js
for (;;) {}
```

The for below runs forever too, because the variable which is used on initialization
and stop condition is setting every loop to 2. So the stop condition never will fail

```js
for (x = 1; x < 10; x = x + 1) {
  x = 2;
}
```

To stop a loop we need to call the Break statement as below

```js
var a = 2;
while (true) {
  if (a > 10) {
    break;
  }
  a++;
}
```
