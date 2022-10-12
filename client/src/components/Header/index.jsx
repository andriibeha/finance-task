import { Link, useLocation } from "react-router-dom";

import s from "./Header.module.scss";


const Header = () => {
    const { pathname } = useLocation();

    return (
        <header className={s.header}>
            <div>LOGO</div>
            <div>
                SEARCH
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
