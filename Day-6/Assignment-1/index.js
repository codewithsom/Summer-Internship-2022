const findArrayAvg = (arr) => {
  let arrSum = 0;
  arr.forEach((num) => {
    arrSum += num;
  });

  let arrLen = arr.length;
  return arrSum / arrLen;
};

const sampleArr = [150, 132, 164, 148, 252, 125, 391, 290, 412];

function swapUsingReference(objRef) {
  let temp = objRef.var2;
  objRef.var2 = objRef.var1;
  objRef.var1 = temp;
}

const sampObj = {
  var1: 5,
  var2: 2,
};

swapUsingReference(sampObj);

let a = 25;
let b = 52;

[a, b] = [b, a];

const arr = new Array("Orange", "Apple", "Mango", "Banana");
arr.sort();
console.log(arr);
arr.reverse();
console.log(arr);
