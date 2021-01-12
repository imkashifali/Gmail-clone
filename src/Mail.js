import React from "react";
import "./Mail.css";

import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UnfoldLessIcon from "@material-ui/icons/UnfoldLess";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { useHistory } from "react-router-dom";
import { selectMessageOpen } from "./features/mailSlice.js";
import { useSelector } from "react-redux";

function Mail() {
	const history = useHistory();
	const selectedData = useSelector(selectMessageOpen);

	return (
		<div className="mail">
			<div className="mail__tools">
				<div className="mail__toolsLeft">
					<IconButton onClick={() => history.push("/")}>
						<ArrowBackIcon />
					</IconButton>
					<IconButton>
						<MoveToInboxIcon />
					</IconButton>
					<IconButton>
						<ErrorIcon />
					</IconButton>
					<IconButton>
						<DeleteIcon />
					</IconButton>
					<IconButton>
						<EmailIcon />
					</IconButton>
					<IconButton>
						<WatchLaterIcon />
					</IconButton>
					<IconButton>
						<CheckCircleIcon />
					</IconButton>
					<IconButton>
						<LabelImportantIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
				<div className="mail__toolsRight">
					<IconButton>
						<UnfoldLessIcon />
					</IconButton>
					<IconButton>
						<PrintIcon />
					</IconButton>
					<IconButton>
						<ExitToAppIcon />
					</IconButton>
				</div>
			</div>
			<div className="mail__body">
				<div className="mail__bodyHeader">
					<h2>{selectedData?.subject}</h2>
					<LabelImportantIcon className="mail__important" />
					<p>{selectedData?.title}</p>
					<p className="mail__time">{selectedData?.time}</p>
				</div>
				<div className="mail__message">
					<p>{selectedData?.description}</p>
				</div>
			</div>
		</div>
	);
}

export default Mail;