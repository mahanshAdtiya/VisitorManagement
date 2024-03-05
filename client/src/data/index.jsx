import React from "react";

import { AiOutlineCalendar } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { BsShield } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";

import avatar from "./avatar.jpg";

export const links = [
  {
    title: "student",
    sections: [
      {
        title: "Dashboard",
        links: [
          {
            name: "homescreen",
            icon: <FiShoppingBag />,
          },
        ],
      },
      {
        title: "Meeting",
        links: [
          {
            name: "calendar",
            icon: <AiOutlineCalendar />,
          },
        ],
      },
    ],
  },
  {
    title: "faculty",
    sections: [
      {
        title: "Dashboard",
        links: [
          {
            name: "homescreen",
            icon: <FiShoppingBag />,
          },
        ],
      },
      {
        title: "Meeting",
        links: [
          {
            name: "Meeting Requests",
            icon: <RiContactsLine />,
          },
          {
            name: "Accepted Requests",
            icon: <IoMdContacts />,
          },
          {
            name: "calendar",
            icon: <AiOutlineCalendar />,
          },
        ],
      },
    ],
  },
  {
    title: "Visitor",
    sections: [
      {
        title: "Dashboard",
        links: [
          {
            name: "homescreen",
            icon: <FiShoppingBag />,
          },
        ],
      },
      {
        title: "Meeting",
        links: [
          {
            name: "calendar",
            icon: <AiOutlineCalendar />,
          },
        ],
      },
    ],
  },
];

export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
];

export const userProfileData = [
  {
    icon: <BsShield />,
    title: "Profile",
    desc: "Complete Profile",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    link: "/form",
  },
];

export const chatData = [
  {
    image: avatar,
    message: "Mahansh requested a new meeting",
    desc: "Please go to the meeting request section",
  },
];