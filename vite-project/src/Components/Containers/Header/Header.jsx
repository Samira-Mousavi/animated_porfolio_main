import React from 'react';
import './Header.css';
import Navbar from '../../Navbar/Navbar';
import Hero from '../../Hero/Hero';

const Header = () => {
	return (
		<section className='header'>
			<Navbar />
			<Hero />
		</section>
	)
}

export default Header