import { useState } from "react";
import type { Pokemon } from "../Types";

export function usePokemon() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemon = async (name: string) => {
    try {
      setLoading(true);
      setError(null);
      setPokemon(null);

      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!res.ok) throw new Error("Pokémon not found");

      const data: Pokemon = await res.json();
      setPokemon(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { pokemon, loading, error, fetchPokemon };
}
