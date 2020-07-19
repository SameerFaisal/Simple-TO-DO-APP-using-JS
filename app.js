var list = document.getElementById("list");


function addTodo() {
    var todo_item = document.getElementById("todo-item");

    var li = document.createElement('li');
    var liText = document.createTextNode(todo_item.value);
    li.appendChild(liText);

    var deleteButton = document.createElement("button");
    var delText = document.createTextNode("DELETE");
    deleteButton.setAttribute("Class", "btn");
    deleteButton.setAttribute("onclick", "deleteItem(this)");
    deleteButton.appendChild(delText);

    var editButton = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editButton.setAttribute("class", "btn");
    editButton.appendChild(editText);
    editButton.setAttribute("onclick", "editItem(this)");
    li.appendChild(deleteButton);
    li.appendChild(editButton);

    list.appendChild(li);
    todo_item.value = "";
    console.log(li);
}

function deleteItem(e) {
    e.parentNode.remove();
}

function deleteAll() {
    list.innerHTML = "";
}

function editItem(e) {
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit value", val);
    e.parentNode.firstChild.nodeValue = editValue;
    console.log(e.parentNode.firstChild);

}