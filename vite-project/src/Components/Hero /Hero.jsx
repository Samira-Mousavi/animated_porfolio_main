import React from "react";
import "./Hero.css";
import Cube from "../Cube";
import TypingEffect from "../TypingEffect/TypingEffect";
import Button from "../reusable-components/Button/Button";
import pdfFile from '../../assets/CV-Samira-Mousavi.pdf';


const Hero = () => {
	const handleDownloadResume = () => {
		window.open(pdfFile, '_blank');
	};

	return (
		<section className="hero" id="home">

			<main className="about-me">

				<b className="aboutme">
					AboutMe &#61; &#40;&#41; &#61;&gt; &#123;
				</b>

				<article className="bold-text">
					<TypingEffect />
				</article>

				<article className="passionate-about-turning">
					Passionate about turning ideas into visually appealing and functional
					websites. This portfolio is a glimpse into my world of creative coding
					and user-centric design. Take a tour of my projects and let's connect
					for any exciting web ventures ahead!
				</article>

				<b className="b">
					&#125;
				</b>

				<Button label="Download Resume" onClick={handleDownloadResume} type="download" />

			</main>

			<Cube />

		</section>
	);
};

export default Hero;
