var userSubmit = document.querySelector('#user-submit');

function addToDo(event){
	event.preventDefault();
	var userInput = document.querySelector('#user-input');
	var toDoList = document.querySelector('#to-do-list');

	if (userInput.value === ''){
		return false;
	}

	toDoList.innerHTML = '<li>' + userInput.value + '</li>'+ toDoList.innerHTML;
	userInput.value = '';
}

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