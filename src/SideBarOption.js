import React from "react";
import "./SideBarOption.css";
function SideBarOption({ Selected, Icon, title, number }) {
	return (
		<div className={`sidebaroption ${Selected && "sidebarbar--active"}`}>
			<Icon />
			<h3>{title}</h3>
			<p>{number}</p>
		</div>
	);
}

export default SideBarOption;
