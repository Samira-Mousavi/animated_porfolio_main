import React from "react";
import "./ExpertiseCard.css";

const ExpertiseCard = ({ title, description }) => {
	return (
		<article className="card">
			<h3 className="text-wrapper">{title}</h3>
			<p className="description">{description}</p>
		</article>
	);
};

export default ExpertiseCard;
