### 1. `<ul>` -- Unordered List

* *type:* block-level
* *content:* flow content
* *support:* 
* *example:*
```
<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>
```
Above HTML will output:

first item
second item
third item

### 2. `<ol>` -- Ordered List

* *type:* block-level
* *content:* flow content/palpable content
* *support:* Chrome, Firefox, Safari
* *example:*
```
<ol>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ol>
```
Above HTML will output:

first item
second item
third item

### 3. `<header>` -- Header

* *type:* block-level
* *content:* flow content/palpable content
* *support:* all browsers
* *example:*
```
<header>
  The Iron Yard
</header>
```
Above HTML will output:
The Iron Yard

### 4. `<section>` -- Section

* *type:* block-level
* *content:* flow content, sectioning content, palpable content.
* *support:* all browsers
* *example:*
```
<section>
  <h1>Heading</h1>
  <p>Bunch of awesome content</p>
</section>
```

Above HTML will output:
Heading

Bunch of awesome content

### 5. `<h1>` -- Heading, Level 1

* *type:* block-level
* *content:* phrasing content[1]
* *support:* all browsers
* *example:*
```
<h1>Heading level 1</h1>
```
Above HTML will output:
Heading level 1

### 6. `<p>` -- Paragraph

* *type:* block-level
* *content:* flow content/palpable content/phrasing content
* *support:* all browsers
* *example:*
```
<p>This is the first paragraph of text. This is the first paragraph of text.
  This is the first paragraph of text. This is the first paragraph of text.</p>

<p>This is second paragraph of text. This is second paragraph of text.
   This is second paragraph of text. This is second paragraph of text.</p>
```

Above HTML will output:

This is the first paragraph of text. This is the first paragraph of text. This is the first paragraph of text. This is the first paragraph of text.

This is second paragraph of text. This is second paragraph of text. This is second paragraph of text. This is second paragraph of text.

### 7. `<footer>` -- Footer

* *type:* block-level
* *content:* flow content/palpable content 
* *support:* all browsers
* *example:*
```
<footer> ©2014 The Iron Yard. All Rights Reserved </footer>
```

Above HTML will output: 
©2014 The Iron Yard. All Rights Reserved

### 8. `<div>` -- Document Division

* *type:* block-level
* *content:* flow content/palpable content 
* *support:* all browsers
* *example:*
```
<div>
  <p>Any kind of content here. Such as &lt;p&gt;, &lt;table&gt;. You name it!</p>
</div>
```

Above HTML will output:
Any kind of content here. Such as <p>, <table>. You name it!

### 9. `<table>` -- Table

* *type:* block-level
* *content:* flow content
* *support:* all browsers
* *example:*
```
<table>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>
```
Above HTML will output:
John	Doe
Jane	Doe

### 10. `<address> >` -- Address

* *type:* block-level
* *content:* flow content/palpable content 
* *support:* all browsers
* *example:*
```
<address>
    You can contact author at <a href="http://www.somedomain.com/contact">www.somedomain.com</a>.<br>
    If you see any bugs, please <a href="mailto:webmaster@somedomain.com">contact webmaster</a>.<br>
    You may also want to visit us:<br>
    Mozilla Foundation<br>
    1981 Landings Drive<br>
    Building K<br>
    Mountain View, CA 94043-0801<br>
    USA
  </address>
```
Above HTML will output:

You can contact author at www.somedomain.com
If you see any bugs, please contact webmaster.
You may also want to visit us:
    Mozilla Foundation
    1981 Landings Drive
    Building K
    Mountain View, CA 94043-0801
    USA
