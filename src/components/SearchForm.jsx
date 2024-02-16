import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useSearchForm } from "../hooks/useSearchForm";

const SearchForm = () => {
  const { handleSearchInput, handleSubmit, isAnimating } = useSearchForm();
  return (
      <form
          onSubmit={(event) => handleSubmit(event)}
          className={`${isAnimating ? 'animate-shake' : 'animate-none'} w-full relative`}
        >
        <input
            className="input text-center search-input"
            type="text"
            placeholder="חפש מוצר..."
            onChange={(event) => handleSearchInput(event)}
        />
        <button className="btn btn-accent absolute top-0 right-0 rounded-tl-none rounded-bl-none">
            <FiSearch className="text-xl" />
        </button>
      </form>
  );
};

export default SearchForm;
