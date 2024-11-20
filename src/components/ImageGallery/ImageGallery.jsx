import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

const ImageGallery = ({ results, openModal }) => {
  return (
    <ul className={style.gallery}>
      {results !== null &&
        results.map((item) => {
          return (
            <li key={item.id} className={style.galleryItem}>
              <ImageCard
                images={item.urls.small}
                description={item.alt_description}
                onClick={() => openModal(item)}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
