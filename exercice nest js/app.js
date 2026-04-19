const API="http://localhost:3000/todo";
async function loadTasks() {
    const res=await fetch(API);
const data=await res.json();
const list=document.getElementById("list");
list.innerHTML="";
data.forEach(task=>{
    const li=document.createElement("li");
   li.innerHTML=  `${task.title}
    <button onClick="deleteTask(${task.id})">X</button>`;
    list.appendChild(li);

});
}
async function addTask(){
    const title=document.getElementById("title").value;
     console.log("Envoi de la tache :", title);
  const res=  await fetch (API,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({title})
        
    })
     console.log("Réponse API :", res);
    document.getElementById("title").value="";
loadTasks();
}

async function deleteTask(id){
    await fetch(`${API}/${id}`,{
        method:"DELETE"}
    )
    loadTasks();
}
  loadTasks();
