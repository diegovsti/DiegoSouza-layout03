window.onload = function (){
	document.querySelector(".menumobile").addEventListener("click", function(){
		if(document.querySelector(".menu .menu-nav ul").style.display == 'block'){
			document.querySelector(".menu .menu-nav ul").style.display = 'none';
		}else {
			document.querySelector(".menu .menu-nav ul").style.display = 'block';
		}
	});
};


 