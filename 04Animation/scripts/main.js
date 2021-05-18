

// changing individual properties with code and using setInterval
var rotationSpeedFast = 0.5;
var rotationSpeedSlow = 0.01;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x.y.z += rotationSpeedFast;
    myOtherBox.object3D.rotation.x.y.z += rotationSpeedSlow;
	console.log(myOtherBox.object3D.rotation.x.y.z);
}

setInterval(spin, 16); //equivalent to 60 fps