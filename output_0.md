[Skip to content](#content) 

* [About](https://davrous.com/about "About me")
* [Twitter](http://twitter.com/davrous "Twitter")
* [facebook](http://facebook.com/davrous "Facebook")
* [linkedin](https://linkedin.com/in/davrous "LinkedIn")
* [soundcloud](https://soundcloud.com/david-rousset "My Music")
* [RSS](https://www.davrous.com/feed/ "RSS Feed")

# [David Rousset](https://www.davrous.com/)

## Developer. Creative Geek. Composer.

# Tutorial series: learning how to write a 3D soft engine from scratch in C#, TypeScript or JavaScript

[June 13, 2013March 25, 2021](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/) [David Rousset](https://www.davrous.com/author/davrous/)[3D Software Engine](https://www.davrous.com/category/3d-software-engine/), [English](https://www.davrous.com/category/english/), [Technical article](https://www.davrous.com/category/technical-article/), [Tutorial](https://www.davrous.com/category/tutorial/) 
  
  
![Gouraud Shading on the Suzanne Blender Mesh ](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/10/46/metablogapi/5621.image_thumb_6B370362.png "Tutorial Part 5: Gouraud Shading on the Suzanne Blender Mesh ")I’d to like to share with you how I’ve learned to build what’s known as a “**3D soft engine**” through a series of tutorials. “Software engine” means that we **will use only the CPU** to build a 3D engine in an old school way (remember Doom on your 80386 ?). I’ll share with you the **C#, TypeScript and JavaScript** versions of the code. In this list, you should then find your favorite language or at least something near your favorite one. The idea is to help you transposing the following samples & concepts on your favorite platform. You’ll find the Visual Studio 2012 C#/TS/JS solutions to download at the end also.

So why building a 3D soft engine? Well, it’s simply because it really helps understanding how modern 3D works with our GPUs. Indeed, I’m currently learning the basics of 3D thanks to internal workshops delivered within Microsoft by the awesome [David Catuhe](https://twitter.com/deltakosh). He’s been mastering 3D for many years now and matrices operations is hard-coded in his brain. When I was young, I was dreaming to be able to write such engines but I had the feeling it was too complex for me. Finally, you’ll see that this is not – that – complex. You simply need someone that will help you understanding the underlying principles in a simple way.

Through this series, you will learn how to project some 3D coordinates (X, Y, Z) associated to a point (a vertex) on a 2D screen, how to draw lines between each point, how to fill some triangles, to handle lights, materials and so on. This first tutorial will simply show you how to display 8 points associated to a cube and how to move them in a virtual 3D world.

This tutorial is part of the following series:

1 – Writing the core logic for camera, mesh & device object (this article)  
2 – [Drawing lines and triangles to obtain a wireframe rendering](https://davrous.com/2013/06/14/tutorial-part-2-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-ts-or-js-drawing-lines-triangles/)  
3 – [Loading meshes exported from Blender in a JSON format](https://davrous.com/archive/2013/06/17/tutorial-part-3-learning-how-to-write-a-3d-soft-engine-in-c-ts-or-js-loading-meshes-exported-from-blender/)  
4 – [Filling the triangle with rasterization and using a Z-Buffer](https://davrous.com/2013/06/21/tutorial-part-4-learning-how-to-write-a-3d-software-engine-in-c-ts-or-js-rasterization-z-buffering/)  
4b – [Bonus: using tips & parallelism to boost the performance](https://davrous.com/2013/06/25/tutorial-part-4-bonus-learning-how-to-write-a-3d-software-engine-in-c-ts-or-js-optimizing-parallelism/)  
5 – [Handling light with Flat Shading & Gouraud Shading](https://davrous.com/2013/07/03/tutorial-part-5-learning-how-to-write-a-3d-software-engine-in-c-ts-or-js-flat-gouraud-shading/)  
6 – [Applying textures, back-face culling and WebGL](https://davrous.com/2013/07/18/tutorial-part-6-learning-how-to-write-a-3d-software-engine-in-c-ts-or-js-texture-mapping-back-face-culling-webgl/)

If you’re following the complete series, you will **know how to build your own 3D software engine**!

Your engine will then start by doing some wireframe rendering, then rasterization followed by gouraud shading and lastly by applying textures like demonstrated in this sample: <http://david.blob.core.windows.net/html5/SoftEngineProgression/wireframe/index.html>

It’s demonstrating the various stage we’ll cover during this series going from wireframe to textures.

By properly following this first tutorial, you’ll learn how to rotate the 8 points of a cube to obtain the following result at the end:

**Disclaimer:** some of you are wondering why I’m building this 3D software engine rather than using GPU. It’s really for educational purposes. Of course, if you need to build a game with fluid 3D animations, you will need DirectX or OpenGL/WebGL. But once you will have understood how to build a 3D soft engine, more “complex” engine will be simpler to understand. To go further, you definitely should have a look to the [BabylonJS WebGL engine](http://www.babylonjs.com/) built by David Catuhe and I. More details & tutorials here: <https://doc.babylonjs.com>

**Check the MVA video training version**: with David Catuhe, we’ve made a free 8 modules course to let you learn the basics of 3D, WebGL and [Babylon.js](http://www.babylonjs.com/). The first module is containing a 40 min video version of this tutorial series: [Introduction to WebGL 3D with HTML5 and Babylon.js](https://doc.babylonjs.com/how%5Fto/3d%5Fon%5Fthe%5Fweb%5Funderstanding%5Fthe%5Fbasics "http://www.microsoftvirtualacademy.com/training-courses/introduction-to-webgl-3d-with-html5-and-babylon-js")

[![image](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/10/46/metablogapi/4073.image_0C9F728C.png "image")](http://www.microsoftvirtualacademy.com/training-courses/introduction-to-webgl-3d-with-html5-and-babylon-js "Introduction to WebGL 3D with HTML5 and Babylon.js")

## Reading prerequisites

I’ve been thinking on how to write these tutorials for a long time now. And I’ve finally decided not to explain each required principle myself. There is a lot of good resources on the web that will explain those important principles better than I. But I’ve then spent quite some time browsing the web for you to choose, according to myself, the best one to read:

– [World, View and Projection Matrix Unveiled](http://web.archive.org/web/20131222170415/http:/robertokoci.com/world-view-projection-matrix-unveiled/ "http://robertokoci.com/world-view-projection-matrix-unveiled/")  
– [Tutorial 3 : Matrices](http://www.opengl-tutorial.org/beginners-tutorials/tutorial-3-matrices/ "http://www.opengl-tutorial.org/beginners-tutorials/tutorial-3-matrices/") that will provide you an introduction to matrices, the model, view & projection matrices.  
– [Cameras on OpenGL ES 2.x – The ModelViewProjection Matrix](http://db-in.com/blog/2011/04/cameras-on-opengl-es-2-x/ "http://db-in.com/blog/2011/04/cameras-on-opengl-es-2-x/") : this one is really interesting also as it explains the story starting by how cameras and lenses work.  
– [Transforms (Direct3D 9)](http://msdn.microsoft.com/en-us/library/windows/desktop/bb206269%28v=vs.85%29.aspx "http://msdn.microsoft.com/en-us/library/windows/desktop/bb206269(v=vs.85).aspx")  
– [A brief introduction to 3D](http://inear.se/talk/a%5Fbrief%5Fintroduction%5Fto%5F3d.pptx): an excellent PowerPoint slides deck ! Read at least up to slide 27\. After that, it’s too linked to a technology talking to GPU (OpenGL or DirectX).  
– [OpenGL Transformation](http://www.songho.ca/opengl/gl%5Ftransform.html "http://www.songho.ca/opengl/gl_transform.html")

![gl_transform02 (1)](https://www.davrous.com/wp-content/uploads/2013/06/gl_transform02-1.png)

Read those articles by not focusing on the technology associated (like OpenGL or DirectX) or on the concept of triangles you may have seen in the figures. We will see that later on.

By reading those articles, you really need to understand that there is a series of transformations done that way:

– we start by a **3D object centered on itself**  
– the same object is then **moved into the virtual 3D world** by translation, scaling or rotation operations via matrices  
– a **camera will look at this 3D object** positioned in the 3D world  
– the final **projection** of all that will be done into a **2D space** which is your screen

![IC412718](https://www.davrous.com/wp-content/uploads/2013/06/IC412718.png) ![gl_projectionmatrix01](https://www.davrous.com/wp-content/uploads/2013/06/gl_projectionmatrix01.png)

All this magic is done by cumulating transformations through matrices operations. **You should really be at least a bit familiar with those concepts before running through these tutorials**. Even if you don’t understand everything by reading them the first time. You should read them first. You will probably go back to those articles later on while writing your own version of this 3D soft engine. This is completely normal, don’t worry! 😉 The best way to learn 3D if by experimenting and doing mistakes.

We won’t neither spend some times on how matrix operations works. The good news is that you don’t really need to understand matrices. Simply view it as a black box doing the right operations for you. I’m not a master of matrices but I’ve managed to write a 3D soft engine by myself. So you should also succeed in doing so.

We will then use libraries that will do the job for us: **SharpDX**, a managed wrapper on top of DirectX, for C# developers and **babylon.math.js** written by David Catuhe for JavaScript developers. I’ve rewritten it in TypeScript also.

## Software prerequisites

We will write a WinRT/**XAML Windows Store Apps** in C# and/or a **HTML5 application** with TypeScript/JavaScript. So if you want to use the C# samples as-is, you need to install:

1 – Windows 8  
2 – Visual Studio 2012 Express for Windows Store Apps. You can download it for free: <http://msdn.microsoft.com/en-US/windows/apps/br211386>

If you choose to use the **TypeScript** samples, you need to install it from: <http://www.typescriptlang.org/#Download> . All samples have been updated and tested successfully with TypeScript 0.9.

You will find the plug-in for Visual Studio 2012 but there are other options available: [Sublime Text, Vi, Emacs: TypeScript enabled!](http://msopentech.com/blog/2012/10/01/sublime-text-vi-emacs-typescript-enabled "http://msopentech.com/blog/2012/10/01/sublime-text-vi-emacs-typescript-enabled") On my side, I’ve learned TypeScript by porting the C# version of my code to TypeScript. If you’re also interested in learning TypeScript, a first good introduction is this webcast: [Anders Hejlsberg: Introducing TypeScript](http://channel9.msdn.com/posts/Anders-Hejlsberg-Introducing-TypeScript "http://channel9.msdn.com/posts/Anders-Hejlsberg-Introducing-TypeScript") . Please install also [Web Essentials 2012](http://visualstudiogallery.msdn.microsoft.com/07d54d12-7133-4e15-becb-6f451ea3bea6 "http://visualstudiogallery.msdn.microsoft.com/07d54d12-7133-4e15-becb-6f451ea3bea6") which had a full support for TypeScript preview and compilation.

If you choose **JavaScript**, you just need your favorite IDE and a HTML5 compatible browser. 🙂

Please create a project named “**_SoftEngine_**” targeting the language you’d like to use. If it’s **C#**, add the “**SharpDX core assembly**” by using NuGet on your solution:

[![image](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/10/46/metablogapi/1460.image_thumb_315F1AC4.png "image")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/10/46/metablogapi/3108.image%5F13610CD0.png)

If it’s **TypeScript**, download [**babylon.math.ts**](http://david.blob.core.windows.net/softengine3d/babylon.math.ts). If’ it’s **JavaScript** download [**babylon.math.js**](http://david.blob.core.windows.net/softengine3d/babylon.math.js). Add a reference to those files in both cases.

## Back buffer & rendering loop

In a 3D engine, we’re rendering the complete scene during each frame with the hope of keeping an optimal 60 frames per second (FPS) to keep fluid animations. To do our rendering job, we need what we call a back buffer. This could be seen as 2 dimensional array mapping the screen/window size. Every cell of the array is mapped to a pixel on the screen.

In our **XAML** Windows Store Apps, we will use a byte\[\] array that will act as our dynamic **back buffer**. For every frame being rendered in the animation loop (tick), this buffer will be affected to a WriteableBitmap acting as the source of a XAML image control that will be called the **front buffer**. For the rendering loop, we’re going to ask to the XAML rendering engine to call us for every frame it will generate. The registration is done thanks to this line of code:

CompositionTarget.Rendering += CompositionTarget_Rendering;

In **HTML5**, we’re going to use of course the **<canvas />** element. The canvas element has already a back buffer data array associated to it. You can access it through the _**getImageData()**_ and _**setImageData()**_ functions. The animation loop will be handled by the _[requestAnimationFrame()](http://msdn.microsoft.com/library/ie/hh920765%28v=vs.85%29.aspx)_ function. This one is much more efficient that an equivalent of a _setTimeout(function() {\], 1000/60)_ as it’s handled natively by the browser that will callback our code only when it will be ready to draw.

**Note:** in both cases, you can render the frames in a different resolution that the actual width & height of the final window. For instance, you can have a back buffer of 640×480 pixels whereas the final display screen (front buffer) will be in 1920×1080\. In XAML and thanks to CSS in HTML5, you will then benefit from “_hardware scaling_”. The rendering engines of XAML and of the browser will stretch the back buffer data to the front buffer window by even using an anti-aliasing algorithm. In both cases, this task is done by the GPU. This is why we call it “hardware scaling” (hardware is the GPU). You can read more about this topic addressed in HTML5 here: [Unleash the power of HTML 5 Canvas for gaming](http://blogs.msdn.com/b/eternalcoding/archive/2012/03/22/unleash-the-power-of-html-5-canvas-for-gaming-part-1.aspx?Redirected=true "http://blogs.msdn.com/b/eternalcoding/archive/2012/03/22/unleash-the-power-of-html-5-canvas-for-gaming-part-1.aspx?Redirected=true") . This approach is often used in games for instance to boost the performance as you have less pixels to address.

## Camera & Mesh objects

Let’s start coding. First, we need to define some objects that will embed the details needed for a camera and for a mesh. A mesh is a cool name to describe a 3D object.

Our _Camera_ will have 2 properties: its position in the 3D world and where it’s looking at, the target. Both are made of 3D coordinates named a Vector3\. C# will use **SharpDX.Vector3** and TypeScript & JavaScript will use **BABYLON.Vector3**.

Our _Mesh_ will have a collection of vertices (several vertex or 3D points) that will be used to build our 3D object, its position in the 3D world and its rotation state. To identify it, it will also have a name.

To resume, we need the following code:

* [C#](#one)
* [TypeScript](#two)
* [JavaScript](#three)

// Camera.cs & Mesh.cs
using SharpDX;

namespace SoftEngine
{
    public class Camera
    {
        public Vector3 Position { get; set; }
        public Vector3 Target { get; set; }
    }
    public class Mesh
    {
        public string Name { get; set; }
        public Vector3[] Vertices { get; private set; }
        public Vector3 Position { get; set; }
        public Vector3 Rotation { get; set; }

        public Mesh(string name, int verticesCount)
        {
            Vertices = new Vector3[verticesCount];
            Name = name;
        }
    }
}

//<reference path="babylon.math.ts"/>
module SoftEngine {
    export class Camera {
        Position: BABYLON.Vector3;
        Target: BABYLON.Vector3;

        constructor() {
            this.Position = BABYLON.Vector3.Zero();
            this.Target = BABYLON.Vector3.Zero();
        }
    }
    export class Mesh {
        Position: BABYLON.Vector3;
        Rotation: BABYLON.Vector3;
        Vertices: BABYLON.Vector3[];

        constructor(public name: string, verticesCount: number) {
            this.Vertices = new Array(verticesCount);
            this.Rotation = BABYLON.Vector3.Zero();
            this.Position = BABYLON.Vector3.Zero();
        }
    }
}

var SoftEngine;
(function (SoftEngine) {
    var Camera = (function () {
        function Camera() {
            this.Position = BABYLON.Vector3.Zero();
            this.Target = BABYLON.Vector3.Zero();
        }
        return Camera;
    })();
    SoftEngine.Camera = Camera;    
    var Mesh = (function () {
        function Mesh(name, verticesCount) {
            this.name = name;
            this.Vertices = new Array(verticesCount);
            this.Rotation = BABYLON.Vector3.Zero();
            this.Position = BABYLON.Vector3.Zero();
        }
        return Mesh;
    })();
    SoftEngine.Mesh = Mesh;    
})(SoftEngine || (SoftEngine = {}));

For instance, if you want to describe a cube using our Mesh object, you need to create 8 vertices associated to the 8 points of the cube. Here are the coordinates on a cube displayed in Blender:

[![image](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/10/46/metablogapi/5140.image_thumb_2BF2AA73.png "image")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/10/46/metablogapi/4540.image%5F2D374352.png)

With a left-handed world. Remember also that when you’re creating a mesh, the coordinates system is starting at the center of the mesh. So, X=0, Y=0, Z=0 is the center of the cube.

This could be created via this kind of code:

var mesh = new Mesh("Cube", 8);
mesh.Vertices[0] = new Vector3(-1, 1, 1);
mesh.Vertices[1] = new Vector3(1, 1, 1);
mesh.Vertices[2] = new Vector3(-1, -1, 1);
mesh.Vertices[3] = new Vector3(-1, -1, -1);
mesh.Vertices[4] = new Vector3(-1, 1, -1);
mesh.Vertices[5] = new Vector3(1, 1, -1);
mesh.Vertices[6] = new Vector3(1, -1, 1);
mesh.Vertices[7] = new Vector3(1, -1, -1);

## The most important part: the Device object

Now that we have our basic objects and we know how to build 3D meshes, we need the most important part: the **Device object. It’s the core of our 3D engine**.

In it’s rendering function, we will build the view matrix and the projection matrix based on the camera we will have defined before.

Then, we will iterate through each available mesh to build their associated world matrix based on their current rotation and translation values. Finally, once done, the final transformation matrix to apply is:

var transformMatrix = worldMatrix * viewMatrix * projectionMatrix;

This is the concept you absolutely need to understand by reading the previous prerequisites resources. Otherwise, you will probably simply copy/paste the code without understanding anything about the magic underneath. This is not a very big problem for further tutorials but again, it’s better to know what’s you’re coding.

Using this transformation matrix, we’re going to project each vertex of each mesh in the 2D world to obtain X,Y coordinates from their X,Y,Z coordinates. To finally draw on screen, we’re adding a small clip logic to only display visible pixels via a PutPixel method/function.

Here are the various versions of the Device object. I’ve tried to comment the code to help you understanding it as much as possible.

**Note:** Microsoft Windows is drawing using the BGRA color space (Blue, Green, Red, Alpha) whereas the HTML5 canvas is drawing using the [RGBA](http://en.wikipedia.org/wiki/RGBA%5Fcolor%5Fspace) (Red, Green, Blue, Alpha) color space. That’s why, you will notice some slight differences in the code between C# and HTML5.

* [C#](#devicecsharp)
* [TypeScript](#devicetypescript)
* [JavaScript](#devicejavascript)

using Windows.UI.Xaml.Media.Imaging;
using System.Runtime.InteropServices.WindowsRuntime;
using SharpDX;

namespace SoftEngine
{
    public class Device
    {
        private byte[] backBuffer;
        private WriteableBitmap bmp;

        public Device(WriteableBitmap bmp)
        {
            this.bmp = bmp;
            // the back buffer size is equal to the number of pixels to draw
            // on screen (width*height) * 4 (R,G,B & Alpha values). 
            backBuffer = new byte[bmp.PixelWidth * bmp.PixelHeight * 4];
        }

        // This method is called to clear the back buffer with a specific color
        public void Clear(byte r, byte g, byte b, byte a) {
            for (var index = 0; index < backBuffer.Length; index += 4)
            {
                // BGRA is used by Windows instead by RGBA in HTML5
                backBuffer[index] = b;
                backBuffer[index + 1] = g;
                backBuffer[index + 2] = r;
                backBuffer[index + 3] = a;
            }
        }

        // Once everything is ready, we can flush the back buffer
        // into the front buffer. 
        public void Present()
        {
            using (var stream = bmp.PixelBuffer.AsStream())
            {
                // writing our byte[] back buffer into our WriteableBitmap stream
                stream.Write(backBuffer, 0, backBuffer.Length);
            }
            // request a redraw of the entire bitmap
            bmp.Invalidate();
        }

        // Called to put a pixel on screen at a specific X,Y coordinates
        public void PutPixel(int x, int y, Color4 color)
        {
            // As we have a 1-D Array for our back buffer
            // we need to know the equivalent cell in 1-D based
            // on the 2D coordinates on screen
            var index = (x + y * bmp.PixelWidth) * 4;

            backBuffer[index] = (byte)(color.Blue * 255);
            backBuffer[index + 1] = (byte)(color.Green * 255);
            backBuffer[index + 2] = (byte)(color.Red * 255);
            backBuffer[index + 3] = (byte)(color.Alpha * 255);
        }

        // Project takes some 3D coordinates and transform them
        // in 2D coordinates using the transformation matrix
        public Vector2 Project(Vector3 coord, Matrix transMat)
        {
            // transforming the coordinates
            var point = Vector3.TransformCoordinate(coord, transMat);
            // The transformed coordinates will be based on coordinate system
            // starting on the center of the screen. But drawing on screen normally starts
            // from top left. We then need to transform them again to have x:0, y:0 on top left.
            var x = point.X * bmp.PixelWidth + bmp.PixelWidth / 2.0f;
            var y = -point.Y * bmp.PixelHeight + bmp.PixelHeight / 2.0f;
            return (new Vector2(x, y));
        }

        // DrawPoint calls PutPixel but does the clipping operation before
        public void DrawPoint(Vector2 point)
        {
            // Clipping what's visible on screen
            if (point.X >= 0 && point.Y >= 0 && point.X < bmp.PixelWidth && point.Y < bmp.PixelHeight)
            {
                // Drawing a yellow point
                PutPixel((int)point.X, (int)point.Y, new Color4(1.0f, 1.0f, 0.0f, 1.0f));
            }
        }

        // The main method of the engine that re-compute each vertex projection
        // during each frame
        public void Render(Camera camera, params Mesh[] meshes)
        {
            // To understand this part, please read the prerequisites resources
            var viewMatrix = Matrix.LookAtLH(camera.Position, camera.Target, Vector3.UnitY);
            var projectionMatrix = Matrix.PerspectiveFovRH(0.78f, 
                                                           (float)bmp.PixelWidth / bmp.PixelHeight, 
                                                           0.01f, 1.0f);

            foreach (Mesh mesh in meshes) 
            {
                // Beware to apply rotation before translation 
                var worldMatrix = Matrix.RotationYawPitchRoll(mesh.Rotation.Y, 
                                                              mesh.Rotation.X, mesh.Rotation.Z) * 
                                  Matrix.Translation(mesh.Position);

                var transformMatrix = worldMatrix * viewMatrix * projectionMatrix;

                foreach (var vertex in mesh.Vertices)
                {
                    // First, we project the 3D coordinates into the 2D space
                    var point = Project(vertex, transformMatrix);
                    // Then we can draw on screen
                    DrawPoint(point);
                }
            }
        }
    }
}

///<reference path="babylon.math.ts"/>

module SoftEngine {
    export class Device {
        // the back buffer size is equal to the number of pixels to draw
        // on screen (width*height) * 4 (R,G,B & Alpha values). 
        private backbuffer: ImageData;
        private workingCanvas: HTMLCanvasElement;
        private workingContext: CanvasRenderingContext2D;
        private workingWidth: number;
        private workingHeight: number;
        // equals to backbuffer.data
        private backbufferdata;

        constructor(canvas: HTMLCanvasElement) {
            this.workingCanvas = canvas;
            this.workingWidth = canvas.width;
            this.workingHeight = canvas.height;
            this.workingContext = this.workingCanvas.getContext("2d");
        }

        // This function is called to clear the back buffer with a specific color
        public clear(): void {
            // Clearing with black color by default
            this.workingContext.clearRect(0, 0, this.workingWidth, this.workingHeight);
            // once cleared with black pixels, we're getting back the associated image data to 
            // clear out back buffer
            this.backbuffer = this.workingContext.getImageData(0, 0, this.workingWidth, this.workingHeight);
        }

        // Once everything is ready, we can flush the back buffer
        // into the front buffer. 
        public present(): void {
            this.workingContext.putImageData(this.backbuffer, 0, 0);
        }

        // Called to put a pixel on screen at a specific X,Y coordinates
        public putPixel(x: number, y: number, color: BABYLON.Color4): void {
            this.backbufferdata = this.backbuffer.data;
            // As we have a 1-D Array for our back buffer
            // we need to know the equivalent cell index in 1-D based
            // on the 2D coordinates of the screen
            var index: number = ((x >> 0) + (y >> 0) * this.workingWidth) * 4;

    
            // RGBA color space is used by the HTML5 canvas
            this.backbufferdata[index] = color.r * 255;
            this.backbufferdata[index + 1] = color.g * 255;
            this.backbufferdata[index + 2] = color.b * 255;
            this.backbufferdata[index + 3] = color.a * 255;
        }

        // Project takes some 3D coordinates and transform them
        // in 2D coordinates using the transformation matrix
        public project(coord: BABYLON.Vector3, transMat: BABYLON.Matrix): BABYLON.Vector2 {
            // transforming the coordinates
            var point = BABYLON.Vector3.TransformCoordinates(coord, transMat);
            // The transformed coordinates will be based on coordinate system
            // starting on the center of the screen. But drawing on screen normally starts
            // from top left. We then need to transform them again to have x:0, y:0 on top left.
            var x = point.x * this.workingWidth + this.workingWidth / 2.0 >> 0;
            var y = -point.y * this.workingHeight + this.workingHeight / 2.0 >> 0;
            return (new BABYLON.Vector2(x, y));
        }

        // drawPoint calls putPixel but does the clipping operation before
        public drawPoint(point: BABYLON.Vector2): void {
            // Clipping what's visible on screen
            if (point.x >= 0 && point.y >= 0 && point.x < this.workingWidth 
                                             && point.y < this.workingHeight) {
                // Drawing a yellow point
                this.putPixel(point.x, point.y, new BABYLON.Color4(1, 1, 0, 1));
            }
        }

        // The main method of the engine that re-compute each vertex projection
        // during each frame
        public render(camera: Camera, meshes: Mesh[]): void {
            // To understand this part, please read the prerequisites resources
            var viewMatrix = BABYLON.Matrix.LookAtLH(camera.Position, camera.Target, BABYLON.Vector3.Up());
            var projectionMatrix = BABYLON.Matrix.PerspectiveFovLH(0.78, 
                                                  this.workingWidth / this.workingHeight, 0.01, 1.0);

            for (var index = 0; index < meshes.length; index++) {
                // current mesh to work on
                var cMesh = meshes[index];
                // Beware to apply rotation before translation
                var worldMatrix = BABYLON.Matrix.RotationYawPitchRoll(
                        cMesh.Rotation.y, cMesh.Rotation.x, cMesh.Rotation.z)
                        .multiply(BABYLON.Matrix.Translation(
                            cMesh.Position.x, cMesh.Position.y, cMesh.Position.z));

                var transformMatrix = worldMatrix.multiply(viewMatrix).multiply(projectionMatrix);

                for (var indexVertices = 0; indexVertices < cMesh.Vertices.length; indexVertices++) {
                    // First, we project the 3D coordinates into the 2D space
                    var projectedPoint = this.project(cMesh.Vertices[indexVertices], transformMatrix);
                    // Then we can draw on screen
                    this.drawPoint(projectedPoint);
                }
            }
        }
    }
}

var SoftEngine;
(function (SoftEngine) {  
    var Device = (function () {
        function Device(canvas) {
            // Note: the back buffer size is equal to the number of pixels to draw
            // on screen (width*height) * 4 (R,G,B & Alpha values). 
            this.workingCanvas = canvas;
            this.workingWidth = canvas.width;
            this.workingHeight = canvas.height;
            this.workingContext = this.workingCanvas.getContext("2d");
        }

        // This function is called to clear the back buffer with a specific color
        Device.prototype.clear = function () {
            // Clearing with black color by default
            this.workingContext.clearRect(0, 0, this.workingWidth, this.workingHeight);
            // once cleared with black pixels, we're getting back the associated image data to 
            // clear out back buffer
            this.backbuffer = this.workingContext.getImageData(0, 0, this.workingWidth, this.workingHeight);
        };

        // Once everything is ready, we can flush the back buffer
        // into the front buffer. 
        Device.prototype.present = function () {
            this.workingContext.putImageData(this.backbuffer, 0, 0);
        };

        // Called to put a pixel on screen at a specific X,Y coordinates
        Device.prototype.putPixel = function (x, y, color) {
            this.backbufferdata = this.backbuffer.data;
            // As we have a 1-D Array for our back buffer
            // we need to know the equivalent cell index in 1-D based
            // on the 2D coordinates of the screen
            var index = ((x >> 0) + (y >> 0) * this.workingWidth) * 4;

    
            // RGBA color space is used by the HTML5 canvas
            this.backbufferdata[index] = color.r * 255;
            this.backbufferdata[index + 1] = color.g * 255;
            this.backbufferdata[index + 2] = color.b * 255;
            this.backbufferdata[index + 3] = color.a * 255;
        };

        // Project takes some 3D coordinates and transform them
        // in 2D coordinates using the transformation matrix
        Device.prototype.project = function (coord, transMat) {
            var point = BABYLON.Vector3.TransformCoordinates(coord, transMat);
            // The transformed coordinates will be based on coordinate system
            // starting on the center of the screen. But drawing on screen normally starts
            // from top left. We then need to transform them again to have x:0, y:0 on top left.
            var x = point.x * this.workingWidth + this.workingWidth / 2.0 >> 0;
            var y = -point.y * this.workingHeight + this.workingHeight / 2.0 >> 0;
            return (new BABYLON.Vector2(x, y));
        };

        // drawPoint calls putPixel but does the clipping operation before
        Device.prototype.drawPoint = function (point) {
            // Clipping what's visible on screen
            if (point.x >= 0 && point.y >= 0 && point.x < this.workingWidth 
                                             && point.y < this.workingHeight) {
                // Drawing a yellow point
                this.putPixel(point.x, point.y, new BABYLON.Color4(1, 1, 0, 1));
            }
        };

        // The main method of the engine that re-compute each vertex projection
        // during each frame
        Device.prototype.render = function (camera, meshes) {
            // To understand this part, please read the prerequisites resources
            var viewMatrix = BABYLON.Matrix.LookAtLH(camera.Position, camera.Target, BABYLON.Vector3.Up());
            var projectionMatrix = BABYLON.Matrix.PerspectiveFovLH(0.78, 
                                           this.workingWidth / this.workingHeight, 0.01, 1.0);

            for (var index = 0; index < meshes.length; index++) {
                // current mesh to work on
                var cMesh = meshes[index];
                // Beware to apply rotation before translation
                var worldMatrix = BABYLON.Matrix.RotationYawPitchRoll(
                    cMesh.Rotation.y, cMesh.Rotation.x, cMesh.Rotation.z)
                     .multiply(BABYLON.Matrix.Translation(
                       cMesh.Position.x, cMesh.Position.y, cMesh.Position.z));

                var transformMatrix = worldMatrix.multiply(viewMatrix).multiply(projectionMatrix);

                for (var indexVertices = 0; indexVertices < cMesh.Vertices.length; indexVertices++) {
                    // First, we project the 3D coordinates into the 2D space
                    var projectedPoint = this.project(cMesh.Vertices[indexVertices], transformMatrix);
                    // Then we can draw on screen
                    this.drawPoint(projectedPoint);
                }
            }
        };
        return Device;
    })();
    SoftEngine.Device = Device;    
})(SoftEngine || (SoftEngine = {}));

## Putting it all together

We finally need to create a mesh (our cube), create a camera and target our mesh & instantiate our Device object.

Once done, we will launch the animation/rendering loop. In optimal cases, this loop will be called every 16ms (60 FPS). During each tick (call to the handler registered to the rendering loop), we will launch the following logic every time:

1 – **Clear the screen** and all associated pixels with black ones (_Clear()_ function)

2 – **Update the various position & rotation values** of our meshes

3 – **Render them** into the back buffer by doing the required matrix operations (_Render()_ function)

4 – **Display them** on screen by flushing the back buffer data into the front buffer (_Present()_ function)

* [C#](#maincsharp)
* [TypeScript](#maintypescript)
* [JavaScript](#mainjavascript)

private Device device;
Mesh mesh = new Mesh("Cube", 8);
Camera mera = new Camera();

private void Page_Loaded(object sender, RoutedEventArgs e)
{
    // Choose the back buffer resolution here
    WriteableBitmap bmp = new WriteableBitmap(640, 480);

    device = new Device(bmp);

    // Our XAML Image control
    frontBuffer.Source = bmp;

    mesh.Vertices[0] = new Vector3(-1, 1, 1);
    mesh.Vertices[1] = new Vector3(1, 1, 1);
    mesh.Vertices[2] = new Vector3(-1, -1, 1);
    mesh.Vertices[3] = new Vector3(-1, -1, -1);
    mesh.Vertices[4] = new Vector3(-1, 1, -1);
    mesh.Vertices[5] = new Vector3(1, 1, -1);
    mesh.Vertices[6] = new Vector3(1, -1, 1);
    mesh.Vertices[7] = new Vector3(1, -1, -1);

    mera.Position = new Vector3(0, 0, 10.0f);
    mera.Target = Vector3.Zero;

    // Registering to the XAML rendering loop
    CompositionTarget.Rendering += CompositionTarget_Rendering;
}

// Rendering loop handler
void CompositionTarget_Rendering(object sender, object e)
{
    device.Clear(0, 0, 0, 255);

    // rotating slightly the cube during each frame rendered
    mesh.Rotation = new Vector3(mesh.Rotation.X + 0.01f, mesh.Rotation.Y + 0.01f, mesh.Rotation.Z);

    // Doing the various matrix operations
    device.Render(mera, mesh);
    // Flushing the back buffer into the front buffer
    device.Present();
}

///<reference path="SoftEngine.ts"/>

var canvas: HTMLCanvasElement; 
var device: SoftEngine.Device;
var mesh: SoftEngine.Mesh;
var meshes: SoftEngine.Mesh[] = [];
var mera: SoftEngine.Camera;

document.addEventListener("DOMContentLoaded", init, false);

function init() {
    canvas = <HTMLCanvasElement> document.getElementById("frontBuffer");
    mesh = new SoftEngine.Mesh("Cube", 8);
    meshes.push(mesh);
    mera = new SoftEngine.Camera();
    device = new SoftEngine.Device(canvas);

    mesh.Vertices[0] = new BABYLON.Vector3(-1, 1, 1);
    mesh.Vertices[1] = new BABYLON.Vector3(1, 1, 1);
    mesh.Vertices[2] = new BABYLON.Vector3(-1, -1, 1);
    mesh.Vertices[3] = new BABYLON.Vector3(-1, -1, -1);
    mesh.Vertices[4] = new BABYLON.Vector3(-1, 1, -1);
    mesh.Vertices[5] = new BABYLON.Vector3(1, 1, -1);
    mesh.Vertices[6] = new BABYLON.Vector3(1, -1, 1);
    mesh.Vertices[7] = new BABYLON.Vector3(1, -1, -1);

    mera.Position = new BABYLON.Vector3(0, 0, 10);
    mera.Target = new BABYLON.Vector3(0, 0, 0);

    // Calling the HTML5 rendering loop
    requestAnimationFrame(drawingLoop);
}

// Rendering loop handler
function drawingLoop() {
    device.clear();

    // rotating slightly the cube during each frame rendered
    mesh.Rotation.x += 0.01;
    mesh.Rotation.y += 0.01;

    // Doing the various matrix operations
    device.render(mera, meshes);
    // Flushing the back buffer into the front buffer
    device.present();

    // Calling the HTML5 rendering loop recursively
    requestAnimationFrame(drawingLoop);
}

var canvas;
var device;
var mesh;
var meshes = [];
var mera;

document.addEventListener("DOMContentLoaded", init, false);

function init() {
    canvas = document.getElementById("frontBuffer");
    mesh = new SoftEngine.Mesh("Cube", 8);
    meshes.push(mesh);
    mera = new SoftEngine.Camera();
    device = new SoftEngine.Device(canvas);

    mesh.Vertices[0] = new BABYLON.Vector3(-1, 1, 1);
    mesh.Vertices[1] = new BABYLON.Vector3(1, 1, 1);
    mesh.Vertices[2] = new BABYLON.Vector3(-1, -1, 1);
    mesh.Vertices[3] = new BABYLON.Vector3(-1, -1, -1);
    mesh.Vertices[4] = new BABYLON.Vector3(-1, 1, -1);
    mesh.Vertices[5] = new BABYLON.Vector3(1, 1, -1);
    mesh.Vertices[6] = new BABYLON.Vector3(1, -1, 1);
    mesh.Vertices[7] = new BABYLON.Vector3(1, -1, -1);

    mera.Position = new BABYLON.Vector3(0, 0, 10);
    mera.Target = new BABYLON.Vector3(0, 0, 0);

    // Calling the HTML5 rendering loop
    requestAnimationFrame(drawingLoop);
}

// Rendering loop handler
function drawingLoop() {
    device.clear();

    // rotating slightly the cube during each frame rendered
    mesh.Rotation.x += 0.01;
    mesh.Rotation.y += 0.01;

    // Doing the various matrix operations
    device.render(mera, meshes);
    // Flushing the back buffer into the front buffer
    device.present();

    // Calling the HTML5 rendering loop recursively
    requestAnimationFrame(drawingLoop);
}

If you’ve managed to follow properly this first tutorial, you should obtain something like that:

If not, **download the solutions** containing the source code:

– **C#** : [SoftEngineCSharpPart1.zip](http://david.blob.core.windows.net/softengine3d/SoftEngineCSharpPart1.zip "http://david.blob.core.windows.net/softengine3d/SoftEngineCSharpPart1.zip")

– **TypeScript** : [SoftEngineTSPart1.zip](http://david.blob.core.windows.net/softengine3d/SoftEngineTSPart1.zip "http://david.blob.core.windows.net/softengine3d/SoftEngineTSPart1.zip")

– **JavaScript** : [SoftEngineJSPart1.zip](http://david.blob.core.windows.net/softengine3d/SoftEngineJSPart1.zip "http://david.blob.core.windows.net/softengine3d/SoftEngineJSPart1.zip") or simply right-click –> view source on the embedded iframe

Simply review the code and try to find what’s wrong with yours. 🙂

In the next tutorial, we’re going to **learn how to draw lines between each vertex** & the concept of faces/**triangles** to obtain something like that:

[![image](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/10/46/metablogapi/7178.image_thumb_5C12D583.png "image")](https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/10/46/metablogapi/8228.image%5F445B9E1D.png)

See you in the second part of this series: [Tutorial part 2: learning how to write a 3D soft engine from scratch in C#, TS or JS – drawing lines & triangles](https://davrous.com/2013/06/14/tutorial-part-2-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-ts-or-js-drawing-lines-triangles/ "http://blogs.msdn.com/b/davrous/archive/2013/06/14/tutorial-part-2-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-ts-or-js-drawing-lines-amp-triangles.aspx")

[Follow the author @davrous](https://twitter.com/davrous)

### Share this:

* [Twitter](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?share=twitter&nb=1 "Click to share on Twitter")
* [Facebook](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?share=facebook&nb=1 "Click to share on Facebook")

Tagged [3DEngine](https://www.davrous.com/tag/3dengine/), [C#](https://www.davrous.com/tag/c/), [Canvas](https://www.davrous.com/tag/canvas/), [GPU](https://www.davrous.com/tag/gpu/), [HTML5](https://www.davrous.com/tag/html5/), [JavaScript](https://www.davrous.com/tag/javascript/), [Tutorial](https://www.davrous.com/tag/tutorial/), [TypeScript](https://www.davrous.com/tag/typescript/), [Windows 8](https://www.davrous.com/tag/windows-8/) 

## Post navigation

[HTML5 Gaming: benchmarking your sprites animations to target all devices & browsers](https://www.davrous.com/2013/04/26/html5-gaming-benchmarking-your-sprites-animations-to-target-all-devices-browsers/)

[Tutorial part 2: learning how to write a 3D soft engine from scratch in C#, TS or JS – drawing lines & triangles](https://www.davrous.com/2013/06/14/tutorial-part-2-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-ts-or-js-drawing-lines-triangles/)

##  76 thoughts on “Tutorial series: learning how to write a 3D soft engine from scratch in C#, TypeScript or JavaScript” 

1. ![](https://secure.gravatar.com/avatar/3651e719491c63d4424134d66fe53db9?s=60&d=mm&r=g) **demonixis** says:  
[June 13, 2013 at 1:50 pm](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-658)  
Hi !  
Thanks for this great introduction on how to make a soft 3D engine ! It's really easy to read, I think it's good to offer these three languages ​​because it allows us to see several methods. Another big thanks, I can't wait for the next =)  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=658#respond)
2. ![](https://secure.gravatar.com/avatar/3651e719491c63d4424134d66fe53db9?s=60&d=mm&r=g) **Orhan** says:  
[June 18, 2013 at 11:47 pm](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-659)  
Hello,  
The JS demo doesn't work with firefox, error "requestAnimationFrame is not defined"  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=659#respond)  
   1. ![](https://secure.gravatar.com/avatar/459583221c26ec2c6942a6ca54905e31?s=60&d=mm&r=g) **[Alejandro Godofredo Carlstein Ramos Mejia](http://acarlstein.com)** says:  
   [January 18, 2018 at 8:45 pm](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-16173)  
   Try the following:  
   TypeScript:  
    window.requestAnimationFrame = (function(){  
    return window.requestAnimationFrame ||  
    ( window).webkitRequestAnimationFrame ||  
    ( window).mozRequestAnimationFrame ||  
    ( window).oRequestAnimationFrame ||  
    ( window).msRequestAnimationFrame ||  
    function(/\* function \*/ callback, /\* DOMElement \*/ element){  
    window.setTimeout(callback, 1000 / 60);  
    };  
    })();  
   JavaScript:  
   window.requestAnimationFrame = (function () {  
    return window.requestAnimationFrame ||  
    window.webkitRequestAnimationFrame ||  
    window.mozRequestAnimationFrame ||  
    window.oRequestAnimationFrame ||  
    window.msRequestAnimationFrame ||  
    function (/\* function \*/ callback, /\* DOMElement \*/ element) {  
    window.setTimeout(callback, 1000 / 60);  
    };  
    })();  
   [Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=16173#respond)  
         1. ![](https://secure.gravatar.com/avatar/459583221c26ec2c6942a6ca54905e31?s=60&d=mm&r=g) **[Alejandro Godofredo Carlstein Ramos Mejia](http://acarlstein.com)** says:  
         [January 18, 2018 at 8:48 pm](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-16174)  
         For the TypeScript code didn’t show up properly on the comments. So, I will try again:  
          window.requestAnimationFrame = (function(){  
          return window.requestAnimationFrame ||  
          (<any> window).webkitRequestAnimationFrame ||  
          (<any> window).mozRequestAnimationFrame ||  
          (<any> window).oRequestAnimationFrame ||  
          (<any> window).msRequestAnimationFrame ||  
          function(/\* function \*/ callback, /\* DOMElement \*/ element){  
          window.setTimeout(callback, 1000 / 60);  
          };  
          })();  
         [Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=16174#respond)
3. ![](https://secure.gravatar.com/avatar/02867a07b105a10d6b8cc37c81521f7f?s=60&d=mm&r=g) **davrous** says:  
[June 19, 2013 at 12:13 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-660)  
Hello Orhan. Thanks for the feedback. I'll fix that asap.  
David  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=660#respond)  
   1. ![](https://secure.gravatar.com/avatar/47a850ccd4d2f3b01ef1ec72d64dd033?s=60&d=mm&r=g) **Lucas** says:  
   [January 25, 2019 at 2:44 pm](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-20984)  
   This is THE best article I’ve read!  
   Ps: Please update the links, some of them are not working!  
   [Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=20984#respond)
4. ![](https://secure.gravatar.com/avatar/3651e719491c63d4424134d66fe53db9?s=60&d=mm&r=g) **Zuff** says:  
[June 19, 2013 at 2:43 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-661)  
for JS :  
It should be added at the beginning of this script main.js file (for three examples):  
// shim layer with setTimeout fallback  
window.requestAnimationFrame = (function () {  
 return window.requestAnimationFrame ||  
 window.webkitRequestAnimationFrame ||  
 window.mozRequestAnimationFrame ||  
 function (callback) {  
 window.setTimeout(callback, 1000 / 60);  
 };  
 })();  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=661#respond)
5. ![](https://secure.gravatar.com/avatar/02867a07b105a10d6b8cc37c81521f7f?s=60&d=mm&r=g) **davrous** says:  
[June 19, 2013 at 2:48 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-662)  
Hi guys, well, the shim for RAF was already in place. So which version of Firefox are you using?  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=662#respond)
6. ![](https://secure.gravatar.com/avatar/3651e719491c63d4424134d66fe53db9?s=60&d=mm&r=g) **Zuff** says:  
[June 19, 2013 at 4:39 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-663)  
Le problème ne vient pas de ton site "[david.blob.core.windows.net/softengine3d"](http://david.blob.core.windows.net/softengine3d") qui fonctionne (testé sur Maxthon 3, IE9, chrome 27, FirexFox 15.0.1, 16.0.2 et 21.0) mais de tes zip pour javascript.  
Pour preuve, il parle d'un problème avec la fonction "requestAnimationFrame" (requestAnimationFrame(drawingLoop);) alors que celle que tu utilises sur ton site s'appelle "requestAnimFrame" (c'est grâce à IE que j'ai pu récupérer justement le script manquant dans le main.js en faisant une comparaison de code).  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=663#respond)
7. ![](https://secure.gravatar.com/avatar/02867a07b105a10d6b8cc37c81521f7f?s=60&d=mm&r=g) **davrous** says:  
[June 19, 2013 at 4:51 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-664)  
Ah ok. Je comprends mieux. 🙂 Bon, je modifie les archive ZIP alors. Merci pour l'info.  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=664#respond)
8. ![](https://secure.gravatar.com/avatar/02867a07b105a10d6b8cc37c81521f7f?s=60&d=mm&r=g) **davrous** says:  
[June 19, 2013 at 5:01 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-665)  
I've updated the .ZIP files containing the JavaScript code to include requestAnimationFrame prefixed for Firefox & iDevices.  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=665#respond)
9. ![](https://secure.gravatar.com/avatar/3651e719491c63d4424134d66fe53db9?s=60&d=mm&r=g) **Lucas** says:  
[July 3, 2013 at 5:36 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-666)  
Really good work David. I really like your approach – writing engine from scratch even with front end part where You put pixels on screen.  
I'm wondering – if it's possible to write it in C# in VS2010 under win 7? Without using XAML and whole "web environment" ?  
SharpDX is useful for vectors and matrix operations – but how do I "link" it with my project under VS 2010? Also what should I use rather than XAML image control?  
I would be really grateful for some advices 😉  
Take care  
Lucas  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=666#respond)
10. ![](https://secure.gravatar.com/avatar/02867a07b105a10d6b8cc37c81521f7f?s=60&d=mm&r=g) **davrous** says:  
[July 3, 2013 at 6:02 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-667)  
Hi Lucas. Thanks for your feedback! Yes, you can. I know some people who has already port the tutorials in C#/Winform, in Java and even Under Windows CE.  
You can download the SharpDX version working with Win7 desktop project: <http://sharpdx.org/>  
David  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=667#respond)
11. ![](https://secure.gravatar.com/avatar/3651e719491c63d4424134d66fe53db9?s=60&d=mm&r=g) **Hastur** says:  
[July 11, 2013 at 6:06 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-668)  
Super !  
J'ai enfin fini les prérequis et donc cette première partie. J'ai adoré. Par contre, je suis frustré car je n'ai toujours pas compris, au sens mathématique, pourquoi pour construire la matrice de projection il faut diviser les composantes x et y des points par leur composante z. Mais bon, on peut vivre sans avoir compris ça et au pire je le reprendrai plus tard.  
Encore merci et vivement la suite 🙂  
@Lucas : I'm also on a Win7 environement, and I made a WPF project so David's code is 99% compatible. The only difference is that WriteableBimap has no "PixelBuffer" property. The workaround is the WritePixels() method.  
So my Present() method contains only the following code :  
\_bitmap.WritePixels(new System.Windows.Int32Rect(0, 0, \_bitmap.PixelWidth, \_bitmap.PixelHeight), \_backBuffer, \_bitmap.PixelWidth \* 4, 0);  
The other difference is in the init of the WritableBitmap :  
var bmp = new WriteableBitmap(640, 480, 96, 96, PixelFormats.Bgra32, null);  
96 is the "dpi" for x and y, I've found the value somewhere on the web and I guess it's the default dpi for a screen but I don't know if it's supposed to vary depending on the screen. Anyway the code works great !  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=668#respond)  
   1. ![](https://secure.gravatar.com/avatar/beab519e33fcd27720da9365bf7027e9?s=60&d=mm&r=g) **Richard** says:  
   [December 13, 2015 at 6:16 pm](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-696)  
   Hi Lucas,  
   How did you get around the lack of Invalidate() on WriteableBitMap in wpf?  
   [Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=696#respond)  
         1. ![](https://secure.gravatar.com/avatar/182a2576383f3c9a4c4e8a59baf6e981?s=60&d=mm&r=g) **Jared** says:  
         [March 19, 2017 at 6:14 pm](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-8733)  
         For anyone else that is currently wondering about this. This is how I did it in WPF:  
         public void Present(Image image)  
          {  
          bmp.WritePixels(new System.Windows.Int32Rect(0, 0, bmp.PixelWidth, bmp.PixelHeight), backBuffer, bmp.PixelWidth \* 4, 0);  
          image.Source = bmp;  
          }  
         I have an Image on the main page that I pass to this method. bmp is still a WriteableBitmap. My image is 1920×1080 and it writes in less than a millisecond with my setup.  
         [Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=8733#respond)
12. ![](https://secure.gravatar.com/avatar/3651e719491c63d4424134d66fe53db9?s=60&d=mm&r=g) **Lucas** says:  
[July 12, 2013 at 3:35 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-669)  
@Hastur  
thank you for information 🙂  
Can You tell me something about performance of yours solution? I'm not sure but I've heard that WritePiexels() method is not very fast 😉  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=669#respond)
13. ![](https://secure.gravatar.com/avatar/3651e719491c63d4424134d66fe53db9?s=60&d=mm&r=g) **Hastur** says:  
[August 19, 2013 at 1:17 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-670)  
Oops, sorry Lucas but I didn't see you answered something until now. So if you come by here again, here is my answer : I was at 60fps with the cube on an Intel G870 CPU (my workstation), and still almost at 60fps with the textured monkey of the last tuto.  
I tried to access directly the WriteableBitmap's backbuffer like David, using unsafe code like in this link : [stackoverflow.com/…/how-to-edit-a-writablebitmap-backbuffer-in-non-ui-thread](http://stackoverflow.com/questions/9868929/how-to-edit-a-writablebitmap-backbuffer-in-non-ui-thread)  
I was like "Wow ! I'm using unsafe code ! I'm a reel demomaker, it's gonna be über fast !!". XD  
And, big surprise, it was awfully slow.  
So to my experience, WritePixels() is way more efficient than direct memory access to the backbuffer, but maybe it exists another method I haven't heard about.  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=670#respond)
14. ![](https://secure.gravatar.com/avatar/3651e719491c63d4424134d66fe53db9?s=60&d=mm&r=g) **Saad Galib** says:  
[September 22, 2013 at 3:30 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-671)  
My problem is in the device.prototype.project() in the javascript solution in the following lines,  
 var x = point.x \* this.workingWidth + this.workingWidth / 2.0 >> 0;  
 var y = -point.y \* this.workingHeight + this.workingHeight / 2.0 >> 0;  
I don't understand the multiplication with workingHeight and width. This may be pretty trivial, but i am stuck 🙁 any help would be much appreciated 🙂  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=671#respond)
15. ![](https://secure.gravatar.com/avatar/8d63173c78233202b699680bebd432ae?s=60&d=mm&r=g) **cneveu@teaser.fr** says:  
[October 16, 2013 at 1:27 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-672)  
Great, simply great !  
I've been trying to add another camera, without success, if anyone wants to give it a try.  
I'm actively working on those tutorials, and would like to extend them into another blog/discussion for a deeper approach/explanation if I'm allowed to.  
Anyway very good job. (See you at the tech days.)  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=672#respond)
16. ![](https://secure.gravatar.com/avatar/3651e719491c63d4424134d66fe53db9?s=60&d=mm&r=g) **Hastur** says:  
[October 17, 2013 at 1:51 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-673)  
@Saad : take a look at the two first graphics of the "Reading Prerequisites" chapter.  
After all transformations and cliping, and just before the transformation to "window space", all coordinates are "normalized", which means they are between -1 and 1\.  
So the code you pasted makes sure the final coordinates are between 0 and respectively layer's width and height.  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=673#respond)
17. ![](https://secure.gravatar.com/avatar/3651e719491c63d4424134d66fe53db9?s=60&d=mm&r=g) **Yannick** says:  
[October 21, 2013 at 5:17 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-674)  
Bonjour Mr. Rousset,  
Petite question, est-il possible de développer une application 3D autre qu'un jeu avec ce moteur. J'ai eu utiliser SilverlightXNA qui permettait de faire des interfaces avec tout les contrôles habituels et de plsu y ajouter la 3D.  
Qu'en est-il aujourd'hui ?  
Merci  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=674#respond)
18. ![](https://secure.gravatar.com/avatar/02867a07b105a10d6b8cc37c81521f7f?s=60&d=mm&r=g) **davrous** says:  
[October 21, 2013 at 5:24 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-675)  
Bonjour Yannick,  
 Bah comme tout moteur 3d, il n'y a rien de spécifique au jeu dans ce moteur. Vous pouvez tout à fait l'utiliser sur autre chose que du jeu pour modéliser des graphiques ou toutes autres choses "plus sérieuses" 🙂  
 Qu'imaginez-vous réaliser?  
Bye,  
David  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=675#respond)
19. ![](https://secure.gravatar.com/avatar/8d63173c78233202b699680bebd432ae?s=60&d=mm&r=g) **cneveu@teaser.fr** says:  
[October 24, 2013 at 8:49 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-676)  
Bonjour.  
J'ai réussi (c'était une erreur de positionnement en Xaml, ca n'est pas ma tasse de Csharp 😉 à ajouter une deuxième caméra qui montre les modèle simultanément sous un autre angle, donc… C'est super sympa à voir )  
Je suis sous VS2010\. Mon appli est en Wpf, (la même quasi).  
Si quelqu'un souhaite l'avoir je l'enverrai avec plaisir : mistralkriss at jaimeil (gmail) point com )  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=676#respond)
20. ![](https://secure.gravatar.com/avatar/02867a07b105a10d6b8cc37c81521f7f?s=60&d=mm&r=g) **davrous** says:  
[October 24, 2013 at 8:54 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-677)  
Cool! 🙂 N'hésites pas à mettre ta solution en téléchargement quelque part.  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=677#respond)
21. ![](https://secure.gravatar.com/avatar/3651e719491c63d4424134d66fe53db9?s=60&d=mm&r=g) **rick** says:  
[October 31, 2013 at 1:06 pm](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-678)  
Hi! Thanks for a great tutorial. Made a lot of sense!  
When I implemented the code everything works perfectly except that the x-axis is mixed up. If I plot two pixels A=\[0,0,0\] and B\[1,0,0\] I would expect B to be to the right of A, but it draws to the left of it. Is this expected or have I missed something?  
I implemented this with Javascript  
Thanks!  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=678#respond)
22. ![](https://secure.gravatar.com/avatar/3651e719491c63d4424134d66fe53db9?s=60&d=mm&r=g) **James** says:  
[November 3, 2013 at 11:54 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-679)  
Hi David,  
Firstly, many thanks for this excellent series of posts! Unfortunately, I've fallen at the first hurdle and hope you might be able to help me up :). I had assumed that the call to TransformCoordinate() in Project() would return normalised X/Y co-ordinates in the range \[-1,1\], however the range is actually \[-0.5, 0.5\]! I've looked at the SharpDX code that builds the projection matrix and to my untrained eyes it looks like it should generate X & Y coordinates in the range \[-1,1\] after the perspective divide – but it doesn't! Do you know why this isn't the case? Also what's the range of the z-value?  
Thank you!  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=679#respond)
23. ![](https://secure.gravatar.com/avatar/3651e719491c63d4424134d66fe53db9?s=60&d=mm&r=g) **James** says:  
[November 4, 2013 at 2:24 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-680)  
This is just to clarify my eariler post. There are two things I'm not quite getting about the mapping to screen space:  
1) I thought that the clip/perspective matrix generated by the call below would map camera space z-values to -1 at the near clip plane and 1 at the far clip plane; however I've found that changing the far clip plane parameter (e.g. to 100) has no effect on the transformed point. Can you tell me why this is?  
var projectionMatrix = Matrix.PerspectiveFovRH(0.78f,  
 (float)bmp.PixelWidth / bmp.PixelHeight,  
 0.01f, 1.0f);  
2) I was also under the impression that the same matrix would map x and y screen space values to the range \[-1, 1\] (-1 at left and bottom clip planes, 1 at top and bottom), but unless I'm mistaken the code below assumes values in the range \[-0.5, 0.5\]:  
var x = point.X \* bmp.PixelWidth + bmp.PixelWidth / 2.0f;  
var y = -point.Y \* bmp.PixelHeight + bmp.PixelHeight / 2.0f;  
I really want to understand this stuff in order to move onto the next tutorial in the series, therefore please can you let me know why the expectations above proved wrong?  
Many thanks,  
James  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=680#respond)
24. ![](https://secure.gravatar.com/avatar/3651e719491c63d4424134d66fe53db9?s=60&d=mm&r=g) **max million** says:  
[December 13, 2013 at 7:31 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-681)  
babylon.math.js. Add a reference to those files in both cases. (how do you add this file into visual studio library with out breaking the file structure) add it?  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=681#respond)
25. ![](https://secure.gravatar.com/avatar/02867a07b105a10d6b8cc37c81521f7f?s=60&d=mm&r=g) **davrous** says:  
[December 13, 2013 at 7:38 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-682)  
Hi Max,  
 I didn't understand your question. Can you please clarify what your problem is?  
Thanks,  
David  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=682#respond)
26. ![](https://secure.gravatar.com/avatar/82a4fafe78afb04b1ca3da35625703a0?s=60&d=mm&r=g) **gladskih@live.ru** says:  
[January 19, 2014 at 3:48 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-683)  
It's the best computer graphic (polygonal modeling) guide I've ever found and it have examples exactly in the languages that I using to learn it. But there are some points disturbing me. First of all it is using additional libraries like Babylon. During learning I would like to reinvent all possible wheels including matrix operations and JSON parsing. Also WinRT is good, but while I know only WinForms I prefer going through the WPF for beginning. And why do you use such insane nested way to create object in JS? Has it any advantages before defining constructor-like function and using "new" statement?  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=683#respond)
27. ![](https://secure.gravatar.com/avatar/3651e719491c63d4424134d66fe53db9?s=60&d=mm&r=g) **Ggg** says:  
[March 18, 2014 at 12:05 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-684)  
Nice one  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=684#respond)
28. ![](https://secure.gravatar.com/avatar/3651e719491c63d4424134d66fe53db9?s=60&d=mm&r=g) **Vincent Ellis** says:  
[April 14, 2014 at 9:06 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-685)  
Hello and thanks for the amazing series. It is very well written and everything is well explained. Do you have any plans of adding C++ examples?  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=685#respond)
29. ![](https://secure.gravatar.com/avatar/3651e719491c63d4424134d66fe53db9?s=60&d=mm&r=g) **sieuro8mig** says:  
[May 1, 2014 at 10:21 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-686)  
Everything works fine until I let the camera fly through a meshe's origin. Then everything is displayed mirrored but it shouldn't be visible. Is there a way to fix that?  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=686#respond)
30. ![](https://secure.gravatar.com/avatar/3651e719491c63d4424134d66fe53db9?s=60&d=mm&r=g) **Shawn** says:  
[June 22, 2014 at 4:31 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-687)  
Given the formulat:  
var x = point.X \* bmp.PixelWidth + bmp.PixelWidth / 2.0f;  
var y = -point.Y \* bmp.PixelHeight + bmp.PixelHeight / 2.0f;  
The point \[1, 0\] will be mapped to \[1.5\*bmp.PixelWidth, bmp.PixelHeight / 2.0f\], so the point will not be draw?  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=687#respond)
31. ![](https://secure.gravatar.com/avatar/3651e719491c63d4424134d66fe53db9?s=60&d=mm&r=g) **CarlV** says:  
[July 13, 2014 at 9:37 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-688)  
 Hi.  
Thanks David for the tut ! It really makes things simple to understand.  
For this particular one, I've used notepad++ and Javascript.  
the 8 points animate well in google, firefox; However in ie11, i get the canvas without animation.  
I'm still checking out what went wrong…Any suggestion ?  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=688#respond)
32. ![](https://secure.gravatar.com/avatar/3651e719491c63d4424134d66fe53db9?s=60&d=mm&r=g) **Khalid** says:  
[August 14, 2014 at 2:30 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-689)  
Hi,  
Thank you for the tutorial. Is there a problem with the first pre-requistes link "World, View and Projection Matrix Unveiled"? does anyone have the correct link or the tutorial itself?  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=689#respond)
33. ![](https://secure.gravatar.com/avatar/3651e719491c63d4424134d66fe53db9?s=60&d=mm&r=g) **Vegeta897** says:  
[January 1, 2015 at 5:56 pm](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-690)  
Khalid, you can view the article using the internet archive.  
[web.archive.org/…/world-view-projection-matrix-unveiled](http://web.archive.org/web/20131222170415/http://robertokoci.com/world-view-projection-matrix-unveiled/)  
This link should be edited into the article, if the author is reading this comment.  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=690#respond)
34. ![](https://secure.gravatar.com/avatar/02867a07b105a10d6b8cc37c81521f7f?s=60&d=mm&r=g) **davrous** says:  
[January 6, 2015 at 5:01 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-691)  
Thanks for sharing the archive article. I've updated the article.  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=691#respond)
35. ![](https://secure.gravatar.com/avatar/3651e719491c63d4424134d66fe53db9?s=60&d=mm&r=g) **Yayasakhar Nahasamapetilan** says:  
[January 28, 2015 at 3:41 pm](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-692)  
Very nice, although I would really like it if this was a bit more language agnostic. I'd rather build everything from the ground up than use libraries.  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=692#respond)
36. ![](https://secure.gravatar.com/avatar/3651e719491c63d4424134d66fe53db9?s=60&d=mm&r=g) **Rudi** says:  
[March 7, 2015 at 6:44 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-693)  
Hi.  
I created a Windows Store App, writing in C# in Visual Studio Pro 2013 Update4 on Windows8.1\. Pro.  
Starting the run, I receive error messages: "frontBuffer" (in the Page\_Loaded section) is an unknown name to the project SoftEngine.Windows as is the component "Sharp.DX.D3DCompiler" which is referred to. I think, all references shown in the tutorial are added in my solution.  
In the object catalogue I could not find the references for eliminating the error messages.  
Can anyone help to fix this?  
Thanks in advance.  
Rudi  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=693#respond)  
   1. ![](https://secure.gravatar.com/avatar/bf17b12fcc6c6a3f6a38e505c5db4ef6?s=60&d=mm&r=g) **Brendan Burkhart** says:  
   [March 5, 2017 at 4:27 pm](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-8347)  
   I’m having this issue too. Did you find a fix for it?  
   [Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=8347#respond)  
   2. ![](https://secure.gravatar.com/avatar/3a1fb5f4c35b1adbf4538893126eca37?s=60&d=mm&r=g) **Raisun** says:  
   [October 18, 2017 at 3:04 pm](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-14574)  
   I had the same issue. You should define in your MainPage.xaml file  
   [Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=14574#respond)
37. ![](https://secure.gravatar.com/avatar/3651e719491c63d4424134d66fe53db9?s=60&d=mm&r=g) **Marco** says:  
[September 15, 2015 at 1:09 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-694)  
This tutorial is great! Big thanks!  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=694#respond)
38. ![](https://secure.gravatar.com/avatar/3651e719491c63d4424134d66fe53db9?s=60&d=mm&r=g) **jjcat** says:  
[November 16, 2015 at 9:42 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-695)  
 var viewMatrix = Matrix.LookAtLH(camera.Position, camera.Target, Vector3.UnitY);  
 var projectionMatrix = Matrix.PerspectiveFovRH(0.78f, (float)bmp.PixelWidth / bmp.PixelHeight, 0.01f, 1.0f);  
The first one is using left-hand coordinate system method and the second one is using right-hand, is it mistake?  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=695#respond)
39. ![](https://secure.gravatar.com/avatar/43b0fb7bc2b6343513e3cae513d41813?s=60&d=mm&r=g) **[duke](http://photoatomic.com)** says:  
[March 6, 2016 at 6:03 pm](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-697)  
remembers me 1998! 🙂 the starting point for everyone interested in 3d graphic 🙂  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=697#respond)
40. Pingback: [Tutorial part 6: learning how to write a 3D software engine in C#, TS or JS – Texture mapping, back-face culling & WebGL | David Rousset – HTML5 & Gaming Technical Evangelist](https://blogs.msdn.microsoft.com/davrous/2013/07/18/tutorial-part-6-learning-how-to-write-a-3d-software-engine-in-c-ts-or-js-texture-mapping-back-face-culling-webgl/)
41. Pingback: [Tutorial part 2: learning how to write a 3D soft engine from scratch in C#, TS or JS – drawing lines & triangles | David Rousset – HTML5 & Gaming Technical Evangelist](https://blogs.msdn.microsoft.com/davrous/2013/06/14/tutorial-part-2-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-ts-or-js-drawing-lines-triangles/)
42. Pingback: [Tutorial part 3: learning how to write a 3D soft engine in C#, TS or JS – loading meshes exported from Blender | David Rousset – HTML5 & Gaming Technical Evangelist](https://blogs.msdn.microsoft.com/davrous/2013/06/17/tutorial-part-3-learning-how-to-write-a-3d-soft-engine-in-c-ts-or-js-loading-meshes-exported-from-blender/)
43. Pingback: [Tutorial part 4: learning how to write a 3D software engine in C#, TS or JS – Rasterization & Z-Buffering | David Rousset – HTML5 & Gaming Technical Evangelist](https://blogs.msdn.microsoft.com/davrous/2013/06/21/tutorial-part-4-learning-how-to-write-a-3d-software-engine-in-c-ts-or-js-rasterization-z-buffering/)
44. Pingback: [Tutorial part 5: learning how to write a 3D software engine in C#, TS or JS – Flat & Gouraud Shading | David Rousset – HTML5 & Gaming Technical Evangelist](https://blogs.msdn.microsoft.com/davrous/2013/07/03/tutorial-part-5-learning-how-to-write-a-3d-software-engine-in-c-ts-or-js-flat-gouraud-shading/)
45. Pingback: [Tutorial part 2: learning how to write a 3D soft engine from scratch in C#, TS or JS – drawing lines & triangles – David Rousset](https://www.davrous.com/2013/06/14/tutorial-part-2-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-ts-or-js-drawing-lines-triangles/)
46. Pingback: [Tutorial part 5: learning how to write a 3D software engine in C#, TS or JS – Flat & Gouraud Shading – David Rousset](https://www.davrous.com/2013/07/03/tutorial-part-5-learning-how-to-write-a-3d-software-engine-in-c-ts-or-js-flat-gouraud-shading/)
47. Pingback: [Tutorial part 6: learning how to write a 3D software engine in C#, TS or JS – Texture mapping, back-face culling & WebGL – David Rousset](https://www.davrous.com/2013/07/18/tutorial-part-6-learning-how-to-write-a-3d-software-engine-in-c-ts-or-js-texture-mapping-back-face-culling-webgl/)
48. Pingback: [Tutorial part 4: learning how to write a 3D software engine in C#, TS or JS – Rasterization & Z-Buffering – David Rousset](https://www.davrous.com/2013/06/21/tutorial-part-4-learning-how-to-write-a-3d-software-engine-in-c-ts-or-js-rasterization-z-buffering/)
49. ![](https://secure.gravatar.com/avatar/4ac864a85112973a9944309557cab6f8?s=60&d=mm&r=g) **Joe Valdivia** says:  
[May 29, 2016 at 1:10 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-1292)  
public void Present()  
 I am trying to run this code in C# WPF I am stuck here’. It doesn’t seem to like “PixelBuffer” or “Invalidate” I know it has to do with WritableBitmap in WPF  
Any ideas ? By the way awesome tutorial.  
 {  
 using (var stream = bmp.PixelBuffer.AsStream())  
 {  
 // writing our byte\[\] back buffer into our WriteableBitmap stream  
 stream.Write(backBuffer, 0, backBuffer.Length);  
 }  
 // request a redraw of the entire bitmap  
 bmp.Invalidate();  
 }  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=1292#respond)
50. ![](https://secure.gravatar.com/avatar/4ac864a85112973a9944309557cab6f8?s=60&d=mm&r=g) **joe valdivia** says:  
[May 29, 2016 at 3:52 pm](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-1298)  
I asked the question about this code and WPF. After more reading and some head banging I got it to work. Now Im ready to move on.  
Thanks.  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=1298#respond)
51. ![](https://secure.gravatar.com/avatar/25e6e4bacbeb89e236965028e82bacf5?s=60&d=mm&r=g) **matt\_p** says:  
[January 2, 2017 at 3:44 pm](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-5909)  
Hi, i skipped over your code and i found a few things confusing. First, your Model\_View\_Projection(MVP) matrix is calculated in the opposite order i am used to. I don’t really know how the library you’re using works but this seems a little bit confusing. As a follow up the project() function is even more confusing and i think its mainly due to what  
var point = Vector3.TransformCoordinate(coord, transMat);  
is really doing and maybe this is connected with the confusion of the construction or your MVP matrix. At this point i would expect that this line transforms from object space -> camera space -> normalized screen space in the range from \[-1,1\]. You would then do the perspective divide and the transformation to raster space \[0, screen\_width\] … but nothing of this happens in your code. No perspective divide and a confusing mapping that suggests that point (the result of the confusing TransformCoordinate function) is within the range of \[-0.5, 0.5\]. I’ve never seen this before and i think its due to how Babylon works (never used it). Maybe you should clarify on that point because this seems to be very special in how Babylon works and is just very confusing if one would implement your code without Babylon maybe in another language.  
best regards, Matt  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=5909#respond)
52. ![](https://secure.gravatar.com/avatar/43f38de7de3cc09502f5ad45e1dda5da?s=60&d=mm&r=g) **Giovanni Passerello** says:  
[January 3, 2017 at 2:40 pm](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-5950)  
Hi Davrous, I am coding this in vb.net and have just installed SharpDX using NuGet onto Visual Studio 2015\. My program is perfectly happy importing SharpDX, however when I try use Vector3 it does not recognise this… any suggestions? There seems to be no Vector3 on there?  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=5950#respond)  
   1. ![](https://secure.gravatar.com/avatar/bf17b12fcc6c6a3f6a38e505c5db4ef6?s=60&d=mm&r=g) **Brendan Burkhart** says:  
   [March 5, 2017 at 4:25 pm](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-8346)  
   I had this same issue, to solve it add “using SharpDX.Mathematics;” to your code, leave everything else as is.  
   [Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=8346#respond)  
         1. ![](https://secure.gravatar.com/avatar/182a2576383f3c9a4c4e8a59baf6e981?s=60&d=mm&r=g) **Jared** says:  
         [March 10, 2017 at 5:08 am](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-8525)  
         Hello,  
         That did not solve the issue for me.  
         [Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=8525#respond)  
                  1. ![](https://secure.gravatar.com/avatar/bf17b12fcc6c6a3f6a38e505c5db4ef6?s=60&d=mm&r=g) **Brendan Burkhart** says:  
                  [March 12, 2017 at 7:09 pm](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-8597)  
                  You have used NuGet to install both the core SharpDX and SharpDX.Mathematics?  
                  [Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=8597#respond)  
                              1. ![](https://secure.gravatar.com/avatar/182a2576383f3c9a4c4e8a59baf6e981?s=60&d=mm&r=g) **Jared** says:  
                              [March 19, 2017 at 6:10 pm](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-8732)  
                              Hello,  
                              Thank you for your response. I initially used NuGet to download SharpDX. I attempted to use Mathematics extension from that and did not realize I had to also download the NuGet SharpDX.Mathematics first.
53. ![](https://secure.gravatar.com/avatar/ae3e1b53380cb7fd3617c896ec197b2c?s=60&d=mm&r=g) **[Threezool](http://www.digitalzoolutions.com)** says:  
[April 12, 2017 at 9:39 pm](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-9916)  
For any one interested in a updated sample code i just ported the project over to UWP and Visual Studio 2017 and published to GitHub:  
<https://github.com/threezool/SoftEngineUWP>  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=9916#respond)  
   1. ![](https://secure.gravatar.com/avatar/ae3e1b53380cb7fd3617c896ec197b2c?s=60&d=mm&r=g) **[Threezool](http://www.digitalzoolutions.com)** says:  
   [April 12, 2017 at 10:57 pm](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-9918)  
   Added branches for the different parts  
   Part 1:  
   <https://github.com/threezool/SoftEngineUWP/tree/Step1>  
   Part 2:  
   <https://github.com/threezool/SoftEngineUWP/tree/Step2>  
   Part 3:  
   <https://github.com/threezool/SoftEngineUWP/tree/Step3>  
   [Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=9918#respond)  
         1. ![](https://secure.gravatar.com/avatar/edac2ee3e1a9df2d381d0095475df0d3?s=60&d=mm&r=g) **Jia** says:  
         [March 26, 2018 at 1:59 pm](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-16854)  
         Hi, I’ve implemented your project with a back buffer of 640\*480\. But I found that the cube would be stretched into a cuboid. It is weird so I really wonder how to solve this problem.  
         Thanks so much,  
         Jia  
         [Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=16854#respond)  
   2. ![](https://secure.gravatar.com/avatar/ae3e1b53380cb7fd3617c896ec197b2c?s=60&d=mm&r=g) **[Threezool](http://www.digitalzoolutions.com)** says:  
   [April 12, 2017 at 11:00 pm](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-9919)  
   I also made branches for the first few parts of the guide.  
   Part 1:  
   <https://github.com/threezool/SoftEngineUWP/tree/Step1>  
   Part 2:  
   <https://github.com/threezool/SoftEngineUWP/tree/Step2>  
   Part 3:  
   <https://github.com/threezool/SoftEngineUWP/tree/Step3>  
   [Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=9919#respond)  
   3. ![](https://secure.gravatar.com/avatar/edac2ee3e1a9df2d381d0095475df0d3?s=60&d=mm&r=g) **Jia** says:  
   [March 25, 2018 at 1:58 pm](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-16848)  
   thx so much! I am trying to implement it.  
   [Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=16848#respond)
54. Pingback: [From zero to hero, creating WebVR experiences with Babylon.js on all platforms – David Rousset](https://www.davrous.com/2017/07/07/from-zero-to-hero-creating-webvr-experiences-with-babylon-js-on-all-platforms/)
55. ![](https://secure.gravatar.com/avatar/880685a6c2a6aa45bc2d166867ad61da?s=60&d=mm&r=g) **Phil G** says:  
[February 12, 2019 at 7:45 pm](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-21393)  
Came across your tutorials about two thirds of the way through a very similar project but using vb.net (winforms). Though I took some different approaches e.g. I used Bresenham’s line drawing algorithm for example. It was still very informative. Especially your description of the Z-buffer.  
So thank you.  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=21393#respond)  
   1. ![](https://secure.gravatar.com/avatar/353d0395e49bfbf724bae85f3bf0a3cd?s=60&d=mm&r=g) **[David Rousset](https://www.davrous.com)** says:  
   [February 12, 2019 at 7:49 pm](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-21394)  
   Great! Thanks for your feedback 🙂  
   [Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=21394#respond)
56. ![](https://secure.gravatar.com/avatar/838806a44309125e67a522ac5b8b73ae?s=60&d=mm&r=g) **Larry57** says:  
[December 7, 2019 at 8:29 pm](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#comment-32825)  
Hi David, your tutorial is an absolute treasure.  
I am trying to do the exact same thing as you, I mean, to learn 3D from bare C# using maths and Winforms GDI+. Except my work was based on the excellent site of Song Ho (<http://www.songho.ca/opengl/index.html>) and his nice C++ projects.  
I managed to reach a high level of satisfaction seeing anithing running so smooth… Except for the rasterization part when trying to deal with lights. Suddenly, GDI polygons show their limits whenyou must modify inside.  
The rasterisation part you explain is exactly what I was looking for, and drawing a line by myself directly in a byte\[\] buffer was something I did not even dare 🙂  
I cannot wait to try this backbuffer technique and implement direct byte\[\] drawing for triangles. Then, using TPL and peppering AggressiveInlines where it needs to.  
I cannot thank you enough for sharing your work !  
[Reply](https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/?replytocom=32825#respond)
57. Pingback: [Understanding Shaders, the secret sauce of 3D engines – David Rousset](https://www.davrous.com/2020/03/22/understanding-shaders-the-secret-sauce-of-3d-engines/)
58. Pingback: [10 個GitHub庫開發者必看 \[20200507-01\] – jashliao部落格](http://jashliao.eu/wordpress/2020/05/07/10-%e5%80%8bgithub%e5%ba%ab%e9%96%8b%e7%99%bc%e8%80%85%e5%bf%85%e7%9c%8b-20200507-01/)
59. Pingback: [Write Your Own 3D Engine (0) – Yih Horng](http://www.yhorng.com/blog/?p=52)
60. Pingback: [3D Software Rendering on the GBA | Brain Baking](https://brainbaking.com/post/2020/07/3d-software-rendering-on-gba/)

### Leave a Reply [Cancel reply](/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/#respond)

Your email address will not be published. Required fields are marked \*

Comment \* 

Name \* 

Email \* 

Website 

Δ

* [About Me](https://www.davrous.com/about/)

* [About Me](https://www.davrous.com/about/)

[ ![](https://i1.wp.com/www.davrous.com/wp-content/uploads/2016/04/starwarsdavrous.jpg) ](https://www.davrous.com/about/)

Search for: 

### Recent Posts

* [From gaming to metaverses, building WebXR apps with Babylon.js](https://www.davrous.com/2022/04/12/from-gaming-to-metaverses-building-webxr-apps-with-babylon-js/)
* [From 0 to hero, connecting your web app to Microsoft Teams using Azure Communication Services](https://www.davrous.com/2022/04/06/from-0-to-hero-connecting-your-web-app-to-microsoft-teams-using-azure-communication-services/)
* [Understanding Shaders, the secret sauce of 3D engines](https://www.davrous.com/2020/03/22/understanding-shaders-the-secret-sauce-of-3d-engines/)
* [Frame & (variable) refresh rates or why Tesla is responsible for the 60 fps war](https://www.davrous.com/2020/03/20/frame-variable-refresh-rates-or-why-tesla-is-responsible-for-the-60-fps-war/)
* [Publishing your PWA in the Play Store in a couple of minutes using PWA Builder](https://www.davrous.com/2020/02/07/publishing-your-pwa-in-the-play-store-in-a-couple-of-minutes-using-pwa-builder/)

### Recent Comments

* [Babylon.js Hints that Microsoft Metaverse Will Be Web-Based – The New Stack - NFT 4 Genz](https://nft4genz.com/babylon-js-hints-that-microsoft-metaverse-will-be-web-based-the-new-stack/) on [From gaming to metaverses, building WebXR apps with Babylon.js](https://www.davrous.com/2022/04/12/from-gaming-to-metaverses-building-webxr-apps-with-babylon-js/#comment-73475)
* [Babylon.js Hints that Microsoft Metaverse Will Be Web-Based – The New Stack - Metaverse is Future](https://www.metaverseisfuture.com/babylon-js-hints-that-microsoft-metaverse-will-be-web-based-the-new-stack/) on [From gaming to metaverses, building WebXR apps with Babylon.js](https://www.davrous.com/2022/04/12/from-gaming-to-metaverses-building-webxr-apps-with-babylon-js/#comment-73473)
* Christopher Lam on [Publishing your PWA in the Play Store in a couple of minutes using PWA Builder](https://www.davrous.com/2020/02/07/publishing-your-pwa-in-the-play-store-in-a-couple-of-minutes-using-pwa-builder/#comment-57643)
* Francesco on [Tutorial part 4: learning how to write a 3D software engine in C#, TS or JS – Rasterization & Z-Buffering](https://www.davrous.com/2013/06/21/tutorial-part-4-learning-how-to-write-a-3d-software-engine-in-c-ts-or-js-rasterization-z-buffering/#comment-55631)
* [David Rousset](https://www.davrous.com) on [Publishing your PWA in the Play Store in a couple of minutes using PWA Builder](https://www.davrous.com/2020/02/07/publishing-your-pwa-in-the-play-store-in-a-couple-of-minutes-using-pwa-builder/#comment-55349)

### Archives

* [April 2022](https://www.davrous.com/2022/04/)
* [March 2020](https://www.davrous.com/2020/03/)
* [February 2020](https://www.davrous.com/2020/02/)
* [October 2019](https://www.davrous.com/2019/10/)
* [September 2019](https://www.davrous.com/2019/09/)
* [January 2019](https://www.davrous.com/2019/01/)
* [August 2018](https://www.davrous.com/2018/08/)
* [April 2018](https://www.davrous.com/2018/04/)
* [December 2017](https://www.davrous.com/2017/12/)
* [July 2017](https://www.davrous.com/2017/07/)
* [December 2016](https://www.davrous.com/2016/12/)
* [July 2016](https://www.davrous.com/2016/07/)
* [May 2016](https://www.davrous.com/2016/05/)
* [February 2016](https://www.davrous.com/2016/02/)
* [November 2015](https://www.davrous.com/2015/11/)
* [September 2015](https://www.davrous.com/2015/09/)
* [August 2015](https://www.davrous.com/2015/08/)
* [July 2015](https://www.davrous.com/2015/07/)
* [November 2014](https://www.davrous.com/2014/11/)
* [August 2014](https://www.davrous.com/2014/08/)
* [July 2014](https://www.davrous.com/2014/07/)
* [June 2014](https://www.davrous.com/2014/06/)
* [May 2014](https://www.davrous.com/2014/05/)
* [March 2014](https://www.davrous.com/2014/03/)
* [February 2014](https://www.davrous.com/2014/02/)
* [December 2013](https://www.davrous.com/2013/12/)
* [November 2013](https://www.davrous.com/2013/11/)
* [October 2013](https://www.davrous.com/2013/10/)
* [September 2013](https://www.davrous.com/2013/09/)
* [July 2013](https://www.davrous.com/2013/07/)
* [June 2013](https://www.davrous.com/2013/06/)
* [April 2013](https://www.davrous.com/2013/04/)
* [February 2013](https://www.davrous.com/2013/02/)
* [November 2012](https://www.davrous.com/2012/11/)
* [October 2012](https://www.davrous.com/2012/10/)
* [September 2012](https://www.davrous.com/2012/09/)
* [August 2012](https://www.davrous.com/2012/08/)
* [July 2012](https://www.davrous.com/2012/07/)
* [June 2012](https://www.davrous.com/2012/06/)
* [April 2012](https://www.davrous.com/2012/04/)
* [March 2012](https://www.davrous.com/2012/03/)
* [January 2012](https://www.davrous.com/2012/01/)
* [December 2011](https://www.davrous.com/2011/12/)
* [July 2011](https://www.davrous.com/2011/07/)
* [May 2011](https://www.davrous.com/2011/05/)
* [December 2010](https://www.davrous.com/2010/12/)
* [November 2010](https://www.davrous.com/2010/11/)
* [August 2010](https://www.davrous.com/2010/08/)
* [July 2010](https://www.davrous.com/2010/07/)
* [December 2009](https://www.davrous.com/2009/12/)
* [October 2008](https://www.davrous.com/2008/10/)

### Categories

* [3D Software Engine](https://www.davrous.com/category/3d-software-engine/)
* [Coding4Fun](https://www.davrous.com/category/coding4fun/)
* [EaselJS](https://www.davrous.com/category/easeljs/)
* [English](https://www.davrous.com/category/english/)
* [French](https://www.davrous.com/category/french/)
* [Non technical](https://www.davrous.com/category/non-technical/)
* [Technical article](https://www.davrous.com/category/technical-article/)
* [Tutorial](https://www.davrous.com/category/tutorial/)
* [Uncategorized](https://www.davrous.com/category/uncategorized/)

### Meta

* [Log in](https://www.davrous.com/wp-login.php)
* [Entries feed](https://www.davrous.com/feed/)
* [Comments feed](https://www.davrous.com/comments/feed/)
* [WordPress.org](https://wordpress.org/)

[Proudly powered by WordPress](http://wordpress.org/) | Theme: [Oblique](http://themeisle.com/themes/oblique/) by Themeisle. 