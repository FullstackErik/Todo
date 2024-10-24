document.addEventListener("DOMContentLoaded", function () {
  const list = [];
  let idNum = 0;
  const knapp = document.querySelector("#btn");
  const ul = document.querySelector(".ul");
  knapp.addEventListener("click", function () {
    const inputValue = document.getElementById("tasks").value;
    idNum += 1;
    list.push({
      id: idNum,
      task: inputValue,
      completed: false,
    });
    const knapp2 = document.createElement("button");
    knapp2.classList = "taBort";
    const li = document.createElement("li");
    ul.appendChild(li);
    li.textContent = inputValue;
    li.appendChild(knapp2);
    knapp2.textContent = "X";
    knapp2.addEventListener("click", function () {
      ul.removeChild(li);
    });
  });
});
