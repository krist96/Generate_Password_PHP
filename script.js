class Generate 
{	
	constructor(howLong, showPassword)
	{
		this.howLong = howLong;
		this.showPassword = showPassword;
	}

	connect()
	{
		let xhr = new XMLHttpRequest();
					
		xhr.onreadystatechange = function() 
		{
			if (xhr.status === 200) 
			{
				let getResult = xhr.responseText;
				showPassword.value = getResult;
				console.log(getResult);	
			}
		}
					
		let link = `generate.php?howLong=${this.howLong}`;
		xhr.open('GET', link, true);
		xhr.send(null);
	}
}




let getPassword = document.getElementById("getPassword");

	getPassword.addEventListener("click", () => 
	{
		let howLong = document.getElementById("lengthPassword").value;
		let showPassword = document.getElementById("showPassword");
	
		if(howLong.length < 4 && howLong.length !== 0 ) {
			let generate = new Generate(howLong, showPassword);
			generate.connect();
		} else {
			showPassword.value = "Podaj hasło składające się z 1,2 lub 3 znaków i wciśnij";
		}
	
	});





