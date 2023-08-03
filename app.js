import * as THREE from 'three';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshPhongMaterial( { color: 0x00ffff } );
// const cube = new THREE.Mesh( geometry, material );

// camera.position.z = 5;

// scene.add( cube );

// const color = 0xFFFFFF;
// const intensity = 1;
// const light = new THREE.DirectionalLight(color, intensity);
// light.position.set(-1, 2, 4);
// scene.add(light);


// function animate() {
// 	requestAnimationFrame( animate );

//     cube.rotation.x += 0.005;
//     cube.rotation.y += 0.005;
	
//     renderer.render( scene, camera );
// }
// animate();


// import WebGL from 'three/addons/capabilities/WebGL.js';

// if (WebGL.isWebGLAvailable()){
//     animate()
// }
// else {
//     const warning = WebGL.getWebGLErrorMessage();
// 	document.getElementById( 'container' ).appendChild( warning );
// }


//********************************************************************* 


// const renderer = new THREE.WebGL1Renderer()
// renderer.setSize( window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
// camera.position.set(0,0,100);
// camera.lookAt(0,0,0);

// const scene = new THREE.Scene();

// const material = new THREE.LineBasicMaterial( {color:0x0000ff} );

// const points = [];
// points.push(new THREE.Vector3(-10,0,0));
// points.push(new THREE.Vector3(0,10,0));
// points.push(new THREE.Vector3(10,0,0));

// const geometry = new THREE.BufferGeometry().setFromPoints(points);

// const line = new THREE.Line( geometry, material);


// scene.add(line);
// renderer.render(scene, camera);


// // function animate() {
// // 	   requestAnimationFrame( animate );
// //     renderer.render( scene, camera );
// // }
// // animate();

//************************************************************************************************************

//THESE ARE 3 ROTATING CUBES

// const makeInstance = (geometry, color, x) => {
//     const material = new THREE.MeshPhongMaterial({color});
//     const cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);
//     cube.position.x = x;

//     return cube;
// }

// const cubes = [
//     makeInstance(geometry, 0x44aa88,  0),
//     makeInstance(geometry, 0x8844aa, -2),
//     makeInstance(geometry, 0xaa8844, 2)
// ];


// const render = (time) => {
//     time *= 0.001;

//     cubes.forEach((cube,ndx) => {
//         const speed = 1 + ndx * .1;
//         const rot = time * speed;
//         cube.rotation.x = rot;
//         cube.rotation.y = rot;
//     });
//     renderer.render(scene,camera);
//     requestAnimationFrame(render)
// }



// render(1)


// *************************************************************************************************************

//SUN, EARTH, AND MOON IN SOLAR SYSTEM SIMULATION

// const gui = new GUI();

// const renderer = new THREE.WebGLRenderer()
// renderer.setSize( window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
// camera.position.set(0,22.5,-42.5);
// camera.up.set(0,0,1);
// camera.lookAt(0,0,0);

// const scene = new THREE.Scene();

// {
//     const color = 0xFFFFFF;
//     const intensity = 500;
//     const light = new THREE.PointLight(color, intensity);
//     scene.add(light)
// }

// const objects = [];

// const solarSystem = new THREE.Object3D();
// scene.add(solarSystem);
// objects.push(solarSystem);


// const earthOrbit = new THREE.Object3D();
// earthOrbit.position.x = 10;
// solarSystem.add(earthOrbit);
// objects.push(earthOrbit);

// const moonOrbit = new THREE.Object3D();
// moonOrbit.position.x = 2;
// moonOrbit.position.y = 0.5;
// earthOrbit.add(moonOrbit);


// const radius = 1;
// const widthSegments = 15;
// const heightSegments = 15;
// const sphereGeometry = new THREE.SphereGeometry(
//     radius, widthSegments, heightSegments
// );


// const sunMaterial = new THREE.MeshPhongMaterial({emissive: 0xFFFF00});
// const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
// sunMesh.scale.set(5,5,5);
// solarSystem.add(sunMesh);
// objects.push(sunMesh);


// const earthMaterial = new THREE.MeshPhongMaterial({color: 0x2233FF, emissive: 0x112244});
// const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
// earthOrbit.add(earthMesh);


// const moonMaterial = new THREE.MeshPhongMaterial({color: 0x888888, emissive: 0x222222});
// const moonMesh = new THREE.Mesh(sphereGeometry, moonMaterial);
// moonMesh.scale.set(.5,.5,.5);
// moonOrbit.add(moonMesh);
// objects.push(moonMesh);


// class AxisGridHelper {
//     constructor(node, units = 10){
//         const axes = new THREE.AxesHelper();
//         axes.material.depthTest = false;
//         axes.renderOrder = 2;
//         node.add( axes );

//         const grid = new THREE.GridHelper( units, units );
//         grid.material.depthTest = false;
//         grid.renderOrder = 1;
//         node.add( grid );

//         this.grid = grid;
//         this.axes = axes;
//         this.visible = false;
//     }
//     get visible() {
//         return this._visible;
//     }
//     set visible( v ){
//         this._visible = v;
//         this.grid.visible = v;
//         this.axes.visible = v;
//     }
// }

// const makeAxisGrid = (node, label, units) => {
//     const helper = new AxisGridHelper(node, units);
//     gui.add(helper, 'visible').name(label);
// }

// makeAxisGrid( solarSystem, 'solarSystem', 26 );
// makeAxisGrid( sunMesh, 'sunMesh' );
// makeAxisGrid( earthOrbit, 'earthOrbit' );
// makeAxisGrid( earthMesh, 'earthMesh' );
// makeAxisGrid( moonOrbit, 'moonOrbit' );
// makeAxisGrid( moonMesh, 'moonMesh' );


// function render( time ) {

//     time *= 0.001;

//     objects.forEach( ( obj ) => {

//         obj.rotation.y = time;

//     } );

//     renderer.render( scene, camera );

//     requestAnimationFrame( render );

// }

// requestAnimationFrame( render );


//****************************************************************************************

//THIS IS A TANK


function main() {

    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGL1Renderer({antialias: true, canvas: canvas});
    renderer.setClearColor(0xAAAAAA);
    renderer.shadowMap.enabled = true;

    const makeCamera = (fov = 40) => {
        const aspect = 2;
        const zNear = 0.1;
        const zFar = 1000;
        return new THREE.PerspectiveCamera(fov, aspect, zNear, zFar)
    }

    const camera = makeCamera()
    camera.position.set(8, 4, 10).multiplyScalar( 3 );
    camera.lookAt( 0,0,0 );

    const scene = new THREE.Scene();

    {
        const light = new THREE.DirectionalLight( 0xffffff, 3 );
        light.position.set(0,20,0);
        scene.add(light);
        light.castShadow = true;
        light.shadow.mapSize.width = 2048;
        light.shadow.mapSize.height = 2048;

        const d = 50;
        light.shadow.camera.left = - d;
        light.shadow.camera.right = d;
        light.shadow.camera.top = d;
        light.shadow.camera.bottom = -d;
        light.shadow.camera.near = 1;
        light.shadow.camera.far = d;
        light.shadow.bias = 0.001;
    }

    {
        const light = new THREE.DirectionalLight( 0xffffff, 3 );
        light.position.set(1,2,4);
        scene.add(light);
    }

    const groundGeometry = new THREE.PlaneGeometry(50, 50);
    const groundMaterial = new THREE.MeshPhongMaterial({color: 0xCC8866});
    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh.rotation.x = Math.PI * -0.5;
    groundMesh.receiveShadow = true;
    scene.add(groundMesh);

    const carWidth = 4;
    const carHeight = 1
    const carLength = 8;

    const tank = new THREE.Object3D();
    scene.add(tank);

    const bodyGeometry = new THREE.BoxGeometry( carWidth, carHeight, carLength );
    const bodyMaterial = new THREE.MeshPhongMaterial({color: 0x6688AA});
    const bodyMesh = new THREE.Mesh( bodyGeometry, bodyMaterial);
    bodyMesh.position.y = 1.4;
    bodyGeometry.castShadow = true;
    tank.add( bodyMesh );

    const tankCameraFOV = 75;
    const tankCamera = makeCamera( tankCameraFOV );
    tankCamera.position.y = 3;
    tankCamera.position.z = -6;
    tankCamera.rotation.y = Math.PI;
    bodyMesh.add( tankCamera );

    const wheelRadius = 1;
    const wheelThickness = 0.5;
    const wheelSegments = 50;
    const wheelGeometry = new THREE.CylinderGeometry(
        wheelRadius, wheelRadius, wheelThickness, wheelSegments
    )
    const wheelMaterial = new THREE.MeshPhongMaterial({color: 0x808080});
    const wheelPositions = [
        [ -carWidth / 2 - wheelThickness / 2, -carHeight / 2, carLength / 3],
        [ carWidth / 2 + wheelThickness / 2, -carHeight / 2, carLength / 3],
        [ - carWidth / 2 - wheelThickness / 2, - carHeight / 2, 0 ],
		[ carWidth / 2 + wheelThickness / 2, - carHeight / 2, 0 ],
		[ - carWidth / 2 - wheelThickness / 2, - carHeight / 2, - carLength / 3 ],
		[ carWidth / 2 + wheelThickness / 2, - carHeight / 2, - carLength / 3 ],
    ];
    const wheelMeshes = wheelPositions.map( position => {
        const mesh = new THREE.Mesh(wheelGeometry, wheelMaterial);
        mesh.position.set(...position);
        mesh.rotation.z = Math.PI * 0.5;
        mesh.castShadow = true;
        bodyMesh.add( mesh );
        return mesh;
    });

    const domeRadius = 2;
    const domeWidthSubdivisions = 12;
    const domeHeightSubdivisions = 12;
    const domePhiStart = 0;
    const domePhiEnd = Math.PI * 2;
    const domeThetaStart = 0;
    const domeThetaEnd = Math.PI * 0.5;
    const domeGeometry = new THREE.SphereGeometry(
        domeRadius, domeWidthSubdivisions, domeHeightSubdivisions, domePhiStart, domePhiEnd, domeThetaStart, domeThetaEnd
    )
    const domeMesh = new THREE.Mesh( domeGeometry, bodyMaterial )
    domeMesh.castShadow = true;
    bodyMesh.add( domeMesh)
    domeMesh.position.y = 0.5;

    const turretWidth = 0.1;
    const turretHeight = 0.1;
    const turretLength = carLength * 0.15;
    const turretGeometry = new THREE.BoxGeometry(turretWidth, turretHeight, turretLength)
    const turretMesh = new THREE.Mesh( turretGeometry, bodyMaterial)
    const turretPivot = new THREE.Object3D();
    turretMesh.castShadow = true;
    turretPivot.scale.set(5,5,5);
    turretPivot.position.y = 0.5;
    turretMesh.position.z = turretLength * 0.5;
    turretPivot.add( turretMesh );
    bodyMesh.add( turretPivot );

    const turretCamera = makeCamera();
    turretCamera.position.y = 0.15;
    turretMesh.add(turretCamera);

    const targetGeometry = new THREE.SphereGeometry(0.5,6,3);
    const targetMaterial = new THREE.MeshPhongMaterial({color: 0x00FF00, flatShading: true });
    const targetMesh = new THREE.Mesh( targetGeometry, targetMaterial);
    const targetOrbit = new THREE.Object3D();
    const targetElevation = new THREE.Object3D();
    const targetBob = new THREE.Object3D();
    targetMesh.castShadow = true;
    scene.add( targetOrbit );
    targetOrbit.add( targetElevation );
    targetElevation.position.z = carLength * 2;
	targetElevation.position.y = 8;
	targetElevation.add( targetBob );
	targetBob.add( targetMesh );

    const targetCamera = makeCamera();
    const targetCameraPivot = new THREE.Object3D();
    targetCamera.position.y = 1;
    tankCamera.position.z = -2;
    targetCamera.rotation.y = Math.PI;
    targetBob.add( targetCameraPivot );
    targetCameraPivot.add( targetCamera );

    //Create a sine-like wave
    const curve = new THREE.SplineCurve(
        [
            new THREE.Vector2(-10, 0),
            new THREE.Vector2( - 5, 5 ),
            new THREE.Vector2( 0, 0 ),
            new THREE.Vector2( 5, - 5 ),
            new THREE.Vector2( 10, 0 ),
            new THREE.Vector2( 5, 10 ),
            new THREE.Vector2( - 5, 10 ),
            new THREE.Vector2( - 10, - 10 ),
            new THREE.Vector2( - 15, - 8 ),
            new THREE.Vector2( - 10, 0 )
        ]
    );

    const points = curve.getPoints(50);
    const geometry = new THREE.BufferGeometry().setFromPoints( points );
    const material = new THREE.LineBasicMaterial({color: 0xff0000});
    const splineObject = new THREE.Line( geometry, material );
    splineObject.rotation.x = Math.PI * 0.5;
    splineObject.position.y = 0.05;
    scene.add( splineObject );

    const resizeRendererToDisplaySize = ( renderer ) => {

		const canvas = renderer.domElement;
		const width = canvas.clientWidth;
		const height = canvas.clientHeight;
		const needResize = canvas.width !== width || canvas.height !== height;
		if ( needResize ) {

			renderer.setSize( width, height, false );

		}

		return needResize;

	}

    const targetPosition = new THREE.Vector3();
    const tankPosition = new THREE.Vector2();
    const tankTarget = new THREE.Vector2();

    const cameras = [
        { cam: camera, desc: 'detached camera', },
		{ cam: turretCamera, desc: 'on turret looking at target', },
		{ cam: targetCamera, desc: 'near target looking at tank', },
		{ cam: tankCamera, desc: 'above back of tank', }
    ];

    const infoElem = document.querySelector('#info');

    const render = (time) => {
        time *= 0.001;

        if( resizeRendererToDisplaySize(renderer) ){
            const canvas = renderer.domElement;
            cameras.forEach( cameraInfo => {
                const camera = cameraInfo.cam;
                camera.aspect = canvas.clientWidth / canvas.clientHeight;
                camera.updateProjectionMatrix();

            });
        }

        //move target
        targetOrbit.rotation.y = time * 0.27;
        targetBob.position.y = Math.sin( time * 0.27 ) * 4;
        targetMesh.rotation.x = time * 7;
        targetMesh.rotation.y = time * 13;
        targetMaterial.emissive.setHSL( time * 10 % 1, 1, 0.25 );
        targetMaterial.color.setHSL(time * 10 % 1, 1, 0.25 );

        //move tank
        const tankTime = time * 0.05;
        curve.getPointAt(tankTime % 1, tankPosition );
        curve.getPointAt( (tankTime + 0.01) % 1, tankTarget );
        tank.position.set( tankPosition.x, 0, tankPosition.y );
        tank.lookAt( tankTarget.x, 0, tankTarget.y)

        // face turret at target
        targetMesh.getWorldPosition( targetPosition );
        turretPivot.lookAt( targetPosition );

        // make the turretCamera look at target
        turretCamera.lookAt(targetPosition);

        // make the targetCameraPivot look at the at the tank
        tank.getWorldPosition( targetPosition );
        targetCameraPivot.lookAt( targetPosition );

        wheelMeshes.forEach( obj => {
            obj.rotation.x = time * 3;
        });

        const cams = cameras[time * 0.25 % cameras.length | 0];
        infoElem.textContent = cams.desc;

        renderer.render(scene, cams.cam);

        requestAnimationFrame( render );
    }

    requestAnimationFrame( render );

}

main();








