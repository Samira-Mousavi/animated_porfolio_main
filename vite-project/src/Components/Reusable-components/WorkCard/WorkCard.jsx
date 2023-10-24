import React from "react";
import "./WorkCard.css";

const WorkCard = ({ imageSrc, title, imgTitle, description, link }) => {
	return (
		<section className="works-card">

			<a className="works-link" target="_blank" href={link}>
				<img className="works-image"
					alt={`Project: ${title}`}
					src={imageSrc}
					title={imgTitle}
					loading="lazy"
				/>
			</a>

			<main className="works-content">
				<h2 className="works-title">
					<a className="works-title-link" target="_blank" href={link}>
						{title}
					</a>
				</h2>

				<p className="works-description">
					{description}
				</p>
			</main>

		</section>
	);
};

export default WorkCard;

