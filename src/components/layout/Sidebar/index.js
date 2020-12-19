import React, {useEffect, useState} from "react";

import {
	FiberManualRecordRounded,
	CreateRounded,
	InsertCommentRounded,
	InboxRounded,
	DraftsRounded,
	BookmarkBorderRounded,
	PeopleAltRounded,
	AppsRounded,
	FileCopyRounded,
	ExpandLessRounded,
	ExpandMoreRounded,
	AddRounded,
} from "@material-ui/icons";

import db from "../../../services/firebase";
import {useStateValue} from "../../../state/StateProvider";
import SidebarOption from "./SidebarOption";
import "./style.css";

function Sidebar() {
	const [channels, setChannels] = useState([]);
	const [{user}] = useStateValue();

	useEffect(() => {
		// Run this code once
		db.collection("rooms").onSnapshot((snapshot) => (
			setChannels(snapshot.docs.map((doc) => ({
				id: doc.id,
				name: doc.data().name,
			})))
		));
	}, []);

	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<div className="sidebar__info">
					<h2>Krishal Shah</h2>
					<h3>
						<FiberManualRecordRounded />
						{user?.displayName}
					</h3>
				</div>
				<CreateRounded />
			</div>
			<SidebarOption Icon={InsertCommentRounded} title="Threads" />
			<SidebarOption Icon={InboxRounded} title="Mentions & reactions" />
			<SidebarOption Icon={DraftsRounded} title="Saved items" />
			<SidebarOption Icon={BookmarkBorderRounded} title="Channel Browser" />
			<SidebarOption Icon={PeopleAltRounded} title="People & user groups" />
			<SidebarOption Icon={AppsRounded} title="Apps" />
			<SidebarOption Icon={FileCopyRounded} title="File browser" />
			<SidebarOption Icon={ExpandLessRounded} title="Show less" />
			<hr />
			<SidebarOption Icon={ExpandMoreRounded} title="Channels" />
			<hr />
			<SidebarOption Icon={AddRounded} title="Add Channel" addChannelOption />
			{channels.map((channel, index) => (
				<SidebarOption key={index} title={channel.name} id={channel.id} />
			))}
		</div>
	);
}

export default Sidebar;
