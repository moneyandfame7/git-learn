import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { routesConfig } from "../routesConfig";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
const { Header, Sider, Content } = Layout;

const items = routesConfig.map((item, index) => {
	return {
		key: index,
		label: <Link to={item.path}>{item.label}</Link>,
		icon: item.icon
	};
});

interface IMyLayoutProps {
	children?: React.ReactElement | null;
}
const MyLayout: FC<IMyLayoutProps> = ({ children }) => {
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
					defaultSelectedKeys={["0"]}
					items={items}
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
						overflowY: "auto"
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
