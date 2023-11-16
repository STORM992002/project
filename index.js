let password = document.getElementById("Password");
let icon = document.getElementById("eye-icon");
let loader=document.getElementById("loader-container");

function showpass(){
 if(password.type=="text"&&icon.name=="eye-off-outline"){
    password.type="password";
    icon.name="eye-outline"
 }
    else{
        password.type="text";
        icon.name="eye-off-outline"
    }
}

    // Function to hide the loader after a specified time (in milliseconds)
    function hideLoader() {
        loader.style.display ="none";
    }

    // Set a timeout to hide the loader after 3000 milliseconds (3 seconds)
    setTimeout(hideLoader, 1000);
