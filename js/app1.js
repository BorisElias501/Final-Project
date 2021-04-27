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