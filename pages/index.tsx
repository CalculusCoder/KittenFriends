import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

const Index = () => {
  type KittenUser = {
    name: string;
    email: string;
    id: number;
  };
  const [kittens, setKittens] = useState<KittenUser[]>([]);
  const [searchField, setSearchField] = useState<string>("");

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setSearchField(e.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setKittens(users);
      });
  }, []);

  const newKittens = kittens.filter((kitten: KittenUser) => {
    return kitten.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div>
      <Header onSearchChange={onSearchChange}></Header>
      <Card newKittens={newKittens}></Card>
    </div>
  );
};

export default Index;
