import React from "react";
import "./Footer.css";
import fb from '../../assets/fb.svg';
import linkedin from '../../assets/Linkedin.svg';
import twitter from '../../assets/twitter.svg';
import insta from '../../assets/insta.svg';

const Footer = () => {
	return (

		<footer className="footer">
			<ul className="icons">
				<li>
					<a href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
						<img className="icon" alt="Facebook" src={fb} />
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
						<img className="icon" alt="Instagram" src={insta} />
					</a>
				</li>
				<li>
					<a href="https://www.twitter.com/" target="_blank" aria-label="Twitter">
						<img className="icon" alt="Twitter" src={twitter} />
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/" target="_blank" aria-label="LinkedIn">
						<img className="icon" alt="LinkedIn" src={linkedin} />
					</a>
				</li>
			</ul>
			<p className="copyright">
				&copy; 2023 Samira Mousavi. All rights reserved.
			</p>
		</footer>

	);
};

export default Footer;
