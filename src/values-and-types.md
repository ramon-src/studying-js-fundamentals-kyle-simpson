# VALUES AND TYPES

## Mathematical

When we run the below Javascript expression statement

```js
42 / 2;
```

Then the Javascript interprets the numbers and operators for
mathematical puposes.

## Text

When we run the expression statement

```js
"42";
```

Then the Javascript interprets the string with Text puposes.
So you can get the characters by characters like

```js
"42"[0]; // that will return "4"
```

But if we run:

```js
"42" / 2;
```

Than it will returns: 21 because he interpreted that the strings can be a Number

So if we run:

```js
"abc" / 2;
```

Than it will returns NaN which means Not a Number.

## CURIOSITIES

Variables in Javascript has they own type, so we don't need to explicity say
what type they must have.

A way to convert types in Javascript is to use the Functions Number, and String

```js
var a = String(42);
```

Or

```js
var a = Number("84");
```

The natural Javascript typing is named as Coersion and not Convertion

The implicity way of using coersion is shown below

```js
var a = 42;
var b = a + "";
```

So at this point the compiler doesn't know what has in "a" before he runs the statement expression [a + ""] so he will consider it as a String and concatenate with the empty string before he knows what is inside variable a
