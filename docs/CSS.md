### 1. `float`

* *elements:* all
* *inherited:* no

#### Values

* `none` (default) -- Is a keyword indicating that the element must not float.
* `left` -- Is a keyword indicating that the element must float on the left side of its containing block.
* `right` -- Is a keyword indicating that the element must float on the right side of its containing block.

### 2. `margin`

* *elements:* all
* *inherited:* no

#### Values

* `length` -- Specifies a fixed width. Negative Values are allowed. See for <length> possible units.
* `percentage` -- A percentage relative to the width of the containing block. Negative values are allowed.
* `auto` --  is replaced by some suitable value, e.g. it can be used for centering of blocks.
div { width:50%;  margin:0 auto; } centers the div container horizontally.

### 3. `max-width`

* *elements:* all
* *inherited:* no

#### Values


* `none` (default) -- The width has no maximum value.
* `length` -- See length for possible units.
* `percentage`-- Specified as a percentage of containing block's width.
* `max-content` -- The intrinsic preferred width.
* `min-content` --The intrinsic minimum width.
* `fill-available` --The containing block width minus horizontal margin, border and padding. Some browsers implement an ancient name for this keyword, available.
* `fit-content` --The same as max-content.

### 4. `min-width`

* *elements:* all
* *inherited:* no

#### Values


* `length` --The fixed minimum width. See length for possible units. Negative values make the declaration invalid.
* `percentage`--The fixed minimum width expressed as a percentage of containing block's width. 
* `max-content` --The intrinsic preferred width.
* `min-content` --The intrinsic minimum width.
* `fill-available` --The containing block width minus horizontal margin, border and padding. Some browsers implement an ancient name for this keyword, available.
* `fit-content` --Defined as min(max-content, max(min-content, fill-available).

### 5. `min-width`

* *elements:* all
* *inherited:* no

#### Values


* `length` --The fixed minimum width. See length for possible units. Negative values make the declaration invalid.
* `percentage`--The fixed minimum width expressed as a percentage of containing block's width. 
* `max-content` --The intrinsic preferred width.
* `min-content` --The intrinsic minimum width.
* `fill-available` --The containing block width minus horizontal margin, border and padding. Some browsers implement an ancient name for this keyword, available.
* `fit-content` --Defined as min(max-content, max(min-content, fill-available).
* `auto` -- ...

### 6. `width`

* *elements:* all
* *inherited:* no

#### Values

* `auto` (default) --The browser will calculate and select a width for the specified element.
* `length` -- See length for possible units. 
* `percentage`--Specified as a percentage of containing block's width.
* `max-content` --The intrinsic preferred width.
* `min-content` --The intrinsic minimum width.
* `available` --The containing block width minus horizontal margin, border and padding.
* `content-box` --If present, the preceding <length> or <percentage> is applied to the element's content box.
* `border-box` --If present, the preceding <length> or <percentage> is applied to the element's border box.
* `fit-content` -- The larger of:
                    *  the intrinsic minimum width
                    *  the smaller of the intrinsic preferred width and the available width

### 6. `color`

* *elements:* all
* *inherited:* yes

#### Values

* color -- initial value varies from one browser to another. It gives the color of the textual elements of the element.
 

### 7. `padding`

* *elements:* all
* *inherited:* no

#### Values

* `length`--Specifies a non-negative fixed width. See length for details.
* `percentage`--With respect to the width of the containing block.


### 8. `opacity`

* *elements:* all
* *inherited:* no

#### Values

* `number` -- Is a number in the range 0.0 to 1.0, both included, representing the opacity of the channel, that is the value of its alpha channel. Any value outside the interval, though valid, is clamped to the nearest limit in the range.

### 9. `columns`

* *elements:* non-replaced block elements (except table elements), table-cell or inline-block elements.
* *inherited:* no

#### Values

* `column-width` -- Is a length value giving a hint of the optimal width of the column. The actual column width may be wider (to fill the available space), or narrower (only if the available space is smaller than the specified column width). The length must be strictly positive or the declaration is invalid.
* `column-count` -- Is a strictly positive integer describing the ideal number of columns into which the content of the element will be flowed. If the column-width is also set to a non-auto value, it merely indicates the maximum allowed number of columns.

### 10. `widows`

* *elements:* block container elements
* *inherited:* yes

#### Values

* `integer`--Denotes the minimum amount of lines that can stay alone on the top of a new page. If the value is not positive, the declaration is invalid.

