import React from "react";
import Search from "./Search";
import SearchedItem from "./SearchedItem";
import { usePokemon } from "./hooks/useFetch";

const PokeSearch: React.FC = () => {
  const { pokemon, loading, error, fetchPokemon } = usePokemon();

  return (
    <div className="w-100 h-full mx-auto mt-40 border border-gray-400 py-4">
      <Search onSearch={fetchPokemon} />

      {loading && <p className="text-center mt-5">Loading...</p>}
      {error && <p className="text-red-500 text-center mt-5">{error}</p>}
      {!loading && !error && <SearchedItem data={pokemon} />}
    </div>
  );
};

export default PokeSearch;
