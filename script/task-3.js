/*
3. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
randArray(5);  // [399,310,232,379,40]
*/
const openTask = document.querySelector("#taskThree");

openTask.addEventListener('click', function () {
    console.log("Task №3");
    let randomArray = randArray(5);
    console.log(randomArray);
    alert("You need to open the console to view.");
});

function randArray(k) {
    let result = [];
    for (let i = 0; i < k; i++) {
      let randomNumber = Math.floor(Math.random() * 500) + 1;
      result[i] = randomNumber;
    }
    return result;
  }