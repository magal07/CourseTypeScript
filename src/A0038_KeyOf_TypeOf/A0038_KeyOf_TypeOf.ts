type ColorsObj = typeof colorsObj;
type ColorsKey = keyof ColorsObj;

const colorsObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};

function translateColor(color: ColorsKey, colors: ColorsObj) {
  return colors[color];
}

console.log(translateColor('vermelho', colorsObj));
console.log(translateColor('verde', colorsObj));
