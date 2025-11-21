// Debounce 
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Example: Search input
const handleSearch = debounce(function (text) {
  console.log("Searching for:", text);
}, 500);

handleSearch("H");
handleSearch("He");
handleSearch("Hel");
handleSearch("Hell");
handleSearch("Hello"); 

