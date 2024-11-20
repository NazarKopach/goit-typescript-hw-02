import toast, { Toaster } from "react-hot-toast";
import style from "./SearchBar.module.css";
import { HiSearchCircle } from "react-icons/hi";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formValue = form.elements.name.value.trim();
    if (!formValue) {
      toast.error("Please enter a search term");
      return;
    }
    onSubmit(formValue);
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
