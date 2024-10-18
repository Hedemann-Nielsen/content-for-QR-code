import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "../../Pages/HomePage.jsx";

export const routes = createBrowserRouter([
	{
		path: "/",
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/home",
				element: <HomePage />,
			},
		],
	},
]);
