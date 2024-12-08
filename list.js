let myItems= [];
const itemEl= document.getElementById("item-el");
const submitEl=document.getElementById("submit-el");
const clearListEl=document.getElementById("clearlist-el");

const myListEl=document.getElementById("myList-el");

submitEl.addEventListener("click",function(){

    myItems.push(itemEl.value);
    itemEl.value="";
    localStorage.setItem("myItems", JSON.stringify(myItems));
    return rendermyItems();
})


function rendermyItems(){
    let listItems="";
    for (i=0; i<myItems.length; i++){
        console.log(myItems[i]);

        // myListEl.textContent+= myItems[i];

        myListEl.innerHTML+= "<li>" +myItems[i]+ "</li>"
        
        listItems+= "<li>" +myItems[i]+ "</li>"    
    }
     
    myListEl.innerHTML= listItems;
}



