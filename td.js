var rem = document.getElementById('remove');
rem.onclick = function() {
var div = this.parentElement;
div.style.display = "none";
}

var add = document.getElementById('b1');
add.onclick = function() {
var li = document.createElement('li');
var span = document.createElement('span');
var input1 = document.createTextNode('X ');
  span.id = "remove";
span.appendChild(input1);
var input2 = document.getElementById('t1').value;
var txt = document.createTextNode(input2);
  if (!(input2 === '')) {
li.appendChild(span);
li.appendChild(txt);
document.getElementById("textholder").appendChild(li);
  }
document.getElementById("t1").value = "";

var rem = document.getElementById('remove');
rem.onclick = function() {
var div = this.parentElement;
div.style.display = "none";
  }

}
/*var input=document.querySelector("input[type='text']")
input.onkeypress=(function(evt) {
	if(evt.which == 13) {
		vartodo = document.createELement("li");
		vartodotext = document.createTextNode(this.value);
		todo.appendChild(todotext);
		document.getElementById("textholder").appendChild(todo);
	}
});*/
