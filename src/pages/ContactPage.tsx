import React from "react";
import { Card, Col, Divider, Row, theme } from "antd";
const style: React.CSSProperties = {
	background: "#0092ff",
	color: "white",
	padding: "8px 0",
	border: "1px solid red"
};

const ContactPage = () => {
	const {
		token: { colorBgContainer }
	} = theme.useToken();

	const cardItems = [
		{
			id: 0,
			title: "Card",
			content: "Content card"
		},
		{
			id: 1,
			title: "Card",
			content: "Content card"
		},
		{
			id: 2,
			title: "Card",
			content: "Content card"
		}
	];
	return (
		<>
			<Divider orientation="left">Title</Divider>
			<Row gutter={[64, 64]}>
				{cardItems.map(({ id, title, content }) => (
					<Col xs={24} md={12} lg={8}>
						<Card
							title={title + " " + id}
							style={{ width: "100%", height: "400px" }}
						>
							<p>{content + " " + id}</p>
						</Card>
					</Col>
				))}
			</Row>
		</>
	);
};

export default ContactPage;
