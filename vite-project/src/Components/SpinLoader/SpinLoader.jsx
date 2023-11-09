import React from 'react';
import './SpinLoader.css';

const SpinLoader = () => {
	return (
		<section className="loading-container" aria-busy="true">
			<main className="loading-spinner"></main>
		</section>
	);
};

export default SpinLoader;
