import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
export const SidebarDataAdmin = [
    {
        title: "Quản lý người dùng",
        path: "/user-manage",
        icon: <BiIcons.BiUser size={24} />,
        iconClosed: <BiIcons.BiChevronRight size={24} />,
        iconOpened: <BiIcons.BiChevronDown size={24} />
    }
];

export const SidebarDataUser = [
    {
        title: "Tổng quan",
        path: "/home",
        icon: <AiIcons.AiOutlineHome size={24} />
    },
    {
        title: "Quản lý khu vực",
        path: "/section/manage",
        icon: <BiIcons.BiCollection size={24} />,
        iconClosed: <BiIcons.BiChevronRight size={24} />,
        iconOpened: <BiIcons.BiChevronDown size={24} />,

        subNav: [
            {
                title: "Sapo Web",
                path: "/section/SapoWeb",
                icon: <AiIcons.AiOutlineGlobal size={24} />,
                cName: "sub-nav",
            },
            {
                title: "Sapo Omni",
                path: "/section/SapoOmni",
                icon: <MdIcons.MdManageSearch size={24} />,
                cName: "sub-nav",
            },
            {
                title: "Sapo FnB",
                path: "/section/SapoFnB",
                icon: <BiIcons.BiFoodMenu size={24} />,
                cName: "sub-nav",
            }
        ]
    },
    {
        title: "Quản lý banner",
        path: "/banner/manage",
        icon: <MdIcons.MdPictureInPicture size={24} />,
        iconClosed: <BiIcons.BiChevronRight size={24} />,
        iconOpened: <BiIcons.BiChevronDown size={24} />,

        subNav: [
            {
                title: "Thêm mới banner",
                path: "/banner/create",
                icon: <BiIcons.BiImageAdd size={24} />,
                cName: "sub-nav",
            },
            {
                title: "Cập nhật banner",
                path: "/banner/update/",
                icon: <MdIcons.MdUpdate size={24} />,
                cName: "sub-nav",
            },
            {
                title: "Xóa banner",
                path: "/banner/delete",
                icon: <MdIcons.MdDelete size={24} />,
            },
        ]
    },
    {
        title: "Báo cáo",
        path: "/report",
        icon: <IoIcons.IoIosStats size={24} />,
    }
];
