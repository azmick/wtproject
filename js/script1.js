// Three.js kütüphanesini sayfaya dahil edin
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

// Scene, kamera ve renderer oluşturun
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();

// Renderer'ı sayfaya ekleyin
document.body.appendChild( renderer.domElement );

// Küp geometrisini oluşturun
var geometry = new THREE.BoxGeometry();

// Materyal oluşturun
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

// Mesh oluşturun
var cube = new THREE.Mesh( geometry, material );

// Mesh'i sahneye ekleyin
scene.add( cube );

// Kamera pozisyonunu ayarlayın
camera.position.z = 5;

// Render fonksiyonunu oluşturun
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();
