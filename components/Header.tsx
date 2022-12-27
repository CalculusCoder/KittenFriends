import React from "react";
import SearchField from "./SearchField";

interface Props {
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<Props> = ({ onSearchChange }) => {
  return (
    <div className="text-center mt-6">
      <h1 className="text-4xl mb-12">Kitten Friends</h1>
      <SearchField onSearchChange={onSearchChange}></SearchField>
    </div>
  );
};

export default Header;
