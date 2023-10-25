import React, { useState, useEffect } from 'react';
import './TypingEffect.css';

const TypingEffect = () => {
	const [messageIndex, setMessageIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [currentMessage, setCurrentMessage] = useState('');

	const messages = [
		{
			text: ' Hi, I am ',
		},
		{
			text: 'Samira Mousavi',
			style: { color: '#FF5733' }
		},
		{
			text: ' Front End Web Developer!'
		}
	];

	useEffect(() => {
		const message = messages[messageIndex];
		const messageText = message.text;

		if (charIndex < messageText.length) {
			const interval = setInterval(() => {
				setCurrentMessage(prevMessage => prevMessage + messageText[charIndex]);
				setCharIndex(prevCharIndex => prevCharIndex + 1);
			}, 200);

			return () => clearInterval(interval);
		} else {
			setTimeout(() => {
				setCurrentMessage('');
				setCharIndex(0);
				setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
			}, 2000);
		}
	}, [messageIndex, charIndex]);

	return (
		<p className="typing-effect">
			<span style={messages[messageIndex].style}>{currentMessage}</span>
			<span className="caret">_</span>
		</p>
	);
};

export default TypingEffect;
