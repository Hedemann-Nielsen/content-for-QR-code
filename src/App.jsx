import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Components/Routes/Routes";
import { Loader } from "./Components/Loader/Loader";
import "./Styles/GlobalStyles.module.scss";

function App() {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2500);
	}, []);

	return (
		<>
			<div>{loading ? <Loader /> : <RouterProvider router={routes} />}</div>
		</>
	);
}

export default App;
