import Icon from "@/components/utils/Icon";
import React from "react";

// Admin Imports

// Icon Imports
import {
  MdBarChart,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdPerson,
} from "react-icons/md";

const routes = [
  {
    name: "Dashboard",
    layout: "/app",
    path: "/dashboard",
    icon: <MdHome className="h-6 w-6" />,
  },
  {
    name: "Portfolio",
    layout: "/app",
    path: "portfolio",
    icon: <Icon name="HiFolderOpen" className="h-6 w-6" />,
  },
  {
    name: "Data Tables",
    layout: "/app",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
  },
  {
    name: "Profile",
    layout: "/app",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
  },
];
export default routes;
