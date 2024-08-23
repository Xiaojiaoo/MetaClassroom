import './style.css'
//导入babylonjs
import * as BABYLON from "babylonjs";
//导入gltf加载器
import "babylonjs-loaders";
import { GLTF1 } from 'babylonjs-loaders';
//创建canvas
const canvas = document.createElement("canvas");
//设置canvas的高
canvas.width = window.innerWidth;
canvas.width = window.innerHeight;
//将canvas添加到body中
document.body.appendChild(canvas);
//创建引擎，第二个参数代表是否使用抗锯齿
const engine = new BABYLON.Engine(canvas, true)
//创建场景
const scene = new BABYLON.Scene(engine);
//通用相机
const camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(0, 5, 0), scene);
camera.setTarget(BABYLON.Vector3.Zero());
camera.attachControl(canvas, true);
camera.minZ = 0.5
//把相机附加到画布上
camera.attachControl(canvas,true);
camera.speed = 0.7
//创建地面
const ground = BABYLON.MeshBuilder.CreateGround(
  "ground",//地面名称
  {width:300,height:200},//地面宽度
  scene
);
//设置地面的位置
ground.position.set(0,500,0);
//创建地面材质
const groundMaterial = new BABYLON.StandardMaterial("groundMat",scene);
ground.material = groundMaterial;
//设置地面的纹理
groundMaterial.diffuseTexture = new BABYLON.Texture(
  "public/texture/WoodFloor.jpg",
  scene
);
// 假设 groundMaterial 是地面的材质
groundMaterial.diffuseTexture.uScale = 15; // 水平方向重复5次
groundMaterial.diffuseTexture.vScale = 15; // 垂直方向重复5次
//设置纹理是透明纹理
groundMaterial.diffuseTexture.hasAlpha = true;
//定义重力
scene.gravity = new BABYLON.Vector3(0, -0.15, 0);
camera.applyGravity = true;
//定义椭球体
camera.ellipsoid = new BABYLON.Vector3(1,5,1);
scene.collisionsEnabled = true;
camera.checkCollisions = true;
ground.checkCollisions = true;
//创建光源
const light = new BABYLON.DirectionalLight(
  "light",
  new BABYLON.Vector3(1,-0.8,0.5),
  scene
);
// 环境光
var ambientLight = new BABYLON.HemisphericLight(
  "ambientLight", 
  new BABYLON.Vector3(255,250,205), 
  scene
);
ambientLight.intensity = 0.8; // 调整环境光强度

//创建聚光灯
const spotLight = new BABYLON.SpotLight(
  "spotLight",//聚光灯名称
  new BABYLON.Vector3(0,30,0),//聚光灯的位置
  new BABYLON.Vector3(-1,-0.5,1),//聚光灯的方向
  Math.PI ,//聚光灯的强度
  8,//聚光灯
  scene//聚光灯所在场景
);
//设置聚光灯的颜色
spotLight.diffuse = new BABYLON.Color3(1,1,1);
//设置聚光灯的高光颜色
//spotLight.specular = new BABYLON.Color3(0,0,0);
//设置聚光灯的强度
spotLight.intensity = 0.7;

//创建聚光灯2
const spotLight2 = new BABYLON.SpotLight(
  "spotLight2",//聚光灯名称
  new BABYLON.Vector3(-15,50,-5),//聚光灯的位置
  new BABYLON.Vector3(1,-0.8,-1),//聚光灯的方向
  Math.PI /2,//聚光灯的强度
  5,//聚光灯
  scene//聚光灯所在场景
);
//设置聚光灯的颜色
spotLight2.diffuse = new BABYLON.Color3(1,1,1);
//设置聚光灯的强度
spotLight2.intensity = 0.2;

//创建聚光灯3
const spotLight3 = new BABYLON.SpotLight(
  "spotLight3",//聚光灯名称
  new BABYLON.Vector3(-60,30,0),//聚光灯的位置
  new BABYLON.Vector3(-1,-0.8,1),//聚光灯的方向
  Math.PI /2,//聚光灯的强度
  8,//聚光灯
  scene//聚光灯所在场景
);
//设置聚光灯的颜色
spotLight3.diffuse = new BABYLON.Color3(1,1,1);
//设置聚光灯的高光颜色
//spotLight.specular = new BABYLON.Color3(0,0,0);
//设置聚光灯的强度
spotLight3.intensity = 0.1;

//创建聚光灯4
const spotLight4 = new BABYLON.SpotLight(
  "spotLight4",//聚光灯名称
  new BABYLON.Vector3(-100,30,20),//聚光灯的位置
  new BABYLON.Vector3(0.8,-0.8,-1),//聚光灯的方向
  Math.PI /2,//聚光灯的强度
  8,//聚光灯
  scene//聚光灯所在场景
);
//设置聚光灯的颜色
spotLight4.diffuse = new BABYLON.Color3(1,1,1);
//设置聚光灯的高光颜色
//spotLight.specular = new BABYLON.Color3(0,0,0);
//设置聚光灯的强度
spotLight4.intensity = 0.1;
//创建点光源
//const pointLight = new BABYLON.PointLight(
//  "poyintLight",//点光源名称
//  new BABYLON.Vector3(0,1,0),//点光源方向
//  scene//点光源所在的场景
//);
//设置点光源 的颜色
//pointLight.diffuse = new BABYLON.Color3(255,255,255);
//设置点光源的高光颜色
//pointLight.specular = new BABYLON.Color3(1,1,0);
//设置点光源的强度
//pointLight.intensity = 0.9;


//定向光
//const light3 = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(18,3,50), scene);
//light3.intensity = 0.7;

//创建立方体
const box = BABYLON.MeshBuilder.CreateBox(
  "box",//立方体名称
  { height:50,
    width:50,},//立方体的大小
  scene //立方体所在的场景
);
box.position.set(35,0,60);
//旋转立方体
//box.rotation.set(0,0,Math.PI/4)
//box.position.y = Math.PI/2;
//绕着某个点旋转
const transparentMaterial = new BABYLON.StandardMaterial("transparentMaterial", scene);
transparentMaterial.diffuseColor = new BABYLON.Color3(1,1,1); 
transparentMaterial.alpha = 0.3; // 设置透明度，0为完全透明，1为完全不透明
//创建墙壁材质
const wallMaterial = new BABYLON.StandardMaterial("wallmaterial", scene);
wallMaterial.diffuseColor = new BABYLON.Color3(1, 0.8, 0.8); // 粉色
wallMaterial.specularColor = new BABYLON.Color3(0, 0, 0); // 消除反射光
wallMaterial.emissiveColor = new BABYLON.Color3(0, 0, 0); // 不设置自发光
//材质颜色1
const wallMaterial1 = new BABYLON.StandardMaterial("wallmaterial1", scene);
wallMaterial1.diffuseColor = new BABYLON.Color3(1,0.8, 0.8); //
wallMaterial1.specularColor = new BABYLON.Color3(0, 0, 0); // 消除反射光
wallMaterial1.emissiveColor = new BABYLON.Color3(0, 0, 0); // 不设置自发光
//材质颜色2（蓝色）
const wallMaterial2 = new BABYLON.StandardMaterial("wallmaterial2", scene);
wallMaterial2.diffuseColor = new BABYLON.Color3(0.4,0.5, 0.6); //
wallMaterial2.specularColor = new BABYLON.Color3(0, 0, 0); // 消除反射光
wallMaterial2.emissiveColor = new BABYLON.Color3(0, 0, 0); // 不设置自发光
//材质颜色3(砖黄)
const wallMaterial3 = new BABYLON.StandardMaterial("wallmaterial3", scene);
wallMaterial3.diffuseColor = new BABYLON.Color3(0.8,0.6, 0.4); //
wallMaterial3.specularColor = new BABYLON.Color3(0, 0, 0); // 消除反射光
wallMaterial3.emissiveColor = new BABYLON.Color3(0, 0, 0); // 不设置自发光
//材质颜色4(灰黑)
const wallMaterial4 = new BABYLON.StandardMaterial("wallmaterial4", scene);
wallMaterial4.diffuseColor = new BABYLON.Color3(0.24,0.24, 0.24); //
wallMaterial4.specularColor = new BABYLON.Color3(0, 0, 0); // 消除反射光
wallMaterial4.emissiveColor = new BABYLON.Color3(0, 0, 0); // 不设置自发光
//材质颜色5(黑)
const wallMaterial5 = new BABYLON.StandardMaterial("wallmaterial5", scene);
wallMaterial5.diffuseColor = new BABYLON.Color3(0,0, 0); //
wallMaterial5.specularColor = new BABYLON.Color3(0, 0, 0); // 消除反射光
wallMaterial5.emissiveColor = new BABYLON.Color3(0, 0, 0); // 不设置自发光
//材质颜色6(白)
const wallMaterial6 = new BABYLON.StandardMaterial("wallmaterial6", scene);
wallMaterial6.diffuseColor = new BABYLON.Color3(1,1, 1); //
wallMaterial6.specularColor = new BABYLON.Color3(0, 0, 0); // 消除反射光
wallMaterial6.emissiveColor = new BABYLON.Color3(0, 0, 0); // 不设置自发光
//材质颜色7(浅蓝色)
const wallMaterial7 = new BABYLON.StandardMaterial("wallmaterial7", scene);
wallMaterial7.diffuseColor = new BABYLON.Color3(0.8,0.9, 1); //
wallMaterial7.specularColor = new BABYLON.Color3(0, 0, 0); // 消除反射光
wallMaterial7.emissiveColor = new BABYLON.Color3(0, 0, 0); // 不设置自发光
//stairMaterial
const stairMaterial = new BABYLON.StandardMaterial("stairMaterial", scene);
stairMaterial.diffuseColor = new BABYLON.Color3(0.45,0.29, 0.07); //
stairMaterial.specularColor = new BABYLON.Color3(0, 0, 0); // 消除反射光
stairMaterial.emissiveColor = new BABYLON.Color3(0, 0, 0); // 不设置自发光
//window
var windowTexture = new BABYLON.Texture("public/texture/window.jpg", scene);
var windowMaterial = new BABYLON.StandardMaterial("windowMaterial", scene);
windowMaterial.diffuseTexture = windowTexture; 
box.rotateAround(
  new BABYLON.Vector3(0,0,0),//旋转的中心点
  new BABYLON.Vector3(0,1,0),//旋转的轴
  Math.PI/2//旋转的角度
)
box.checkCollisions = true;
//box1
const box1 = BABYLON.MeshBuilder.CreateBox(
  "box1",
  {
    height:10,
    width:30,
    depth:2
  },scene
);5
box1.position.set(80,0,0)
box1.actionManager = new BABYLON.ActionManager(scene);
box1.checkCollisions = true;
box1.material = wallMaterial2;
var bx1Texture = new BABYLON.Texture("public/texture/22.jpg", scene);
var bx1Material = new BABYLON.StandardMaterial("bx1Material", scene);
bx1Material.diffuseTexture = bx1Texture; 
bx1Material.alpha=0.8
const bx1 = BABYLON.MeshBuilder.CreateBox(
  "x1",
  {
    height:16,
    width:30,
    depth:0.05
  },scene
);5
bx1.position.set(80,13,0)
bx1.actionManager = new BABYLON.ActionManager(scene);
bx1.checkCollisions = true;
bx1.material = bx1Material;
var bx2Texture = new BABYLON.Texture("public/texture/dt.png", scene);
var bx2Material = new BABYLON.StandardMaterial("bx2Material", scene);
bx2Material.diffuseTexture = bx2Texture; 
bx2Material.alpha=0.8
const bx2 = BABYLON.MeshBuilder.CreateBox(
  "x2",
  {
    height:12,
    width:8,
    depth:0.05
  },scene
);5
bx2.position.set(96,13,43)
bx2.actionManager = new BABYLON.ActionManager(scene);
bx2.checkCollisions = true;
bx2.material = bx2Material;
bx2.rotation.y = Math.PI / 2;
//box21(窗户)
//const box21 = BABYLON.MeshBuilder.CreateBox(
//  "box21",
//  {
//    height:14,
//    width:14,
//  },scene
//);
//box21.position.set(85,14,0.1)
//box21.checkCollisions = true;
//box21.material =windowMaterial
//box2
const box2 = BABYLON.MeshBuilder.CreateBox(
  "box2",
  {
    height:50,
    width:40,
  },scene
);
box2.position.set(45,0,-30)
box2.rotateAround(
  new BABYLON.Vector3(0,0,0),//旋转的中心点
  new BABYLON.Vector3(0,1,0),//旋转的轴
  Math.PI/2//旋转的角度
)
box2.checkCollisions = true;
//box3
const box3 = BABYLON.MeshBuilder.CreateBox(
  "box3",
  {
    height:50,
    width:80,
  },scene
);
box3.position.set(-30,0,40)
box3.rotation.y = Math.PI / 2;
box3.checkCollisions = true;
//box3.rotation.y = BABYLON.Tools.ToRadians(45);
//const boxMaterial = new BABYLON.StandardMaterial("material", scene);
//boxMaterial.diffuseColor = BABYLON.Color3.Random();
box3.material = wallMaterial1;
box2.material = wallMaterial1;
box.material = wallMaterial1;

//box4
const box4 = BABYLON.MeshBuilder.CreateBox(
  "box4",
  {
    height:20,
    width:40,
  },scene
);
box4.position.set(60,9,-50)
box4.rotation.x = Math.PI / 2;
box4.checkCollisions = true;
box4.material = wallMaterial1;
//书架1
//box5
const box5 = BABYLON.MeshBuilder.CreateBox(
  "box5",
  {
    height:20,
    width:10,
  },scene
);
box5.position.set(100,12,-25)
box5.rotation.x = Math.PI / 2;
box5.checkCollisions = true;
box5.material = wallMaterial3;
//box6
const box6 = BABYLON.MeshBuilder.CreateBox(
  "box6",
  {
    height:15,
    width:10,
  },scene
);
box6.position.set(100,8,-10)
box6.rotation.x = Math.PI / 2;
box6.checkCollisions = true;
box6.material = wallMaterial3;
//box7
const box7 = BABYLON.MeshBuilder.CreateBox(
  "box7",
  {
    height:15,
    width:10,
  },scene
);
box7.position.set(100,16,-40)
box7.rotation.x = Math.PI / 2;
box7.checkCollisions = true;
box7.material = wallMaterial3;
//box9
const box9 = BABYLON.MeshBuilder.CreateBox(
  "box9",
  {
    height:4,
    width:95,
    depth:8,
  },scene
);
box9.position.set(18,3,50)
box9.checkCollisions = true;
box9.rotation.x = Math.PI / 2;
box9.material = wallMaterial;
//box10
const box10 = BABYLON.MeshBuilder.CreateBox(
  "box10",
  {
    height:4,
    width:140,
    depth:8,
  },scene
);
box10.position.set(40,20,50)
box10.checkCollisions = true;
box10.rotation.x = Math.PI / 2;
box10.material = wallMaterial;
//box13
const box13 = BABYLON.MeshBuilder.CreateBox(
  "box13",
  {
    height:4,
    width:15,
  },scene
);
box13.position.set(-10,20,-53)
box13.rotation.x = Math.PI / 2;
box13.checkCollisions = true;
box13.material = wallMaterial3;
//box14
const box14 = BABYLON.MeshBuilder.CreateBox(
  "box14",
  {
    height:4,
    width:15,
  },scene
);
box14.position.set(0,15,-53)
box14.rotation.x = Math.PI / 2;
box14.checkCollisions = true;
box14.material = wallMaterial3;
//box15
const box15 = BABYLON.MeshBuilder.CreateBox(
  "box15",
  {
    height:4,
    width:15,
  },scene
);
box15.position.set(-10,10,-53)
box15.rotation.x = Math.PI / 2;
box15.checkCollisions = true;
box15.material = wallMaterial3;
//box16
const box16 = BABYLON.MeshBuilder.CreateBox(
  "box16",
  {
    height:4,
    width:15,
  },scene
);
box16.position.set(15,10,-53)
box16.rotation.x = Math.PI / 2;
box16.checkCollisions = true;
box16.material = wallMaterial3;

// 创建8个圆锥体并围绕指定中心点旋转，同时在每个圆锥顶部建立立方体并跟随旋转
const numberOfCones = 8;
const center = new BABYLON.Vector3(0, 9, -40);
const radius = 3;

for (let i = 0; i < numberOfCones; i++) {
    const angle = (Math.PI * 2 * i) / numberOfCones; // 计算每个圆锥体的角度间隔

    const con = BABYLON.MeshBuilder.CreateCylinder(
        "con" + i,
        {
            height: 1,
            diameterTop: 0,
            diameterBottom: 0.5,
            tessellation: 4,
        },
        scene
    );
    con.position.x = center.x + radius * Math.cos(angle);
    con.position.y = center.y;
    con.position.z = center.z + radius * Math.sin(angle);
    con.scaling.set(0.7, 0.7, 0.7);
    con.checkCollisions = true;
    con.material = wallMaterial2;

    const cube = BABYLON.MeshBuilder.CreateBox(
        "cube" + i,
        { width: 1, height: 0.5, depth: 3 },
        scene
    );
    cube.parent = con; // 将立方体设置为圆锥的子级
    cube.rotation.z = Math.PI / 2;
    cube.rotation.y = Math.PI / 2;
    let alpha = i * Math.PI / 4; // 每个圆锥体的起始角度略有不同，以产生旋转效果
    scene.registerBeforeRender(() => {
        const rotationRadius = 2; // 设置旋转半径
        const rotationSpeed = 0.005; // 设置旋转速度
        con.position.x = center.x + radius * Math.cos(alpha);
        con.position.y = center.y+1 + rotationRadius * Math.sin(alpha);
        con.position.z = center.z + radius * Math.sin(alpha);
        alpha += rotationSpeed;
    });
}


// 创建树干
const trunkHeight = 10;
const trunkWidth =0.3;
const trunk = BABYLON.MeshBuilder.CreateCylinder("trunk", { height: trunkHeight, diameter: trunkWidth }, scene);
trunk.position = new BABYLON.Vector3(-96, trunkHeight / 2, 30); // 将树干放置在指定位置

// 创建树叶
const leavesSize = 3;
const leaves = BABYLON.MeshBuilder.CreateSphere("leaves", { diameter: leavesSize }, scene);
leaves.position = new BABYLON.Vector3(-96, trunkHeight, 30); // 将树叶放置在树干顶部的指定位置

// 设置树干和树叶的材质
const trunkMaterial = new BABYLON.StandardMaterial("trunkMat", scene);
trunkMaterial.diffuseColor = new BABYLON.Color3(0.4, 0.2, 0); // 棕色
trunk.material = trunkMaterial;

const leavesMaterial = new BABYLON.StandardMaterial("leavesMat", scene);
leavesMaterial.diffuseColor = new BABYLON.Color3(0.1, 0.6, 0); // 绿色
leaves.material = leavesMaterial;

// 创建书本数组
var numberOfBooks = 7; // 书本数量
var bookHeight = 2; // 书本高度
var bookWidth = 1; // 书本厚度

// 循环创建并排列书本
for (var i = 0; i < numberOfBooks; i++) {
  // 生成随机颜色
  var randomColor = new BABYLON.Color3(Math.random(), Math.random(), Math.random());
  
  var book = BABYLON.MeshBuilder.CreateBox('book' + i, { height: bookHeight, width: bookWidth, depth: 0.5 }, scene);
  book.position = new BABYLON.Vector3(-5+i * (bookWidth + 0.5), 16 , -52); // 调整书本的高度和位置
  book.rotation.y = Math.PI / 2; // 将书本放置在竖直方向上
  book.material = new BABYLON.StandardMaterial('bookMat' + i, scene);
  book.material.diffuseColor = randomColor; // 设置书本材质的颜色
}

// 创建书本数组
var numberOfBooks1 =8; // 书本数量
var bookHeight1 = 3; // 书本高度
var bookWidth1 = 1.5; // 书本厚度

// 循环创建并排列书本
for (var a = 0; a < numberOfBooks; a++) {
  // 生成随机颜色
  var randomColor = new BABYLON.Color3(Math.random(), Math.random(), Math.random());
  
  var book1 = BABYLON.MeshBuilder.CreateBox('book' + a, { height: bookHeight1, width: bookWidth1, depth: 0.5 }, scene);
  book1.position = new BABYLON.Vector3(10+a *1.7, 12 , -52); // 调整书本的高度和位置
  book1.rotation.y = Math.PI / 2; // 将书本放置在竖直方向上
  book1.material = new BABYLON.StandardMaterial('bookMat' + a, scene);
  book1.material.diffuseColor = randomColor; // 设置书本材质的颜色
}

//透明墙
var box17Texture = new BABYLON.Texture("public/texture/bj.jpg", scene);
var box17Material = new BABYLON.StandardMaterial("box17Material", scene);
box17Material.diffuseTexture = box17Texture; 
box17Material.alpha = 0.8;
const box17 = BABYLON.MeshBuilder.CreateBox(
  "box17",
  {
    height:10,
    width:40,
    depth:5,
  },scene
);
box17.position.set(-55,0,-10)
box17.rotation.y = Math.PI / 2;
box17.material=wallMaterial2
box17.checkCollisions = true;
const box18 = BABYLON.MeshBuilder.CreateBox(
  "box18",
  {
    height:5,
    width:40,
    depth:5,
  },scene
);
box18.position.set(-55,25,-10)
box18.rotation.y = Math.PI / 2;
box18.material=wallMaterial2;
box18.checkCollisions = true;
const box19 = BABYLON.MeshBuilder.CreateBox(
  "box19",
  {
    height:30,
    width:40,
    depth:1,
  },scene
);
box19.position.set(-55,10,-10)
box19.rotation.y = Math.PI / 2;
box19.material = box17Material;
box19.checkCollisions = true;
//box20
const box20 = BABYLON.MeshBuilder.CreateBox(
  "box20",
  {
    height:50,
    width:70,
  },scene
);
box20.position.set(-65,0,53)
box20.material =wallMaterial
box20.checkCollisions = true;
const box23 = BABYLON.MeshBuilder.CreateBox(
  "box23",
  {
    height:13,
    width:4,
  },scene
);
box23.position.set(-32,18,25)
box23.rotation.x = Math.PI / 2;
box23.material =wallMaterial3
const box24 = BABYLON.MeshBuilder.CreateBox(
  "box24",
  {
    height:13,
    width:4,
  },scene
);
box24.position.set(-32,14,30)
box24.rotation.x = Math.PI / 2;
box24.material =wallMaterial3
//box25
const box25 = BABYLON.MeshBuilder.CreateBox(
  "box25",
  {
    height:10,
    width:20,
    depth:5
  },scene
);
box25.position.set(-40,0,50)
box25.rotation.x = Math.PI / 2;
box25.material =wallMaterial2
//box26
const box26 = BABYLON.MeshBuilder.CreateBox(
  "box26",
  {
    height:20,
    width:8,
    depth:15
  },scene
);
box26.position.set(-35,0,35)
box26.rotation.x = Math.PI / 2;
box26.material =wallMaterial2
//box27
const box27 = BABYLON.MeshBuilder.CreateBox(
  "box27",
  {
    height:2,
    width:10,
    depth:10
  },scene
);
box27.position.set(-40,15,52)
box27.rotation.x = Math.PI / 2;
box27.material=windowMaterial
//box28
const box28 = BABYLON.MeshBuilder.CreateBox(
  "box28",
  {
    height:4,
    width:12,
    depth:1
  },scene
);
box28.position.set(-40,20,52)
box28.rotation.x = Math.PI / 2;
box28.material =wallMaterial2

// 创建外部圆柱（没有顶部）

var outerCylinder = BABYLON.MeshBuilder.CreateCylinder(
  "outerCylinder", { 
    diameter: 40,
     height: 5, 
     thickness: 1,
      topCap: BABYLON.Mesh.NO_CAP 
    }, scene);
outerCylinder.material=wallMaterial2
const cyy=BABYLON.MeshBuilder.CreateCylinder(
  "innerCylinder",
  { diameter: 36,
    height: 20, 
    thickness: 1, 
  }, scene
);
cyy.position.set(0,10,0)
cyy.material=wallMaterial2
var cyy1Texture = new BABYLON.Texture("public/texture/111.jpg", scene);
var cyy1Material = new BABYLON.StandardMaterial("cyy1Material", scene);
cyy1Material.diffuseTexture =cyy1Texture; 
    // 调整贴图方向（根据需要调整）
    cyy1Material.diffuseTexture.uScale = -1;
    cyy1Material.diffuseTexture.uOffset = 1;
cyy1Material.alpha=0.5
const cyy1=BABYLON.MeshBuilder.CreateCylinder(
  "cyy1",
  { diameter: 38,
    height: 20, 
    thickness: 0.1, 
  }, scene
);
cyy1.position.set(0,10,0)
cyy1.material=cyy1Material


//游戏桌
const x1 = BABYLON.MeshBuilder.CreateBox(
  "x1",
  {
    height:6,
    width:70,
    depth:0.3
  },scene
);
x1.position.set(20,5.5,46)
x1.rotation.x = Math.PI / 2;
x1.material =wallMaterial3
const x2 = BABYLON.MeshBuilder.CreateBox(
  "x2",
  {
    height:0.3,
    width:7.3,
    depth:0.3
  },scene
);
x2.position.set(20,2,44)
x2.rotation.z= Math.PI / 2;
x2.material =wallMaterial3
const x3 = BABYLON.MeshBuilder.CreateBox(
  "x3",
  {
    height:0.3,
    width:7.3,
    depth:0.3
  },scene
);
x3.position.set(5,2,44)
x3.rotation.z= Math.PI / 2;
x3.material =wallMaterial3
const x4 = BABYLON.MeshBuilder.CreateBox(
  "x4",
  {
    height:0.3,
    width:7.3,
    depth:0.3
  },scene
);
x4.position.set(35,2,44)
x4.rotation.z= Math.PI / 2;
x4.material =wallMaterial3
const x5 = BABYLON.MeshBuilder.CreateBox(
  "x5",
  {
    height:0.3,
    width:7.3,
    depth:0.3
  },scene
);
x5.position.set(50,2,44)
x5.rotation.z= Math.PI / 2;
x5.material =wallMaterial3
const x6 = BABYLON.MeshBuilder.CreateBox(
  "x6",
  {
    height:0.3,
    width:7.3,
    depth:0.3
  },scene
);
x6.position.set(-10,2,44)
x6.rotation.z= Math.PI / 2;
x6.material =wallMaterial3
//电脑
var c1Texture = new BABYLON.Texture("public/texture/game/1.png", scene);
var c1Material = new BABYLON.StandardMaterial("c1Material", scene);
c1Material.diffuseTexture =c1Texture; 
var c2Texture = new BABYLON.Texture("public/texture/game/2.png", scene);
var c2Material = new BABYLON.StandardMaterial("c2Material", scene);
c2Material.diffuseTexture =c2Texture; 
var c3Texture = new BABYLON.Texture("public/texture/game/3.png", scene);
var c3Material = new BABYLON.StandardMaterial("c3Material", scene);
c3Material.diffuseTexture =c3Texture; 
var c4Texture = new BABYLON.Texture("public/texture/game/4.png", scene);
var c4Material = new BABYLON.StandardMaterial("c4Material", scene);
c4Material.diffuseTexture =c4Texture; 
var c5Texture = new BABYLON.Texture("public/texture/game/5.png", scene);
var c5Material = new BABYLON.StandardMaterial("c5Material", scene);
c5Material.diffuseTexture =c5Texture; 
var c11Texture = new BABYLON.Texture("public/texture/game/11.jpg", scene);
var c11Material = new BABYLON.StandardMaterial("c11Material", scene);
c11Material.diffuseTexture =c11Texture; 
c11Material.alpha=0.6
var c22Texture = new BABYLON.Texture("public/texture/game/22.jpg", scene);
var c22Material = new BABYLON.StandardMaterial("c22Material", scene);
c22Material.diffuseTexture =c22Texture; 
c22Material.alpha=0.6
var c33Texture = new BABYLON.Texture("public/texture/game/33.jpg", scene);
var c33Material = new BABYLON.StandardMaterial("c33Material", scene);
c33Material.diffuseTexture =c33Texture; 
c33Material.alpha=0.6
var c44Texture = new BABYLON.Texture("public/texture/game/44.jpg", scene);
var c44Material = new BABYLON.StandardMaterial("c44Material", scene);
c44Material.diffuseTexture =c44Texture; 
c44Material.alpha=0.6
var c55Texture = new BABYLON.Texture("public/texture/game/55.jpg", scene);
var c55Material = new BABYLON.StandardMaterial("c55Material", scene);
c55Material.diffuseTexture =c55Texture; 
c55Material.alpha=0.6
var c0Texture = new BABYLON.Texture("public/texture/game/0.jpg", scene);
var c0Material = new BABYLON.StandardMaterial("c0Material", scene);
c0Material.diffuseTexture =c0Texture; 
c0Material.alpha=0.6
const cc0 = BABYLON.MeshBuilder.CreateBox(
  "cc0",
  {
    height:3,
    width:7,
    depth:0.1
  },scene
);
cc0.position.set(20,18,45.5)
cc0.material =c0Material
const cc1 = BABYLON.MeshBuilder.CreateBox(
  "cc1",
  {
    height:2,
    width:3,
    depth:0.3
  },scene
);
cc1.position.set(20,5.9,46)
cc1.rotation.x = Math.PI / 2;
cc1.material =wallMaterial4
const cc2 = BABYLON.MeshBuilder.CreateBox(
  "cc2",
  {
    height:0.5,
    width:2,
    depth:0.5
  },scene
);
cc2.position.set(20,6.4,46)
cc2.rotation.z = Math.PI / 2;
cc2.material =wallMaterial4
const cc3 = BABYLON.MeshBuilder.CreateBox(
  "cc3",
  {
    height:7.8,
    width:5,
    depth:0.5
  },scene
);
cc3.position.set(20,9.9,45.8)
cc3.rotation.z = Math.PI / 2;
cc3.material =c3Material
cc3.actionManager = new BABYLON.ActionManager(scene);
cc3.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          // 点击立方体时跳转到新页面
          window.location.href = 'file:///D:/JIOJIO/Web%E6%BA%90%E7%A0%81/%E5%A4%A7%E4%BD%9C%E4%B8%9A/%E6%B8%B8%E6%88%8F5-%E5%AE%B9%E9%87%8F%E8%AE%A1%E7%AE%97%E6%9C%BA/1.html'; // 替换链接为你想要跳转的页面
      }
  )
);
const cc4 = BABYLON.MeshBuilder.CreateBox(
  "cc4",
  {
    height:0.3,
    width:5,
    depth:0.3
  },scene
);
cc4.position.set(23.8,9.9,45.5)
cc4.rotation.z = Math.PI / 2;
cc4.material =wallMaterial4
const cc5 = BABYLON.MeshBuilder.CreateBox(
  "cc5",
  {
    height:0.3,
    width:5,
    depth:0.3
  },scene
);
cc5.position.set(16.2,9.9,45.5)
cc5.rotation.z = Math.PI / 2;
cc5.material =wallMaterial4
const cc6 = BABYLON.MeshBuilder.CreateBox(
  "cc6",
  {
    height:0.3,
    width:7.8,
    depth:0.3
  },scene
);
cc6.position.set(20,12.5,45.5)
cc6.rotation.x = Math.PI / 2;
cc6.material =wallMaterial4
const cc7 = BABYLON.MeshBuilder.CreateBox(
  "cc7",
  {
    height:0.3,
    width:7.8,
    depth:0.3
  },scene
);
cc7.position.set(20,7.3,45.5)
cc7.rotation.x = Math.PI / 2;
cc7.material =wallMaterial4
const cc8 = BABYLON.MeshBuilder.CreateBox(
  "cc8",
  {
    height:2,
    width:5,
    depth:0.1
  },scene
);
cc8.position.set(20,14,45.5)
cc8.material =c33Material
const cc11 = BABYLON.MeshBuilder.CreateBox(
  "cc11",
  {
    height:2,
    width:3,
    depth:0.3
  },scene
);
cc11.position.set(35,5.9,46)
cc11.rotation.x = Math.PI / 2;
cc11.material =wallMaterial4
const cc21 = BABYLON.MeshBuilder.CreateBox(
  "cc21",
  {
    height:0.5,
    width:2,
    depth:0.5
  },scene
);
cc21.position.set(35,6.4,46)
cc21.rotation.z = Math.PI / 2;
cc21.material =wallMaterial4
const cc31 = BABYLON.MeshBuilder.CreateBox(
  "cc31",
  {
    height:7.8,
    width:5,
    depth:0.5
  },scene
);
cc31.position.set(35,9.9,45.8)
cc31.rotation.z = Math.PI / 2;
cc31.material =c2Material
cc31.actionManager = new BABYLON.ActionManager(scene);
cc31.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          // 点击立方体时跳转到新页面
          window.location.href = 'file:///D:/JIOJIO/Web%E6%BA%90%E7%A0%81/%E5%A4%A7%E4%BD%9C%E4%B8%9A/%E6%B8%B8%E6%88%8F5-%E5%AE%B9%E9%87%8F%E8%AE%A1%E7%AE%97%E6%9C%BA/1.html'; // 替换链接为你想要跳转的页面
      }
  )
);
const cc41 = BABYLON.MeshBuilder.CreateBox(
  "cc41",
  {
    height:0.3,
    width:5,
    depth:0.3
  },scene
);
cc41.position.set(38.8,9.9,45.5)
cc41.rotation.z = Math.PI / 2;
cc41.material =wallMaterial4
const cc51 = BABYLON.MeshBuilder.CreateBox(
  "cc51",
  {
    height:0.3,
    width:5,
    depth:0.3
  },scene
);
cc51.position.set(31.2,9.9,45.5)
cc51.rotation.z = Math.PI / 2;
cc51.material =wallMaterial4
const cc61 = BABYLON.MeshBuilder.CreateBox(
  "cc61",
  {
    height:0.3,
    width:7.8,
    depth:0.3
  },scene
);
cc61.position.set(35,12.5,45.5)
cc61.rotation.x = Math.PI / 2;
cc61.material =wallMaterial4
const cc71 = BABYLON.MeshBuilder.CreateBox(
  "cc71",
  {
    height:0.3,
    width:7.8,
    depth:0.3
  },scene
);
cc71.position.set(35,7.3,45.5)
cc71.rotation.x = Math.PI / 2;
cc71.material =wallMaterial4
const cc81 = BABYLON.MeshBuilder.CreateBox(
  "cc81",
  {
    height:2,
    width:5,
    depth:0.1
  },scene
);
cc81.position.set(35,14,45.5)
cc81.material =c22Material
const cc12 = BABYLON.MeshBuilder.CreateBox(
  "cc12",
  {
    height:2,
    width:3,
    depth:0.3
  },scene
);
cc12.position.set(50,5.9,46)
cc12.rotation.x = Math.PI / 2;
cc12.material =wallMaterial4
const cc22 = BABYLON.MeshBuilder.CreateBox(
  "cc22",
  {
    height:0.5,
    width:2,
    depth:0.5
  },scene
);
cc22.position.set(50,6.4,46)
cc22.rotation.z = Math.PI / 2;
cc22.material =wallMaterial4
const cc32= BABYLON.MeshBuilder.CreateBox(
  "cc32",
  {
    height:7.8,
    width:5,
    depth:0.5
  },scene
);
cc32.position.set(50,9.9,45.8)
cc32.rotation.z = Math.PI / 2;
cc32.material =c1Material
cc32.actionManager = new BABYLON.ActionManager(scene);
cc32.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          // 点击立方体时跳转到新页面
          window.location.href = 'file:///D:/JIOJIO/Web%E6%BA%90%E7%A0%81/%E5%A4%A7%E4%BD%9C%E4%B8%9A/%E6%B8%B8%E6%88%8F5-%E5%AE%B9%E9%87%8F%E8%AE%A1%E7%AE%97%E6%9C%BA/1.html'; // 替换链接为你想要跳转的页面
      }
  )
);
const cc42 = BABYLON.MeshBuilder.CreateBox(
  "cc42",
  {
    height:0.3,
    width:5,
    depth:0.3
  },scene
);
cc42.position.set(53.8,9.9,45.5)
cc42.rotation.z = Math.PI / 2;
cc42.material =wallMaterial4
const cc52 = BABYLON.MeshBuilder.CreateBox(
  "cc52",
  {
    height:0.3,
    width:5,
    depth:0.3
  },scene
);
cc52.position.set(46.2,9.9,45.5)
cc52.rotation.z = Math.PI / 2;
cc52.material =wallMaterial4
const cc62 = BABYLON.MeshBuilder.CreateBox(
  "cc62",
  {
    height:0.3,
    width:7.8,
    depth:0.3
  },scene
);
cc62.position.set(50,12.5,45.5)
cc62.rotation.x = Math.PI / 2;
cc62.material =wallMaterial4
const cc72 = BABYLON.MeshBuilder.CreateBox(
  "cc72",
  {
    height:0.3,
    width:7.8,
    depth:0.3
  },scene
);
cc72.position.set(50,7.3,45.5)
cc72.rotation.x = Math.PI / 2;
cc72.material =wallMaterial4
const cc82 = BABYLON.MeshBuilder.CreateBox(
  "cc82",
  {
    height:2,
    width:5,
    depth:0.1
  },scene
);
cc82.position.set(50,14,45.5)
cc82.material =c11Material
const cc14 = BABYLON.MeshBuilder.CreateBox(
  "cc14",
  {
    height:2,
    width:3,
    depth:0.3
  },scene
);
cc14.position.set(5,5.9,46)
cc14.rotation.x = Math.PI / 2;
cc14.material =wallMaterial4
const cc24 = BABYLON.MeshBuilder.CreateBox(
  "cc24",
  {
    height:0.5,
    width:2,
    depth:0.5
  },scene
);
cc24.position.set(5,6.4,46)
cc24.rotation.z = Math.PI / 2;
cc24.material =wallMaterial4
const cc34 = BABYLON.MeshBuilder.CreateBox(
  "cc34",
  {
    height:7.8,
    width:5,
    depth:0.5
  },scene
);
cc34.position.set(5,9.9,45.8)
cc34.rotation.z = Math.PI / 2;
cc34.material =c4Material
cc34.actionManager = new BABYLON.ActionManager(scene);
cc34.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          // 点击立方体时跳转到新页面
          window.location.href = 'file:///D:/JIOJIO/Web%E6%BA%90%E7%A0%81/%E5%A4%A7%E4%BD%9C%E4%B8%9A/%E6%B8%B8%E6%88%8F5-%E5%AE%B9%E9%87%8F%E8%AE%A1%E7%AE%97%E6%9C%BA/1.html'; // 替换链接为你想要跳转的页面
      }
  )
);
const cc44 = BABYLON.MeshBuilder.CreateBox(
  "cc44",
  {
    height:0.3,
    width:5,
    depth:0.3
  },scene
);
cc44.position.set(8.8,9.9,45.5)
cc44.rotation.z = Math.PI / 2;
cc44.material =wallMaterial4
const cc54 = BABYLON.MeshBuilder.CreateBox(
  "cc54",
  {
    height:0.3,
    width:5,
    depth:0.3
  },scene
);
cc54.position.set(1.2,9.9,45.5)
cc54.rotation.z = Math.PI / 2;
cc54.material =wallMaterial4
const cc64 = BABYLON.MeshBuilder.CreateBox(
  "cc64",
  {
    height:0.3,
    width:7.8,
    depth:0.3
  },scene
);
cc64.position.set(5,12.5,45.5)
cc64.rotation.x = Math.PI / 2;
cc64.material =wallMaterial4
const cc74 = BABYLON.MeshBuilder.CreateBox(
  "cc74",
  {
    height:0.3,
    width:7.8,
    depth:0.3
  },scene
);
cc74.position.set(5,7.3,45.5)
cc74.rotation.x = Math.PI / 2;
cc74.material =wallMaterial4
const cc84 = BABYLON.MeshBuilder.CreateBox(
  "cc84",
  {
    height:2,
    width:5,
    depth:0.1
  },scene
);
cc84.position.set(5,14,45.5)
cc84.material =c44Material
const cc15 = BABYLON.MeshBuilder.CreateBox(
  "cc15",
  {
    height:2,
    width:3,
    depth:0.3
  },scene
);
cc15.position.set(-10,5.9,46)
cc15.rotation.x = Math.PI / 2;
cc15.material =wallMaterial4
const cc25 = BABYLON.MeshBuilder.CreateBox(
  "cc25",
  {
    height:0.5,
    width:2,
    depth:0.5
  },scene
);
cc25.position.set(-10,6.4,46)
cc25.rotation.z = Math.PI / 2;
cc25.material =wallMaterial4
const cc35 = BABYLON.MeshBuilder.CreateBox(
  "cc35",
  {
    height:7.8,
    width:5,
    depth:0.5
  },scene
);
cc35.position.set(-10,9.9,45.8)
cc35.rotation.z = Math.PI / 2;
cc35.material =c5Material
cc35.actionManager = new BABYLON.ActionManager(scene);
cc35.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          // 点击立方体时跳转到新页面
          window.location.href = 'file:///D:/JIOJIO/Web%E6%BA%90%E7%A0%81/%E5%A4%A7%E4%BD%9C%E4%B8%9A/%E6%B8%B8%E6%88%8F5-%E5%AE%B9%E9%87%8F%E8%AE%A1%E7%AE%97%E6%9C%BA/1.html'; // 替换链接为你想要跳转的页面
      }
  )
);
const cc45 = BABYLON.MeshBuilder.CreateBox(
  "cc45",
  {
    height:0.3,
    width:5,
    depth:0.3
  },scene
);
cc45.position.set(-6.2,9.9,45.5)
cc45.rotation.z = Math.PI / 2;
cc45.material =wallMaterial4
const cc55 = BABYLON.MeshBuilder.CreateBox(
  "cc55",
  {
    height:0.3,
    width:5,
    depth:0.3
  },scene
);
cc55.position.set(-13.8,9.9,45.5)
cc55.rotation.z = Math.PI / 2;
cc55.material =wallMaterial4
const cc65 = BABYLON.MeshBuilder.CreateBox(
  "cc65",
  {
    height:0.3,
    width:7.8,
    depth:0.3
  },scene
);
cc65.position.set(-10,12.5,45.5)
cc65.rotation.x = Math.PI / 2;
cc65.material =wallMaterial4
const cc75 = BABYLON.MeshBuilder.CreateBox(
  "cc75",
  {
    height:0.3,
    width:7.8,
    depth:0.3
  },scene
);
cc75.position.set(-10,7.3,45.5)
cc75.rotation.x = Math.PI / 2;
cc75.material =wallMaterial4
const cc85 = BABYLON.MeshBuilder.CreateBox(
  "cc85",
  {
    height:2,
    width:5,
    depth:0.1
  },scene
);
cc85.position.set(-10,14,45.5)
cc85.material =c55Material
var bq1Texture = new BABYLON.Texture("public/texture/bt/4.jpg", scene);
var bq1Material = new BABYLON.StandardMaterial("bq1Material", scene);
bq1Material.diffuseTexture = bq1Texture; 
const bq1 = BABYLON.MeshBuilder.CreateBox("box8", { 
  width:1.8,
  height:6,
   depth: 0.3 
  }, scene);
bq1.position.set(98, 22, 27)
bq1.rotation.z = Math.PI / 2;
bq1.rotation.y = Math.PI / 2;
bq1.material =bq1Material
// 创建长方形的小柜子
var boxWidth = 2;
var boxHeight =2;
var boxDepth = 15;
var box8 = BABYLON.MeshBuilder.CreateBox("box8", { width: boxWidth, height: boxHeight, depth: boxDepth }, scene);
box8.position.y = boxHeight / 2; // 将盒子的底部对齐到世界原点
box8.position.z = 20+boxDepth / 2; // 将盒子移至屏幕中心
box8.position.x = 98
box8.material =stairMaterial
// 创建电视机
var tvWidth =15;
var tvHeight =1;
var tvDepth = 20;
var tv = BABYLON.MeshBuilder.CreateBox("tv", { width: tvWidth, height: tvHeight, depth: tvDepth }, scene);
tv.position.y = 10+boxHeight + tvHeight / 2; // 将电视机放置在柜子上方
tv.position.z = 2+boxDepth + tvDepth / 2; // 将电视机移到柜子顶部中心
tv.position.x = 95;
tv.rotation.z = Math.PI / 2;
// 创建电视机边框
var frameMaterial = new BABYLON.StandardMaterial("frameMaterial", scene);
frameMaterial.diffuseColor = new BABYLON.Color3(1, 1, 1); // 设置边框为白色
var frameWidth = tvWidth * 1.05; // 略大于电视机宽度
var frameHeight = tvHeight * 1.05; // 略大于电视机高度
var frameDepth = 0.5; // 边框深度

// 创建一个变量来存储当前播放的视频贴图材质
var currentVideoTexture = null;

//按钮材质
//but1
var but1Texture = new BABYLON.Texture("public/texture/but/1.jpg", scene);
var but1Material = new BABYLON.StandardMaterial("but1Material", scene);
but1Material.diffuseTexture = but1Texture; 
//but2
var but2Texture = new BABYLON.Texture("public/texture/but/2.jpg", scene);
var but2Material = new BABYLON.StandardMaterial("but2Material", scene);
but2Material.diffuseTexture = but2Texture; 
//but3
var but3Texture = new BABYLON.Texture("public/texture/but/3.jpg", scene);
var but3Material = new BABYLON.StandardMaterial("but3Material", scene);
but3Material.diffuseTexture = but3Texture; 
//but4
var but4Texture = new BABYLON.Texture("public/texture/but/4.jpg", scene);
var but4Material = new BABYLON.StandardMaterial("but4Material", scene);
but4Material.diffuseTexture = but4Texture; 
//but5
var but5Texture = new BABYLON.Texture("public/texture/but/5.jpg", scene);
var but5Material = new BABYLON.StandardMaterial("but5Material", scene);
but5Material.diffuseTexture = but5Texture; 
//创建播放按钮
const buttons = [];
const videoFiles = [
    "public/video/1.mp4",
    "public/video/2.mp4",
    "public/video/3.mp4",
    "public/video/4.mp4"
];

const button1 = BABYLON.MeshBuilder.CreateCylinder(
    "button1",
    { height: 1, diameter: 3 },
    scene
);
button1.position.set(95, 18 , 15);
button1.rotation.z = Math.PI / 2;
button1.checkCollisions = true;
button1.material = but1Material;
button1.actionManager = new BABYLON.ActionManager(scene);
button1.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPickTrigger,
        function () {
            stopCurrentVideo(); // 停止当前视频播放
            playVideo(videoFiles[1]); // 播放新视频
        }
    )
);
const button2 = BABYLON.MeshBuilder.CreateCylinder(
  "button2",
  { height: 1, diameter: 3 },
  scene
);
button2.position.set(95, 14 , 15);
button2.rotation.z = Math.PI / 2;
button2.checkCollisions = true;
button2.material = but2Material;
button2.actionManager = new BABYLON.ActionManager(scene);
button2.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      function () {
          stopCurrentVideo(); // 停止当前视频播放
          playVideo(videoFiles[2]); // 播放新视频
      }
  )
);
const button3 = BABYLON.MeshBuilder.CreateCylinder(
  "button3",
  { height: 1, diameter: 3 },
  scene
);
button3.position.set(95, 10 , 15);
button3.rotation.z = Math.PI / 2;
button3.checkCollisions = true;
button3.material = but3Material;
button3.actionManager = new BABYLON.ActionManager(scene);
button3.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      function () {
          stopCurrentVideo(); // 停止当前视频播放
          playVideo(videoFiles[3]); // 播放新视频
      }
  )
);
const button4 = BABYLON.MeshBuilder.CreateCylinder(
  "button4",
  { height: 1, diameter: 3 },
  scene
);
button4.position.set(95, 6 , 15);
button4.rotation.z = Math.PI / 2;
button4.checkCollisions = true;
button4.material = but4Material;
button4.actionManager = new BABYLON.ActionManager(scene);
button4.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      function () {
          stopCurrentVideo(); // 停止当前视频播放
          playVideo(videoFiles[4]); // 播放新视频
      }
  )
);
// 存储当前播放视频的数组
var currentVideoTextures = [];
// 播放视频函数
function playVideo(videoFile) {
    // 创建视频贴图材质
    var videoTexture = new BABYLON.VideoTexture("video", [videoFile], scene, true, true);
    var videoMaterial = new BABYLON.StandardMaterial("videoMaterial", scene);
    videoMaterial.diffuseTexture = videoTexture;
    videoTexture.video.play();

    // 调整贴图方向
    videoMaterial.diffuseTexture.uScale = -1; // 调整方向为（1, 0, 0）
    videoMaterial.diffuseTexture.uOffset = 1; // 可能需要根据具体情况调整偏移

    // 将视频材质应用于电视机
    tv.material = videoMaterial;

    // 将当前播放的视频存储在变量中
    currentVideoTexture = videoTexture;
}

// 停止当前视频播放函数
function stopCurrentVideo() {
    if (currentVideoTexture) {
        currentVideoTexture.video.pause();
        currentVideoTexture = null;
        tv.material = frameMaterial; // 恢复默认边框材质
    }
}

// 创建暂停按钮 but5
const but5 = BABYLON.MeshBuilder.CreateCylinder(
    "but5",
    { height: 2, diameter: 2.5 },
    scene
);
but5.position.set(98, 3.5, 27);
but5.rotation.z = Math.PI / 2;
but5.checkCollisions = true;
but5.material = but5Material;
// 给暂停按钮添加点击事件
but5.actionManager = new BABYLON.ActionManager(scene);
but5.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
    BABYLON.ActionManager.OnPickTrigger,
    function () {
        stopCurrentVideo(); // 停止当前视频播放
    }
)
);
// 创建四个边框并将它们放置在电视机周围
var frame1 = BABYLON.MeshBuilder.CreateBox("frame1", { width: frameWidth, height: frameHeight, depth: frameDepth }, scene);
frame1.material = stairMaterial;
frame1.position = tv.position.clone(); // 在电视机位置处
frame1.rotation.z = Math.PI / 2;
var frame3 = frame1.clone("frame3");
frame3.material = stairMaterial;
frame3.rotation.y = Math.PI; // 旋转180度，放置在电视机的对面
frame3.rotation.z = Math.PI / 2;
var frame4 = frame1.clone("frame4");
frame4.material = stairMaterial;
frame4.rotation.z = Math.PI / 2;
// 设置边框位置
frame1.position.z += tvDepth / 2 - frameDepth / 2; // 在电视机前面
frame3.position.z -= tvDepth / 2 - frameDepth / 2; // 在电视机后面
frame4.position.x += tvWidth / 2 - frameDepth / 2; // 在电视机左侧
//教材贴图
//b1
var b1Texture = new BABYLON.Texture("public/texture/book/1.jpg", scene);
var b1Material = new BABYLON.StandardMaterial("b1Material", scene);
b1Material.diffuseTexture = b1Texture; 
//b2
var b2Texture = new BABYLON.Texture("public/texture/book/2.jpg", scene);
var b2Material = new BABYLON.StandardMaterial("b2Material", scene);
b2Material.diffuseTexture = b2Texture; 
//b3
var b3Texture = new BABYLON.Texture("public/texture/book/3.jpg", scene);
var b3Material = new BABYLON.StandardMaterial("b3Material", scene);
b3Material.diffuseTexture = b3Texture; 
//b4
var b4Texture = new BABYLON.Texture("public/texture/book/4.jpg", scene);
var b4Material = new BABYLON.StandardMaterial("b4Material", scene);
b4Material.diffuseTexture = b4Texture; 
//b5
var b5Texture = new BABYLON.Texture("public/texture/book/5.jpg", scene);
var b5Material = new BABYLON.StandardMaterial("b5Material", scene);
b5Material.diffuseTexture = b5Texture; 
//b6
var b6Texture = new BABYLON.Texture("public/texture/book/6.jpg", scene);
var b6Material = new BABYLON.StandardMaterial("b6Material", scene);
b6Material.diffuseTexture = b6Texture; 
//b7
var b7Texture = new BABYLON.Texture("public/texture/book/7.jpg", scene);
var b7Material = new BABYLON.StandardMaterial("b7Material", scene);
b7Material.diffuseTexture = b7Texture; 
//b8
var b8Texture = new BABYLON.Texture("public/texture/book/8.jpg", scene);
var b8Material = new BABYLON.StandardMaterial("b8Material", scene);
b8Material.diffuseTexture = b8Texture; 
//教材圆柱
const b1 = BABYLON.MeshBuilder.CreateBox(
  "b1",
  {
    height:4,
    width:3,
    depth:0.03,
  },scene
);
b1.position.set(49,7.5,4)
b1.rotation.y = Math.PI / 2;
b1.actionManager = new BABYLON.ActionManager(scene);
b1.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          // 点击立方体时跳转到新页面
          window.location.href = 'http://www.dzkbw.com/books/zjb/xinxijishu/gzbx1/'; // 替换链接为你想要跳转的页面
      }
  )
);
b1.material = b1Material;
const b2 = BABYLON.MeshBuilder.CreateBox(
  "b2",
  {
    height:4,
    width:3,
    depth:0.03,
  },scene
);
b2.position.set(46,7.5,10)
b2.rotation.y = Math.PI / 4;
b2.actionManager = new BABYLON.ActionManager(scene);
b2.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          // 点击立方体时跳转到新页面
          window.location.href = 'http://www.dzkbw.com/books/zjb/xinxijishu/gzbx2/'; // 替换链接为你想要跳转的页面
      }
  )
);
b2.material = b2Material;
const b3= BABYLON.MeshBuilder.CreateBox(
  "b3",
  {
    height:4,
    width:3,
    depth:0.03,
  },scene
);
b3.position.set(40,7.5,13)
b3.rotation.y = Math.PI ;
b3.actionManager = new BABYLON.ActionManager(scene);
b3.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          // 点击立方体时跳转到新页面
          window.location.href = 'http://www.dzkbw.com/books/zjb/xinxijishu/gzxzxbx1/'; // 替换链接为你想要跳转的页面
      }
  )
);
b3.material = b3Material;
const b4 = BABYLON.MeshBuilder.CreateBox(
  "b4",
  {
    height:4,
    width:3,
    depth:0.03,
  },scene
);
b4.position.set(46,7.5,-3)
b4.rotation.y = -Math.PI / 4;
b4.actionManager = new BABYLON.ActionManager(scene);
b4.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          // 点击立方体时跳转到新页面
          window.location.href = 'http://www.dzkbw.com/books/zjb/xinxijishu/gzxzxbx2/'; // 替换链接为你想要跳转的页面
      }
  )
);
b4.material = b4Material;
const b5 = BABYLON.MeshBuilder.CreateBox(
  "b5",
  {
    height:4,
    width:3,
    depth:0.03,
  },scene
);
b5.position.set(31,7.5,4)
b5.rotation.y = Math.PI / 2;
b5.actionManager = new BABYLON.ActionManager(scene);
b5.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          // 点击立方体时跳转到新页面
          window.location.href = 'http://www.dzkbw.com/books/zjb/xinxijishu/gzxzxbx3/'; // 替换链接为你想要跳转的页面
      }
  )
);
b5.material = b5Material;
const b6 = BABYLON.MeshBuilder.CreateBox(
  "b6",
  {
    height:4,
    width:3,
    depth:0.03,
  },scene
);
b6.position.set(33,7.5,-3)
b6.rotation.y = Math.PI / 4;
b6.actionManager = new BABYLON.ActionManager(scene);
b6.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          // 点击立方体时跳转到新页面
          window.location.href = 'http://www.dzkbw.com/books/zjb/xinxijishu/gzxzxbx4/'; // 替换链接为你想要跳转的页面
      }
  )
);
b6.material = b6Material;
const b7= BABYLON.MeshBuilder.CreateBox(
  "b7",
  {
    height:4,
    width:3,
    depth:0.03,
  },scene
);
b7.position.set(40,7.5,-5)
b7.rotation.y = Math.PI ;
b7.actionManager = new BABYLON.ActionManager(scene);
b7.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          window.location.href = 'http://www.dzkbw.com/books/zjb/xinxijishu/gzxzxbx5/';
      }
  )
);
b7.material = b7Material;
const b8 = BABYLON.MeshBuilder.CreateBox(
  "b8",
  {
    height:4,
    width:3,
    depth:0.03,
  },scene
);
b8.position.set(33,7.5,11)
b8.rotation.y = -Math.PI / 4;
b8.actionManager = new BABYLON.ActionManager(scene);
b8.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          window.location.href = 'http://www.dzkbw.com/books/zjb/xinxijishu/gzxzxbx6/'; 
      }
  )
);
b8.material = b8Material;

var createScene = async function () {
  var scene = new BABYLON.Scene(engine);
  var fontData = await (await fetch("https://assets.babylonjs.com/fonts/Droid Sans_Regular.json")).json();
  var myText = BABYLON.MeshBuilder.CreateText("myText", "Hello World !! @ #$ % é", fontData, {
      size: 16,
      resolution: 64, 
      depth: 10
  });
  myText.position = new BABYLON.Vector3(40,7.5,-20);
  var textMaterial = myText.material;
  textMaterial.diffuseColor = new BABYLON.Color3(1, 0, 0); 
  scene.createDefaultCameraOrLight(true);
  scene.activeCamera.attachControl(canvas, true);
  return scene;
};
//前沿技术词云
var y1Texture = new BABYLON.Texture("public/texture/text/a.jpg", scene);
var y1Material = new BABYLON.StandardMaterial("y1Material", scene);
y1Material.diffuseTexture = y1Texture;
var y2Texture = new BABYLON.Texture("public/texture/text/b.jpg", scene);
var y2Material = new BABYLON.StandardMaterial("y2Material", scene);
y2Material.diffuseTexture = y2Texture; 
var y3Texture = new BABYLON.Texture("public/texture/text/c.jpg", scene);
var y3Material = new BABYLON.StandardMaterial("y3Material", scene);
y3Material.diffuseTexture = y3Texture;
var y4Texture = new BABYLON.Texture("public/texture/text/d.jpg", scene);
var y4Material = new BABYLON.StandardMaterial("y4Material", scene);
y4Material.diffuseTexture = y4Texture; 
var y5Texture = new BABYLON.Texture("public/texture/text/e.jpg", scene);
var y5Material = new BABYLON.StandardMaterial("y5Material", scene);
y5Material.diffuseTexture = y5Texture;
var y6Texture = new BABYLON.Texture("public/texture/text/f.jpg", scene);
var y6Material = new BABYLON.StandardMaterial("y6Material", scene);
y6Material.diffuseTexture = y6Texture; 
var y7Texture = new BABYLON.Texture("public/texture/text/j.jpg", scene);
var y7Material = new BABYLON.StandardMaterial("y7Material", scene);
y7Material.diffuseTexture = y7Texture;
var y8Texture = new BABYLON.Texture("public/texture/text/h.jpg", scene);
var y8Material = new BABYLON.StandardMaterial("y8Material", scene);
y8Material.diffuseTexture = y8Texture; 
var y9Texture = new BABYLON.Texture("public/texture/text/g.jpg", scene);
var y9Material = new BABYLON.StandardMaterial("y9Material", scene);
y9Material.diffuseTexture = y9Texture;
var y10Texture = new BABYLON.Texture("public/texture/text/j.jpg", scene);
var y10Material = new BABYLON.StandardMaterial("y10Material", scene);
y10Material.diffuseTexture = y10Texture; 
var y11Texture = new BABYLON.Texture("public/texture/text/k.jpg", scene);
var y11Material = new BABYLON.StandardMaterial("y11Material", scene);
y11Material.diffuseTexture = y11Texture; 
var y12Texture = new BABYLON.Texture("public/texture/text/l.jpg", scene);
var y12Material = new BABYLON.StandardMaterial("y12Material", scene);
y12Material.diffuseTexture = y12Texture; 
var y13Texture = new BABYLON.Texture("public/texture/text/m.jpg", scene);
var y13Material = new BABYLON.StandardMaterial("y13Material", scene);
y13Material.diffuseTexture = y13Texture; 
const y1 = BABYLON.MeshBuilder.CreateBox(
  "y1",
  {
    height:5,
    width:10,
    depth:2
  },scene
);
y1.position.set(-29,15,30)
y1.rotation.y = Math.PI / 2;
y1.material = y1Material;
const y2 = BABYLON.MeshBuilder.CreateBox(
  "y2",
  {
    height:4,
    width:8,
    depth:1.3,
  },scene
);
y2.position.set(-29,20,10)
y2.rotation.y = Math.PI / 2;
y2.material = y2Material;
const y3 = BABYLON.MeshBuilder.CreateBox(
  "y3",
  {
    height:2,
    width:5,
    depth:1.5,
  },scene
);
y3.position.set(-29,20,25)
y3.rotation.y = Math.PI / 2;
y3.material = y3Material;
const y4 = BABYLON.MeshBuilder.CreateBox(
  "y4",
  {
    height:3,
    width:7,
    depth:1.5,
  },scene
);
y4.position.set(-29,8,18)
y4.rotation.y = Math.PI / 2;
y4.material = y4Material;
const y5 = BABYLON.MeshBuilder.CreateBox(
  "y5",
  {
    height:5,
    width:9,
    depth:1.5,
  },scene
);
y5.position.set(-29,9,28)
y5.rotation.y = Math.PI / 2;
y5.material = y5Material;
const y6 = BABYLON.MeshBuilder.CreateBox(
  "y6",
  {
    height:3,
    width:5,
    depth:2,
  },scene
);
y6.position.set(-29,9.6,36)
y6.rotation.y = Math.PI / 2;
y6.material = y6Material;
const y7 = BABYLON.MeshBuilder.CreateBox(
  "y7",
  {
    height:3,
    width:5,
    depth:1.9,
  },scene
);
y7.position.set(-29,15,20)
y7.rotation.y = Math.PI / 2;
y7.material = y7Material;
const y8 = BABYLON.MeshBuilder.CreateBox(
  "y8",
  {
    height:3,
    width:5,
    depth:1.5,
  },scene
);
y8.position.set(-29,22,38)
y8.rotation.y = Math.PI / 2;
y8.material = y8Material;
const y9 = BABYLON.MeshBuilder.CreateBox(
  "y9",
  {
    height:5,
    width:10,
    depth:2
  },scene
);
y9.position.set(-29,13,7)
y9.rotation.y = Math.PI / 2;
y9.material = y9Material;
const y10= BABYLON.MeshBuilder.CreateBox(
  "y10",
  {
    height:5,
    width:5,
    depth:1.6
  },scene
);
y10.position.set(-29,6,9)
y10.rotation.y = Math.PI / 2;
y10.material = y13Material;
y10.actionManager = new BABYLON.ActionManager(scene);
y10.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          window.location.href = 'https://openai.com/gpt-4'; 
      }
  )
);
const y11= BABYLON.MeshBuilder.CreateBox(
  "y11",
  {
    height:7,
    width:7,
    depth:1.2
  },scene
);
y11.position.set(-29,16,40)
y11.rotation.y = Math.PI / 2;
y11.material = y11Material;
const y12= BABYLON.MeshBuilder.CreateBox(
  "y12",
  {
    height:3,
    width:3,
    depth:2
  },scene
);
y12.position.set(-29,6,38)
y12.rotation.y = Math.PI / 2;
y12.material = y12Material;
const y13= BABYLON.MeshBuilder.CreateBox(
  "y13",
  {
    height:3,
    width:6,
    depth:1.5
  },scene
);
y13.position.set(-29,4,26)
y13.rotation.y = Math.PI / 2;
y13.material = y10Material;
/// 定义楼梯参数
var stairWidth =2; // 楼梯宽度
var stairDepth =6; // 楼梯深度
var stairCount = 10; // 楼梯台阶数量

// 定义每级台阶的高度和水平偏移
var stairHeight =1;
var stairOffsetX =1;

// 创建楼梯
for (var i = 0; i < stairCount; i++) {
    var stair = BABYLON.MeshBuilder.CreateBox("stair" + i, { width: stairWidth, height: stairHeight, depth: stairDepth }, scene);
    stair.position.y = 0+stairHeight * i;
    stair.position.x = 30+stairOffsetX * i;
    stair.position.z = -52
    stair.checkCollisions = true;
    stair.material = wallMaterial1;
}
//创建栏杆1
const a1 = BABYLON.MeshBuilder.CreateBox(
  "a1",
  {
    height:1.6,
    width:39,
    depth:0.8,
  },scene
);
a1.position.set(60,15.6,-41)
a1.rotation.x = Math.PI / 2;
a1.checkCollisions = true;
a1.material = stairMaterial;
const a2 = BABYLON.MeshBuilder.CreateBox(
  "a2",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a2.position.set(55,12,-41)
a2.rotation.z = Math.PI / 2;
a2.checkCollisions = true;
a2.material = stairMaterial;
const a3 = BABYLON.MeshBuilder.CreateBox(
  "a3",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a3.position.set(57,12,-41)
a3.rotation.z = Math.PI / 2;
a3.checkCollisions = true;
a3.material = stairMaterial;
const a4 = BABYLON.MeshBuilder.CreateBox(
  "a4",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a4.position.set(59,12,-41)
a4.rotation.z = Math.PI / 2;
a4.checkCollisions = true;
a4.material = stairMaterial;
const a5 = BABYLON.MeshBuilder.CreateBox(
  "a5",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a5.position.set(53,12,-41)
a5.rotation.z = Math.PI / 2;
a5.checkCollisions = true;
a5.material = stairMaterial;
const a6 = BABYLON.MeshBuilder.CreateBox(
  "a6",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a6.position.set(51,12,-41)
a6.rotation.z = Math.PI / 2;
a6.checkCollisions = true;
a6.material = stairMaterial;
const a7 = BABYLON.MeshBuilder.CreateBox(
  "a7",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a7.position.set(49,12,-41)
a7.rotation.z = Math.PI / 2;
a7.checkCollisions = true;
a7.material = stairMaterial;
const a8 = BABYLON.MeshBuilder.CreateBox(
  "a8",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a8.position.set(47,12,-41)
a8.rotation.z = Math.PI / 2;
a8.checkCollisions = true;
a8.material = stairMaterial;
const a9 = BABYLON.MeshBuilder.CreateBox(
  "a9",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a9.position.set(45,12,-41)
a9.rotation.z = Math.PI / 2;
a9.checkCollisions = true;
a9.material = stairMaterial;
const a10 = BABYLON.MeshBuilder.CreateBox(
  "a10",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a10.position.set(43,12,-41)
a10.rotation.z = Math.PI / 2;
a10.checkCollisions = true;
a10.material = stairMaterial;
const a11 = BABYLON.MeshBuilder.CreateBox(
  "a11",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a11.position.set(41,12,-41)
a11.rotation.z = Math.PI / 2;
a11.checkCollisions = true;
a11.material = stairMaterial;
const a12 = BABYLON.MeshBuilder.CreateBox(
  "a12",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a12.position.set(41,12,-43)
a12.rotation.z = Math.PI / 2;
a12.checkCollisions = true;
a12.material = stairMaterial;
const a13 = BABYLON.MeshBuilder.CreateBox(
  "a13",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a13.position.set(41,12,-45)
a13.rotation.z = Math.PI / 2;
a13.checkCollisions = true;
a13.material = stairMaterial;
const a14 = BABYLON.MeshBuilder.CreateBox(
  "a14",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a14.position.set(41,12,-47)
a14.rotation.z = Math.PI / 2;
a14.checkCollisions = true;
a14.material = stairMaterial;
const a15 = BABYLON.MeshBuilder.CreateBox(
  "a15",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a15.position.set(41,12,-49)
a15.rotation.z = Math.PI / 2;
a15.checkCollisions = true;
a15.material = stairMaterial;
const a16 = BABYLON.MeshBuilder.CreateBox(
  "a16",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a16.position.set(39,11,-50)
a16.rotation.z = Math.PI / 2;
a16.checkCollisions = true;
a16.material = stairMaterial;
const a17 = BABYLON.MeshBuilder.CreateBox(
  "a17",
  {
    height:1.6,
    width:10.3,
    depth:0.8,
  },scene
);
a17.position.set(41,15.6,-45.3)
a17.rotation.y = Math.PI / 2;
a17.rotation.x = Math.PI / 2;
a17.checkCollisions = true;
a17.material = stairMaterial;
const a18 = BABYLON.MeshBuilder.CreateBox(
  "a18",
  {
    height:1.6,
    width:10.3,
    depth:0.8,
  },scene
);
a18.position.set(79,15.6,-45.3)
a18.rotation.y = Math.PI / 2;
a18.rotation.x = Math.PI / 2;
a18.checkCollisions = true;
a18.material = stairMaterial;
const a19 = BABYLON.MeshBuilder.CreateBox(
  "a19",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a19.position.set(61,12,-41)
a19.rotation.z = Math.PI / 2;
a19.checkCollisions = true;
a19.material = stairMaterial;
const a20 = BABYLON.MeshBuilder.CreateBox(
  "a20",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a20.position.set(63,12,-41)
a20.rotation.z = Math.PI / 2;
a20.checkCollisions = true;
a20.material = stairMaterial;
const a21 = BABYLON.MeshBuilder.CreateBox(
  "a21",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a21.position.set(65,12,-41)
a21.rotation.z = Math.PI / 2;
a21.checkCollisions = true;
a21.material = stairMaterial;
const a22 = BABYLON.MeshBuilder.CreateBox(
  "a22",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a22.position.set(67,12,-41)
a22.rotation.z = Math.PI / 2;
a22.checkCollisions = true;
a22.material = stairMaterial;
const a23 = BABYLON.MeshBuilder.CreateBox(
  "a23",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a23.position.set(69,12,-41)
a23.rotation.z = Math.PI / 2;
a23.checkCollisions = true;
a23.material = stairMaterial;
const a24 = BABYLON.MeshBuilder.CreateBox(
  "a24",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a24.position.set(71,12,-41)
a24.rotation.z = Math.PI / 2;
a24.checkCollisions = true;
a24.material = stairMaterial;
const a25 = BABYLON.MeshBuilder.CreateBox(
  "a25",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a25.position.set(73,12,-41)
a25.rotation.z = Math.PI / 2;
a25.checkCollisions = true;
a25.material = stairMaterial;
const a26 = BABYLON.MeshBuilder.CreateBox(
  "a26",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a26.position.set(75,12,-41)
a26.rotation.z = Math.PI / 2;
a26.checkCollisions = true;
a26.material = stairMaterial;
const a27 = BABYLON.MeshBuilder.CreateBox(
  "a27",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a27.position.set(77,12,-41)
a27.rotation.z = Math.PI / 2;
a27.checkCollisions = true;
a27.material = stairMaterial;
const a28 = BABYLON.MeshBuilder.CreateBox(
  "a28",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a28.position.set(79,12,-41)
a28.rotation.z = Math.PI / 2;
a28.checkCollisions = true;
a28.material = stairMaterial;
const a29 = BABYLON.MeshBuilder.CreateBox(
  "a29",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a29.position.set(79,12,-43)
a29.rotation.z = Math.PI / 2;
a29.checkCollisions = true;
a29.material = stairMaterial;
const a30 = BABYLON.MeshBuilder.CreateBox(
  "a30",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a30.position.set(79,12,-45)
a30.rotation.z = Math.PI / 2;
a30.checkCollisions = true;
a30.material = stairMaterial;
const a31 = BABYLON.MeshBuilder.CreateBox(
  "a31",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a31.position.set(79,12,-47)
a31.rotation.z = Math.PI / 2;
a31.checkCollisions = true;
a31.material = stairMaterial;
const a32 = BABYLON.MeshBuilder.CreateBox(
  "a32",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a32.position.set(79,12,-49)
a32.rotation.z = Math.PI / 2;
a32.checkCollisions = true;
a32.material = stairMaterial;
const a33 = BABYLON.MeshBuilder.CreateBox(
  "a33",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a33.position.set(90.5,2,-49)
a33.rotation.z = Math.PI / 2;
a33.checkCollisions = true;
a33.material = stairMaterial;3
const a34 = BABYLON.MeshBuilder.CreateBox(
  "a34",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a34.position.set(80,12,-50)
a34.rotation.z = Math.PI / 2;
a34.checkCollisions = true;
a34.material = stairMaterial;

const a35 = BABYLON.MeshBuilder.CreateBox(
  "a35",
  {
    height:0.5,
    width:7,
    depth:0.5,
  },scene
);
a35.position.set(29.5,3,-50)
a35.rotation.z = Math.PI / 2;
a35.checkCollisions = true;
a35.material = stairMaterial;

const a36 = BABYLON.MeshBuilder.CreateBox(
  "a36",
  {
    height:0.8,
    width:15,
    depth:1.6,
  },scene
);
a36.position.set(34.5,10.8,-50)
a36.rotation.z = Math.PI / 4.4;
a36.checkCollisions = true;
a36.material = stairMaterial;

const a37 = BABYLON.MeshBuilder.CreateBox(
  "a37",
  {
    height:0.8,
    width:15.5,
    depth:1.6,
  },scene
);
a37.position.set(85.5,10,-49)
a37.rotation.z = -Math.PI / 4;
a37.checkCollisions = true;
a37.material = stairMaterial;
// 创建楼梯2
for (var i = 0; i < stairCount; i++) {
  var stair2 = BABYLON.MeshBuilder.CreateBox("stair2" + i, { width: stairWidth, height: stairHeight, depth: stairDepth }, scene);
  stair2.position.y = 0+stairHeight * i;
  stair2.position.x =90 -stairOffsetX * i;
  stair2.position.z = -52
  stair2.checkCollisions = true;
  stair2.material = wallMaterial1;
}
//场景一：画廊材质
var p1Texture = new BABYLON.Texture("public/texture/photo/p1.jpg", scene);
var p1Material = new BABYLON.StandardMaterial("p1Material", scene);
p1Material.diffuseTexture = p1Texture; // 应用书本材质贴图

var p2Texture = new BABYLON.Texture("public/texture/photo/p2.jpg", scene);
var p2Material = new BABYLON.StandardMaterial("p2Material", scene);
p2Material.diffuseTexture = p2Texture; 

var p3Texture = new BABYLON.Texture("public/texture/photo/p3.jpg", scene);
var p3Material = new BABYLON.StandardMaterial("p3Material", scene);
p3Material.diffuseTexture = p3Texture; 

var p4Texture = new BABYLON.Texture("public/texture/photo/p4.jpg", scene);
var p4Material = new BABYLON.StandardMaterial("p4Material", scene);
p4Material.diffuseTexture = p4Texture; 

var p5Texture = new BABYLON.Texture("public/texture/photo/p5.jpg", scene);
var p5Material = new BABYLON.StandardMaterial("p5Material", scene);
p5Material.diffuseTexture = p5Texture; 

var p6Texture = new BABYLON.Texture("public/texture/photo/p6.jpg", scene);
var p6Material = new BABYLON.StandardMaterial("p6Material", scene);
p6Material.diffuseTexture = p6Texture; 

var p7Texture = new BABYLON.Texture("public/texture/photo/p7.jpg", scene);
var p7Material = new BABYLON.StandardMaterial("p7Material", scene);
p7Material.diffuseTexture = p7Texture; 

var p8Texture = new BABYLON.Texture("public/texture/photo/p8.jpg", scene);
var p8Material = new BABYLON.StandardMaterial("p8Material", scene);
p8Material.diffuseTexture = p8Texture; 

var p9Texture = new BABYLON.Texture("public/texture/photo/p9.jpg", scene);
var p9Material = new BABYLON.StandardMaterial("p9Material", scene);
p9Material.diffuseTexture = p9Texture; 

var p10Texture = new BABYLON.Texture("public/texture/photo/p10.jpg", scene);
var p10Material = new BABYLON.StandardMaterial("p10Material", scene);
p10Material.diffuseTexture = p10Texture; 

var p11Texture = new BABYLON.Texture("public/texture/photo/p11.jpg", scene);
var p11Material = new BABYLON.StandardMaterial("p11Material", scene);
p11Material.diffuseTexture = p11Texture; 

var p12Texture = new BABYLON.Texture("public/texture/photo/p12.jpg", scene);
var p12Material = new BABYLON.StandardMaterial("p12Material", scene);
p12Material.diffuseTexture = p12Texture; 

var p13Texture = new BABYLON.Texture("public/texture/photo/p13.jpg", scene);
var p13Material = new BABYLON.StandardMaterial("p13Material", scene);
p13Material.diffuseTexture = p13Texture; 

var p14Texture = new BABYLON.Texture("public/texture/photo/p14.jpg", scene);
var p14Material = new BABYLON.StandardMaterial("p14Material", scene);
p14Material.diffuseTexture = p14Texture; 

var p15Texture = new BABYLON.Texture("public/texture/photo/p15.jpg", scene);
var p15Material = new BABYLON.StandardMaterial("p15Material", scene);
p15Material.diffuseTexture = p15Texture; 

var p16Texture = new BABYLON.Texture("public/texture/photo/p16.jpg", scene);
var p16Material = new BABYLON.StandardMaterial("p16Material", scene);
p16Material.diffuseTexture = p16Texture; 

var p17Texture = new BABYLON.Texture("public/texture/photo/p17.jpg", scene);
var p17Material = new BABYLON.StandardMaterial("p17Material", scene);
p17Material.diffuseTexture = p17Texture; 

var p18Texture = new BABYLON.Texture("public/texture/photo/p18.jpg", scene);
var p18Material = new BABYLON.StandardMaterial("p18Material", scene);
p18Material.diffuseTexture = p18Texture; 

var p19Texture = new BABYLON.Texture("public/texture/photo/p19.jpg", scene);
var p19Material = new BABYLON.StandardMaterial("p19Material", scene);
p19Material.diffuseTexture = p19Texture; 
var p20Texture = new BABYLON.Texture("public/texture/photo/p20.jpg", scene);
var p20Material = new BABYLON.StandardMaterial("p20Material", scene);
p20Material.diffuseTexture = p20Texture; 

var p21Texture = new BABYLON.Texture("public/texture/photo/p21.jpg", scene);
var p21Material = new BABYLON.StandardMaterial("p21Material", scene);
p21Material.diffuseTexture = p21Texture; 

var p22Texture = new BABYLON.Texture("public/texture/photo/p22.jpg", scene);
var p22Material = new BABYLON.StandardMaterial("p22Material", scene);
p22Material.diffuseTexture = p22Texture; 
//场景一：画廊
var p01Texture = new BABYLON.Texture("public/texture/bt/6.jpg", scene);
var p01Material = new BABYLON.StandardMaterial("p01Material", scene);
p01Material.diffuseTexture = p01Texture; 
const p01 = BABYLON.MeshBuilder.CreateBox(
  "p01",
  {
    height:2,
    width:6,
    depth:0.5,
  },scene
);
p01.position.set(90,22,-54)
p01.rotation.y = Math.PI ;
p01.checkCollisions = true;
p01.material = p01Material;
const p1 = BABYLON.MeshBuilder.CreateBox(
  "p1",
  {
    height:7,
    width:7,
    depth:0.5,
  },scene
);
p1.position.set(65,19,-54)
p1.rotation.z = Math.PI / 2;
p1.checkCollisions = true;
p1.material = p4Material;

const p2 = BABYLON.MeshBuilder.CreateBox(
  "p2",
  {
    height:7,
    width:7,
    depth:0.5,
  },scene
);
p2.position.set(75,19,-54)
p2.rotation.z = Math.PI / 2;
p2.checkCollisions = true;
p2.material = p3Material;

const p3 = BABYLON.MeshBuilder.CreateBox(
  "p3",
  {
    height:7,
    width:7,
    depth:0.5,
  },scene
);
p3.position.set(85,15,-54)
p3.rotation.z = Math.PI / 2;
p3.checkCollisions = true;
p3.material = p2Material;

const p4 = BABYLON.MeshBuilder.CreateBox(
  "p4",
  {
    height:7,
    width:7,
    depth:0.5,
  },scene
);
p4.position.set(95,11,-54)
p4.rotation.z = Math.PI / 2;
p4.checkCollisions = true;
p4.material = p1Material;

const p5 = BABYLON.MeshBuilder.CreateBox(
  "p5",
  {
    height:7,
    width:7,
    depth:0.5,
  },scene
);
p5.position.set(61,19,-48)
p5.rotation.y = Math.PI / 2;
p5.checkCollisions = true;
p5.material = p5Material;

const p6 = BABYLON.MeshBuilder.CreateBox(
  "p6",
  {
    height:7,
    width:7,
    depth:0.5,
  },scene
);
p6.position.set(61,12,-35)
p6.rotation.y = Math.PI / 2;
p6.checkCollisions = true;
p6.material = p6Material;

const p7 = BABYLON.MeshBuilder.CreateBox(
  "p7",
  {
    height:7,
    width:7,
    depth:0.5,
  },scene
);
p7.position.set(61,12,-25)
p7.rotation.y = Math.PI / 2;
p7.checkCollisions = true;
p7.material = p7Material;

const p8 = BABYLON.MeshBuilder.CreateBox(
  "p8",
  {
    height:7,
    width:7,
    depth:0.5,
  },scene
);
p8.position.set(61,12,-15)
p8.rotation.y = Math.PI / 2;
p8.checkCollisions = true;
p8.material = p8Material;

const p9 = BABYLON.MeshBuilder.CreateBox(
  "p9",
  {
    height:7,
    width:7,
    depth:0.5,
  },scene
);
p9.position.set(59,12,-15)
p9.rotation.y = Math.PI / 2;
p9.checkCollisions = true;
p9.material = p9Material;

const p10 = BABYLON.MeshBuilder.CreateBox(
  "p10",
  {
    height:7,
    width:7,
    depth:0.5,
  },scene
);
p10.position.set(59,12,-25)
p10.rotation.y = Math.PI / 2;
p10.checkCollisions = true;
p10.material = p10Material;

const p11 = BABYLON.MeshBuilder.CreateBox(
  "p11",
  {
    height:7,
    width:7,
    depth:0.5,
  },scene
);
p11.position.set(59,12,-35)
p11.rotation.y = Math.PI / 2;
p11.checkCollisions = true;
p11.material = p11Material;

const p12 = BABYLON.MeshBuilder.CreateBox(
  "p12",
  {
    height:7,
    width:7,
    depth:0.5,
  },scene
);
p12.position.set(59,19,-48)
p12.rotation.y = Math.PI / 2;
p12.checkCollisions = true;
p12.material = p12Material;

const p13 = BABYLON.MeshBuilder.CreateBox(
  "p13",
  {
    height:7,
    width:7,
    depth:0.5,
  },scene
);
p13.position.set(55,19,-54)
p13.rotation.z = Math.PI / 2;
p13.checkCollisions = true;
p13.material = p13Material;

const p14 = BABYLON.MeshBuilder.CreateBox(
  "p14",
  {
    height:7,
    width:7,
    depth:0.5,
  },scene
);
p14.position.set(45,19,-54)
p14.rotation.z = Math.PI / 2;
p14.checkCollisions = true;
p14.material = p14Material;

const p15 = BABYLON.MeshBuilder.CreateBox(
  "p15",
  {
    height:7,
    width:7,
    depth:0.5,
  },scene
);
p15.position.set(35,15,-54)
p15.rotation.z = Math.PI / 2;
p15.checkCollisions = true;
p15.material = p15Material;

const p16 = BABYLON.MeshBuilder.CreateBox(
  "p16",
  {
    height:7,
    width:7,
    depth:0.5,
  },scene
);
p16.position.set(-29,12,-50)
p16.rotation.y = Math.PI / 2;
p16.checkCollisions = true;
p16.material = p16Material;

const p17 = BABYLON.MeshBuilder.CreateBox(
  "p17",
  {
    height:7,
    width:7,
    depth:0.5,
  },scene
);
p17.position.set(-29,12,-40)
p17.rotation.y = Math.PI / 2;
p17.checkCollisions = true;
p17.material = p17Material;

const p18 = BABYLON.MeshBuilder.CreateBox(
  "p18",
  {
    height:7,
    width:7,
    depth:0.5,
  },scene
);
p18.position.set(-29,12,-30)
p18.rotation.y = Math.PI / 2;
p18.checkCollisions = true;
p18.material = p18Material;
// 定义桌子的尺寸
var tableThickness =0.4;
var tableLength = 30;
var tableWidth = 7;
// 创建桌面1
var tabletop1 = BABYLON.MeshBuilder.CreateBox("tabletop1", {
  height: tableThickness,
  width: tableLength,
  depth: tableWidth
}, scene);
tabletop1.position = new BABYLON.Vector3(0, 5 + tableThickness / 2, -40); // 放置在指定位置
//box11
const box11 = BABYLON.MeshBuilder.CreateBox(
  "box11",
  {
    height:10,
    width:7,
    depth:1,
  },scene
);
box11.position.set(-14,0,-40)
box11.checkCollisions = true;
box11.rotation.y = Math.PI / 2;
box11.material = wallMaterial;
//box12
const box12 = BABYLON.MeshBuilder.CreateBox(
  "box12",
  {
    height:10,
    width:7,
    depth:1,
  },scene
);
box12.position.set(14,0,-40)
box12.checkCollisions = true;
box12.rotation.y = Math.PI / 2;
box12.material = wallMaterial;

// 创建桌面
var tabletop = BABYLON.MeshBuilder.CreateBox("tabletop", {
    height: tableThickness,
    width: tableLength,
    depth: tableWidth
}, scene);
tabletop.position = new BABYLON.Vector3(85, 5 + tableThickness / 2, 52); // 放置在指定位置

// 创建桌腿
var legHeight = 0.5; // 计算桌腿高度
var legWidth = 0.5; // 桌腿宽度
var legDepth = 11; // 桌腿深度
var leg1 = BABYLON.MeshBuilder.CreateBox("leg1", { height: legHeight, width: legWidth, depth: legDepth }, scene);
var leg2 = BABYLON.MeshBuilder.CreateBox("leg2", { height: legHeight, width: legWidth, depth: legDepth }, scene);
var leg3 = BABYLON.MeshBuilder.CreateBox("leg3", { height: legHeight, width: legWidth, depth: legDepth }, scene);
// 设置桌腿位置
var legOffsetX = tableLength / 2 - legWidth / 2;
var legOffsetZ = tableWidth / 2 - legDepth / 2;
leg1.position = new BABYLON.Vector3(85 - legOffsetX, -(legHeight / 2), 47 - legOffsetZ);
leg1.rotation.x = Math.PI / 2;
leg2.position = new BABYLON.Vector3(95 - legOffsetX, -(legHeight / 2), 47- legOffsetZ);
leg2.rotation.x = Math.PI / 2;
leg3.position = new BABYLON.Vector3(105 - legOffsetX, -(legHeight / 2), 47- legOffsetZ);
leg3.rotation.x = Math.PI / 2;

//台阶
const s1 = BABYLON.MeshBuilder.CreateBox(
  "s1",
  {
    height:28,
    width:80,
    depth:2,
  },scene
);
s1.position.set(-70,0,-45)
s1.checkCollisions = true;
s1.rotation.x = Math.PI / 2;
s1.material = stairMaterial;
const s2 = BABYLON.MeshBuilder.CreateBox(
  "s2",
  {
    height:28,
    width:80,
    depth:2,
  },scene
);
s2.position.set(-70,1,-48)
s2.checkCollisions = true;
s2.rotation.x = Math.PI / 2;
s2.material = stairMaterial;
const s3= BABYLON.MeshBuilder.CreateBox(
  "s3",
  {
    height:28,
    width:80,
    depth:2,
  },scene
);
s3.position.set(-70,2,-51)
s3.checkCollisions = true;
s3.rotation.x = Math.PI / 2;
s3.material = stairMaterial;
//影幕
var m0Texture = new BABYLON.Texture("public/texture/bt/7.jpg", scene);
var m0Material = new BABYLON.StandardMaterial("m0Material", scene);
m0Material.diffuseTexture = m0Texture; 
const m0= BABYLON.MeshBuilder.CreateBox(
  "m0",
  {
    height:6,
    width:2,
    depth:0.7,
  },scene
);
m0.position.set(-46,24,-53.8)
m0.checkCollisions = true;
m0.rotation.z= Math.PI / 2
m0.material = m0Material;
const m1= BABYLON.MeshBuilder.CreateBox(
  "m1",
  {
    height:16,
    width:24,
    depth:0.05,
  },scene
);
m1.position.set(-46,14,-54)
m1.checkCollisions = true;
m1.material = wallMaterial5;
const m2= BABYLON.MeshBuilder.CreateBox(
  "m2",
  {
    height:0.6,
    width:27,
    depth:0.5,
  },scene
);
m2.position.set(-46,22,-53.7)
m2.checkCollisions = true;
m2.material = wallMaterial4;
const m3= BABYLON.MeshBuilder.CreateBox(
  "m3",
  {
    height:0.3,
    width:26,
    depth:0.5,
  },scene
);
m3.position.set(-46,6,-53.7)
m3.checkCollisions = true;
m3.material = wallMaterial4;
const m4= BABYLON.MeshBuilder.CreateBox(
  "m4",
  {
    height:14.5,
    width:23,
    depth:0.05,
  },scene
);
m4.position.set(-46,14,-53.8)
m4.checkCollisions = true;
m4.material = wallMaterial6;
// 创建一个变量来存储当前播放的视频贴图材质
var currentVideoTexture1 = null;
// 播放视频函数
function playVideo1() {
  if (!currentVideoTexture1) {
    // 创建视频贴图材质
    var videoTexture1 = new BABYLON.VideoTexture("video1", "public/video/5.mp4", scene, true, true);
    var videoMaterial1 = new BABYLON.StandardMaterial("videoMaterial1", scene);
    videoMaterial1.diffuseTexture = videoTexture1;

    // 调整贴图方向（根据需要调整）
    videoMaterial1.diffuseTexture.uScale = -1;
    videoMaterial1.diffuseTexture.uOffset = 1;

    // 将视频材质应用于电视机
    m4.material = videoMaterial1;

    // 开始播放视频
    videoTexture1.video.play();

    // 将当前播放的视频存储在变量中
    currentVideoTexture1 = videoTexture1;
  }
}

// 停止当前视频播放函数
function stopCurrentVideo1() {
  if (currentVideoTexture1) {
    currentVideoTexture1.video.pause();
    currentVideoTexture1 = null;
    m4.material = wallMaterial6; // 恢复默认边框材质
  }
}
// 在此处注册点击事件监听器
m4.actionManager = new BABYLON.ActionManager(scene);
m4.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
    BABYLON.ActionManager.OnPickTrigger,
    function () {
      playVideo1(); // 播放视频
    }
  )
);
// 创建暂停按钮 m5
const m5 = BABYLON.MeshBuilder.CreateCylinder(
  "m5",
  { height: 1, diameter: 2.5 },
  scene
);
m5.position.set(-46, 4.5, -53.7);
m5.rotation.z = Math.PI / 2;
m5.rotation.y = Math.PI / 2;
m5.checkCollisions = true;
m5.material = but5Material;
m5.actionManager = new BABYLON.ActionManager(scene);
m5.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
    BABYLON.ActionManager.OnPickTrigger,
    function () {
      stopCurrentVideo1(); // 停止当前视频播放
    }
  )
);
//基础知识图谱
const z1= BABYLON.MeshBuilder.CreateBox(
  "z1",
  {
    height:16,
    width:0.5,
    depth:0.5,
  },scene
);
z1.position.set(-70,14,-53.8)
z1.checkCollisions = true;
z1.material = wallMaterial7;
const z2= BABYLON.MeshBuilder.CreateBox(
  "z2",
  {
    height:16,
    width:0.5,
    depth:0.5,
  },scene
);
z2.position.set(-85,14,-53.8)
z2.checkCollisions = true;
z2.material = wallMaterial7;
const z3= BABYLON.MeshBuilder.CreateBox(
  "z3",
  {
    height:16,
    width:0.5,
    depth:0.5,
  },scene
);
z3.position.set(-99,14,-45)
z3.checkCollisions = true;
z3.material = wallMaterial7;
const z4= BABYLON.MeshBuilder.CreateBox(
  "z4",
  {
    height:16,
    width:0.5,
    depth:0.5,
  },scene
);
z4.position.set(-99,14,-32)
z4.checkCollisions = true;
z4.material = wallMaterial7;
const z5= BABYLON.MeshBuilder.CreateBox(
  "z5",
  {
    height:13.6,
    width:0.5,
    depth:0.5,
  },scene
);
z5.position.set(-99,5.8,-38.5)
z5.checkCollisions = true;
z5.rotation.x= Math.PI / 2
z5.material = wallMaterial7;
const z6= BABYLON.MeshBuilder.CreateBox(
  "z6",
  {
    height:9.9,
    width:0.5,
    depth:0.5,
  },scene
);
z6.position.set(-99,22,-49.63)
z6.checkCollisions = true;
z6.rotation.x= Math.PI / 2
z6.material = wallMaterial7;
const z7= BABYLON.MeshBuilder.CreateBox(
  "z7",
  {
    height:16,
    width:0.5,
    depth:0.5,
  },scene
);
z7.position.set(-77.5,5.8,-53.8)
z7.checkCollisions = true;
z7.rotation.z= Math.PI / 2
z7.material = wallMaterial7;
const z8= BABYLON.MeshBuilder.CreateBox(
  "z8",
  {
    height:14,
    width:0.5,
    depth:0.5,
  },scene
);
z8.position.set(-91.8,22,-53.8)
z8.checkCollisions = true;
z8.rotation.z= Math.PI / 2
z8.material = wallMaterial7;
//知识块
var zz0Texture = new BABYLON.Texture("public/texture/bt/2.jpg", scene);
var zz0Material = new BABYLON.StandardMaterial("zz0Material", scene);
zz0Material.diffuseTexture = zz0Texture; 
const zz0= BABYLON.MeshBuilder.CreateBox(
  "zz0",
  {
    height:5,
    width:1.5,
    depth:0.7,
  },scene
);
zz0.position.set(-64,23,-53.8)
zz0.checkCollisions = true;
zz0.rotation.z= Math.PI / 2
zz0.material = zz0Material;
var zz1Texture = new BABYLON.Texture("public/texture/text/11.jpg", scene);
var zz1Material = new BABYLON.StandardMaterial("zz1Material", scene);
zz1Material.diffuseTexture = zz1Texture; 
var zz2Texture = new BABYLON.Texture("public/texture/text/22.jpg", scene);
var zz2Material = new BABYLON.StandardMaterial("zz2Material", scene);
zz2Material.diffuseTexture = zz2Texture; 
var zz21Texture = new BABYLON.Texture("public/texture/text/221.jpg", scene);
var zz21Material = new BABYLON.StandardMaterial("zz21Material", scene);
zz21Material.diffuseTexture = zz21Texture; 
var zz22Texture = new BABYLON.Texture("public/texture/text/222.jpg", scene);
var zz22Material = new BABYLON.StandardMaterial("zz22Material", scene);
zz22Material.diffuseTexture = zz22Texture; 
var zz23Texture = new BABYLON.Texture("public/texture/text/223.jpg", scene);
var zz23Material = new BABYLON.StandardMaterial("zz23Material", scene);
zz23Material.diffuseTexture = zz23Texture; 
var zz24Texture = new BABYLON.Texture("public/texture/text/224.jpg", scene);
var zz24Material = new BABYLON.StandardMaterial("zz24Material", scene);
zz24Material.diffuseTexture = zz24Texture; 
var zz25Texture = new BABYLON.Texture("public/texture/text/225.jpg", scene);
var zz25Material = new BABYLON.StandardMaterial("zz25Material", scene);
zz25Material.diffuseTexture = zz25Texture; 
var zz26Texture = new BABYLON.Texture("public/texture/text/226.jpg", scene);
var zz26Material = new BABYLON.StandardMaterial("zz26Material", scene);
zz26Material.diffuseTexture = zz26Texture;
var zz27Texture = new BABYLON.Texture("public/texture/text/227.jpg", scene);
var zz27Material = new BABYLON.StandardMaterial("zz27Material", scene);
zz27Material.diffuseTexture = zz27Texture;  
var zz3Texture = new BABYLON.Texture("public/texture/text/33.jpg", scene);
var zz3Material = new BABYLON.StandardMaterial("zz3Material", scene);
zz3Material.diffuseTexture = zz3Texture; 
var zz31Texture = new BABYLON.Texture("public/texture/text/331.jpg", scene);
var zz31Material = new BABYLON.StandardMaterial("zz31Material", scene);
zz31Material.diffuseTexture = zz31Texture; 
var zz32Texture = new BABYLON.Texture("public/texture/text/332.jpg", scene);
var zz32Material = new BABYLON.StandardMaterial("zz32Material", scene);
zz32Material.diffuseTexture = zz32Texture; 
var zz33Texture = new BABYLON.Texture("public/texture/text/333.jpg", scene);
var zz33Material = new BABYLON.StandardMaterial("zz33Material", scene);
zz33Material.diffuseTexture = zz33Texture; 
var zz34Texture = new BABYLON.Texture("public/texture/text/334.jpg", scene);
var zz34Material = new BABYLON.StandardMaterial("zz34Material", scene);
zz34Material.diffuseTexture = zz34Texture; 
var zz35Texture = new BABYLON.Texture("public/texture/text/335.jpg", scene);
var zz35Material = new BABYLON.StandardMaterial("zz35Material", scene);
zz35Material.diffuseTexture = zz35Texture; 
var zz4Texture = new BABYLON.Texture("public/texture/text/44.jpg", scene);
var zz4Material = new BABYLON.StandardMaterial("zz4Material", scene);
zz4Material.diffuseTexture = zz4Texture; 
var zz41Texture = new BABYLON.Texture("public/texture/text/441.jpg", scene);
var zz41Material = new BABYLON.StandardMaterial("zz41Material", scene);
zz41Material.diffuseTexture = zz41Texture; 
var zz42Texture = new BABYLON.Texture("public/texture/text/442.jpg", scene);
var zz42Material = new BABYLON.StandardMaterial("zz42Material", scene);
zz42Material.diffuseTexture = zz42Texture; 
var zz43Texture = new BABYLON.Texture("public/texture/text/443.jpg", scene);
var zz43Material = new BABYLON.StandardMaterial("zz43Material", scene);
zz43Material.diffuseTexture = zz43Texture; 
var zz431Texture = new BABYLON.Texture("public/texture/text/4431.jpg", scene);
var zz431Material = new BABYLON.StandardMaterial("zz431Material", scene);
zz431Material.diffuseTexture = zz431Texture; 
var zz432Texture = new BABYLON.Texture("public/texture/text/4432.jpg", scene);
var zz432Material = new BABYLON.StandardMaterial("zz432Material", scene);
zz432Material.diffuseTexture = zz432Texture; 
var zz433Texture = new BABYLON.Texture("public/texture/text/4433.jpg", scene);
var zz433Material = new BABYLON.StandardMaterial("zz433Material", scene);
zz433Material.diffuseTexture = zz433Texture; 
var zz434Texture = new BABYLON.Texture("public/texture/text/4434.jpg", scene);
var zz434Material = new BABYLON.StandardMaterial("zz434Material", scene);
zz434Material.diffuseTexture = zz434Texture; 
var zz435Texture = new BABYLON.Texture("public/texture/text/4435.jpg", scene);
var zz435Material = new BABYLON.StandardMaterial("zz435Material", scene);
zz435Material.diffuseTexture = zz435Texture; 
var zz5Texture = new BABYLON.Texture("public/texture/text/55.jpg", scene);
var zz5Material = new BABYLON.StandardMaterial("zz5Material", scene);
zz5Material.diffuseTexture = zz5Texture; 
var zz51Texture = new BABYLON.Texture("public/texture/text/551.jpg", scene);
var zz51Material = new BABYLON.StandardMaterial("zz51Material", scene);
zz51Material.diffuseTexture = zz51Texture; 
var zz52Texture = new BABYLON.Texture("public/texture/text/552.jpg", scene);
var zz52Material = new BABYLON.StandardMaterial("zz52Material", scene);
zz52Material.diffuseTexture = zz52Texture; 
var zz53Texture = new BABYLON.Texture("public/texture/text/553.jpg", scene);
var zz53Material = new BABYLON.StandardMaterial("zz53Material", scene);
zz53Material.diffuseTexture = zz53Texture; 
var zz6Texture = new BABYLON.Texture("public/texture/text/66.jpg", scene);
var zz6Material = new BABYLON.StandardMaterial("zz6Material", scene);
zz6Material.diffuseTexture = zz6Texture; 
var zz61Texture = new BABYLON.Texture("public/texture/text/661.jpg", scene);
var zz61Material = new BABYLON.StandardMaterial("zz61Material", scene);
zz61Material.diffuseTexture = zz61Texture; 
var zz62Texture = new BABYLON.Texture("public/texture/text/662.jpg", scene);
var zz62Material = new BABYLON.StandardMaterial("zz62Material", scene);
zz62Material.diffuseTexture = zz62Texture; 
var zz63Texture = new BABYLON.Texture("public/texture/text/663.jpg", scene);
var zz63Material = new BABYLON.StandardMaterial("zz63Material", scene);
zz63Material.diffuseTexture = zz63Texture; 
const zz1= BABYLON.MeshBuilder.CreateBox(
  "zz1",
  {
    height:5,
    width:2,
    depth:0.4,
  },scene
);
zz1.position.set(-66,20,-53.8)
zz1.checkCollisions = true;
zz1.rotation.z= Math.PI / 2
zz1.material = zz1Material;
const zz2= BABYLON.MeshBuilder.CreateBox(
  "zz2",
  {
    height:5,
    width:2,
    depth:0.3,
  },scene
);
zz2.position.set(-64,15,-53.8)
zz2.checkCollisions = true;
zz2.rotation.z= Math.PI / 2
zz2.material = zz2Material;
const zz21= BABYLON.MeshBuilder.CreateBox(
  "zz21",
  {
    height:3,
    width:1,
    depth:0.3,
  },scene
);
zz21.position.set(-62.5,13,-53.8)
zz21.checkCollisions = true;
zz21.rotation.z= Math.PI / 2
zz21.material = zz21Material;
const zz22= BABYLON.MeshBuilder.CreateBox(
  "zz22",
  {
    height:3,
    width:1,
    depth:0.3,
  },scene
);
zz22.position.set(-62.5,11.8,-53.8)
zz22.checkCollisions = true;
zz22.rotation.z= Math.PI / 2
zz22.material = zz22Material;
const zz23= BABYLON.MeshBuilder.CreateBox(
  "zz23",
  {
    height:3,
    width:1,
    depth:0.3,
  },scene
);
zz23.position.set(-62.5,10.6,-53.8)
zz23.checkCollisions = true;
zz23.rotation.z= Math.PI / 2
zz23.material = zz23Material;
const zz24= BABYLON.MeshBuilder.CreateBox(
  "zz24",
  {
    height:3,
    width:1,
    depth:0.3,
  },scene
);
zz24.position.set(-62.5,9.4,-53.8)
zz24.checkCollisions = true;
zz24.rotation.z= Math.PI / 2
zz24.material =zz24Material;
const zz25= BABYLON.MeshBuilder.CreateBox(
  "zz25",
  {
    height:3,
    width:1,
    depth:0.3,
  },scene
);
zz25.position.set(-62.5,8.2,-53.8)
zz25.checkCollisions = true;
zz25.rotation.z= Math.PI / 2
zz25.material = zz25Material;
const zz26= BABYLON.MeshBuilder.CreateBox(
  "zz26",
  {
    height:3,
    width:1,
    depth:0.3,
  },scene
);
zz26.position.set(-62.5,7,-53.8)
zz26.checkCollisions = true;
zz26.rotation.z= Math.PI / 2
zz26.material = zz26Material;
const zz27= BABYLON.MeshBuilder.CreateBox(
  "zz27",
  {
    height:3,
    width:1,
    depth:0.3,
  },scene
);
zz27.position.set(-62.5,5.8,-53.8)
zz27.checkCollisions = true;
zz27.rotation.z= Math.PI / 2
zz27.material =zz27Material;
const zz3= BABYLON.MeshBuilder.CreateBox(
  "zz3",
  {
    height:5,
    width:2,
    depth:0.3,
  },scene
);
zz3.position.set(-74,12,-53.8)
zz3.checkCollisions = true;
zz3.rotation.z= Math.PI / 2
zz3.material = zz3Material;
const zz31= BABYLON.MeshBuilder.CreateBox(
  "zz31",
  {
    height:3,
    width:1,
    depth:0.3,
  },scene
);
zz31.position.set(-80,15.4,-53.8)
zz31.checkCollisions = true;
zz31.rotation.z= Math.PI / 2
zz31.material = zz31Material;
zz31.actionManager = new BABYLON.ActionManager(scene);
zz31.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPickTrigger,
        () => {
            alert('+   -   *   /   %   **   //   ');
        }
    )
);
const zz32= BABYLON.MeshBuilder.CreateBox(
  "zz32",
  {
    height:3,
    width:1,
    depth:0.3,
  },scene
);
zz32.position.set(-80,14.2,-53.8)
zz32.checkCollisions = true;
zz32.rotation.z= Math.PI / 2
zz32.material = zz32Material;
zz32.actionManager = new BABYLON.ActionManager(scene);
zz32.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          alert('==   !=   <    >   <=   >=    ');
      }
  )
);
const zz33= BABYLON.MeshBuilder.CreateBox(
  "zz33",
  {
    height:3,
    width:1,
    depth:0.3,
  },scene
);
zz33.position.set(-80,13,-53.8)
zz33.checkCollisions = true;
zz33.rotation.z= Math.PI / 2
zz33.material = zz33Material;
zz33.actionManager = new BABYLON.ActionManager(scene);
zz33.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          alert('and   or   not');
      }
  )
);
const zz34= BABYLON.MeshBuilder.CreateBox(
  "zz34",
  {
    height:3,
    width:1,
    depth:0.3,
  },scene
);
zz34.position.set(-80,11.8,-53.8)
zz34.checkCollisions = true;
zz34.rotation.z= Math.PI / 2
zz34.material = zz34Material;
zz34.actionManager = new BABYLON.ActionManager(scene);
zz34.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          alert('in   not in   ');
      }
  )
);
const zz35= BABYLON.MeshBuilder.CreateBox(
  "zz35",
  {
    height:3,
    width:1,
    depth:0.3,
  },scene
);
zz35.position.set(-80,10.6,-53.8)
zz35.checkCollisions = true;
zz35.rotation.z= Math.PI / 2
zz35.material = zz35Material;
const zz4= BABYLON.MeshBuilder.CreateBox(
  "zz4",
  {
    height:5,
    width:2,
    depth:0.3,
  },scene
);
zz4.position.set(-88.5,18,-53.8)
zz4.checkCollisions = true;
zz4.rotation.z= Math.PI / 2
zz4.material =zz4Material;
const zz41= BABYLON.MeshBuilder.CreateBox(
  "zz41",
  {
    height:3,
    width:1,
    depth:0.3,
  },scene
);
zz41.position.set(-93.2,20,-53.8)
zz41.checkCollisions = true;
zz41.rotation.z= Math.PI / 2
zz41.material = zz41Material;
zz41.actionManager = new BABYLON.ActionManager(scene);
zz41.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          alert('input');
      }
  )
);
const zz42= BABYLON.MeshBuilder.CreateBox(
  "zz42",
  {
    height:3,
    width:1,
    depth:0.3,
  },scene
);
zz42.position.set(-93.2,18,-53.8)
zz42.checkCollisions = true;
zz42.rotation.z= Math.PI / 2
zz42.material = zz42Material;
zz42.actionManager = new BABYLON.ActionManager(scene);
zz42.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          alert('print');
      }
  )
);
const zz43= BABYLON.MeshBuilder.CreateBox(
  "zz43",
  {
    height:3,
    width:1,
    depth:0.3,
  },scene
);
zz43.position.set(-93.2,13,-53.8)
zz43.checkCollisions = true;
zz43.rotation.z= Math.PI / 2
zz43.material = zz43Material;
const zz431= BABYLON.MeshBuilder.CreateBox(
  "zz431",
  {
    height:2,
    width:0.8,
    depth:0.3,
  },scene
);
zz431.position.set(-97,15.4,-53.8)
zz431.checkCollisions = true;
zz431.rotation.z= Math.PI / 2
zz431.material =zz431Material;
const zz432= BABYLON.MeshBuilder.CreateBox(
  "zz432",
  {
    height:2,
    width:0.8,
    depth:0.3,
  },scene
);
zz432.position.set(-97,14.2,-53.8)
zz432.checkCollisions = true;
zz432.rotation.z= Math.PI / 2
zz432.material =zz432Material;
zz432.actionManager = new BABYLON.ActionManager(scene);
zz432.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          alert('a=b=2');
      }
  )
);
const zz433= BABYLON.MeshBuilder.CreateBox(
  "zz433",
  {
    height:2,
    width:0.8,
    depth:0.3,
  },scene
);
zz433.position.set(-97,13,-53.8)
zz433.checkCollisions = true;
zz433.rotation.z= Math.PI / 2
zz433.material = zz433Material;
zz433.actionManager = new BABYLON.ActionManager(scene);
zz433.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          alert('a,b=1,2');
      }
  )
);
const zz434= BABYLON.MeshBuilder.CreateBox(
  "zz434",
  {
    height:2,
    width:0.8,
    depth:0.3,
  },scene
);
zz434.position.set(-97,11.8,-53.8)
zz434.checkCollisions = true;
zz434.rotation.z= Math.PI / 2
zz434.material =zz434Material;
const zz435= BABYLON.MeshBuilder.CreateBox(
  "zz435",
  {
    height:2,
    width:0.8,
    depth:0.3,
  },scene
);
zz435.position.set(-97,10.6,-53.8)
zz435.checkCollisions = true;
zz435.rotation.z= Math.PI / 2
zz435.material = zz435Material;
zz435.actionManager = new BABYLON.ActionManager(scene);
zz435.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          alert('1.直接交换  2.利用中间变量交换');
      }
  )
);
const zz5= BABYLON.MeshBuilder.CreateBox(
  "zz5",
  {
    height:2,
    width:5,
    depth:0.3,
  },scene
);
zz5.position.set(-99,15,-40.5)
zz5.checkCollisions = true;
zz5.rotation.y= Math.PI / 2
zz5.material = zz5Material;
const zz51= BABYLON.MeshBuilder.CreateBox(
  "zz51",
  {
    height:1,
    width:3,
    depth:0.3,
  },scene
);
zz51.position.set(-99,17,-35)
zz51.checkCollisions = true;
zz51.rotation.y= Math.PI / 2
zz51.material =zz51Material;
zz51.actionManager = new BABYLON.ActionManager(scene);
zz51.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          alert('if条件表达式:语句块');
      }
  )
);
const zz52= BABYLON.MeshBuilder.CreateBox(
  "zz52",
  {
    height:1,
    width:3,
    depth:0.3,
  },scene
);
zz52.position.set(-99,15,-35)
zz52.checkCollisions = true;
zz52.rotation.y= Math.PI / 2
zz52.material = zz52Material;
zz52.actionManager = new BABYLON.ActionManager(scene);
zz52.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          alert('if条件表达式:语句块1    else:语句块2');
      }
  )
);
const zz53= BABYLON.MeshBuilder.CreateBox(
  "zz53",
  {
    height:1,
    width:3,
    depth:0.3,
  },scene
);
zz53.position.set(-99,13,-35)
zz53.checkCollisions = true;
zz53.rotation.y= Math.PI / 2
zz53.material = zz53Material;
const zz6= BABYLON.MeshBuilder.CreateBox(
  "zz6",
  {
    height:2,
    width:5,
    depth:0.3,
  },scene
);
zz6.position.set(-99,19,-28)
zz6.checkCollisions = true;
zz6.rotation.y= Math.PI / 2
zz6.material = zz6Material;
const zz61= BABYLON.MeshBuilder.CreateBox(
  "zz61",
  {
    height:1,
    width:3,
    depth:0.3,
  },scene
);
zz61.position.set(-99,16,-27)
zz61.checkCollisions = true;
zz61.rotation.y= Math.PI / 2
zz61.material = zz61Material;
const zz62= BABYLON.MeshBuilder.CreateBox(
  "zz62",
  {
    height:1,
    width:3,
    depth:0.3,
  },scene
);
zz62.position.set(-99,14,-27)
zz62.checkCollisions = true;
zz62.rotation.y= Math.PI / 2
zz62.material =zz62Material;
const zz63= BABYLON.MeshBuilder.CreateBox(
  "zz63",
  {
    height:1,
    width:3,
    depth:0.3,
  },scene
);
zz63.position.set(-99,12,-27)
zz63.checkCollisions = true;
zz63.rotation.y= Math.PI / 2
zz63.material = zz63Material;
zz63.actionManager = new BABYLON.ActionManager(scene);
zz63.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          alert('break   continue');
      }
  )
);
//链接支杆
const za1= BABYLON.MeshBuilder.CreateBox(
  "za1",
  {
    height:0.3,
    width:2,
    depth:0.3,
  },scene
);
za1.position.set(-99.1,19,-31)
za1.checkCollisions = true;
za1.rotation.y= Math.PI / 2
za1.material = wallMaterial7;
const za2= BABYLON.MeshBuilder.CreateBox(
  "za2",
  {
    height:0.3,
    width:2,
    depth:0.3,
  },scene
);
za2.position.set(-99.1,16,-25)
za2.checkCollisions = true;
za2.rotation.y= Math.PI / 2
za2.material = wallMaterial7;
const za3= BABYLON.MeshBuilder.CreateBox(
  "za3",
  {
    height:0.3,
    width:2,
    depth:0.3,
  },scene
);
za3.position.set(-99.1,14,-25)
za3.checkCollisions = true;
za3.rotation.y= Math.PI / 2
za3.material = wallMaterial7;
const za4= BABYLON.MeshBuilder.CreateBox(
  "za4",
  {
    height:0.3,
    width:2,
    depth:0.3,
  },scene
);
za4.position.set(-99.1,12,-25)
za4.checkCollisions = true;
za4.rotation.y= Math.PI / 2
za4.material = wallMaterial7;
const za5= BABYLON.MeshBuilder.CreateBox(
  "za5",
  {
    height:0.3,
    width:2,
    depth:0.3,
  },scene
);
za5.position.set(-99.1,19,-25)
za5.checkCollisions = true;
za5.rotation.y= Math.PI / 2
za5.material = wallMaterial7;
const za6= BABYLON.MeshBuilder.CreateBox(
  "za6",
  {
    height:0.3,
    width:8,
    depth:0.3,
  },scene
);
za6.position.set(-99.1,15,-24)
za6.checkCollisions = true;
za6.rotation.z= Math.PI / 2
za6.material = wallMaterial7;
const zb1= BABYLON.MeshBuilder.CreateBox(
  "zb1",
  {
    height:0.3,
    width:2,
    depth:0.3,
  },scene
);
zb1.position.set(-99.1,15,-44)
zb1.checkCollisions = true;
zb1.rotation.y= Math.PI / 2
zb1.material = wallMaterial7;
const zb2= BABYLON.MeshBuilder.CreateBox(
  "zb2",
  {
    height:0.3,
    width:2,
    depth:0.3,
  },scene
);
zb2.position.set(-99.1,13,-36.5)
zb2.checkCollisions = true;
zb2.rotation.y= Math.PI / 2
zb2.material = wallMaterial7;
const zb3= BABYLON.MeshBuilder.CreateBox(
  "zb3",
  {
    height:0.3,
    width:3,
    depth:0.3,
  },scene
);
zb3.position.set(-99.1,15,-36.5)
zb3.checkCollisions = true;
zb3.rotation.y= Math.PI / 2
zb3.material = wallMaterial7;
const zb4= BABYLON.MeshBuilder.CreateBox(
  "zb4",
  {
    height:0.3,
    width:2,
    depth:0.3,
  },scene
);
zb4.position.set(-99.1,17,-36.5)
zb4.checkCollisions = true;
zb4.rotation.y= Math.PI / 2
zb4.material = wallMaterial7;
const zb5= BABYLON.MeshBuilder.CreateBox(
  "zb5",
  {
    height:0.3,
    width:5,
    depth:0.3,
  },scene
);
zb5.position.set(-99.1,15,-37.5)
zb5.checkCollisions = true;
zb5.rotation.z= Math.PI / 2
zb5.material = wallMaterial7;
const zc1= BABYLON.MeshBuilder.CreateBox(
  "zc1",
  {
    height:0.3,
    width:2,
    depth:0.3,
  },scene
);
zc1.position.set(-86,18,-53.9)
zc1.checkCollisions = true;
zc1.rotation.x= Math.PI / 2
zc1.material = wallMaterial7;
const zc2= BABYLON.MeshBuilder.CreateBox(
  "zc2",
  {
    height:0.3,
    width:1,
    depth:0.3,
  },scene
);
zc2.position.set(-92,20,-53.9)
zc2.checkCollisions = true;
zc2.rotation.x= Math.PI / 2
zc2.material = wallMaterial7;
const zc3= BABYLON.MeshBuilder.CreateBox(
  "zc3",
  {
    height:0.3,
    width:2,
    depth:0.3,
  },scene
);
zc3.position.set(-92,18,-53.9)
zc3.checkCollisions = true;
zc3.rotation.x= Math.PI / 2
zc3.material = wallMaterial7;
const zc4= BABYLON.MeshBuilder.CreateBox(
  "zc4",
  {
    height:0.3,
    width:1,
    depth:0.3,
  },scene
);
zc4.position.set(-92,13,-53.9)
zc4.checkCollisions = true;
zc4.rotation.x= Math.PI / 2
zc4.material = wallMaterial7;
const zc5= BABYLON.MeshBuilder.CreateBox(
  "zc5",
  {
    height:0.2,
    width:8,
    depth:0.2,
  },scene
);
zc5.position.set(-91.4,16.5,-53.9)
zc5.checkCollisions = true;
zc5.rotation.z= Math.PI / 2
zc5.material = wallMaterial7;
const zc6= BABYLON.MeshBuilder.CreateBox(
  "zc6",
  {
    height:0.3,
    width:3,
    depth:0.3,
  },scene
);
zc6.position.set(-95.9,13,-53.9)
zc6.checkCollisions = true;
zc6.rotation.x= Math.PI / 2
zc6.material = wallMaterial7;
const zc7= BABYLON.MeshBuilder.CreateBox(
  "zc7",
  {
    height:0.3,
    width:1,
    depth:0.3,
  },scene
);
zc7.position.set(-95.9,11.8,-53.9)
zc7.checkCollisions = true;
zc7.rotation.x= Math.PI / 2
zc7.material = wallMaterial7;
const zc8= BABYLON.MeshBuilder.CreateBox(
  "zc7",
  {
    height:0.3,
    width:1,
    depth:0.3,
  },scene
);
zc8.position.set(-95.9,10.6,-53.9)
zc8.checkCollisions = true;
zc8.rotation.x= Math.PI / 2
zc8.material = wallMaterial7;
const zc9= BABYLON.MeshBuilder.CreateBox(
  "zc7",
  {
    height:0.3,
    width:1,
    depth:0.3,
  },scene
);
zc9.position.set(-95.9,14.2,-53.9)
zc9.checkCollisions = true;
zc9.rotation.x= Math.PI / 2
zc9.material = wallMaterial7;
const zc10= BABYLON.MeshBuilder.CreateBox(
  "zc7",
  {
    height:0.3,
    width:1,
    depth:0.3,
  },scene
);
zc10.position.set(-95.9,15.4,-53.9)
zc10.checkCollisions = true;
zc10.rotation.x= Math.PI / 2
zc10.material = wallMaterial7;
const zc11= BABYLON.MeshBuilder.CreateBox(
  "zc11",
  {
    height:0.2,
    width:5,
    depth:0.2,
  },scene
);
zc11.position.set(-95.3,13,-53.9)
zc11.checkCollisions = true;
zc11.rotation.z= Math.PI / 2
zc11.material = wallMaterial7;
const zd1= BABYLON.MeshBuilder.CreateBox(
  "zd1",
  {
    height:0.3,
    width:2.4,
    depth:0.3,
  },scene
);
zd1.position.set(-71,12,-53.9)
zd1.checkCollisions = true;
zd1.rotation.x= Math.PI / 2
zd1.material = wallMaterial7;
const zd2= BABYLON.MeshBuilder.CreateBox(
  "zd2",
  {
    height:0.3,
    width:2,
    depth:0.3,
  },scene
);
zd2.position.set(-79,15.4,-53.9)
zd2.checkCollisions = true;
zd2.rotation.x= Math.PI / 2
zd2.material = wallMaterial7;
const zd3= BABYLON.MeshBuilder.CreateBox(
  "zd3",
  {
    height:0.3,
    width:2,
    depth:0.3,
  },scene
);
zd3.position.set(-79,14.2,-53.9)
zd3.checkCollisions = true;
zd3.rotation.x= Math.PI / 2
zd3.material = wallMaterial7;
const zd4= BABYLON.MeshBuilder.CreateBox(
  "zd4",
  {
    height:0.3,
    width:2,
    depth:0.3,
  },scene
);
zd4.position.set(-79,13,-53.9)
zd4.checkCollisions = true;
zd4.rotation.x= Math.PI / 2
zd4.material = wallMaterial7;
const zd5= BABYLON.MeshBuilder.CreateBox(
  "zd5",
  {
    height:0.3,
    width:4,
    depth:0.3,
  },scene
);
zd5.position.set(-78,11.8,-53.9)
zd5.checkCollisions = true;
zd5.rotation.x= Math.PI / 2
zd5.material = wallMaterial7;
const zd6= BABYLON.MeshBuilder.CreateBox(
  "zd6",
  {
    height:0.3,
    width:2,
    depth:0.3,
  },scene
);
zd6.position.set(-79,10.6,-53.9)
zd6.checkCollisions = true;
zd6.rotation.x= Math.PI / 2
zd6.material = wallMaterial7;
const zd9= BABYLON.MeshBuilder.CreateBox(
  "zd9",
  {
    height:0.3,
    width:5,
    depth:0.3,
  },scene
);
zd9.position.set(-78,13,-53.9)
zd9.checkCollisions = true;
zd9.rotation.z= Math.PI / 2
zd9.material = wallMaterial7;
const ze1= BABYLON.MeshBuilder.CreateBox(
  "ze1",
  {
    height:0.3,
    width:4,
    depth:0.3,
  },scene
);
ze1.position.set(-68,15,-53.9)
ze1.checkCollisions = true;
ze1.rotation.x= Math.PI / 2
ze1.material = wallMaterial7;
const ze2= BABYLON.MeshBuilder.CreateBox(
  "ze2",
  {
    height:0.3,
    width:1,
    depth:0.3,
  },scene
);
ze2.position.set(-61,13,-53.9)
ze2.checkCollisions = true;
ze2.rotation.x= Math.PI / 2
ze2.material = wallMaterial7;
const ze3= BABYLON.MeshBuilder.CreateBox(
  "ze3",
  {
    height:0.3,
    width:1,
    depth:0.3,
  },scene
);
ze3.position.set(-61,11.8,-53.9)
ze3.checkCollisions = true;
ze3.rotation.x= Math.PI / 2
ze3.material = wallMaterial7;
const ze4= BABYLON.MeshBuilder.CreateBox(
  "ze4",
  {
    height:0.3,
    width:1,
    depth:0.3,
  },scene
);
ze4.position.set(-61,10.6,-53.9)
ze4.checkCollisions = true;
ze4.rotation.x= Math.PI / 2
ze4.material = wallMaterial7;
const ze5= BABYLON.MeshBuilder.CreateBox(
  "ze5",
  {
    height:0.3,
    width:1,
    depth:0.3,
  },scene
);
ze5.position.set(-61,9.4,-53.9)
ze5.checkCollisions = true;
ze5.rotation.x= Math.PI / 2
ze5.material = wallMaterial7;
const ze6= BABYLON.MeshBuilder.CreateBox(
  "ze6",
  {
    height:0.3,
    width:1,
    depth:0.3,
  },scene
);
ze6.position.set(-61,8.2,-53.9)
ze6.checkCollisions = true;
ze6.rotation.x= Math.PI / 2
ze6.material = wallMaterial7;
const ze7= BABYLON.MeshBuilder.CreateBox(
  "ze7",
  {
    height:0.3,
    width:1,
    depth:0.3,
  },scene
);
ze7.position.set(-61,7,-53.9)
ze7.checkCollisions = true;
ze7.rotation.x= Math.PI / 2
ze7.material = wallMaterial7;
const ze8= BABYLON.MeshBuilder.CreateBox(
  "ze8",
  {
    height:0.3,
    width:1,
    depth:0.3,
  },scene
);
ze8.position.set(-61,5.8,-53.9)
ze8.checkCollisions = true;
ze8.rotation.x= Math.PI / 2
ze8.material = wallMaterial7;
const ze9= BABYLON.MeshBuilder.CreateBox(
  "ze9",
  {
    height:0.3,
    width:3,
    depth:0.3,
  },scene
);
ze9.position.set(-62,15,-53.9)
ze9.checkCollisions = true;
ze9.rotation.x= Math.PI / 2
ze9.material = wallMaterial7;
const ze10= BABYLON.MeshBuilder.CreateBox(
  "ze10",
  {
    height:0.3,
    width:9.8,
    depth:0.3,
  },scene
);
ze10.position.set(-60.36,10.4,-53.9)
ze10.checkCollisions = true;
ze10.rotation.z= Math.PI / 2
ze10.material = wallMaterial7;
const zf1= BABYLON.MeshBuilder.CreateBox(
  "zf1",
  {
    height:0.3,
    width:3,
    depth:0.3,
  },scene
);
zf1.position.set(-68.2,20,-53.9)
zf1.checkCollisions = true;
zf1.rotation.x= Math.PI / 2
zf1.material = wallMaterial7;
//空中课堂
const k1= BABYLON.MeshBuilder.CreateBox(
  "k1",
  {
    height:20,
    width:50,
    depth:1,
  },scene
);
k1.position.set(-75,0,45)
k1.checkCollisions = true;
k1.rotation.x = Math.PI / 2;
k1.material = wallMaterial4;
const k2= BABYLON.MeshBuilder.CreateBox(
  "k2",
  {
    height:3,
    width:6,
    depth:3,
  },scene
);
k2.position.set(-89,4,40)
k2.checkCollisions = true;
k2.rotation.z = Math.PI / 2;
k2.material = wallMaterial6;
const k3= BABYLON.MeshBuilder.CreateBox(
  "k3",
  {
    height:2,
    width:6,
    depth:2,
  },scene
);
k3.position.set(-89,4.8,40)
k3.checkCollisions = true;
k3.rotation.z = Math.PI / 2;
k3.material = wallMaterial6;
const k4= BABYLON.MeshBuilder.CreateBox(
  "k4",
  {
    height:7,
    width:0.5,
    depth:4,
  },scene
);
k4.position.set(-89,8.1,40)
k4.checkCollisions = true;
k4.rotation.z = Math.PI / 2;
k4.rotation.x = Math.PI / 8;
k4.material = wallMaterial6;
const k5= BABYLON.MeshBuilder.CreateBox(
  "k5",
  {
    height:2,
    width:25,
    depth:2,
  },scene
);
k5.position.set(-98,13,52)
k5.checkCollisions = true;
k5.rotation.z = Math.PI / 2;
k5.material = wallMaterial7;
const k6= BABYLON.MeshBuilder.CreateBox(
  "k6",
  {
    height:2,
    width:25,
    depth:2,
  },scene
);
k6.position.set(-52,13,52)
k6.checkCollisions = true;
k6.rotation.z = Math.PI / 2;
k6.material = wallMaterial7;
const k7= BABYLON.MeshBuilder.CreateBox(
  "k7",
  {
    height:42,
    width:25,
    depth:1,
  },scene
);
k7.position.set(-75,13,52)
k7.checkCollisions = true;
k7.rotation.z = Math.PI / 2;
k7.material = wallMaterial7;
var k8Texture = new BABYLON.Texture("public/texture/wall.jpg", scene);
var k8Material = new BABYLON.StandardMaterial("k8Material", scene);
k8Material.diffuseTexture = k8Texture;
const k8= BABYLON.MeshBuilder.CreateBox(
  "k8",
  {
    height:42,
    width:12,
    depth:1,
  },scene
);
k8.position.set(-75,4,51.5)
k8.checkCollisions = true;
k8.rotation.z = Math.PI / 2;
k8.material = k8Material;
//黑板
var h1Texture = new BABYLON.Texture("public/texture/hb.jpg", scene);
var h1Material = new BABYLON.StandardMaterial("h1Material", scene);
h1Material.diffuseTexture = h1Texture; 
var h6Texture = new BABYLON.Texture("public/texture/ppt.jpg", scene);
var h6Material = new BABYLON.StandardMaterial("h6Material", scene);
h6Material.diffuseTexture = h6Texture; 
const h1= BABYLON.MeshBuilder.CreateBox(
  "h1",
  {
    height:18,
    width:12,
    depth:1,
  },scene
);
h1.position.set(-64,17,51.5)
h1.checkCollisions = true;
h1.rotation.z = Math.PI / 2;
h1.material = h1Material;
const h2= BABYLON.MeshBuilder.CreateBox(
  "h2",
  {
    height:18,
    width:0.5,
    depth:0.5,
  },scene
);
h2.position.set(-64,11,51)
h2.checkCollisions = true;
h2.rotation.z = Math.PI / 2;
h2.material = wallMaterial3;
const h3= BABYLON.MeshBuilder.CreateBox(
  "h3",
  {
    height:18,
    width:0.5,
    depth:0.5,
  },scene
);
h3.position.set(-64,23,51)
h3.checkCollisions = true;
h3.rotation.z = Math.PI / 2;
h3.material = wallMaterial3;
const h4= BABYLON.MeshBuilder.CreateBox(
  "h4",
  {
    height:12.5,
    width:0.5,
    depth:0.5,
  },scene
);
h4.position.set(-73,17,51)
h4.checkCollisions = true;
h4.material = wallMaterial3;
const h5= BABYLON.MeshBuilder.CreateBox(
  "h5",
  {
    height:12.5,
    width:0.5,
    depth:0.5,
  },scene
);
h5.position.set(-55,17,51)
h5.checkCollisions = true;
h5.material = wallMaterial3;
const h6= BABYLON.MeshBuilder.CreateBox(
  "h6",
  {
    height:20,
    width:12,
    depth:1,
  },scene
);
h6.position.set(-84,17,51.5)
h6.checkCollisions = true;
h6.rotation.z = Math.PI / 2;
h6.material = h6Material;
const h7= BABYLON.MeshBuilder.CreateBox(
  "h7",
  {
    height:21,
    width:13,
    depth:1,
  },scene
);
h7.position.set(-84,17,51.6)
h7.checkCollisions = true;
h7.rotation.z = Math.PI / 2;
h7.material =wallMaterial6;
var h8Texture = new BABYLON.Texture("public/texture/bt/8.jpg", scene);
var h8Material = new BABYLON.StandardMaterial("h8Material", scene);
h8Material.diffuseTexture = h8Texture; 
const h8= BABYLON.MeshBuilder.CreateBox(
  "h8",
  {
    height:6,
    width:1.8,
    depth:0.5,
  },scene
);
h8.position.set(-74,24.5,51)
h8.checkCollisions = true;
h8.rotation.z = Math.PI / 2;
h8.material =h8Material;
//书架
var c0Texture = new BABYLON.Texture("public/texture/bt/1.jpg", scene);
var c0Material = new BABYLON.StandardMaterial("c0Material", scene);
c0Material.diffuseTexture = c0Texture; 
const c0= BABYLON.MeshBuilder.CreateBox(
  "c0",
  {
    height:1.8,
    width:6,
    depth:0.5,
  },scene
);
c0.position.set(-98,22.5,0)
c0.checkCollisions = true;
c0.rotation.y= Math.PI / 2;
c0.material = c0Material;
const c1= BABYLON.MeshBuilder.CreateBox(
  "c1",
  {
    height:5,
    width:40.8,
    depth:0.7,
  },scene
);
c1.position.set(-98,20,0)
c1.checkCollisions = true;
c1.rotation.y= Math.PI / 2;
c1.rotation.x= Math.PI / 2;
c1.material = stairMaterial;
const c2= BABYLON.MeshBuilder.CreateBox(
  "c2",
  {
    height:5,
    width:40,
    depth:0.7,
  },scene
);
c2.position.set(-98,0,0)
c2.checkCollisions = true;
c2.rotation.y= Math.PI / 2;
c2.rotation.x= Math.PI / 2;
c2.material = stairMaterial;
const c3= BABYLON.MeshBuilder.CreateBox(
  "c3",
  {
    height:5,
    width:20,
    depth:0.7,
  },scene
);
c3.position.set(-98,10,-20)
c3.checkCollisions = true;
c3.rotation.z= Math.PI / 2;
c3.material = stairMaterial;
const c4= BABYLON.MeshBuilder.CreateBox(
  "c4",
  {
    height:5,
    width:20,
    depth:0.7,
  },scene
);
c4.position.set(-98,10,20)
c4.checkCollisions = true;
c4.rotation.z= Math.PI / 2;
c4.material = stairMaterial;
const c5= BABYLON.MeshBuilder.CreateBox(
  "c5",
  {
    height:5,
    width:40,
    depth:0.7,
  },scene
);
c5.position.set(-98,4,0)
c5.checkCollisions = true;
c5.rotation.y= Math.PI / 2;
c5.rotation.x= Math.PI / 2;
c5.material = stairMaterial;
const c6= BABYLON.MeshBuilder.CreateBox(
  "c6",
  {
    height:5,
    width:40,
    depth:0.7,
  },scene
);
c6.position.set(-98,8,0)
c6.checkCollisions = true;
c6.rotation.y= Math.PI / 2;
c6.rotation.x= Math.PI / 2;
c6.material = stairMaterial;
const c7= BABYLON.MeshBuilder.CreateBox(
  "c7",
  {
    height:5,
    width:40,
    depth:0.7,
  },scene
);
c7.position.set(-98,12,0)
c7.checkCollisions = true;
c7.rotation.y= Math.PI / 2;
c7.rotation.x= Math.PI / 2;
c7.material = stairMaterial;
const c8= BABYLON.MeshBuilder.CreateBox(
  "c8",
  {
    height:5,
    width:40,
    depth:0.7,
  },scene
);
c8.position.set(-98,16,0)
c8.checkCollisions = true;
c8.rotation.y= Math.PI / 2;
c8.rotation.x= Math.PI / 2;
c8.material = stairMaterial;
//书本
var b01Texture = new BABYLON.Texture("public/texture/text/1.jpg", scene);
var b01Material = new BABYLON.StandardMaterial("b01Material", scene);
b01Material.diffuseTexture = b01Texture; 
var b02Texture = new BABYLON.Texture("public/texture/text/2.jpg", scene);
var b02Material = new BABYLON.StandardMaterial("b02Material", scene);
b02Material.diffuseTexture = b02Texture; 
var b03Texture = new BABYLON.Texture("public/texture/text/3.jpg", scene);
var b03Material = new BABYLON.StandardMaterial("b03Material", scene);
b03Material.diffuseTexture = b03Texture; 
var b04Texture = new BABYLON.Texture("public/texture/text/4.jpg", scene);
var b04Material = new BABYLON.StandardMaterial("b04Material", scene);
b04Material.diffuseTexture = b04Texture; 
var b05Texture = new BABYLON.Texture("public/texture/text/5.jpg", scene);
var b05Material = new BABYLON.StandardMaterial("b05Material", scene);
b05Material.diffuseTexture = b05Texture; 
const b01= BABYLON.MeshBuilder.CreateBox(
  "b01",
  {
    height:1.5,
    width:3,
    depth:0.2,
  },scene
);
b01.position.set(-96.5,19,-18)
b01.checkCollisions = true;
b01.rotation.y= Math.PI / 2;
b01.material = b01Material;
const b02= BABYLON.MeshBuilder.CreateBox(
  "b02",
  {
    height:1.5,
    width:3,
    depth:0.2,
  },scene
);
b02.position.set(-96.5,15,-18)
b02.checkCollisions = true;
b02.rotation.y= Math.PI / 2;
b02.material = b02Material;
const b03= BABYLON.MeshBuilder.CreateBox(
  "b03",
  {
    height:1.5,
    width:3,
    depth:0.2,
  },scene
);
b03.position.set(-96.5,11,-18)
b03.checkCollisions = true;
b03.rotation.y= Math.PI / 2;
b03.material = b03Material;
const b04= BABYLON.MeshBuilder.CreateBox(
  "b04",
  {
    height:1.5,
    width:3,
    depth:0.2,
  },scene
);
b04.position.set(-96.5,7,-18)
b04.checkCollisions = true;
b04.rotation.y= Math.PI / 2;
b04.material = b04Material;
const b05= BABYLON.MeshBuilder.CreateBox(
  "b05",
  {
    height:1.5,
    width:3,
    depth:0.2,
  },scene
);
b05.position.set(-96.5,3,-18)
b05.checkCollisions = true;
b05.rotation.y= Math.PI / 2;
b05.material = b05Material;
const bb1= BABYLON.MeshBuilder.CreateBox(
  "bb1",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
//材质
var bb6Texture = new BABYLON.Texture("public/texture/python/1.jpg", scene);
var bb6Material = new BABYLON.StandardMaterial("bb6Material", scene);
bb6Material.diffuseTexture = bb6Texture; 
var bb4Texture = new BABYLON.Texture("public/texture/python/2.jpg", scene);
var bb4Material = new BABYLON.StandardMaterial("bb4Material", scene);
bb4Material.diffuseTexture = bb4Texture; 
var bb2Texture = new BABYLON.Texture("public/texture/python/3.jpg", scene);
var bb2Material = new BABYLON.StandardMaterial("bb2Material", scene);
bb2Material.diffuseTexture = bb2Texture; 
var bb1Texture = new BABYLON.Texture("public/texture/python/4.jpg", scene);
var bb1Material = new BABYLON.StandardMaterial("bb1Material", scene);
bb1Material.diffuseTexture = bb1Texture; 
var bb3Texture = new BABYLON.Texture("public/texture/python/5.jpg", scene);
var bb3Material = new BABYLON.StandardMaterial("bb3Material", scene);
bb3Material.diffuseTexture = bb3Texture; 
var bb5Texture = new BABYLON.Texture("public/texture/python/6.jpg", scene);
var bb5Material = new BABYLON.StandardMaterial("bb5Material", scene);
bb5Material.diffuseTexture = bb5Texture; 
var bb7Texture = new BABYLON.Texture("public/texture/python/7.jpg", scene);
var bb7Material = new BABYLON.StandardMaterial("bb7Material", scene);
bb7Material.diffuseTexture = bb7Texture; 
bb1.position.set(-96.8,9.5,0)
bb1.checkCollisions = true;
bb1.rotation.z= Math.PI / 2;
bb1.rotation.y= Math.PI / 2;
bb1.rotation.x= -Math.PI / 6;
bb1.material = bb1Material;
bb1.actionManager = new BABYLON.ActionManager(scene);
bb1.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          window.location.href = 'https://codecombat.cn/'; 
      }
  )
);
const bb2= BABYLON.MeshBuilder.CreateBox(
  "bb2",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb2.position.set(-96.8,9.5,5)
bb2.checkCollisions = true;
bb2.rotation.z= Math.PI / 2;
bb2.rotation.y= Math.PI / 2;
bb2.rotation.x= -Math.PI / 6;
bb2.material = bb2Material;
bb2.actionManager = new BABYLON.ActionManager(scene);
bb2.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          window.location.href = 'https://checkio.org/'; 
      }
  )
);
const bb3= BABYLON.MeshBuilder.CreateBox(
  "bb3",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb3.position.set(-96.8,9.5,-5)
bb3.checkCollisions = true;
bb3.rotation.z= Math.PI / 2;
bb3.rotation.y= Math.PI / 2;
bb3.rotation.x= -Math.PI / 6;
bb3.material = bb3Material;
bb3.actionManager = new BABYLON.ActionManager(scene);
bb3.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          window.location.href = 'https://codecombat.cn/'; 
      }
  )
);
const bb4= BABYLON.MeshBuilder.CreateBox(
  "bb4",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb4.position.set(-96.8,9.5,10)
bb4.checkCollisions = true;
bb4.rotation.z= Math.PI / 2;
bb4.rotation.y= Math.PI / 2;
bb4.rotation.x= -Math.PI / 6;
bb4.material = bb4Material;
bb4.actionManager = new BABYLON.ActionManager(scene);
bb4.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          window.location.href = 'https://cyber-dojo.org/creator/home'; 
      }
  )
);
const bb5= BABYLON.MeshBuilder.CreateBox(
  "bb5",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb5.position.set(-96.8,9.5,-10)
bb5.checkCollisions = true;
bb5.rotation.z= Math.PI / 2;
bb5.rotation.y= Math.PI / 2;
bb5.rotation.x= -Math.PI / 6;
bb5.material = bb5Material;
bb5.actionManager = new BABYLON.ActionManager(scene);
bb5.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          window.location.href = 'http://www.pythontip.com/explore/trending'; 
      }
  )
);
const bb6= BABYLON.MeshBuilder.CreateBox(
  "bb6",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb6.position.set(-96.8,9.5,15)
bb6.checkCollisions = true;
bb6.rotation.z= Math.PI / 2;
bb6.rotation.y= Math.PI / 2;
bb6.rotation.x= -Math.PI / 6;
bb6.material = bb6Material;
bb6.actionManager = new BABYLON.ActionManager(scene);
bb6.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          window.location.href = 'https://leetcode.cn/'; 
      }
  )
);
const bb7= BABYLON.MeshBuilder.CreateBox(
  "bb7",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb7.position.set(-96.8,9.5,-15)
bb7.checkCollisions = true;
bb7.rotation.z= Math.PI / 2;
bb7.rotation.y= Math.PI / 2;
bb7.rotation.x= -Math.PI / 6;
bb7.material = bb7Material;
bb7.actionManager = new BABYLON.ActionManager(scene);
bb7.actionManager.registerAction(
  new BABYLON.ExecuteCodeAction(
      BABYLON.ActionManager.OnPickTrigger,
      () => {
          window.location.href = 'https://www.codewars.com/'; 
      }
  )
);
var bb61Texture = new BABYLON.Texture("public/texture/java/1.jpg", scene);
var bb61Material = new BABYLON.StandardMaterial("bb61Material", scene);
bb61Material.diffuseTexture = bb61Texture; 
var bb41Texture = new BABYLON.Texture("public/texture/java/2.jpg", scene);
var bb41Material = new BABYLON.StandardMaterial("bb41Material", scene);
bb41Material.diffuseTexture = bb41Texture; 
var bb21Texture = new BABYLON.Texture("public/texture/java/3.jpg", scene);
var bb21Material = new BABYLON.StandardMaterial("bb21Material", scene);
bb21Material.diffuseTexture = bb21Texture; 
var bb11Texture = new BABYLON.Texture("public/texture/java/4.jpg", scene);
var bb11Material = new BABYLON.StandardMaterial("bb11Material", scene);
bb11Material.diffuseTexture = bb11Texture; 
var bb31Texture = new BABYLON.Texture("public/texture/java/5.jpg", scene);
var bb31Material = new BABYLON.StandardMaterial("bb31Material", scene);
bb31Material.diffuseTexture = bb31Texture; 
var bb51Texture = new BABYLON.Texture("public/texture/java/6.jpg", scene);
var bb51Material = new BABYLON.StandardMaterial("bb51Material", scene);
bb51Material.diffuseTexture = bb51Texture; 
var bb71Texture = new BABYLON.Texture("public/texture/java/7.jpg", scene);
var bb71Material = new BABYLON.StandardMaterial("bb71Material", scene);
bb71Material.diffuseTexture = bb71Texture; 
const bb11= BABYLON.MeshBuilder.CreateBox(
  "bb11",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb11.position.set(-96.8,13.5,0)
bb11.checkCollisions = true;
bb11.rotation.z= Math.PI / 2;
bb11.rotation.y= Math.PI / 2;
bb11.rotation.x= -Math.PI / 6;
bb11.material = bb11Material;
const bb21= BABYLON.MeshBuilder.CreateBox(
  "bb21",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb21.position.set(-96.8,13.5,5)
bb21.checkCollisions = true;
bb21.rotation.z= Math.PI / 2;
bb21.rotation.y= Math.PI / 2;
bb21.rotation.x= -Math.PI / 6;
bb21.material = bb21Material;
const bb31= BABYLON.MeshBuilder.CreateBox(
  "bb31",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb31.position.set(-96.8,13.5,-5)
bb31.checkCollisions = true;
bb31.rotation.z= Math.PI / 2;
bb31.rotation.y= Math.PI / 2;
bb31.rotation.x= -Math.PI / 6;
bb31.material = bb31Material;
const bb41= BABYLON.MeshBuilder.CreateBox(
  "bb41",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb41.position.set(-96.8,13.5,10)
bb41.checkCollisions = true;
bb41.rotation.z= Math.PI / 2;
bb41.rotation.y= Math.PI / 2;
bb41.rotation.x= -Math.PI / 6;
bb41.material = bb41Material;
const bb51= BABYLON.MeshBuilder.CreateBox(
  "bb51",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb51.position.set(-96.8,13.5,-10)
bb51.checkCollisions = true;
bb51.rotation.z= Math.PI / 2;
bb51.rotation.y= Math.PI / 2;
bb51.rotation.x= -Math.PI / 6;
bb51.material = bb51Material;
const bb61= BABYLON.MeshBuilder.CreateBox(
  "bb61",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb61.position.set(-96.8,13.5,15)
bb61.checkCollisions = true;
bb61.rotation.z= Math.PI / 2;
bb61.rotation.y= Math.PI / 2;
bb61.rotation.x= -Math.PI / 6;
bb61.material = bb61Material;
const bb71= BABYLON.MeshBuilder.CreateBox(
  "bb71",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb71.position.set(-96.8,13.5,-15)
bb71.checkCollisions = true;
bb71.rotation.z= Math.PI / 2;
bb71.rotation.y= Math.PI / 2;
bb71.rotation.x= -Math.PI / 6;
bb71.material = bb71Material;

var bb62Texture = new BABYLON.Texture("public/texture/js/1.jpg", scene);
var bb62Material = new BABYLON.StandardMaterial("bb62Material", scene);
bb62Material.diffuseTexture = bb62Texture; 
var bb42Texture = new BABYLON.Texture("public/texture/js/2.jpg", scene);
var bb42Material = new BABYLON.StandardMaterial("bb42Material", scene);
bb42Material.diffuseTexture = bb42Texture; 
var bb22Texture = new BABYLON.Texture("public/texture/js/3.jpg", scene);
var bb22Material = new BABYLON.StandardMaterial("bb22Material", scene);
bb22Material.diffuseTexture = bb22Texture; 
var bb12Texture = new BABYLON.Texture("public/texture/js/4.jpg", scene);
var bb12Material = new BABYLON.StandardMaterial("bb12Material", scene);
bb12Material.diffuseTexture = bb12Texture; 
var bb32Texture = new BABYLON.Texture("public/texture/js/5.jpg", scene);
var bb32Material = new BABYLON.StandardMaterial("bb32Material", scene);
bb32Material.diffuseTexture = bb32Texture; 
var bb52Texture = new BABYLON.Texture("public/texture/js/6.jpg", scene);
var bb52Material = new BABYLON.StandardMaterial("bb52Material", scene);
bb52Material.diffuseTexture = bb52Texture; 
var bb72Texture = new BABYLON.Texture("public/texture/js/7.jpg", scene);
var bb72Material = new BABYLON.StandardMaterial("bb72Material", scene);
bb72Material.diffuseTexture = bb72Texture; 
const bb12= BABYLON.MeshBuilder.CreateBox(
  "bb12",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb12.position.set(-96.8,17.5,0)
bb12.checkCollisions = true;
bb12.rotation.z= Math.PI / 2;
bb12.rotation.y= Math.PI / 2;
bb12.rotation.x= -Math.PI / 6;
bb12.material = bb12Material;
const bb22= BABYLON.MeshBuilder.CreateBox(
  "bb22",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb22.position.set(-96.8,17.5,5)
bb22.checkCollisions = true;
bb22.rotation.z= Math.PI / 2;
bb22.rotation.y= Math.PI / 2;
bb22.rotation.x= -Math.PI / 6;
bb22.material = bb22Material;
const bb32= BABYLON.MeshBuilder.CreateBox(
  "bb32",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb32.position.set(-96.8,17.5,-5)
bb32.checkCollisions = true;
bb32.rotation.z= Math.PI / 2;
bb32.rotation.y= Math.PI / 2;
bb32.rotation.x= -Math.PI / 6;
bb32.material = bb32Material;
const bb42= BABYLON.MeshBuilder.CreateBox(
  "bb42",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb42.position.set(-96.8,17.5,10)
bb42.checkCollisions = true;
bb42.rotation.z= Math.PI / 2;
bb42.rotation.y= Math.PI / 2;
bb42.rotation.x= -Math.PI / 6;
bb42.material = bb42Material;
const bb52= BABYLON.MeshBuilder.CreateBox(
  "bb52",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb52.position.set(-96.8,17.5,-10)
bb52.checkCollisions = true;
bb52.rotation.z= Math.PI / 2;
bb52.rotation.y= Math.PI / 2;
bb52.rotation.x= -Math.PI / 6;
bb52.material = bb52Material;
const bb62= BABYLON.MeshBuilder.CreateBox(
  "bb62",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb62.position.set(-96.8,17.5,15)
bb62.checkCollisions = true;
bb62.rotation.z= Math.PI / 2;
bb62.rotation.y= Math.PI / 2;
bb62.rotation.x= -Math.PI / 6;
bb62.material = bb62Material;
const bb72= BABYLON.MeshBuilder.CreateBox(
  "bb72",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb72.position.set(-96.8,17.5,-15)
bb72.checkCollisions = true;
bb72.rotation.z= Math.PI / 2;
bb72.rotation.y= Math.PI / 2;
bb72.rotation.x= -Math.PI / 6;
bb72.material = bb72Material;
var bb63Texture = new BABYLON.Texture("public/texture/c++/1.jpg", scene);
var bb63Material = new BABYLON.StandardMaterial("bb63Material", scene);
bb63Material.diffuseTexture = bb63Texture; 
var bb43Texture = new BABYLON.Texture("public/texture/c++/2.jpg", scene);
var bb43Material = new BABYLON.StandardMaterial("bb43Material", scene);
bb43Material.diffuseTexture = bb43Texture; 
var bb23Texture = new BABYLON.Texture("public/texture/c++/3.jpg", scene);
var bb23Material = new BABYLON.StandardMaterial("bb23Material", scene);
bb23Material.diffuseTexture = bb23Texture; 
var bb13Texture = new BABYLON.Texture("public/texture/c++/4.jpg", scene);
var bb13Material = new BABYLON.StandardMaterial("bb13Material", scene);
bb13Material.diffuseTexture = bb13Texture; 
var bb33Texture = new BABYLON.Texture("public/texture/c++/5.jpg", scene);
var bb33Material = new BABYLON.StandardMaterial("bb33Material", scene);
bb33Material.diffuseTexture = bb33Texture; 
var bb53Texture = new BABYLON.Texture("public/texture/c++/6.jpg", scene);
var bb53Material = new BABYLON.StandardMaterial("bb53Material", scene);
bb53Material.diffuseTexture = bb53Texture; 
var bb73Texture = new BABYLON.Texture("public/texture/c++/7.jpg", scene);
var bb73Material = new BABYLON.StandardMaterial("bb73Material", scene);
bb73Material.diffuseTexture = bb73Texture; 
const bb13= BABYLON.MeshBuilder.CreateBox(
  "bb13",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb13.position.set(-96.8,5.5,0)
bb13.checkCollisions = true;
bb13.rotation.z= Math.PI / 2;
bb13.rotation.y= Math.PI / 2;
bb13.rotation.x= -Math.PI / 6;
bb13.material = bb13Material;
const bb23= BABYLON.MeshBuilder.CreateBox(
  "bb23",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb23.position.set(-96.8,5.5,5)
bb23.checkCollisions = true;
bb23.rotation.z= Math.PI / 2;
bb23.rotation.y= Math.PI / 2;
bb23.rotation.x= -Math.PI / 6;
bb23.material = bb23Material;
const bb33= BABYLON.MeshBuilder.CreateBox(
  "bb33",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb33.position.set(-96.8,5.5,-5)
bb33.checkCollisions = true;
bb33.rotation.z= Math.PI / 2;
bb33.rotation.y= Math.PI / 2;
bb33.rotation.x= -Math.PI / 6;
bb33.material = bb33Material;
const bb43= BABYLON.MeshBuilder.CreateBox(
  "bb43",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb43.position.set(-96.8,5.5,10)
bb43.checkCollisions = true;
bb43.rotation.z= Math.PI / 2;
bb43.rotation.y= Math.PI / 2;
bb43.rotation.x= -Math.PI / 6;
bb43.material = bb43Material;
const bb53= BABYLON.MeshBuilder.CreateBox(
  "bb53",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb53.position.set(-96.8,5.5,-10)
bb53.checkCollisions = true;
bb53.rotation.z= Math.PI / 2;
bb53.rotation.y= Math.PI / 2;
bb53.rotation.x= -Math.PI / 6;
bb53.material = bb53Material;
const bb63= BABYLON.MeshBuilder.CreateBox(
  "bb63",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb63.position.set(-96.8,5.5,15)
bb63.checkCollisions = true;
bb63.rotation.z= Math.PI / 2;
bb63.rotation.y= Math.PI / 2;
bb63.rotation.x= -Math.PI / 6;
bb63.material = bb63Material;
const bb73= BABYLON.MeshBuilder.CreateBox(
  "bb73",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb73.position.set(-96.8,5.5,-15)
bb73.checkCollisions = true;
bb73.rotation.z= Math.PI / 2;
bb73.rotation.y= Math.PI / 2;
bb73.rotation.x= -Math.PI / 6;
bb73.material = bb73Material;
var bb60Texture = new BABYLON.Texture("public/texture/python/1.jpg", scene);
var bb60Material = new BABYLON.StandardMaterial("bb60Material", scene);
bb60Material.diffuseTexture = bb60Texture; 
var bb40Texture = new BABYLON.Texture("public/texture/python/2.jpg", scene);
var bb40Material = new BABYLON.StandardMaterial("bb40Material", scene);
bb40Material.diffuseTexture = bb40Texture; 
var bb20Texture = new BABYLON.Texture("public/texture/python/3.jpg", scene);
var bb20Material = new BABYLON.StandardMaterial("bb20Material", scene);
bb20Material.diffuseTexture = bb20Texture; 
var bb10Texture = new BABYLON.Texture("public/texture/python/4.jpg", scene);
var bb10Material = new BABYLON.StandardMaterial("bb10Material", scene);
bb10Material.diffuseTexture = bb10Texture; 
var bb30Texture = new BABYLON.Texture("public/texture/python/5.jpg", scene);
var bb30Material = new BABYLON.StandardMaterial("bb30Material", scene);
bb30Material.diffuseTexture = bb30Texture; 
var bb50Texture = new BABYLON.Texture("public/texture/python/6.jpg", scene);
var bb50Material = new BABYLON.StandardMaterial("bb50Material", scene);
bb50Material.diffuseTexture = bb50Texture; 
var bb70Texture = new BABYLON.Texture("public/texture/python/7.jpg", scene);
var bb70Material = new BABYLON.StandardMaterial("bb70Material", scene);
bb70Material.diffuseTexture = bb70Texture; 
const bb10= BABYLON.MeshBuilder.CreateBox(
  "bb10",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb10.position.set(-96.8,1.5,0)
bb10.checkCollisions = true;
bb10.rotation.z= Math.PI / 2;
bb10.rotation.y= Math.PI / 2;
bb10.rotation.x= -Math.PI / 6;
bb10.material = bb10Material;
const bb20= BABYLON.MeshBuilder.CreateBox(
  "bb20",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb20.position.set(-96.8,1.5,5)
bb20.checkCollisions = true;
bb20.rotation.z= Math.PI / 2;
bb20.rotation.y= Math.PI / 2;
bb20.rotation.x= -Math.PI / 6;
bb20.material = bb20Material;
const bb30= BABYLON.MeshBuilder.CreateBox(
  "bb30",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb30.position.set(-96.8,1.5,-5)
bb30.checkCollisions = true;
bb30.rotation.z= Math.PI / 2;
bb30.rotation.y= Math.PI / 2;
bb30.rotation.x= -Math.PI / 6;
bb30.material = bb30Material;
const bb40= BABYLON.MeshBuilder.CreateBox(
  "bb40",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb40.position.set(-96.8,1.5,10)
bb40.checkCollisions = true;
bb40.rotation.z= Math.PI / 2;
bb40.rotation.y= Math.PI / 2;
bb40.rotation.x= -Math.PI / 6;
bb40.material = bb40Material;
const bb50= BABYLON.MeshBuilder.CreateBox(
  "bb50",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb50.position.set(-96.8,1.5,-10)
bb50.checkCollisions = true;
bb50.rotation.z= Math.PI / 2;
bb50.rotation.y= Math.PI / 2;
bb50.rotation.x= -Math.PI / 6;
bb50.material = bb50Material;
const bb60= BABYLON.MeshBuilder.CreateBox(
  "bb60",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb60.position.set(-96.8,1.5,15)
bb60.checkCollisions = true;
bb60.rotation.z= Math.PI / 2;
bb60.rotation.y= Math.PI / 2;
bb60.rotation.x= -Math.PI / 6;
bb60.material = bb60Material;
const bb70= BABYLON.MeshBuilder.CreateBox(
  "bb70",
  {
    height:2,
    width:3,
    depth:0.7,
  },scene
);
bb70.position.set(-96.8,1.5,-15)
bb70.checkCollisions = true;
bb70.rotation.z= Math.PI / 2;
bb70.rotation.y= Math.PI / 2;
bb70.rotation.x= -Math.PI / 6;
bb70.material = bb70Material;
//天空盒子
const skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:1000}, scene);
const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
skyboxMaterial.backFaceCulling = false;
skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("public/texture/skybox", scene);
skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
skybox.material = skyboxMaterial;
camera.upperBetaLimit = Math.PI / 2.2;
//周围墙壁
const roomWidth = 200;
const roomHeight = 25;
const roomDepth = 110;
const wall1 = BABYLON.MeshBuilder.CreateBox('wall1', { width: roomWidth, height: roomHeight, depth: 1 }, scene);
wall1.position.y = roomHeight / 2;
wall1.position.z = roomDepth / 2;
const wall2 = BABYLON.MeshBuilder.CreateBox('wall2', { width: 1, height: roomHeight, depth: roomDepth }, scene);
wall2.position.x = roomWidth / 2;
wall2.position.y = roomHeight / 2;
const wall3 = wall1.clone('wall3');
wall3.position.z = -roomDepth / 2;
const wall4 = wall2.clone('wall4');
wall4.position.x = -roomWidth / 2;
//墙壁碰撞
wall1.checkCollisions = true;
wall2.checkCollisions = true;
wall3.checkCollisions = true;
wall4.checkCollisions = true;
//墙壁材质
wall1.material = transparentMaterial;
wall2.material = wallMaterial;
wall3.material = wallMaterial;
wall4.material = wallMaterial;
let animation;
//加载gltf模型
const modle = BABYLON.SceneLoader.Append("modle/", "Cottage.glb", scene, (gltf) => {
  // 加载完成后的回调函数
  console.log(gltf);
  // 获取模型
  let modle = gltf.meshes[0]; // 假设模型在 gltf 中的索引为 0
  // 修改模型的位置
  modle.position = new BABYLON.Vector3(0, 0, 0); // 设置模型的新位置
  // 修改模型的缩放
  modle.scaling = new BABYLON.Vector3(1, 1, 1); // 设置模型的新缩放
});
modle.checkCollisions = true;
//创建圆柱体
const cylinder = BABYLON.MeshBuilder.CreateCylinder(
  "cykinder",//圆柱体名称
  {height:20,diameter:20},//圆柱体的高度和直径
  scene//圆柱体所在的场景
);
cylinder.position.set(40,0,4);
//缩小圆柱体高度
cylinder.scaling.set(1,0.5,1);
cylinder.checkCollisions = true;
cylinder.material =wallMaterial;
var ox1Texture = new BABYLON.Texture("public/texture/bt/3.jpg", scene);
var ox1Material = new BABYLON.StandardMaterial("ox1Material", scene);
ox1Material.diffuseTexture = ox1Texture; 
ox1Material.alpha = 0.6;
var ox2Texture = new BABYLON.Texture("public/texture/bt/33.jpg", scene);
var ox2Material = new BABYLON.StandardMaterial("ox2Material", scene);
ox2Material.diffuseTexture = ox2Texture; 
ox2Material.alpha = 0.6;
const ox1 = BABYLON.MeshBuilder.CreateBox(
  "ox1",
  {
    height:2,
    width:6,
    depth:0.01,
  },scene
);
ox1.position.set(40,19,4)
ox1.rotation.y = Math.PI / 2;
ox1.material=ox1Material
const ox2 = BABYLON.MeshBuilder.CreateBox(
  "ox2",
  {
    height:2,
    width:6,
    depth:0.01,
  },scene
);
ox2.position.set(40.1,19,4)
ox2.rotation.y = Math.PI / 2;
ox2.material=ox2Material
//创建圆锥体
const cone = BABYLON.MeshBuilder.CreateCylinder(
  "cone",//圆锥体名称
  {
    height:20,
    diameterTop:0,
    diameterBottom:30,
    tessellation:64,
  },
  scene//圆锥体所在场景
)
cone.position.set(40,10,4);
//缩小圆锥
cone.scaling.set(0.7,0.7,0.7)
cone.checkCollisions = true;
cone.material = wallMaterial2;
//创建圆环
const torus = BABYLON.MeshBuilder.CreateTorus(
  "torus",//圆环名称
  {
    diameter:12,//圆环的直径
    thickness:4,//圆环的厚度
    tessellation:32,//圆环的细分数
  },//圆环的直径和厚度
  scene,//圆环所在的场景
);
torus.position.set(40,13,4);
torus.checkCollisions = true;
torus.material = wallMaterial;
const cy1 = BABYLON.MeshBuilder.CreateCylinder(
  "cy1",//圆柱体名称
  {height:4,
    diameter:10},//圆柱体的高度和直径
  scene//圆柱体所在的场景
);
cy1.position.set(40,15,4);
cy1.material = wallMaterial2;
cy1.checkCollisions = true;
//渲染场景
engine.runRenderLoop(()=>{
  scene.render();
});
//监听窗口大小改变
window.addEventListener("resize",()=>{
  engine.resize();
});

