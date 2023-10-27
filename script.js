var inp = document.getElementById("inp");
var btn = document.getElementById('btn');
var listitem = document.getElementById('listItems');


var taskId = 1;

function addTask(event) {
    event.preventDefault();
    var taskText = inp.value;

    if (taskText !== " ") {
        var taskItem = document.createElement('li');

        taskItem.innerHTML = `
        <div class='TaskItem'>
        <span id='TaskText'>${taskText}</span>
        <div>
        <button class='textedit'>edit</button>
        <button class='delete-btn '>Delete</button>
        </div>
        </div>`;
        listitem.appendChild(taskItem);

        inp.value = " ";
        taskId++;

        const deletebtn = taskItem.querySelector('.delete-btn');
        deletebtn.addEventListener('click', deleteTask);

        const textedit = taskItem.querySelector('.textedit');
        textedit.addEventListener('click', EditText);
 
        //Edit Function for the Entered ToDo
        function EditText() {
            const taskText = this.parentElement.previousElementSibling;
  
            const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.value = taskText.innerText;
          
            const saveBtn = document.createElement('button');
            saveBtn.innerText = 'Save'; 
          
            taskText.parentElement.append(editInput, saveBtn);
            
            // Hide text and show input
            taskText.style.display = 'none';
            editInput.style.display = 'inline';
          
            // Save edited text
            saveBtn.addEventListener('click', () => {
              taskText.innerText = editInput.value;
              taskText.style.display = 'inline';
              editInput.remove();
              saveBtn.remove(); 
            })
        }
    }


}
function deleteTask(event) {
    var ListItem = event.target.parentElement.parentElement.parentElement;
    console.log(ListItem);
    listitem.removeChild(ListItem);
}



btn.addEventListener('click', addTask);