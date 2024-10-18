import style from "./InnerWrapper.module.scss";

export const InnerWrapper = ({ children }) => {
	return <section className={style.InnerWrapper}>{children}</section>;
};
