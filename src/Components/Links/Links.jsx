import logo from "../../assets/rundt-logo.webp";

import ravelryLogo from "../../assets/ravelry.webp";
import facebookLogo from "../../assets/facebook.webp";
import instagramLogo from "../../assets/instagram.webp";

import style from "./Links.module.scss";

export const Links = () => {
	return (
		<>
			<a href="https://www.knitlig.dk" className={style.logoContainer}>
				<img src={logo} alt="" />
				<p className={style.hoverEffect}>www.knitlig.dk</p>
				<span></span>
			</a>
			<a
				href="https://www.instagram.com/knitlig"
				className={style.logoContainer}>
				<img src={instagramLogo} alt="" />
				<p className={style.hoverEffect}>instagram</p>
				<span></span>
			</a>

			<a
				href="https://www.facebook.com/knitlig"
				className={style.logoContainer}>
				<img src={facebookLogo} alt="" />
				<p className={style.hoverEffect}>facebook</p>
				<span></span>
			</a>
			<a
				href="https://www.ravelry.com/designers/knitlig-2"
				className={style.logoContainer}>
				<img src={ravelryLogo} alt="" />
				<p className={style.hoverEffect}>ravelry</p>
				<span></span>
			</a>
		</>
	);
};
