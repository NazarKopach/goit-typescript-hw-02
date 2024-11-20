import Modal from "react-modal";
Modal.setAppElement("#root");

function ImageModal({ isOpen, onClose, image, customStyles }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      style={customStyles}
    >
      <div>
        <img src={image.urls.regular} alt={image.alt_description} />
      </div>
    </Modal>
  );
}

export default ImageModal;
