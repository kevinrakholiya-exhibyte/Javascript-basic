//iterator
function Iterator(array) {
    let nextIndex = 0;
    return {
        next: function () {
            if (nextIndex < array.length) {
                return {
                    value: array[nextIndex++],
                    done: false,
                };
            } else {
                return {
                    value: undefined,
                    done: true,
                };
            }
        },
    };
}

const array = [1, 2, 3, 4, 5];
const arrayValue = Iterator(array);
console.log(arrayValue.next())//{ value: 1, done: false }
console.log(arrayValue.next())//{ value: 2, done: false }
console.log(arrayValue.next())//{ value: 3, done: false }
console.log(arrayValue.next())//{ value: 4, done: false }
console.log(arrayValue.next())//{ value: 5, done: false }
console.log(arrayValue.next())//{ value: undefined, done: true }                                   


//Generator
function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = myGenerator();

console.log(generator.next());//{ value: 1, done: false }
console.log(generator.next());//{ value: 2, done: false }
console.log(generator.next());//{ value: 3, done: false }
console.log(generator.next());//{ value: undefined, done: true }