 ---
theme : "white"
transition: "zoom"
highlightTheme: "darkula"
logoImg: ""
center: false
slideNumber: true

---

# Responsive Design and SASS
![internet](assets/css.gif)
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

- What are some qualities that make ____ responsive?
- What makes a site unresponsive?

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
``` html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
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

  - flex-direction (Column or Row)
  - flex-wrap (Overflow behavior wrap/nowrap)
  - flex-flow (Direction & Wrap shorthand)
  - justify-content (Horizontal alignment, center, flex-start)
  - align-items (Vertical alignment, center, flex-start, stretch)
  - align-content (Align the flex- lines, stretch, space-around, flex-start)

The flex items/children have optional properties as well:

  - order (Position element is ordered in, 1 , 2..)
  - flex-grow (How much element grows relative to other items, 1, 2..)
  - flex-shrink (How much element shrinks relative to other items, 1, 2..)
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

Syntactically __awesome__ style sheets

CSS and SASS have the same expressiveness. There is no style you can do in SASS that you can't do in pure CSS. SASS just makes styling easier. 


-SASS example

---

## Awesomeness 🤙

  - $ variables
  - nesting
  - more operators
  - importing
  - mixins
  - inheritance
 
When developing node applications we can use the sass module, to convert our Sass files to CSS.

```
$ npm install sass -g
$ sass input.scss output.css
$ sass --watch input.scss output.css
```

Using sass will convert the given scss/sass input to the specified output css file. The optional --watch flag will watch for changes and automatically update the css file when the scss/sass file is changed.

example.scss -> example.css

---

## SASS vs SCSS

Sass is the css pre-processor as well as a syntax option for Sass stylesheets. The other syntax option being SCSS (Sassy CSS).

- Preprocessor
   - Sass

- Sass Syntax (File extensions)
   - .Sass: Older syntax that provides a more concise way of writing css as well as enhanced features.
  - .SCSS: An extension of css, all CSS is valid SCSS. SCSS is enhanced with Sass features.

---
# DEMO -> SCSS

<center>![tenor](assets/hack.gif)</center>

---

