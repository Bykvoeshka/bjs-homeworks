function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  sleep(500); 
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays(array1, array2) {
  return (array1.length === array2.length) && array1.every((item, index) => item === array2[index]); 
}

function memorize(fn, limit) {
  let results = [];
  return (...args) => {
   let checkMemory = results.find(item => compareArrays(item.args, Array.from(args)));

   if (checkMemory) {
     return results.result;
     } else {
     let result = fn(...args);
     results.push({
       args: Array.from(args),
       result: result
     })

     if (results.length > limit) {
       results.shift();
     }

     return result;
   }
  }
}

function testCase (testFunction, processorTime) {
  let items = [[1, 2, 3], [1, 2], [1, 2, 3], [1, 2], [9, 5, 2, 4]];

  console.time(processorTime);

  let i = 0;
  while (i <= 100) {
    items.forEach(item => testFunction.apply(items));
    i++;
  }

  console.timeEnd(processorTime);
}
