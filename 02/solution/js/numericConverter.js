// ## 2. feladat
// - A `02/solution/js/numericConverter.js` fájlban dolgozz!
// - Készíts egy függvényt `numericConverter` néven!
// - Ez a paraméterként megadott tízes számrendszerbeli számot átkonvertálja kettes, nyolcas és tizenhatos
// számrendszerbe is.
// - Ezeket az értékeket egy objektumban add vissza. A property-k neve legyen: binary, octal, hexa.

const numericConverter = (numberDec) => {
  const bin = numberDec.toString(2);
  const oct = numberDec.toString(8);
  const hex = numberDec.toString(16);
  return {
    binary: bin,
    octal: oct,
    hexa: hex,
  };
};

export default numericConverter;
