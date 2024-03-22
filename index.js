// JavaScript code for task management app

// Get the modal, close button, and modal content
var modal = document.getElementById("taskDetailsModal");
var closeBtn = document.getElementsByClassName("close")[0];
var modalContent = document.querySelector(".modal-content");

// Close the modal when clicking on <span> (x)
closeBtn.onclick = function() {
    modal.style.display = "none"; // Hide the modal
}

// Close the modal when clicking anywhere outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Hide the modal
    }
}

// Task Creation Form Submission
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get form inputs
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var dueDate = document.getElementById('dueDate').value;
    var priority = document.getElementById('priority').value;
    var tagsInput = document.getElementById('tags').value;
    var tags = tagsInput.split(',').map(tag => tag.trim()); // Split input by comma and trim each tag
    
    // Create a task object
    var task = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        completed: false, // Initially, task is not completed
        tags: tags
    };
    
    // Add the new task to the tasks array
    tasks.push(task);
    
    // Re-display tasks after adding the new task
    displayTasks(getFilteredTasks());
    
    // Set a reminder if due date is set
    if (dueDate) {
        setTaskReminder(task);
    }
});
