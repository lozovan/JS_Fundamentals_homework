/*
1.Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
-початкове значення
-кінцеве значення
а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)
let arr = createArray(2, 9);
console.log(arr); // [2,3,4,5,6,7,8,9]
*/
const openTask = document.querySelector("#taskOne");

openTask.addEventListener('click', function () {
    console.log("Task №1");
    let arr = createArray(2, 9);  
    console.log(arr); // [2,3,4,5,6,7,8,9]
    alert("You need to open the console to view.");
});

function createArray(start, end){
    let result = [];
    for(let i= start; i<= end; i++){
      result.push(i);
    }
    return result;
  }