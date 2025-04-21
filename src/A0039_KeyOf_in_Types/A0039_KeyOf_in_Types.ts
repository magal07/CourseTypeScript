type Veichles = {
  model: string;
  year: string;
};
// reatribuindo tipos de uma referência para outra \/
type Car = {
  brand: Veichles['model'];
  yearCar: Veichles['year'];
  name: string;
};

const car: Car = {
  brand: 'Ford',
  yearCar: '2020',
  name: 'Ká',
};

console.log(car);
