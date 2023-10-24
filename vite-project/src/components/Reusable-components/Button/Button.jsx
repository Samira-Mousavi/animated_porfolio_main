import React from 'react';
import PropTypes from 'prop-types';
import '../Button/Button.css';

const Button = ({ label, onClick, type }) => {
	return (
		<button className={`custom-button ${type}`} onClick={onClick}>
			{label}
		</button>
	);
};

Button.propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	type: PropTypes.oneOf(['download', 'submit']).isRequired,
};

export default Button;