const objectA: {
  readonly keyA: string; // cannot change key
  keyB: string;
  keyC?: string;
  [key: string]: unknown; // create + keys without specifying
} = {
  keyA: 'value A',
  keyB: 'value B',
};

// objectA.keyA = 'OTHER value'; readonly
objectA.keyC = 'new key';
objectA.keyD = 'NEW KEY';
