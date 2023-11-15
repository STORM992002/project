let password = document.getElementById("Password");
let icon = document.getElementById("icon");
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

document.getElementById("myForm").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    console.log("working");
    // Specify the relative path to the about.html file
    var destinationPage = "/HomePage.html";

    // Redirect to the specified page
    window.location.href = destinationPage;
    // Your custom logic or AJAX requests can go here

    // For demonstration purposes, let's log a message
    console.log("Form submission prevented. Custom logic can be added here.");
});

function redirectToAboutPage(event) {
    event.preventDefault();

   
}








    // Function to hide the loader after a specified time (in milliseconds)
    function hideLoader() {
        loader.style.display ="none";
    }

    // Set a timeout to hide the loader after 3000 milliseconds (3 seconds)
    setTimeout(hideLoader, 3000);
