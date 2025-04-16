let x;
if (typeof x === 'undefined') x = 20;
//console.log(x * 2);

export function createPerson(
  // initial function
  firstName: string,
  lastName?: string,
): {
  // typeNottation
  firstName: string;
  lastName?: string;
} {
  // body function
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: unknown) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);

if (squareOfTwoNumber === null) {
  console.log('Invalid account');
} else {
  console.log(squareOfTwoNumber * 100);
}
