window.onload = function(){
	let h = document.querySelector("#btn");
	h.addEventListener("click",function(){
		alert(document.querySelector("#name").value);
	});
}
