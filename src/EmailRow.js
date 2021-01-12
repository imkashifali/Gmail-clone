import React from "react";
import "./EmailRow.css";
import { Checkbox, IconButton } from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import { useHistory } from "react-router-dom";
import {useDispatch} from "react-redux";
import {selectedMail} from "./features/mailSlice.js"

function EmailRow({ id, title, subject, description, time }) {
	const history = useHistory();
	const dispatch = useDispatch();

	const openMail = () => {
		dispatch(selectedMail({
			id, title, subject, description, time
		}));
		history.push("/mail");
	}
	return (
		<div onClick={openMail} className="emailRow">
			<div className="emailRow__options">
				<Checkbox />
				<IconButton>
					<StarBorderOutlinedIcon />
				</IconButton>
				<IconButton>
					<LabelImportantIcon />
				</IconButton>
			</div>
			<h3 className="emailRow__title"> {title}</h3>

			<div className="emailRow__message">
				<h4>
					{subject}
					<span className="emailRow__description">{description}</span>
				</h4>
			</div>
			<div className="emailRow__time">{time}</div>
		</div>
	);
}

export default EmailRow;