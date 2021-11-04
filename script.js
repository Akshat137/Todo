function changeTheme() {
    var x = document.getElementById('theme-logo').src;

    if(x.indexOf("images/icon-sun.svg") != -1) {
        document.getElementById('theme-logo').src = "images/icon-moon.svg";
        document.querySelector('body').className = "body_light";

        var element = document.getElementById('task');
        element.classList.remove("task_dark");
        element.classList.add("task_light");

        var element = document.getElementById('items');
        element.classList.remove("items_dark");
        element.classList.add("items_light");

        var element = document.getElementById("items").children;
        for(var i = 0 ; i < element.length; i++) {
            element[i].style.borderBottom = "1px solid white";
        }
    }
    else {
        document.getElementById('theme-logo').src = "images/icon-sun.svg";
        document.querySelector('body').className = "body_dark";
        
        var element = document.getElementById('task');
        element.classList.remove("task_light");
        element.classList.add("task_dark");

        var element = document.getElementById('items');
        element.classList.remove("items_light");
        element.classList.add("items_dark");

        var element = document.getElementById("items").children;
        for(var i = 0 ; i < element.length; i++) {
            element[i].style.borderBottom = "1px solid black";
        }
    }
}

var input = document.getElementById("task");
var count = 1;
var total = 0;

input.addEventListener("keyup", function(event) {
    if(event.key == "Enter") {
        var y = document.createElement("li");
        y.innerHTML = "<input type = \"checkbox\" id = \"task_" + count + "\"> <label for = \"task_" + count + "\">" + input.value + "</label> <button class = \"removeTask\" onclick = \"deleteTask(this)\" ><img src = \"./images/icon-cross.svg\"> </button>";
        var w = document.getElementById("items");
        w.appendChild(y);
        count = count + 1;
        total = total + 1;

        document.getElementById("total").innerHTML = total + " items left";
    }
});

function deleteTask(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    total = total - 1;

    document.getElementById("total").innerHTML = total + " items left";
}

function displayAll() {
    var tasks = document.getElementById("items").children;

    for(var i = 0;i < tasks.length; i++) {
        tasks[i].style.display = "block";
        if(tasks[i].children[0].checked == true) {
            tasks[i].children[1].style.textDecoration = "line-through";
        }
    }
}

function displayActive() {
    var tasks = document.getElementById("items").children;

    for(var i = 0;i < tasks.length; i++) {
        if(tasks[i].children[0].checked == true) {
            tasks[i].style.display = "none";
        }
        else {
            tasks[i].style.display = "block";
        }
    }
}

function displayCompleted() {
    var tasks = document.getElementById("items").children;

    for(var i = 0;i < tasks.length; i++) {
        if(tasks[i].children[0].checked == false) {
            tasks[i].style.display = "none";
        }
        else {
            tasks[i].style.display = "block";
            tasks[i].children[1].style.textDecoration = "none";
        }
    }
}