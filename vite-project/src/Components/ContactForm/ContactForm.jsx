import React, { useState, useEffect } from "react";
import axios from "axios";
import '../ContactForm/ContactForm.css';
import Button from "../reusable-components/Button/Button";

function ContactForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [showValidation, setShowValidation] = useState({});
	const [showAlert, setShowAlert] = useState(false);
	const [alertMessage, setAlertMessage] = useState("");

	useEffect(() => {
		const validationTimer = setTimeout(() => {
			setShowValidation({});
		}, 3000);

		return () => clearTimeout(validationTimer);
	}, [showValidation]);

	useEffect(() => {
		const alertTimer = setTimeout(() => {
			setShowAlert(false);
			setAlertMessage("");
		}, 3000);

		return () => clearTimeout(alertTimer);
	}, [showAlert]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const newValidation = {};
		if (!name) {
			newValidation.name = true;
		}

		if (!name || !/^[A-Za-z\s]+$/.test(name)) {
			newValidation.name = true;
		}

		if (!email || !/\S+@\S+\.\S+/.test(email)) {
			newValidation.email = true;
		}
		if (!message) {
			newValidation.message = true;
		}

		if (!message || message.trim().length < 10) {
			newValidation.message = true;
		}

		if (Object.keys(newValidation).length > 0) {
			setShowValidation(newValidation);
			return;
		}
		axios
			.post(
				"https://formcarry.com/s/giQf-Djf68",
				{ name, email, message },
				{ headers: { Accept: "application/json" } }
			)
			.then(function (response) {
				console.log(response);
				setAlertMessage("Your message has been sent successfully!");
				setShowAlert(true);
				setName("");
				setEmail("");
				setMessage("");
			})
			.catch(function (error) {
				console.log(error);
				setShowAlert(true);
				setAlertMessage("An error occurred. Please try again later.");
			});
	};

	return (
		<section className="form-container" id="contact">

			<h3 className="section-title">Contact</h3>

			<form onSubmit={handleSubmit} className="form">

				<fieldset className="form-group">
					<input
						type="text"
						id="name"
						placeholder="Name"
						className={`input-control${showValidation.name ? " is-invalid" : ""
							}`}
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					{showValidation.name && (
						<p className="invalid-feedback">Please enter your Name</p>
					)}
				</fieldset>

				<fieldset className="form-group">
					<input
						type="email"
						id="email"
						placeholder="Email"
						className={`input-control${showValidation.email ? " is-invalid" : ""
							}`}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					{showValidation.email && (
						<p className="invalid-feedback">
							Please enter a valid Email address
						</p>
					)}
				</fieldset>

				<fieldset className="form-group">
					<textarea
						id="message"
						placeholder="Message"
						rows="12"
						className={`input-control${showValidation.message ? " is-invalid" : ""
							}`}
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					></textarea>
					{showValidation.message && (
						<p className="invalid-feedback">Please enter a Message</p>
					)}
				</fieldset>

				<Button label="Send Message" onClick={handleSubmit} type="submit" />

				{showAlert && (
					<p className="alert" role="alert">
						{alertMessage}
					</p>
				)}

			</form>
		</section>

	);
}

export default ContactForm;
