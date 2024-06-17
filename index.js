var fName, lName, email, query, message, consent;

$("#submit-button").on("click", (event)=> {
    event.preventDefault();
    fName = $("#fName-input").val();
    lName = $("#lName-input").val();
    email = $("#email-input").val();
    message = $("#message-textarea").val();
    query = $("input[name='query-type']:checked").val();
    consent = $("#consent-input").is(":checked");

    if(fName !== '' && lName !== '' && email !== '' && query !== '' && message !== '' && consent){
        $("#toast-message").slideDown(1000).css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: "40px" ,
        borderRadius: "15px",
        color: "white",
            });
        setTimeout(()=>{
            $("#toast-message").slideUp(1000);
        }, 3000);
        submittedFunction();       
    }
    else if(fName===''){
        $(".fName-error").css({color: "hsl(0, 66%, 54%)"}).slideDown(500);
        setTimeout(()=>{
            $(".fName-error").slideUp(1000);
        }, 3000);
    }
    else if(lName === ''){
         $(".lName-error").css({ color: "hsl(0, 66%, 54%)"}).slideDown(500);
        setTimeout(()=>{
            $(".lName-error").slideUp(1000);
        }, 3000);
    }

    else if(email === '' || !isValidEmail(email)){
        $(".email-error").css({color: "hsl(0, 66%, 54%)"}).slideDown(500);
        setTimeout(()=>{
            $(".email-error").slideUp(1000)
        }, 3000);
    }

    else if(query === undefined){
        $(".query-error").css({color: "hsl(0, 66%, 54%)"}).slideDown(500);
        setTimeout(
            ()=>{ $(".query-error").slideUp(1000);

            }, 3000);
        }

    else if(message ===''){
        $(".message-error").css({color: "hsl(0, 66%, 54%)"}).slideDown(500);
        setTimeout(()=>{
            $(".message-error").slideUp("1000");
        }, 3000);
    }
    else if(!consent){
        $(".consent-error").css({color: "hsl(0, 66%, 54%)"}).slideDown(500);
        setTimeout(()=>{
            $(".consent-error").slideUp(1000);
        }, 3000);
    }
});


var submittedFunction = () =>{
    $("#contactForm")[0].reset();
}

var isValidEmail = (email) =>{
    if(email.includes("@gmail.com")|| email.includes("@yahoo.com") || email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}







