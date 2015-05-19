function createList(){
	
	var button =  document.querySelector("button");
	var list =  document.querySelector("ul");
	var input = document.querySelector("input");

	button.addEventListener("click", function(e){
		e.preventDefault();
		var item = document.createElement("li");
		if (input.value != ""){		
			item.innerHTML = input.value;
			list.appendChild(item);
			input.value = "";
		}
	});

}

createList();