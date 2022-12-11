import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
// import ErrorPage from "./pages/ErrorPage";
import { routesConfig } from "./routesConfig";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: routesConfig.map(route => ({
			index: route.path === "/",
			path: route.path === "/" ? undefined : route.path,
			element: route.element
		}))
	}
]);
const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
