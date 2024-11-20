import style from "./ImageCard.module.css";

const ImageCard = ({ images, description, onClick }) => {
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
