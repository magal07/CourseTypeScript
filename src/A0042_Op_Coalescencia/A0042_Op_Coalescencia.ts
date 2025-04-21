// // Encadeamento opcional e operador de coalescência
// type Document = {
//   title: string;
//   text: string;
//   date?: Date;
// };

// const document: Document = {
//   title: 'This title',
//   text: 'This text',
//   // date: new Date(),
// };
// // op ?? <- coalescência: se retornar null ou undefined, execute o lado direito da expressão -> caso não, execute a expressão do lado esquerdo.
// console.log(document.date?.toDateString() ?? 'Not exists date.');
// console.log(undefined ?? 'Not exists date.');
// console.log(null ?? 'Not exists date.');
// console.log(0 ?? 'Not exists date.');
// console.log('' ?? 'Not exists date.');
