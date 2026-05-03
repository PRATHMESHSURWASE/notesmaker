const createbutton=document.getElementById('create_button');
const savedone=document.getElementById('savedone');
const savebutton=document.getElementById('savebutton');

createbutton.addEventListener('click',() =>{
let new_text=document.createElement("input");
new_text.type="text";
new_text.placeholder="Write the notes";
new_text.classList.add("dynamic-note");

document.querySelector(".desktopcontainer").appendChild(new_text);
});
savebutton.addEventListener('click',()=>{
    let savednotes= document.querySelectorAll(".dynamic-note");
    let data=[]
    savednotes.forEach(savednotes => {
        if(savednotes.value.trim()!=""){
            data.push(savednotes.value);
        }
      savednotes.style.display="none"  
    });
   localStorage.setItem('data',JSON.stringify(data));
   alert("NOTE SAVED SUCESSFULLY");
});

savedone.addEventListener('click',()=>{
    let savedonenotes=document.querySelector(".desktopcontainer");
    savedonenotes.innerHTML = "";
    let data=JSON.parse(localStorage.getItem("data"))||[];

   data.forEach(note => {
        let div = document.createElement("div");
        div.classList.add("savedin");
        div.innerText = note;
        savedonenotes.appendChild(div);
    });
});