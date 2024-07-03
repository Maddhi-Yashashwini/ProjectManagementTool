function addTask(event) {
    event.preventDefault();
    var Name = document.getElementById("name").value;
    var taskName = document.getElementById("tname").value;
    var taskDescription = document.getElementById("tdesc").value;
    var deadline = document.getElementById("date").value;

    
    var taskElement = document.createElement("table");
    taskElement.className = "task";

    
    
    var taskContent = 
    `
      <tr>
        <td>${Name} </td>
        <td>${taskName}  </td>
        <td class="taskdescription">${taskDescription}</td>
        <td class="deadline">${deadline}</td>
        
        <td><button class="delete-task">Done</button></td>
       </tr>
    `;

    taskElement.innerHTML = taskContent;
  // var taskValues = `
  
  // `;
  //   taskElement.innerHTML=taskContent;


    var taskList = document.getElementById("task-list");
    var taskMessage = document.querySelector(".message");
    taskMessage.style.display="none";
    taskList.appendChild(taskElement);
    // taskList.appendChild(taskContent);


    document.getElementById("form").reset();

 
    var deleteButton = taskElement.getElementsByClassName("delete-task")[0];
    deleteButton.addEventListener("click", function() {
        taskList.removeChild(taskElement);
    });
}


document.getElementById("form").addEventListener("submit", addTask);