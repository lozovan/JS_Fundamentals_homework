/*
4. Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
приклад:
const arr = [5, 3, 4, 5,6,7,3];
const arr2 = compact(arr);
console.log(arr2) ; // [5,3,4,6,7]
*/
const openTask = document.querySelector("#taskFour");

openTask.addEventListener('click', function () {
    console.log("Task №4");
    const arr = [5, 3, 4, 5, 6, 7, 3];
    let arr2 = compact(arr);
    console.log(arr2); // [5, 3, 4, 6, 7]
    alert("You need to open the console to view.");
});

function compact(arr) {
    const uniqueValues = {};
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueValues[arr[i]]) {
        result.push(arr[i]);
        uniqueValues[arr[i]] = true;
      }
    }
  
    return result;
  }