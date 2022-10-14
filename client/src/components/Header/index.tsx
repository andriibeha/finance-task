import { Link, useLocation } from "react-router-dom";
import Serach from "../Search";

import s from "./Header.module.scss";

const Header: React.FC = () => {
    const { pathname } = useLocation();

    return (
        <header className={s.header}>
            <div>LOGO</div>
            <div>
                <Serach />
            </div>
            <ul className={s.list}>
                <li>
                    <Link to="/" className={pathname === "/" ? s.item__active : s.item}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/interesting" className={pathname === "/interesting" ? s.item__active : s.item}>
                        Interesting
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
