// // Record

// const obj1: Record<string, string | number> = {
//   name: 'Luiz',
//   surname: 'Marcelo',
//   age: 30,
// };

// console.log(obj1);

// type PersonProtocol = {
//   name?: string;
//   surname?: string;
//   age?: number;
// };

// // type Required = transforma tudo em requerido
// type PersonRequired = Required<PersonProtocol>;
// // partial = transforma tudo q é requerido em opcional
// type PersonPartial = Partial<PersonRequired>;
// // readonly = tudo vira readonly
// type PersonReadonly = Readonly<PersonRequired>;
// // pick = permite escolher somente o q uero utilizar (escolha da key person somente o nome e sobrenome)
// type PersonPick = Pick<PersonRequired, 'name', 'surname'>;

// const obj2: Record<string, string | number> = {
//   name: 'Luiz',
//   surname: 'Marcelo',
//   age: 30,
// };
// console.log(obj2);

// // Extract e Exclude

// type ABC = 'A' | 'B' | 'C';
// type CDE = 'C' | 'D' | 'E';
// type TypeExclude = Exclude<ABC, CDE>;
// type TypeExtract = Extract<ABC, CDE>;

// //
// type AccountMongo = {
//   _id: string;
//   name: string;
//   age: number;
// };

// // exclude _id
// type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
//   id: string;
// };

// const accountMongo: AccountMongo = {
//   _id: 'asdsadasdasdasdasd',
//   name: 'Luiz',
//   age: 30,
//   surname: 'Julio',
// };

// function mapAccount(accountMongo: AccountMongo): AccountApi {
//   const { _id, ...accountData } = accountMongo;
//   return { ...accountData, id: _id }; // migrate _id for id
// }

// const accountApi = mapAccount(accountMongo);
// console.log('API');
// console.log(accountApi);

// // module mode

// export default 1;
