import React, { FC, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { routesConfig } from "../utils/routesConfig";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { ItemType } from "antd/es/menu/hooks/useItems";
const { Header, Sider, Content } = Layout;

interface IMyLayoutProps {
	children?: React.ReactElement | null;
}
const items = routesConfig.map((item, index) => {
	if (item.path !== "*") {
		return {
			key: item.id,
			label: <Link to={item.path}>{item.label}</Link>,
			icon: item.icon
		};
	}
});
const MyLayout: FC<IMyLayoutProps> = ({ children }) => {
	const selectedKey = useLocation().pathname;

	const highlight = () => {
		if (selectedKey === "/") {
			return ["0"];
		} else if (selectedKey === "/contacts") {
			return ["1"];
		} else {
			return ["2"];
		}
	};
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer }
	} = theme.useToken();

	return (
		<Layout style={{ height: "100vh" }}>
			<Sider
				trigger={null}
				collapsible
				collapsed={collapsed}
				style={{ userSelect: "none" }}
			>
				<div className="logo">LOGO</div>
				<Menu
					theme="dark"
					mode="inline"
					items={items as ItemType[]}
					defaultSelectedKeys={["0"]}
					selectedKeys={highlight()}
				/>
			</Sider>
			<Layout className="site-layout">
				<Header style={{ padding: 0, background: colorBgContainer }}>
					{React.createElement(
						collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
						{
							className: "trigger",
							onClick: () => setCollapsed(!collapsed)
						}
					)}
					HEADER
				</Header>
				<Content
					style={{
						margin: "24px 16px",
						padding: 24,
						minHeight: 280,
						background: colorBgContainer,
						overflowY: "auto",
						paddingBottom: "50px"
					}}
				>
					<h1
						style={{
							fontWeight: 700,
							marginBottom: "50px",
							textAlign: "center"
						}}
					>
						CONTENT
					</h1>
					{children}
				</Content>
			</Layout>
		</Layout>
	);
};
export default MyLayout;
