import img1 from "../../assets/Skærmbillede 2024-09-27 134520.webp";
import img2 from "../../assets/Skærmbillede 2024-09-27 135056.webp";
import img3 from "../../assets/Skærmbillede 2024-09-27 135234.webp";

import style from "./Gallery.module.scss";
export const Gallery = () => {
	return (
		<>
			<div className={style.gallery}>
				<div className={style.upperGallery}>
					<div className={style.imgContainerLeft}>
						<img src={img1} alt="'De 8' Strømper til alle" />
						<div className={style.overlay}>
							<p className={style.text}>'De 8' Strømper til alle</p>
						</div>
					</div>
					<div className={style.imgContainerRight}>
						<img src={img2} alt="Nelumbo tee" />
						<div className={style.overlay}>
							<p className={style.text}>Nelumbo tee</p>
						</div>
					</div>
				</div>
				<div className={style.loverGallery}>
					<img src={img3} alt="Pulsatilla tee" />
					<div className={style.overlay}>
						<p className={style.text}>Pulsatilla tee</p>
					</div>
				</div>
			</div>
		</>
	);
};
