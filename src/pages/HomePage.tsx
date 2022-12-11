import React from "react";
import "../index.scss";
import { theme } from "antd";

const App: React.FC = () => {
	const {
		token: { colorBgContainer }
	} = theme.useToken();

	return <h5>HOME</h5>;
};

export default App;
