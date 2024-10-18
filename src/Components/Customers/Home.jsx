import { Footer } from "../Footer/Footer";
import { Gallery } from "../gallery/Gallery";

import { Links } from "../Links/Links";
import { Logo } from "../Logo/Logo";

export const Home = () => {
	return (
		<>
			<Logo />
			<Links />
			<Gallery />
			<Footer />
		</>
	);
};
