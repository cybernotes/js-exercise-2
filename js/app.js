var userSubmit = document.querySelector('#user-submit');
var toDoList = document.querySelector('#to-do-list');

function addToDo(event){
	event.preventDefault();
	var userInput = document.querySelector('#user-input');

	if (userInput.value === ''){
		return false;
	}

	toDoList.innerHTML = '<li><i class="fa fa-window-close close-to-do" aria-hidden="true"></i>' + userInput.value + '</li>'+ toDoList.innerHTML;
	userInput.value = '';
}

function removeToDo(event){
	if (event.target.classList.contains('close-to-do')){
		var li = event.target.parentElement;
		toDoList.removeChild(li);
	}
}
toDoList.addEventListener('click', removeToDo, false);
userSubmit.addEventListener('click', addToDo, false);

// var myNodelist = document.getElementsByTagName("<li>");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }