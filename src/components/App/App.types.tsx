export interface ImgResult {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

export interface FetchResponse {
  results: ImgResult[];
  total_pages: number;
}

export interface ErrorMessageProps {}

export interface ImgCardProps {
  images: string;
  description: string;
  onClick: () => void;
}

export interface ImgGalleryProps {
  results: ImgResult[] | null;
  openModal: (image: ImgResult) => void;
}

export interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: {
    urls: {
      regular: string;
    };
    alt_description: string | null;
  } | null;
  customStyles: {
    overlay: React.CSSProperties;
    content: React.CSSProperties;
  };
}

export interface LoaderProps {}

export interface LoadMoreBtnProps {
  setPage: () => void;
}

export interface SerchBarProps {
  onSubmit: (serchBar: string) => void;
}
