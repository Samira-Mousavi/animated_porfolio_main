import React, { useState } from 'react';
import { Link } from 'react-scroll';
import "../Navbar/Navbar.css";

const Navbar = () => {
	const [menuActive, setMenuActive] = useState(false);
	const navigation = React.createRef();

	const toggleMenu = () => {
		setMenuActive(!menuActive);
		const childCount = navigation.current.children.length;
		navigation.current.style.setProperty('--childenNumber', childCount);
	};

	const closeMenu = () => {
		setMenuActive(false);
	};

	return (
		<nav>

			<Link to="home" className="logo" smooth={true}>
				<span>{`<`}</span>
				Samira Mousavi
				<span>{`/>`}</span>
			</Link>


			<ul ref={navigation} id="nav" className={menuActive ? 'active' : ''}>
				<li>
					<Link className="nav-link" to="home" smooth={true} onClick={closeMenu}>
						Home
					</Link>
				</li>
				<li>
					<Link className="nav-link" to="expertise" smooth={true} onClick={closeMenu}>
						Expertise
					</Link>
				</li>
				<li>
					<Link className="nav-link" to="projects" smooth={true} onClick={closeMenu}>
						Projects
					</Link>
				</li>
				<li>
					<a target="_blank" className="nav-link" rel="noopener noreferrer" href="https://github.com/Samira-Mousavi" onClick={closeMenu}>
						Github
					</a>
				</li>
				<li>
					<Link className="nav-link" to="contact" smooth={true} onClick={closeMenu}>
						Contact
					</Link>
				</li>
			</ul>

			<div className={`menu ${menuActive ? 'active' : ''}`} id="menu" onClick={toggleMenu}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</nav>
	);
};



export default Navbar;



