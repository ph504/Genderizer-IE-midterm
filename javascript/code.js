function button_pressed() {

	var input = document.getElementById("name-input");
	var predicted = document.getElementById("pred-answer");
	var probability = document.getElementById("pred-prob");
	var male_option = document.getElementById("male-option");
	var female_option = document.getElementById("female-option");
	var saved_answer = document.getElementById("saved-answer");
	if(male_option.checked){
		localStorage.setItem(input.value , "male");
		saved_answer.innerHTML = "male";
		male_option.checked = false;
	}
	else if(female_option.checked){
		localStorage.setItem(input.value , "female");
		saved_answer.innerHTML = "female";
		female_option.checked = false;
	}
	else{
		
		fetch("https://api.genderize.io/?name=" + input.value)
		.then(response => response.json())
		.then(response => {
		predicted.innerHTML = response.gender
		probability.innerHTML = response.probability
		if(localStorage.getItem(input.value)!=null)
			saved_answer.innerHTML = localStorage.getItem(input.value)
		else
			saved_answer.innerHTML = "<br />"
		});
	}
}

function clear_button() {
	var input = document.getElementById("name-input");
	var saved_answer = document.getElementById("saved-answer");
	localStorage.removeItem(input.value);
	saved_answer.innerHTML = "<br />";
}


