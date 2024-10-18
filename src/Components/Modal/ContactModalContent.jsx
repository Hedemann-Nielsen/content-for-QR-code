import { IoMdClose } from "react-icons/io";

import style from "./Contact.module.scss";
import globalStyle from "../../Styles/GlobalStyles.module.scss";

export const ContactModalContent = ({ closeModal }) => {
	return (
		<>
			<section className={style.contactContainer}>
				<div className={style.closeIcon}>
					<IoMdClose onClick={closeModal} />
				</div>
				<div className={style.contactCard}>
					<h1 className={globalStyle.title}>Kontakt</h1>
					<div className={style.contactInfo}>
						<div>
							<p>Email: </p>
							<p>
								<a href="mailto:knitlig@outlook.dk">knitlig@outlook.dk</a>
							</p>
						</div>

						<div>
							<p>Adresse:</p>
							<p>Benediktevej 3, DK-9320 Hjallerup</p>
						</div>
					</div>
				</div>
			</section>
			<section>
				<p></p>
			</section>
		</>
	);
};
