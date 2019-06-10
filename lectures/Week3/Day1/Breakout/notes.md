# CSS is not Easy

![Hard](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Breakout/assets/hard.jpg)


What makes css hard?

---

### Topics 📢

- Position
- ID's & Classes
- Selectors
- Specificity
- Frameworks

---

# Position
The position property specifies the type of positioning method used for an element 
- static 
  - default
  - cannot set top, right, bottom , or left
- relative 
- fixed 
- absolute
- sticky

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

## ID's Vs Classes 🔖

🎣 Hooks to grab elements in order to apply style to them. 

When to use IDs vs Classes

Classes
- Same class on multiple elements
- Multiple classes on one element


ID's are unique
- each elemenent can have at most one ID
- You should have only one element with a particular ID
- secrect browser power url#idname

** Elements can have both classes and ID's

There is nothign you can do wth a class in css that you cant do with an ID and vise versa

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

A style with 0,0,2,1 (2classes and 1 elemnt tag) would be applied over a style of 0,0,1,1 (1class and 1 element tag).

What is the 'score' of ...
```CSS
div.box.left{
  color: blue;
}
```


# Selector battle


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
  color: blue;
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
  color: blue;
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
- If you dont need a selector dont use it. 

---

## Simple is better

In general you want to be light handed with classes and id's.


if we want our links to look a cerain way

```HTML
<a href="www.nima.com" class="link"> </link>

```

instead we know it will be an a tag so 

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
- Important will move the style to the top of the specifcity heirarchy. 


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

- look at some grid examples
