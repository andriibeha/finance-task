import { Link, useLocation } from "react-router-dom";
import { Props } from "./types";
import s from "./Header.module.scss";

const Header: React.FC<Props> = (props) => {
    const {search, setSearch} = props;
    const { pathname } = useLocation();

    return (
        <header className={s.header}>
            <div>LOGO</div>
            <div>
                <input
                    className={s.root}
                    placeholder="Search by Ticker"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <ul className={s.list}>
                <Link to="/" className={pathname === "/" ? s.item__active : s.item}>
                    Home
                </Link>
                <Link to="/interesting" className={pathname === "/interesting" ? s.item__active : s.item}>
                    Interesting
                </Link>
            </ul>
        </header>
    );
};

export default Header;
