import React from "react";
import "../index.scss";
import { Divider, Empty, Rate, Space, Steps } from "antd";
import Form from "../components/Form";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
const description = "This is a description.";
const App: React.FC = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 15
			}}
		>
			<Divider orientation="center" plain>
				<strong>Steps</strong>
			</Divider>
			<Steps
				current={1}
				items={[
					{
						title: "Finished",
						description
					},
					{
						title: "In Progress",
						description,
						subTitle: "Left 00:00:08"
					},
					{
						title: "Waiting",
						description
					}
				]}
			/>
			<Divider orientation="center" plain>
				<strong>Form</strong>
			</Divider>
			<Form />
			<Divider orientation="center" plain>
				<b>Rate</b>
			</Divider>
			<Rate allowHalf defaultValue={2.5} />

			<>
				<Title level={3}>Title. Lorem ipsum dorem.</Title>
				<Paragraph>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
					neque, nostrum. Ad adipisci architecto assumenda consequatur
					consequuntur dicta dolore dolorem exercitationem fugiat hic laudantium
					molestiae nam nostrum odit officia officiis omnis perferendis
					quibusdam reiciendis, repellat repudiandae similique suscipit tempore
					voluptate voluptatem? At eligendi exercitationem iste quis saepe
					tempore totam unde.
				</Paragraph>
			</>
		</div>
	);
};

export default App;
