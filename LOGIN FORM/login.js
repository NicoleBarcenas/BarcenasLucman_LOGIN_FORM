//this is a comment

function login(){
	let user = document.getElementById("user").value;
	let pass = document.getElementById("pass").value;

	if(user=="admin"&&pass=="admin"){
		let response = document.getElementById("t");
		response.innerHTML = "It works!";
		response.style.color = "white";
		response.style.fontWeight = "bold";
		response.style.textAlign = "center";
		response.classList.add("m-5");
		response.focus();
		setTimeout(location.reload.bind(location), 1500);

	}else if(user=="user"&&pass=="user"){
		let response2 = document.getElementById("b");
		response2.innerHTML = "It works!";
		response2.style.color = "white";
		response2.style.fontWeight = "bold";
		response2.style.textAlign = "center";
		response2.classList.add("m-5");
		response2.focus();
		window.scrollTo(0,document.body.scrollHeight);
		setTimeout(location.reload.bind(location), 2000);

	}else{
		alert("username or password is incorrect!");	
	}
}