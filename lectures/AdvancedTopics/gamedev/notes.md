 ---
theme : "white"
transition: "zoom"
highlightTheme: "darkula"
logoImg: ""
center: false
slideNumber: true

---

# Game Development

Process of making a videogame. 


---

## Game Design

Conceptual ideas of the game and game mechanics. Concepts, characters, world building. 

Design document = game biible

## Game Development

Bringing the game design ideas to life, through programming, modeling, rendering, engineernig, mxing,testing...

Concept ---> element of game

---

# Game Development is Making...

# Code

Dictates the behavior and function of the game. 

# Assets

Game assets are the "things" that go into a game. Some examples of assets are artwork (including textures and 3D models), sound effects, music, text, and dialogue.
It is anything that is presented to the user.


---

# Elements of a game

Story
Audio assets
Characters
sprites
models
Levels
Gameplay mechanics

---

# What "tech" required to make a game?
Video Game
" a game played by electronically manipulating images produced by a computer program on a television screen or other display screen. "

There many creative ways we can create a game but most require manipulating graphics on a screen. This falls under a field of computer science called Computer Graphics. 


Merging of art, math, and physics

--

# Modeling

Developing a representation of a surface or object in 3D simulated space, usually with polygons.

--

# Rendering

Process of generating realistic or desired image from a model.
This involves...

    - Texture
        Applying 2d images or "textures" to 3d shapes.
    - Lighting (applying light to the scene)
    - Shading (applying light to the model)

--

# Animation

Adding motion to the model. 


---


# 2d games?

- Sprites
    2D image
    -aesprite
    -graphicsgale
    -tile extruder

- Tiles
    - tiled

-animation
    New sprite image for each fram of the motion results in a sprite sheet. 
    - state machine

Hybrid
    3d lighting and shading techniques applied to 2d sprites. 

https://twitter.com/LazyBearGames/status/967071011689648130

---

# Tools

---

# Graphics Library

Program that aids in redering graphics to the screen. 
We don't have to write the code to graphis.

Makes use of the GPU to run fast.

Examples:
    - DirectX (Direct3D)
    - OpenGL
    - WebGL
    - Vulkan

---


# Game Engines

Development enviornment to help people build videogames.
(rendering engine, physics engine, collison detection)

Helps with

    - physics
    - input
    - animation
    - sprite handling
    - sound
    - sychcnronization (things happen at the right time)
    - update loops
        - delta time
    - collision

Examples

    - Unity
    - Unreal
    - GameMaker
    - Phaser.js

There are also many "In house" game engines that companies develop to make their games.

---

# Phaser.js

What does phaser add? 

Choice of physics systems (arcade or full body)
A Game World and a Camera which can pan around it
Tilemap support
A particle system
Sound support (both web audio and legacy audio)
More advanced input handling (input priority, drag and drop, etc)
Keyboard and Gamepad inputs
Scale Manager to handle game / scene resizing + full screen support
Tween Manager for tweening game objects, hooked into the core clock (so it pauses properly when your game does)
Asset loader (supporting all kinds of file types) and Cache
A State Manager to let you swap between game states easily
Game clock + custom timers + timer events

