import type { Pokemon } from "./Types";
interface SearchedItemProps {
  data: Pokemon | null;
}

const SearchedItem: React.FC<SearchedItemProps> = ({ data }) => {
  if (!data) {
    return (
      <div className="w-full h-full border border-gray-300 rounded-lg p-4 text-center mt-5">
        <p className="text-gray-500">No Pokémon selected.</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full border border-gray-300 rounded-lg p-4">
      <h2 className="text-xl font-bold capitalize">{data.name}</h2>

      <div className="flex items-center gap-4 mt-2">
        <img
          src={data.sprites?.front_default || ""}
          alt={data.name}
          className="w-24 h-24"
        />
        <div>
          <p>Height: {data.height}</p>
          <p>Weight: {data.weight}</p>
        </div>
      </div>

      <h3 className="font-semibold mt-4">Abilities:</h3>
      <ul className="list-disc pl-5">
        {data.abilities?.length ? (
          data.abilities.map((a) => (
            <li key={a.ability.name}>{a.ability.name}</li>
          ))
        ) : (
          <li className="text-gray-500">No abilities found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchedItem;
