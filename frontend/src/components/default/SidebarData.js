import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import * as GrIcons from "react-icons/gr";
export const SidebarData = [
{
	title: "Tổng quan",
	path: "/Home",
	icon: <AiIcons.AiOutlineHome size={24}/>
},
{
	title: "Quản lý người dùng",
	path: "/User_manage",
	icon: <BiIcons.BiUser size={24}/>,
	iconClosed: <BiIcons.BiChevronRight size={24}/>,
	iconOpened: <BiIcons.BiChevronDown size={24}/>
},
{
	title: "Quản lý banner",
	path: "/Banner_manage",
	icon: <MdIcons.MdPictureInPicture size={24}/>,
	iconClosed: <BiIcons.BiChevronRight size={24}/>,
	iconOpened: <BiIcons.BiChevronDown size={24}/>,

	subNav: [
	{
		title: "Add new banner",
		path: "/services/services1",
		icon: <BiIcons.BiImageAdd size={24}/>,
		cName: "sub-nav",
	},
	{
		title: "Config",
		path: "/services/services2",
		icon: <GrIcons.GrDocumentConfig size={24}/>,
		cName: "sub-nav",
	},
	{
		title: "Delete",
		path: "/services/services3",
		icon: <MdIcons.MdDelete size={24}/>,
	},
	]
},
{
	title: "Báo cáo",
	path: "/contact",
	icon: <IoIcons.IoIosStats size={24}/>,
}
];
