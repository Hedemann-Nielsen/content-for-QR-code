import logo from "../../assets/logo-med-baggrund.webp";

import style from "./Loader.module.scss";

export const Loader = () => {
	return (
		<div className={style.loaderContainer}>
			<div className={style.loader}></div>
			<div className={style.loaderLogo}>
				<img src={logo} alt="logo" />
			</div>
		</div>
	);
};
