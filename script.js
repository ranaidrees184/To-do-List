const textbox =document.getElementById("inputbox").value;
const listContainer =document.getElementById("list-container");

function addtask(){
   
    if(inputbox.value === ''){
        alert("you must have to enter some value ");

    }
    else
    {
        const listContainer =document.getElementById("list-container");
        let li =document.createElement('li');
        li.innerHTML=inputbox.value;
        listContainer.appendChild(li);
        inputbox.value='';

        let span = document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
   
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
    }
})
