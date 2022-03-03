function loadDoc(){
	var xhttp= new XMLHttpRequest();
	xhttp.onreadstatechange=function(){
		if(this.readyState==4 && this.status==200){
		document.getElementById("container").innerHTML=this.responseText;
		}
	};
	xhttp.open("GET", "ajax_info.txt",true);
	xhttp.send();
}