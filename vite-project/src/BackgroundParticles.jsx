import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const BackgroundParticles = () => {
	const particlesInit = async (main) => {
		console.log(main);
		await loadFull(main);
	};

	return (
		<>
			<Particles
				id="tsparticles"
				init={particlesInit}
				options={{
					"fullScreen": {
						"enable": true,
						"zIndex": 10
					},
					"particles": {
						"number": {
							"value": 12,
							"density": {
								"enable": false,
								"value_area": 900
							}
						},
						"color": {
							"value": "#0000",
						},
						shape: {
							character: {
								fill: true,
								font: "Rajdhani",
								style: "",
								value: ["1", "0", "1", "0", "1"],
								weight: "400",
							},
							polygon: { nb_sides: 10 },
							stroke: { color: "#00B359", width: 1 },
							type: "char"
						},
						"opacity": {
							"value": 0.8,
							"random": true,
							"anim": {
								"enable": true,
								"speed": 1,
								"opacity_min": 0.1,
								"sync": false
							}
						},
						"size": {
							"opacity": {
								"value": 0.05,
							},
							"value": 13,
							"random": false,
							"anim": {
								"enable": false,
								"speed": 40,
								"size_min": 0.1,
								"sync": false
							}
						},
						"rotate": {
							"value": 0,
							"random": true,
							"direction": "clockwise",
							"animation": {
								"enable": true,
								"speed": 5,
								"sync": false
							}
						},
						"line_linked": {
							"enable": true,
							"distance": 600,
							"color": "#d3d3d3",
							"opacity": 0.1,
							"width": 2
						},
						"move": {
							"enable": true,
							"speed": 2,
							"direction": "none",
							"random": false,
							"straight": false,
							"out_mode": "out",
							"attract": {
								"enable": false,
								"rotateX": 600,
								"rotateY": 1200
							}
						}
					},
					"interactivity": {
						"events": {
							"onhover": {
								"enable": false,
								"mode": ["grab"]
							},
							"onclick": {
								"enable": false,
								"mode": "bubble"
							},
							"resize": true
						},
						"modes": {
							"grab": {
								"distance": 400,
								"line_linked": {
									"opacity": 0.5,
									"color": "#FF80FF"
								}
							},
							"bubble": {
								"distance": 400,
								"size": 30,
								"duration": 2,
								"opacity": 8,
								"speed": 3
							},
							"repulse": {
								"distance": 200
							},
							"push": {
								"particles_nb": 4
							},
							"remove": {
								"particles_nb": 2
							}
						}
					},
					"retina_detect": true,
					"background": {
						"color": "transparent",
						"image": "",
						"position": "100% 100%",
						"repeat": "no-repeat",
						"size": "cover"
					}
				}
				}
			/>
		</>
	);
}

export default BackgroundParticles;