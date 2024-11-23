import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

import { ImgResult } from "../App/App.types";
import { FetchResponse } from "../App/App.types";
import { useEffect, useState } from "react";

function App() {
  const [results, setResults] = useState<ImgResult[] | null>(null);
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean | string>(false);
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ImgResult | null>(null);

  const onSubmit = (searchTerm: string): void => {
    setSearchValue(searchTerm);
    setPage(1);
    setResults([]);
    setError(false);
  };

  useEffect(() => {
    const fetchPhotos = async (): Promise<void> => {
      if (searchValue === null) return;

      try {
        setLoader(true);
        const { data } = await axios.get<FetchResponse>(
          `https://api.unsplash.com/search/photos?query=${searchValue}&page=${page}&client_id=LMF9x-i_SfE5T0Hve8YKUQz0rmCzzBTy3KzOwV93csA`
        );
        setTotalPages(data.total_pages);

        if (page !== 1) {
          setResults((prevState) => [...(prevState || []), ...data.results]);
        } else {
          setResults(data.results);
        }
      } catch (error: any) {
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

  function openModal(image: ImgResult): void {
    setSelectedImage(image);
    setIsOpen(true);
  }

  function closeModal(): void {
    setIsOpen(false);
    setSelectedImage(null);
  }

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {loader && <Loader />}
      {error && <ErrorMessage />}
      <ImageGallery results={results} openModal={openModal} />
      {results !== null && page < (totalPages || 0) && (
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
