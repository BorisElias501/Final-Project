
/* ----- Validate form ------ */
function validate () {
    var form = document.form;
    if(form.name.value == 0){
       alert("the name field is empty");
       form.name.value = "";
       form.name.focus();
       return false;
    }
    if(form.email.value == 0){
        alert("the email field is empty");
        form.email.value = "";
        form.email.focus();
        return false;
     }
     if(form.subject.value == 0){
        alert("the subject field is empty");
        form.subject.value = "";
        form.subject.focus();
        return false;
     }
     if(form.message.value == 0){
        alert("the message field is empty");
        form.message.value = "";
        form.message.focus();
        return false;
     }
    
}

/* ----- buttons come back ------  */
function confirmation() {
	var pregunta = confirm("Do you want to return to the main page?")
	if (pregunta){
		alert("Let's go...")
		window.location = "C:/Users/Boris/Documents/Web%20Project/Project.html";
	}
	else{
		alert("In another time...\n Thank you anyway...")
	}
}

/* ----- gallery2 ----- */ 
var containerImg = document.getElementById('gallery2');
var photoImg = document.getElementById('photo').getElementsByTagName('img');

for(var i = 0; i < photoImg.length; i++){
    photoImg[i].addEventListener('click', box);
}

function box() {
    var imgSrc = this.getAttribute('src');
    containerImg.innerHTML = "<img src="+imgSrc+">";
}

   
