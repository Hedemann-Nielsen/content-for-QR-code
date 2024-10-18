if (process.env.NODE_ENV === "development") {
	import("react-dom").then(({ __REACT_DEVTOOLS_GLOBAL_HOOK__ }) => {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "object") {
			for (const [key, value] of Object.entries(
				__REACT_DEVTOOLS_GLOBAL_HOOK__
			)) {
				__REACT_DEVTOOLS_GLOBAL_HOOK__[key] =
					typeof value === "function" ? () => {} : null;
			}
		}
	});
}

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
