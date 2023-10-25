import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import textureImage from '../assets/samira.jpeg';

const Cube = () => {
	const containerRef = useRef();
	const sceneRef = useRef();
	const cameraRef = useRef();
	const rendererRef = useRef();

	useEffect(() => {
		const container = containerRef.current;
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
		const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

		//cube dimensions and position for better performance and visibility
		const cubeSize = 5;
		const cube = new THREE.Mesh(
			new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize),
			new THREE.MeshStandardMaterial({ map: new THREE.TextureLoader().load(textureImage), roughness: 0.5 })
		);

		//camera position
		camera.position.z = 8;

		//renderer setup
		renderer.setSize(container.clientWidth, container.clientHeight);
		renderer.setPixelRatio(window.devicePixelRatio);
		container.appendChild(renderer.domElement);

		//Position of the cube
		cube.position.set(0, 0, 0);
		scene.add(cube);

		//ambient light to the scene
		scene.add(new THREE.AmbientLight(0xffffff, 0.8));

		//Save refs for cleanup and resizing
		sceneRef.current = scene;
		cameraRef.current = camera;
		rendererRef.current = renderer;

		//Animation loop
		const animate = () => {
			requestAnimationFrame(animate);

			cube.rotation.x += 0.005;
			cube.rotation.y += 0.005;

			renderer.render(scene, camera);
		};

		animate();

		//Event listener for window resize
		const handleResize = () => {
			const newWidth = container.clientWidth;
			const newHeight = container.clientHeight;

			camera.aspect = newWidth / newHeight;
			camera.updateProjectionMatrix();

			renderer.setSize(newWidth, newHeight);
		};

		window.addEventListener('resize', handleResize);

		// Clean up
		return () => {
			window.removeEventListener('resize', handleResize);
			container.removeChild(renderer.domElement);
		};
	}, []);

	return <div ref={containerRef} style={{ width: '18rem', height: '18rem' }} />;
};

export default Cube;













