
import s from "./Footer.module.scss";
import icon from "../../assets/img/github.svg";

const Footer = () => {
    return (
        <footer className={s.footer}>
            <p className={s.description}>Created by <b>Andrii Beha</b></p>
            <a href="https://github.com/andriibeha" target="_blank" rel="noreferrer">
                <img
                className={s.icon}
                src={icon}
                alt="github"
                width={40}
                height={40}
                />
            </a>
            
        </footer>
    );
};

export default Footer;
