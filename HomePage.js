let items=document.getElementById("subfeature");

function showitems(){
    console.log("working");
    if(items.style.visibility=="hidden"){
        items.style.visibility="visible";
    }
    else{
        items.style.visibility="hidden";
    }
}
