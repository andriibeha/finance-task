
import s from "./TickersListHeader.module.scss";

const TickersListHeader = () => {
  return (
    <>
      <div className={s.root}>
        <ul className={s.list}>
          <li className={s.item}>
            Ticker
          </li>
          <li className={s.item}>
            Price
          </li>
          <li className={s.item}>
            Change
          </li>
          <li className={s.item}>
            Change%
          </li>
          <li className={s.item}>
            Dividend
          </li>
        </ul>
      </div>
      <hr />
    </>
  );
};

export default TickersListHeader;
