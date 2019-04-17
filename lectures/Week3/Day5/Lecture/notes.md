 ---
theme : "white"
transition: "zoom"
highlightTheme: "darkula"
logoImg: ""
center: false
slideNumber: true

---

# Responsive Design and SASS
<center> ![internet](assets/internet.gif)</center>
<style type="text/css">
  .reveal p {
    text-align: left;
  }
  .reveal ul {
    display: block;
  }
  .reveal ol {
    display: block;
  }
</style>

---


## Intro 📢 

Responsive design 

We want a dynamic experience so that font, layout, images, and any content all work with different screen and device sizes. 📱 🖥 💻 ⌚ 📺 📻

Goal: A good uniform UI experience for all users. 

We are going to explore how to do this with just css.
Some simple css changes can drastically change the user experience. 

Approaches/toolset🔧:

- percentages %🎰
- em's, vw's
- media queries
- flex box
- SASS

---

# Responsive Design exploration 🎢

[Unresponsive](https://en.wikipedia.org/wiki/Main_Page)
[Responsive](https://github.com)

-What are some qualities that make ____ responsive?
-What makes a site unresponsive?

*some sites use mobile versioning to serve different UI based on what device is used. 
[Normal](youtube.com)
[Mobile](m.youtube.com)

---

# CSS 📃

Can we add responsiveness using tools we already know?

- percentages
- em's , vw's

DEMO

---

# Media Queries 🍞

Media queries are useful when you want to modify your site or app depending on a device's general type (such as print vs. screen) or specific characteristics and parameters (such as screen resolution or browser viewport width). - mozilla

[Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

A media query is composed of an optional media type and any number of media feature expressions.

## @media only screen and (max-width: 600px) {}

Media: screen  
Feature Expression: max-width: 600px

Remember
 - different media types 
 - breakpoints in browser are triggered by a width feature expression. 
 - specific css breakpoint sizes are not standardized but depend on what looks right
 - media query requires viewport to be set for phones

DEMO + MEDIA QUERIES

---

# flex box 💪 🍱

 way to display sets of items or lists of things.

 To use flex box you need to create a flex container, that will contain some flexed on items.
``` css
 .container {
   display: flex;
 }
 .container < div {
   // flex items
 }
 ```

 The flex container has optional additional properties:
  - flex-direction (Vertical or Horizontal)
  - flex-wrap (Overflow behavior)
  - flex-flow (Direction & Wrap shorthand)
  - justify-content (Horizontal alignment)
  - align-items (Vertical alignment)
  - align-content (Align the flex- lines)

The flex items/children have optional properties as well:
  - order (Position element is ordered in)
  - flex-grow (How much element grows relative to other items)
  - flex-shrink (How much element shrinks relative to other items)
  - flex-basis (Initial Length)
  - flex (Shorthand for grow shrink & basis)
  - align-self (Overides parent align-item property)

 depends on two parts parent properties and child properties.
 
 ---

# DEMO

---

# Sass 💁

[Docs](https://sass-lang.com/guide)

Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS) - Wikipedia

A preprocessor is a program that modifies data to conform with the input requirements of another program.

SASS -> CSS

## css with awesomeness
Syntactically awesome style sheets

CSS and SASS are the same in terms of expressiveness. There is no style you can do in SASS that you can't do in pure CSS. SASS just makes it easier. 


-SASS example

---

## Awesomeness 🤙

  - $ variables
  - nesting
  - & matching
  - importing
  - mixins
  - inheritance
 
Developing node applications we can use a sass module.

```
$ npm install sass -g
$ sass input.sass output.css
$ sass --watch input.sass output.css
```
Using sass will convert the input.sass to css in the output.css file. The --watch flag will watch for changes and automatically update the css file. 

 - production you would use one css build

---

# DEMO -> SCSS

<center>![tenor](assets/hack.gif)</center>

---

