

	
	var login = document.getElementById('login');
	var reg = document.getElementById('reg');
	
	var login_content = document.getElementById('login_content');
	var reg_content = document.getElementById('reg_content');

	reg.onclick = function() {
		
		login_content.style = "display: none";
		reg_content.style = "display: block";
		
		login.style = "background-color: #EDEDED; color: #000;";
		reg.style = "background-color: #FF0044; color: #fff;";
					
	};
	
	login.onclick = function() {

		reg_content.style = "display: none";
		login_content.style = "display: block";
		
		reg.style = "background-color: #EDEDED; color: #000;";
		login.style = "background-color: #FF0044; color: #fff;";
		
	};