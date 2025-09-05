import { useState } from "react";

interface SearchProps {
  onSearch: (name: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim().toLowerCase());
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full px-2 py-1 text-sm flex gap-2"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Pokémon..."
        className="w-full px-2 border outline-none"
      />
      <button
        type="submit"
        className="bg-yellow-400 px-3 py-1 text-black cursor-pointer"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
