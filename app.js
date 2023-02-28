const toDoForm = document.getElementById("toDoForm");
const toDoInput = document.getElementById("toDoInput");
const toDos = document.getElementById("toDos");

function deleteToDo(event) {
    event.target.remove();
};



function handleForm(event) {
    event.preventDefault();
    const toDoText = toDoInput.value;
    toDoInput.value = '';

    const li = document.createElement("li");
    li.innerText = toDoText;
    li.addEventListener("click", deleteToDo);
    toDos.appendChild(li);
}




toDoForm.addEventListener("submit", handleForm);