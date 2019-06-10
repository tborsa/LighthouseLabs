# CSS is not easy
What makes css hard?

## Old and the New


#position

# Selecors

```
div.primary {

}
```
```
div .primary {

}
```

https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Combinators_and_multiple_selectors

## ID's Vs Classes

hooks to grab elements in order to apply style to them. 

When to use IDs vs Classes

Classes
- same class on multiple
- multiple classes on one element


ID's are unique
- each elemenent can have at most one ID
- You should have only one element with a particular ID
- secrect browser power url#idname

** Elements can have both classes and ID's

There is nothign you can do wth a class in css that you cant do with an ID and vise versa

*** However classes and ID's are different to JS

# S[ecificity

Which slector wins?


# selector battle

skldfj vs alkds

lksjdf vs akljsdf

lksjdf vs alkdjsf





# Too specific

use ID's sparigly

!important 

```
div{
    color: red !importand;
}
```
If everything is important than nothing is important

If two elements are important than you look at specificity. 



Playing with the source / inline style with DevTools
Writing good CSS selectors (best practices)

## Too generic

In general you want to be light handed with classes and id's.

If you dont need them dont use them . 

if we want our links to look a cerain way

```
<a href="www.nima.com" class="link"> </link>

```

instead we know it will be an a tag so 

```
<a href="wwww.nima.com" ></link>

```


## stylin style

Style of CSS should be:

selector {
  /* 2 spaces for indentation, as with everything else */
  key1: value;
  key2: value;
}


# Frameworks


look at some grid examples

Make sure to cover 1, 2, 3, and 4 properties on things like margin/padding. It is often helpful to give students the 'Trouble' mnemonic:

TRBL - Top, Right, Bottom, Left

