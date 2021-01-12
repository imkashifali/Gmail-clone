import React from "react";
import "./SideBar.css";
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import SideBarOption from "./SideBarOption";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice.js";
function SideBar() {
	const dispatch = useDispatch();

	return (
		<div className="sidebar">
			<Button
				startIcon={<AddIcon fontSize="medium" />}
				className="sidebar__compose"
				onClick={() => dispatch(openSendMessage())}
			>
				Compose
			</Button>
			<SideBarOption
				Icon={InboxIcon}
				title="Inbox"
				number={43}
				Selected={true}
			/>
			<SideBarOption Icon={StarIcon} title="Started" number={43} />
			<SideBarOption Icon={AccessTimeIcon} title="Snoozed" number={43} />
			<SideBarOption Icon={LabelImportantIcon} title="Important" number={43} />
			<SideBarOption Icon={NearMeIcon} title="Sent" number={43} />
			<SideBarOption Icon={NoteIcon} title="Draft" number={43} />
			<SideBarOption Icon={ExpandMoreIcon} title="More" number={43} />

			<div className="sidebar__footer">
				<div className="sidebar__footerIcon">
					<IconButton>
						<PersonIcon />
					</IconButton>
					<IconButton>
						<DuoIcon />
					</IconButton>
					<IconButton>
						<PhoneIcon />
					</IconButton>
				</div>
			</div>
			<div className="sidebar__sections"></div>
		</div>
	);
}

export default SideBar;
