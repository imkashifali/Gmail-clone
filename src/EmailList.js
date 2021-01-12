import React, { useState, useEffect } from "react";
import "./EmailList.css";
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import Section from "./Section";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EmailRow from "./EmailRow";
import { db } from "./firebase.js";
function EmailList() {
	const [emails, setEmails] = useState([]);

	useEffect(() => {
		db.collection("emails")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) =>
				setEmails(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
			);
	}, []);

	return (
		<div className="emailList">
			<div className="emailList__setting">
				<div className="emailList__settingLeft">
					<Checkbox />
					<IconButton>
						<ArrowDownwardIcon />
					</IconButton>
					<IconButton>
						<ChevronRightIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
				<div className="emailList__settingRight">
					<IconButton>
						<ChevronLeftIcon />
					</IconButton>
					<IconButton>
						<RedoIcon />
					</IconButton>
					<IconButton>
						<KeyboardHideIcon />
					</IconButton>
					<IconButton>
						<SettingsIcon />
					</IconButton>
				</div>
			</div>
			<div className="emailList__sections">
				<Section Icon={InboxIcon} title="Inbox" color="red" selected />
				<Section Icon={PeopleIcon} title="Socail" color="#1A73E8" />
				<Section Icon={LocalOfferIcon} title="Promotions" color="green" />
			</div>
			<div className="emailList__List">
				{emails.map(({ id, data: { to, subject, message, timestamp } }) => (
					<EmailRow
						id={id}
						key={id}
						title={to}
						subject={subject}
						description={message}
						time={new Date(timestamp?.seconds * 1000).toUTCString()}
					/>
				))}
			</div>
		</div>
	);
}

export default EmailList;
