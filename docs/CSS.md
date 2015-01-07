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


