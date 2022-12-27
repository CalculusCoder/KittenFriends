import React from "react";

interface Props {
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchField: React.FC<Props> = ({ onSearchChange }) => {
  return (
    <div className="mb-28">
      <input
        className="text-center shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Search for Robots"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchField;
