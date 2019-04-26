 ---
theme : "white"
transition: "zoom"
highlightTheme: "darkula"
logoImg: ""
center: false
slideNumber: true

---

# Game Development

![Design](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/AdvancedTopics/gamedev/assets/first.png)

[In Acton](https://www.youtube.com/watch?v=WY5jdf7Popk)

Objectives

- Game Design vs Development
- Computer Graphics
- Graphics Libraries
- Game Engines
- Phaser


---

## Game Design

![Design](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/AdvancedTopics/gamedev/assets/barrensidea.jpg)

Conceptual ideas of the game and game mechanics. 

Concepts, characters, story, and world building. 

Design document = blueprint

## Game Development

![Game](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/AdvancedTopics/gamedev/assets/barrens.jpg)

Bringing the game design ideas to life, through programming, modeling, rendering, engineernig, mxing, testing...

Concept  --> element of game

---

# Game Development is Making...

## Code

Dictates the behavior and function of the game. 

## Assets

![Assets](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/AdvancedTopics/gamedev/assets/assets.png)

The "things" that go into a game. Some examples of assets are artwork (including textures and 3D models), sound effects, music, text, and dialogue.
It is anything that is presented to the user.


---

# Elements of a game

Assets, Code, or Concepts

- Story
- Audio assets
- Characters
- Sprites
- Models
- Levels
- Gameplay mechanics

---

# What "tech" is required to make a game?
Video Game

    "A game played by electronically manipulating images produced by a computer program on a television screen or other display screen."

1972 - Pong 

1980

![Battlezone](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/AdvancedTopics/gamedev/assets/battlezone.jpg)

1988

![Might & Magic 2](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/AdvancedTopics/gamedev/assets/mightandmagic.jpg)

1996

![Quake](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/AdvancedTopics/gamedev/assets/quake.jpg)

![Daggerfall](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/AdvancedTopics/gamedev/assets/daggerfall.jpg)


There are many creative ways to make a game, but most require manipulating graphics on a screen. This falls under a field in computer science called __Computer Graphics__. 


Displaying graphics on a screen is a blend of art, math, and physics.

---

# Modeling

Developing a representation of a surface or object in 3D simulated space, usually with polygons.

![modeling](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/AdvancedTopics/gamedev/assets/modeling.jpg)

![modeling](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/AdvancedTopics/gamedev/assets/3dmodelling.jpeg)

---

# Rendering

Process of generating realistic or desired images from a model.
This involves:

- Texture
    - Applying 2d images or "textures" to 3d shapes.
- Lighting
    - adding light to the scene
- Shading 
    - applying light to the model


![Shading](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/AdvancedTopics/gamedev/assets/shading.jpg)


![Shading](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/AdvancedTopics/gamedev/assets/shading.gif)

![Shading](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/AdvancedTopics/gamedev/assets/raytracing.gif)

Real Time vs Pre Rendered

[Ray Tracing](https://www.youtube.com/watch?v=J3ue35ago3Y)

---

# Animation

Adding motion to the model. 

For 3D animation this can involve 
- Rigging
    - Attatching moveable joints to a static model.
- Motion Capture
- Kinematics
    - Calculating the anlge of joints to arrive at a position or vise versa.

![Rigging](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/AdvancedTopics/gamedev/assets/rigging.gif)


But also animation concepts... 

![Squash & Stretch](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/AdvancedTopics/gamedev/assets/squash.gif)

![Anticipation](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/AdvancedTopics/gamedev/assets/anticipation.gif)




---


# 2d games?

- Sprites
    - 2D image
    - aesprite
    - graphicsgale
    - tile extruder

- Tiles
    - tiled

![tiles](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/AdvancedTopics/gamedev/assets/tiles.png)

- Animation
    - New sprite image for each fram of the motion results in a sprite sheet. 
    - state machine

Hybrid 2D Games: Where 3D lighting and shading techniques are applied to 2D sprites. 

[2d in 3d?](https://twitter.com/LazyBearGames/status/967071011689648130)

![2d Lighting](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/AdvancedTopics/gamedev/assets/lastnight.gif)

![2d Lighting](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/AdvancedTopics/gamedev/assets/lastnight2.gif)


---

# Tools

---

# Graphics Library

Program that aids in redering graphics to the screen. 
We don't have to write the code to do the graphis!

Makes use of the GPU to render graphics fast.

Examples:

    - DirectX (Direct3D)
    - OpenGL
    - WebGL
    - Vulkan

[Pasta!](https://alteredqualia.com/three/examples/webgl_pasta.html)

[Blobs!](https://webglsamples.org/blob/blob.html)

[Grass](https://webglsamples.org/field/field.html)

---


# Game Engines

Development enviornment to help people build videogames.
(rendering engine, physics engine, collison detection)

Helps with

- physics
- user input
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

There are also many "In house" game engines that companies create to make their games.

---

# Phaser.js

What does phaser add? 

>" Choice of physics systems (arcade or full body)
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
Game clock + custom timers + timer events "

[DOCS](https://photonstorm.github.io/phaser3-docs/)