// Array<T> -T[] <- generics

export function multiplierArgs(...args: Array<number>): number {
  return args.reduce((ac, value) => ac * value, 1);
}

export function concatString(...args: string[]): string {
  return args.reduce((ac, value) => ac + value);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const result = multiplierArgs(1, 2, 3);
const concat = concatString('a', 'b', 'c');
const upperCase = toUpperCase('a', 'b', 'C');

console.log(result);
console.log(concat);
console.log(upperCase);
