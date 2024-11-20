import style from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ setPage }) => {
  return (
    <div className={style.LoadMoreBtnWrapper}>
      <button className={style.LoadMoreBtn} onClick={setPage} type="submit">
        Loade more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
