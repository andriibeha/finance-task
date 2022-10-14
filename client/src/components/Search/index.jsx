
import { useState } from "react";
import s from "./Serach.module.scss";


const Serach = () => {
    const [value, setValue] = useState('');

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <input
                className={s.root}
                placeholder="Search by Ticker"
                value={value}
                onChange={(e) => { onChangeInput(e) }}
            />
        </>
    );
};

export default Serach;
