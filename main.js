document.addEventListener("DOMContentLoaded", function () {
    const newTask = document.querySelector("#task");
    const submit = document.querySelector("#submit");

    كلمة مفتاحية : onkeyup
    submit.disabled = true;
    document.querySelector("form").onsubmit = function () {
        const task = newTask.value;
        
        console.log(task);
        const li = document.createElement("li");li.innerHTML=task;
        document.querySelector('#tasks').append(li);
        newTask.value= "";

        return false;
        عندما 
        اذا 

    };
});