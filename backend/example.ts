interface Params {
    a: number;
    b: number;
  }
  
  type Add = (x: Params) => number;
  
  const add: Add = (x) => x.a + (x.b as number);
  var val: Params = { a: 10, b: 11 };
  console.log(add(val));
  