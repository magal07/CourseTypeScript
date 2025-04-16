function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const person = {
  name: 'Luiz',
  surname: 'Octave',
  viewName(): void {
    console.log(this.name + ' ' + this.surname);
  },
};

noReturn('Luiz', 'tEste');
person.viewName();

//method not return
