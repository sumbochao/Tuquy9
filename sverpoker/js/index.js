/**
 * Created by troic on 4/14/2016.
 */
var width = 960;
var height = 500;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(25, width/height, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

// create the cube
var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshPhongMaterial({
    ambient: 0x555555,
    color: 0x555555,
    specular: 0xffffff,
    shininess: 50,
    shading: THREE.SmoothShading
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// // create lights
// scene.add( new THREE.AmbientLight(0xff0040) );
//
// var light = new THREE.PointLight(0xffffff, 6, 40);
// light.position.set(20, 20, 20);
// scene.add(light);

// set the camera
camera.position.z = 5;

// define an animation loop
var render = function () {
    requestAnimationFrame(render);

    // rotate the cube
    cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    renderer.render(scene, camera);
};

render();