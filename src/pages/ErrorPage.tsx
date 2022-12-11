import { Alert } from "antd";
import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	console.error(error);

	return (
		<Alert
			message={(error as any).message}
			showIcon
			description="Sorry, an unexpected error has occurred."
			type="error"
		/>
	);
};

export default ErrorPage;
