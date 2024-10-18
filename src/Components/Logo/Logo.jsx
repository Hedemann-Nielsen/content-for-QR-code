import { Link } from "react-router-dom";

import style from "./Logo.module.scss";
import globalStyle from "../../Styles/GlobalStyles.module.scss";

import logo from "../../assets/rundt-logo.webp";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaRavelry } from "react-icons/fa6";

export const Logo = () => {
	return (
		<>
			<div className={style.logo}>
				<img src={logo} alt="logo" />
				<div className={style.titleContainer}>
					<h1 className={globalStyle.title}>KNITlig</h1>
					<h2 className={globalStyle.subtitle}>
						Tidsløse strikkeopskrifter med tilpasningsmuligheder
					</h2>
				</div>
				<div className={style.linkContainer}>
					<a
						href="https://www.facebook.com/knitlig"
						target="_blank"
						rel="noopener noreferrer">
						<FaFacebook className={style.link} />
					</a>
					<a
						href="https://www.instagram.com/knitlig"
						target="_blank"
						rel="noopener noreferrer">
						<FaInstagram className={style.link} />
					</a>
					<a
						href="https://www.ravelry.com/designers/knitlig-2"
						target="_blank"
						rel="noopener noreferrer">
						<FaRavelry className={style.link} />
					</a>
				</div>
			</div>
		</>
	);
};
