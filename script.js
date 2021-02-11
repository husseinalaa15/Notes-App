let notesEl = document.querySelector(".notes");

let container = document.querySelector(".container");

let addNote = document.querySelector(".add");

const notes = JSON.parse(localStorage.getItem("notes"));

let input = document.querySelectorAll('.input');
let form = document.querySelectorAll("#form");


if(notes){
    let textarea= document.querySelector("textarea");
    notes.forEach(textInNote=>{
        addNewNote(textInNote)
    })
}



addNote.addEventListener("click",()=>{
    addNewNote();
})

function addNewNote(textInNote = ''    ){
    
    const note = document.createElement('div');
    
    note.classList.add("notes");
        note.innerHTML = `<div class="notes">
            
            <div class="tools">  
                
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="main ${textInNote ? '' : "hidden"}">
            </div>
            <textarea class="textarea ${textInNote ? "hidden" : '' }"></textarea>
            

        </div>`;
        let editBtn = note.querySelector(".edit");
        let deleteBtn = note.querySelector(".delete");
        let main = note.querySelector(".main");
        let textarea = note.querySelector(".textarea");

        let form = note.querySelector("#form");

       
        
        
        

        textarea.value = textInNote; 
        main.innerHTML = marked(textInNote);

    
        

        editBtn.addEventListener("click",()=>{
            main.classList.toggle('hidden');
            textarea.classList.toggle('hidden');
        
        });
        
        textarea.addEventListener("input",(e) =>{
            const { value }  = e.target;
        
            main.innerHTML= marked(value); 

            updateLS()
        });

        
           
       

        deleteBtn.addEventListener("click", ()=>{
            note.remove();

            updateLS();
        })

     

    document.body.appendChild(note);
}


function updateLS(){
    const notesText = document.querySelectorAll('textarea');
    const notes = [];

    notesText.forEach(note=>{
        notes.push(note.value);
    });
    
       
    

    localStorage.setItem("notes",JSON.stringify(notes));
    
    
}




