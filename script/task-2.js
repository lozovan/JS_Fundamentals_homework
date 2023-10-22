/*
2.Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.
// 1,2,2,3,3,3...
*/
const openTask = document.querySelector("#taskTwo");

openTask.addEventListener('click', function () {
    console.log("Task №2");
    let printSequence = printNumbers(1, 5);
    console.log(printSequence);
    alert("You need to open the console to view.");
});

function printNumbers(a, b){
    let result = [];
    let count = 0;
      for (let i=a; i<=b; i++){
        for (let j=0; j <=count; j++){
          result.push(i);
        }
        count++;
      }
    return result;
}