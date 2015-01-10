var mainButton = document.getElementById('add-button');
mainButton.addEventListener('click', addNewTodo, false);

var selectAllButton = document.getElementById('select-all-button');
selectAllButton.addEventListener('click', selectAll, false);

var deleteLink = document.getElementById('delete-link');
deleteLink.addEventListener('click', deleteList, false);

var todoList, newTodo, delButton;
var countTodo = 0;

function addNewTodo() {
    var mainTodoValue = document.getElementById('main-todo').value;
    if (mainTodoValue.length) {
		todoList = document.getElementById('todo-list');
		newTodo = document.createElement('li');
		newTodo.innerHTML = '<input type="checkbox" class="check-todo" /><p>' + mainTodoValue + '</p><input type="button" class="del-button" value="Delete" />';
		funcAddEventListeners(newTodo);
		todoList.appendChild(newTodo);
		document.getElementById('main-todo').value = '';
		addNumTasks();
	}
}

function funcAddEventListeners(row) {
    Array.prototype.forEach.call(row.getElementsByClassName('del-button'), function(delButton) {
			delButton.addEventListener('click', delTodo, false);
	});
	Array.prototype.forEach.call(row.getElementsByClassName('check-todo'), function(checkBox) {
		checkBox.addEventListener('change', checkTodo, false);
	});
}

function checkTodo() {
    if (this.checked == true) {
	    this.nextSibling.style.textDecoration = 'line-through';
	} else {
	    this.nextSibling.style.textDecoration = 'none';
	}
}

function delTodo() {
	var rowTodo = this.parentNode;
	var listTodo = rowTodo.parentNode;
	listTodo.removeChild(rowTodo);
	delNumTasks();	
}

function selectAll() {
    if (selectAllButton.className !== 'all-selected') {
	    selectAllButton.className = 'all-selected';
		Array.prototype.forEach.call(document.getElementsByClassName('check-todo'), function(checkBoxes) {
			checkBoxes.checked = true;
			checkBoxes.nextSibling.style.textDecoration = 'line-through';
		});
	} else {
	    delete selectAllButton.className;
	    Array.prototype.forEach.call(document.getElementsByClassName('check-todo'), function(checkBoxes) {
		    checkBoxes.checked = false;
			checkBoxes.nextSibling.style.textDecoration = 'none';
		}); 
	}
}

function deleteList() {
    while(todoList.firstChild) {
	    todoList.removeChild(todoList.firstChild);
    }
	countTodo = 0;
	document.getElementById('num-tasks').innerHTML = countTodo;
}

function addNumTasks() {
    countTodo += 1;
	document.getElementById('num-tasks').innerHTML = countTodo;
}
function delNumTasks() {
    countTodo -= 1;
	document.getElementById('num-tasks').innerHTML = countTodo;
}