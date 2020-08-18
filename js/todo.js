const toDoForm = document.querySelector(".js-todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-todo-list");

const TODOS_LS = "todos";

let toDos = [];

// 할일 삭제
function deleteTodo(event) {
	var deleteButton = event.target;
	var item = deleteButton.parentNode;
	
	toDoList.removeChild(item);

	var cleanToDos = toDos.filter(function(todo) {
		return todo.id !== parseInt(item.id);
	});

	toDos = cleanToDos;

	saveToDos();
}

// 할일 목록 저장
function saveToDos() {
	localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// 할일 목록에 추가
function paintToDo(text) {
	const item = document.createElement("li");
	const deleteButton = document.createElement("button");
	const span = document.createElement("span");
	const newId = toDos.length + 1;

	deleteButton.innerText = "❌";
	deleteButton.addEventListener("click", deleteTodo);
	span.innerText = text;
	
	item.appendChild(span);
	item.appendChild(deleteButton);
	item.id = newId;

	toDoList.appendChild(item);

	const toDoObj = {
		id: newId,
		text: text
	}

	toDos.push(toDoObj);
	saveToDos();
}

// 할일 보내기
function handleSubmit(event) {
	event.preventDefault();

	const currentValue = toDoInput.value;

	paintToDo(currentValue);
	toDoInput.value = "";
}

// 할일 불러오기
function loadTodos() {
	const loadedToDos = localStorage.getItem(TODOS_LS);

	
	if (loadedToDos !== null) {
		showTodos();

		const parseToDos = JSON.parse(loadedToDos);

		parseToDos.forEach(function(todo) {
			paintToDo(todo.text);
		});
	} 
}

// 할일 표시
function showTodos() {
	toDoForm.classList.add(SHOWING_CN);
	toDoList.classList.add(SHOWING_CN);
}

function init() {
	loadTodos();
	toDoForm.addEventListener("submit",handleSubmit);
}

init();