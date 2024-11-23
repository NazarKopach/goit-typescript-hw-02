import React from "react";
import Modal from "react-modal";
import Loader from "../Loader/Loader";
import { ImageModalProps } from "../App/App.types";
Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  image,
  customStyles,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      style={customStyles}
    >
      {image ? (
        <div>
          <img
            src={image.urls.regular}
            alt={image.alt_description || "Image preview"}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      ) : (
        <Loader />
      )}
    </Modal>
  );
};

export default ImageModal;
