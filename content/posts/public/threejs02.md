---
title: 'Three.js: Part 2 - First scene'
metaTitle: 'ThreeJS'
metaDesc: 'Rendering my first scene'
date: '2023-11-25'
tags: 
    - 3D Graphics
    - Three.js
---

Today I learnt the basics of creating and rendering a scene in Three.js. 


There are 4 essential elements to produce something on the screen:
- Scene
- Objects
- Camera
- Renderer

## Scene
The scene is the environment or world where you can place your objects, models, particles, lights, camera, etc. To produce something on the screen we ask Three.js to render our scene.

To create a scene we use the [Scene](https://threejs.org/docs/index.html#api/en/scenes/Scene) class:
```js
const scene = new THREE.Scene()
```

## Objects
Objects in Three.js can be primitive geometries, imported models, particles, lights, etc. To create a cube we need a special type of object called a [mesh](https://threejs.org/docs/#api/en/objects/Mesh). A mesh is a combination of a *geometry* (the shape) and a *material* (how it looks). The simplest way to create a cube geometry is to use the [BoxGeometry](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry) class which takes 3 parameters that all corresponds to the box's size.

```js
const geometry = new THREE.BoxGeometry(1, 1, 1)
```

To create the material, we use the [MeshBasicMaterial](https://threejs.org/docs/index.html#api/en/materials/MeshBasicMaterial) class. This class takes an object containing all the options as a parameter. To create a material with red color:
```js
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
```

To Create the final mesh, use the [Mesh](https://threejs.org/docs/index.html#api/en/objects/Mesh) class and send the `geometry` and `material` instances as parameters. When the mesh is created we also need to add it to the scene using the `add()` method. 

```js
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
```

## Camera
The camera is our point of view and will not show up on the screen. It is possible to have multiple cameras that you can switch between. There are different types of cameras, the one we are going to use here is the [PerspectiveCamera](https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera). This class needs two essential parameters, field of view and aspect ratio.

#### Field of view
Describes how large the vision angle is. With a large angle we can see a lot more in every direction but with a lot of distortion. A smaller angle with result in a zoomed in look. The field of view is expressed in degrees and corresponds to the vertical angle in this class. 

#### Aspect ratio
The aspect ratio is the width of the canvas divided by the height of the canvas. 

```js
// Canvas size
const sizes = {
    width: 800,
    height: 600
}

// Camera with vertical FOV of 75 degrees
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

scene.add(camera)
```

Do not forget to add the camera to the scene.

## Renderer
In order for the renderer to render the scene it will need a canvas to draw onto. We can either let the renderer create the canvas for us or we can create the canvas ourselves. Here we will create the canvas and send it to the renderer. 

Create a `<canvas>` element before the script tag and give it the class 'webgl'.
```html
<canvas class="webgl"></canvas>
```

Now in `script.js` we need to access the canvas element. We can use `document.querySelector(...)` to select it.

We also need to update the size of the renderer. This can be achieved using the `setSize(...)` method. Then we can call the `render(...)` method on the renderer and send the `scene` and the `camera` as parameters. 

Before rendering we need to change the position of the camera or the cube since they are currently in their default position which is the center of the scene. Because the camera is inside the cube we will not be able to see anything. To move an object we can use the `position` property. So after creating the camera we can set the cameras `z` position to 3. In Three.js a positive `z` value means moving backwards. It is important to change the value before the render. 

```js
const canvas = document.querySelector('canvas.webgl')

// Canvas size
const sizes = {
    width: 800,
    height: 600
}

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
```

![Final result of the rendered scene](/media/first_render.png)
