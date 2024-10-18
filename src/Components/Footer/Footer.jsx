import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { ContactModalContent } from "../Modal/ContactModalContent";

import style from "./Footer.module.scss";
import globalStyle from "../../Styles/GlobalStyles.module.scss";

export const Footer = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const currentYear = new Date().getFullYear();

	const openModal = () => {
		setModalIsOpen(true);
		console.log("modal is open");
	};
	const closeModal = () => {
		setModalIsOpen(false);
	};
	return (
		<>
			<div className={style.footer}>
				<p onClick={openModal} className={globalStyle.untyledBtn}>
					contakt
				</p>
			</div>
			<div className={style.designer}>
				<p className={globalStyle.text}>
					Copyright &copy; {currentYear} | KNITlig
				</p>
				<p className={globalStyle.text}>
					Page design by Tanja Hedemann Nielsen
				</p>
			</div>

			{/* modal indhold */}
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				className="Modal"
				overlayClassName="Overlay">
				<ContactModalContent closeModal={closeModal}></ContactModalContent>
			</Modal>
		</>
	);
};
