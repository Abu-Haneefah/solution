// selection of variables
var email = 'email@company.com';
var inputSpace = $("#myInput");

// if a vaild mail is provided , it shows sucess
$("button").click(function(){ 
    var userInput = inputSpace.val();
    if(validEmail(userInput)){
    $("#success-page").css("visibility", "visible");
    $("#front-page").css("visibility", "hidden");
   
}
// wrong mail error state
else{
    $(".error-message").css("visibility", "visible");
}
});

// checks the mail provided
function validEmail(email){
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
} 