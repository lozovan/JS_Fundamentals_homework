/*
5. Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)
let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
let arrNew = funcName(arr);
[
[5, 12, 99, 2, 2, 4, 3],
[”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”
] 
*/
const openTask = document.querySelector("#taskFive");

openTask.addEventListener('click', function () {
    console.log("Task №5");
    let arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
    let arrNew = funcName(arr);
    console.log(arrNew);
    alert("You need to open the console to view.");
});

function funcName(arr) {
    let newArr = [];
    for (const element of arr.flat(Infinity)) {
        let found = false;
        newArr.forEach((value) => {
            if (typeof value[0] === typeof element) {
                value.push(element);
                found = true;
            }
        });
        if (!found) {
            newArr.push([element]);
        }
    }
    return newArr;
}