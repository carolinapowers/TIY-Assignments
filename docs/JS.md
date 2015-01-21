### [Primative: Null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

* _symbol_: `null`
* _pronunciation_: "null", "null value", "is null"
* _examples_:
```javascript
null // how exciting
```

### [Primative: String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

*_symbol_: `""` `''`
*_pronunciation_: "string"
*_examples_: 
```javascript
'string text'
"string text"
"中文 español English हिन्दी العربية português বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어"
```

### [Primative: Number] 
*_symbol_: 
*_pronunciation_: "number"
*_examples_: 
```javacript
var x = 3.14;     // A number with decimals
var y = 34;       // A number without decimals
```

### [Primative: Boolean]
*_symbol_: `true` `false`
*_pronunciation: "boolean", "boolean value"
*_examples_:
```javascript
x = false;
if (x) {
  // this code is not executed
}
```
### [Built-in Value: Infinity]
*_symbol_: `infinity`
*_pronunciation: "infinity", "infinity value"
*_examples_:
```javascript
Display a number that exceeds the limit of a floating point number:

1.7976931348623157E+10308 + "<br>" + -1.7976931348623157E+10308;
The result will be:

Infinity
-Infinity
```

### [Built-in Value: NaN]
*_symbol_: `NaN`
*_pronunciation: "not a number value", "not a number"
*_examples_:
```javascript
0/0 == NaN
```
### [Built-in Value: undefined]
*_symbol_: `undefined`
*_pronunciation: "variable has not been assigned a value"
*_examples_:
```javascript
Test if a variable is undefined:

var x;

if (x === undefined) {
    txt = "x is undefined";
} else {
    txt = "x is defined";
}
The result of txt will be:

x is undefined
```

### [Operator: Addition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition_(.2B))

* _symbol_: `+`
* _pronunciation_: "plus", "added to"
* _examples_:
```javascript
1 + 2 + 3 // 6, of course
'1' + 2 + 3 // '123', obviously... WTF?
```

### [Operator: Subtraction]

* _symbol_: `-`
* _pronunciation_: "minus", "subtracted from"
* _examples_:
```javascript
4 - 2 - 1 // 1

var y = 5;
var x = y - 2;
```
### [Operator: Multiplication]

* _symbol_: `*`
* _pronunciation_: "times", "multiply by"
* _examples_:
```javascript
x = y * 2	y = 5	x = 10
10 * 5 == 50
```

### [Operator: Division]
* _symbol_: `/`
* _pronunciation_: "divided by"
* _examples_:
```javascript
6 / 3 == 2
x = y / 2	y = 5	x = 2.5
```

### [Operator: Modulus]
* _symbol_: `%`
* _pronunciation_: "division remainder"
* _examples_:
```javascript
x = y % 2	y = 5	x = 1
```

### [Operator: Increment]
* _symbol_: `++`
* _pronunciation_: "increment by"
* _examples_:
```javascript
x = ++y	y = 6	x = 6
x = y++	y = 6	x = 5
```

### [Operator: Decrement]
* _symbol_: `--`
* _pronunciation_: "decrement by"
* _examples_:
```javascript
x = --y	y = 4	x = 4
x = y--	y = 4	x = 5
```

### [Operator: Equal]
* _symbol_: `==`
* _pronunciation_: "equal to"
* _examples_:
```javascript
x == 8	false	
x == 5	true
```

### [Operator: Not Equal]
* _symbol_: `!=`
* _pronunciation_: "not equal to"
* _examples_:
```javascript
x != 8	true	

```

### [Operator: Greater than or Equal to]
* _symbol_: `>=`
* _pronunciation_: "greater than or equal to"
* _examples_:
```javascript
x >= 8	false
```

### [Operator: Equal value and Equal type]
* _symbol_: `>=`
* _pronunciation_: "greater than or equal to"
* _examples_:
```javascript
x === "5"	false	
x === 5	true
```

### [Conditional Statements: If...Else]
* _symbol_: `If`
* _pronunciation_: "If, Else"
* _examples_:
```
if (condition) {
  statement_1;
} else {
  statement_2;
}
```
### [Conditional Statements: Switch]
* _symbol_: `Swicth`
* _pronunciation_: "Switch"
* _examples_:
```
switch (expression) {
   case label_1:
      statements_1
      [break;]
   case label_2:
      statements_2
      [break;]
   ...
   default:
      statements_def
      [break;]
}
```

### [Loop Statements: For]
* _symbol_: `for`
* _pronunciation_: "For Loop"
* _examples_:
```
for ([initialExpression]; [condition]; [incrementExpression])
   statement


for (i = 0; i < cars.length; i++) { 
    text += cars[i] + "<br>";
}
```

### [Loop Statements: While loop]

* _symbol_: `while`
* _pronunciation_: "while loop"
* _examples_:
```
while (condition) {
    code block to be executed
}

while (i < 10) {
    text += "The number is " + i;
    i++;
}
```

