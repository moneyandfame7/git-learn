import React from "react";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import {
	ContactsOutlined,
	HomeOutlined,
	InfoCircleOutlined
} from "@ant-design/icons";

interface IRoutesConfig {
	path: string;
	label?: string;
	element: React.ReactNode;
	icon?: React.ReactNode;
	id: number;
	exact?: boolean;
}
export const routesConfig: IRoutesConfig[] = [
	{
		path: "/",
		label: "Home",
		element: <HomePage />,
		icon: <HomeOutlined />,
		id: 0
	},
	{
		path: "/contacts",
		label: "Contacts",
		element: <ContactPage />,
		icon: <ContactsOutlined />,
		id: 1
	},
	{
		path: "/about",
		label: "About",
		element: <AboutPage />,
		icon: <InfoCircleOutlined />,
		id: 2
	}
];
