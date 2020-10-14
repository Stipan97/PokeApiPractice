export interface Pokemon {
  name: string;
  url: string;
}

//ovo nebi trebalo bit tu
export interface ServerResponseDetails {
  id: number;
  name: string;
  abilities: PokemonAbilities[];
  sprites: PokemonSprite;
  stats: PokemonStats[];
}

//ovo sve dalje moze bit tu
interface NamedRes {
  name: string;
  url: string;
}

interface PokemonAbilities {
  ability: NamedRes;
}

interface PokemonSprite {
  back_default: string;
  front_default: string;
}

interface PokemonStats {
  base_stat: number;
  stat: NamedRes;
}
