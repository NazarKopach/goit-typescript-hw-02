import style from "./ImageCard.module.css";
import { ImgCardProps } from "../App/App.types";

const ImageCard: React.FC<ImgCardProps> = ({
  images,
  description,
  onClick,
}) => {
  return (
    <div className={style.card} style={{ cursor: "pointer" }}>
      <img
        src={images}
        alt={description}
        className={style.image}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageCard;
