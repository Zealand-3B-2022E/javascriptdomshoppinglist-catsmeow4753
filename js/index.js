let myElement = document.getElementById("1");

let myList = document.getElementsByTagName("li");

console.log(myElement);

//console.log(myList);

myElement.setAttribute("hidden", true);

for (let i = 0; i < myList.length; i++)
{
    if (myList[i].getAttribute("class") == "unhealthy")
    {
        myList[i].setAttribute("class", "healthy");
    }

    console.log(myList[i])
}

myParentNode = myElement.parentNode;

console.log(myParentNode);

let myListElement = document.createElement("li");
myListElement.setAttribute("id", "5");
myListElement.setAttribute("class", "healthy");

let myText = document.createTextNode("Text");

myListElement.append(myText);

myParentNode.appendChild(myListElement);