export function funcao(this: Date, name: string, age: number): void {
  console.log(this);
  console.log(name, age);
}
// 1 arg é o this, 2 arg é o name
funcao.call(new Date(), 'Luiz', 30);
funcao.apply(new Date(), ['Luiz', 30]);
