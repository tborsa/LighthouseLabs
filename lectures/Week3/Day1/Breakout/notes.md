# CSS is not Easy

![Hard](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Breakout/assets/hard.jpg)


Notes and code [here](https://github.com/tborsa/LighthouseLabs/tree/master/lectures/Week3/Day1/Breakout)


What makes css hard?

---

### Topics 📢

- Position
- ID's & Classes
- Selectors
- Specificity
- Frameworks

---

## TRBL
When using shorthand to set the style attribute of a top, right, bottom, left property the order is.

TRBL

```css
div{
 margin: 15 10 15 10;
 padding: 5 10 5 10;
}
```
---

# Position
The position property specifies the type of positioning method used for an element
- static  
  - default
  - cannot set top, right, bottom , or left
- relative
  - TRBL can be set to change position relative to where it would have been statically positioned.
- absolute
  - TRBL can be set to change position relative to the nearest positioned ancestor, or the html body.
- fixed
  - TRBL is set relative to the viewport so the element stays in the same position even when content is scrolled.

- sticky

---


## IDs Vs Classes 🔖

🎣 Hooks to grab elements in order to apply style to them.

When to use IDs vs Classes

Classes
- Same class on multiple elements
- Multiple classes on one element

```HTML
<div class="shaman"></div>
<div class="rogue"></div>
```

IDs are unique
- each element can have at most one ID
- You should have only one element with a particular ID
- secret browser power url#idname

```HTML
<div id="introduction"></div>
```


** Elements can have both classes and ID's

There is nothing you can do with a class in css that you can do with an ID and vise versa

*** However classes and ID's are different to JS

---

# Selectors

Way we use tags, ID's, Classes to apply CSS to them.

``` CSS
div, .primary {

}
```
``` CSS
div.primary {

}
```
```CSS
div .primary {

}
```

https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Combinators_and_multiple_selectors

---

# Specificity

![Specificity](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Breakout/assets/specificity1.png)

When two competing styles are applied to an element the one with the higher priority specificity gets applied.

A style with 0,0,2,1 (2 classes and 1 element tag) would be applied over a style of 0,0,1,1 (1 class and 1 element tag).

What is the 'score' of ...
```CSS
div.box.left{
 color: blue;
}
```


# Selector battle

<span style="color: red">red</span> vs. <span style="color: blue">blue</span>

```CSS
#red{
 color: red;
}
```
## VS

```CSS
div.blue.ocean{
 color: blue;
}
```

---

```CSS
div a.red{
 color: red;
}
```
## VS

```CSS
.blue.ocean{
 color: blue;
}
```

---

```CSS
div.box.left{
 color: red;
}
```
## VS

```CSS
div.box.left{
 color: blue;
}
```

---

# Too specific

![Specific](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Breakout/assets/ricknmorty.gif)

When are your selectors too specific?

```CSS
div a p > a.link.underline#home{
 text-decoration: underline;
}
```
- use ID's sparingly
- If you don't need a selector don't use it.

---

## Simple is better

In general you want to be light handed with classes and id's.


if we want our links to look a certain way

```HTML
<a href="www.nima.com" class="link"> </link>

```

instead we know it will be an `<a>` tag so

```HTML
<a href="wwww.nima.com" ></link>

```

---

## !important

```CSS
div{
   color: red !important;
}
```
- Important will move the style to the top of the specificity hierarchy.


- If everything is important than nothing is important

- If two elements are important than you look at specificity.

---


# Stylin Style 😎

Style of CSS should be:

``` CSS
selector {
 /* 2 spaces for indentation, as with everything else */
 key1: value;
 key2: value;
}
```

---

# Frameworks


- Bootstrap
- Semantic UI
- Materialize


