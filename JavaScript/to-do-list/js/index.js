function newItem(){
    //this is grabbing the user text inside the input with the input id and assigningit to a variable named item 
    var item = document.getElementById("input").value;
    //this is grabbing the <ul> from the HTML file and assinging it to a varivale named ul
    var ul = document.getElementById("list");
    
    //this is creating a <li> element in HTML and assigning it to a variable named li  
    var li = document.createElement("li");

    //the appendChild() method is taking the value of our item (input value) and creating a textNode (string of characters) that will append as "- toDoItem"
    li.appendChild(document.createTextNode("- " + item));

    //this is placing <li> inside of the <ul>
    ul.appendChild(li);

    //this is resetting the value of our input back to an empty string
    document.getElementById("input").value = "";

    li.onclick = removeItem;

}

document.body.onkeyup = function(e){
    if(e.keyCode == 13){
        newItem();
    }
};

//the e parameter represents the element that is effect by event
function removeItem(e){
    e.target.parentElement.removeChild(e.target)
}
