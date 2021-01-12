import React from "react";
import "./SendMail.css";
import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice.js";
import { db } from "./firebase.js";
import firebase from "firebase";

function SendMail() {
	const dispatch = useDispatch();

	const { register, handleSubmit, watch, errors } = useForm();

	const onsub = (formdata) => {
		console.log(formdata);

		db.collection("emails").add({
			to: formdata.to,
			subject: formdata.subject,
			message: formdata.message,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		dispatch(closeSendMessage());
	};
	return (
		<div className="sendMail">
			<div className="sendMail__header">
				<h3>New Message</h3>
				<CloseIcon
					className="sendMail__close"
					onClick={() => dispatch(closeSendMessage())}
				/>
			</div>

			<form onSubmit={handleSubmit(onsub)}>
				<input
					type="email"
					placeholder="To"
					name="to"
					ref={register({ required: true })}
				/>
				{errors.to && <p className="sendMail__error">This field is required</p>}

				<input
					type="text"
					placeholder="Subject"
					name="subject"
					ref={register({ required: true })}
				/>
				{errors.subject && (
					<p className="sendMail__error">This field is required</p>
				)}

				<input
					type="text"
					placeholder="Message.."
					className="sendMail__message"
					name="message"
					ref={register({ required: true })}
				/>
				{errors.message && (
					<p className="sendMail__error">This field is required</p>
				)}

				<div className="sendMail__options">
					<Button
						className="sendMail__send"
						variant="contained"
						color="primary"
						type="submit"
					>
						Send
					</Button>
				</div>
			</form>
		</div>
	);
}

export default SendMail;
