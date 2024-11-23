import toast, { Toaster } from "react-hot-toast";
import style from "./SearchBar.module.css";
import { HiSearchCircle } from "react-icons/hi";
import { FormEvent } from "react";
import { SerchBarProps } from "../App/App.types";

const SearchBar: React.FC<SerchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formValue = form.elements.namedItem("name") as HTMLInputElement;
    const searchTerm = formValue.value.trim();
    if (!searchTerm) {
      toast.error("Please enter a search term");
      return;
    }
    onSubmit(searchTerm);
    form.reset();
  };

  return (
    <header className={style.header}>
      <form onSubmit={handleSubmit} className={style.headerForm}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          name="name"
          placeholder="Search images and photos"
          className={style.headerInput}
        />
        <button type="submit">
          <HiSearchCircle />
        </button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
