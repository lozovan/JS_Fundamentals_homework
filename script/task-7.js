/*
7. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true
*/
const openTask = document.querySelector("#taskSeven");

openTask.addEventListener('click', function () {
    console.log("Task №7");
    console.log(findUnique([1, 2, 3, 5, 3]));  //  [1, 2, 3, 5, 3] false
    console.log(findUnique([1, 2, 3, 5, 11])); // [1, 2, 3, 5, 11] true
    alert("You need to open the console to view.");
});

function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (i !== j && arr[i] === arr[j]) {
          return false; 
        }
      }
    }
    return true; 
  }