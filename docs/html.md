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

### 10. `<address>` -- Address

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

### 11. `<audio>` -- Audio

* *type:* block-level
* *content:* Flow content, phrasing content, embedded content
* *support:* all browsers
* *example:*

```
<!-- Simple audio playback -->
<audio src="http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg" autoplay>
  Your browser does not support the <code>audio</code> element.
</audio>
```
### 12. `<video>` -- Audio

* *type:* block-level
* *content:* Flow content, phrasing content, embedded content
* *support:* all browsers
* *example:*

```
<!-- Simple video example -->
<video src="videofile.ogg" autoplay poster="posterimage.jpg">
  Sorry, your browser doesn't support embedded videos, 
  but don't worry, you can <a href="videofile.ogg">download it</a>
  and watch it with your favorite video player!
</video>
```

### 13. `<a>` -- Anchor Element

* *type:* inline-level
* *content:* flow content, phrasing content, interactive content, palpable content
* *support:* all browsers
* *example:*

```
<a href="https://developer.mozilla.org/en-US/" target="_blank">
  <img src="https://mdn.mozillademos.org/files/6851/mdn_logo.png" alt="MDN logo" />
</a>
```
### 14. `<img>` -- Image Element

* *type:* inline-level
* *content:* flow content, phrasing content, interactive content, palpable content, embedded content
* *support:* all browsers
* *example:*

```
<img src="mdn-logo-sm.png" alt="MD Logo" />
```
### 15. `<script>` -- Script Element

* *type:* inline-level
* *content:* metadata content, flow content, phrasing content
* *support:* all browsers
* *example:*

```
<!-- HTML5 -->
<script src="javascript.js"></script>
```
### 16. `<button>` -- Button Element

* *type:* inline-level
* *content:* flow content, phrasing content, Interactive content, listed, labelable, and submittable form-associated element, palpable content
* *support:* all browsers
* *example:*

```
<button name="button">Click me</button>
```

### 17. `<button>` -- Button Element

* *type:* inline-level
* *content:* flow content, phrasing content, Interactive content, listed, labelable, and submittable form-associated element, palpable content
* *support:* all browsers
* *example:*

```
<button name="button">Click me</button>

```

### 18. `<code>` -- Code Element

* *type:* inline-level
* *content:* flow content, phrasing content, palpable content
* *support:* all browsers
* *example:*

```
<p>Regular text. <code>This is code.</code> Regular text.</p>
```
Result:
Regular text. This is code. Regular text.

### 19. `<em>` -- Emphasis Element 

* *type:* inline-level
* *content:* flow content, phrasing content, palpable content
* *support:* all browsers
* *example:*

```
<p>
  In HTML 5, what was previously called <em>block-level</em> content is now called <em>flow</em> content.
</p>
```
Result:

In HTML 5, what was previously called block-level content is now called flow content.

### 20. `<strong>` -- Strong Element 

* *type:* inline-level
* *content:* flow content, phrasing content
* *support:* all browsers
* *example:*

```
<p>When doing x it is <strong>imperative</strong> to do y before proceeding.</p>
```
Result:
When doing x it is imperative to do y before proceeding.

