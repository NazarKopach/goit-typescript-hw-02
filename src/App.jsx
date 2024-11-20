import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [results, setResults] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [searchValue, setSearchValue] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const onSubmit = (searchTerm) => {
    setSearchValue(searchTerm);
    setPage(1);
    setResults([]);
    setError(false);
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      if (searchValue === null) return;

      try {
        setLoader(true);
        const { data } = await axios.get(
          `https://api.unsplash.com/search/photos?query=${searchValue}&page=${page}&client_id=LMF9x-i_SfE5T0Hve8YKUQz0rmCzzBTy3KzOwV93csA`
        );
        setTotalPages(data.total_pages);

        if (page !== 1) {
          setResults((prevState) => [...prevState, ...data.results]);
        } else {
          setResults(data.results);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoader(false);
      }
    };

    fetchPhotos();
  }, [searchValue, page]);

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      borderRadius: "8px",
    },
  };

  function openModal(image) {
    setSelectedImage(image);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedImage(null);
  }

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {loader && <Loader />}
      {error && <ErrorMessage />}
      <ImageGallery results={results} openModal={openModal} />
      {results !== null && page < totalPages && (
        <LoadMoreBtn setPage={() => setPage((prev) => prev + 1)} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={modalIsOpen}
          onClose={closeModal}
          image={selectedImage}
          customStyles={customStyles}
        />
      )}
    </>
  );
}

export default App;
