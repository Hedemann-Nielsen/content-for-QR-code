import headerImg from "../../assets/Header-img.webp";

import style from "./Header.module.scss";

export const Header = () => {
	return (
		<div className={style.header}>
			<img src={headerImg} alt="Tagetes sweater" />
		</div>
	);
};
