import { Home } from "../Components/Customers/Home";
import { Header } from "../Components/Header/Header.jsx";
import { InnerWrapper } from "../Components/Wrappers/InnerWrapper.jsx";

export const HomePage = () => {
	return (
		<>
			<Header />
			<InnerWrapper>
				<Home />
			</InnerWrapper>
		</>
	);
};
