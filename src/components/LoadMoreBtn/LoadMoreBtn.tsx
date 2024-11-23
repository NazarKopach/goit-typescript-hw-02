import style from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "../App/App.types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ setPage }) => {
  return (
    <div className={style.LoadMoreBtnWrapper}>
      <button className={style.LoadMoreBtn} onClick={setPage} type="submit">
        Loade more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
