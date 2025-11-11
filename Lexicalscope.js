const x = 10;          // global scope

function outer() {
  const y = 20;        // outer scope

  function inner() {
    const z = 30;      // inner scope
    console.log(x, y, z); //here we can access x , y , z 
  }

  inner();
}

outer();
