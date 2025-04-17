type Age = number;
type Person = {
  name: string;
  age: Age;
  salary: number;
  favoriteColor?: string;
};

type ColorRGB = 'RED' | 'GREEN' | 'BLUE';
type ColorCMYK = 'CIANO' | 'MAGENTA' | 'AMARELO' | 'PRETO';
type FavoriteColor = ColorRGB | ColorCMYK;

const person: Person = {
  age: 30,
  name: 'Rogerio Ceni',
  salary: 200_000,
};

export function setFavoriteColor(person: Person, color: FavoriteColor): Person {
  return { ...person, favoriteColor: color };
}

console.log(setFavoriteColor(person, 'AMARELO'));
console.log(person);
