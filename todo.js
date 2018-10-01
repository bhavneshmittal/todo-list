function todolist() {
	var item=document.getELementById("todoinput").value
	var text=document.createTextNode(item)
	var newitem=document.createELement("li")
	newitem.appendChild(text)
	document.getElementById("todolist").appendChild(newitem)
}