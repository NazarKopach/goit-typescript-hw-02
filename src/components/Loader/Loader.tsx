import { Puff } from "react-loader-spinner";
import style from "./Loader.module.css";
import { LoaderProps } from "../App/App.types";

const Loader: React.FC<LoaderProps> = () => {
  return (
    <div className={style.loader}>
      <Puff
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
