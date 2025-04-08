function myFunction() {
    const taskList = document.getElementById("tasklist");
    let taskText = prompt("Enter task: ");
  
    if (taskText.trim() === "") {
      alert("Name of the task can't be empty");
      return;
    }
  
    if (document.querySelectorAll("li").length >= 10) {
      alert("You can't enter 11 or more tasks");
      return;
    }
    
    const newListItem = document.createElement("li");
    newListItem.innerText = taskText;
    taskList.appendChild(newListItem);
  }
  
  function removeTask(index) {
    const taskList = document.getElementById("tasklist");
    const tasks = taskList.getElementsByTagName("li");
  
    if (tasks.length > index) {
      tasks[index].remove();
    } else {
      alert("Task does not exist");
    }
  }
  
  function function1() { removeTask(0); }
  function function2() { removeTask(1); }
  function function3() { removeTask(2); }
  function function4() { removeTask(3); }
  function function5() { removeTask(4); }
  function function6() { removeTask(5); }
  function function7() { removeTask(6); }
  function function8() { removeTask(7); }
  function function9() { removeTask(8); }
  function function10() { removeTask(9); }
  