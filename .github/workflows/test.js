const { createTask, deleteTask } = require('./taskFunctions'); // Assuming your task functions are in a separate file

// Test suite for task management
describe('Task Management', () => {
    // Test case for creating a task
    test('Create Task', () => {
        const newTask = createTask('Test Task', 'Test Description', '2024-03-25', 'high');
        expect(newTask.title).toBe('Test Task');
        expect(newTask.description).toBe('Test Description');
        expect(newTask.dueDate).toBe('2024-03-25');
        expect(newTask.priority).toBe('high');
    });

    // Test case for deleting a task
    test('Delete Task', () => {
        const tasks = [
            { id: 1, title: 'Task 1', description: 'Description 1', dueDate: '2024-03-15', priority: 'low' },
            { id: 2, title: 'Task 2', description: 'Description 2', dueDate: '2024-03-20', priority: 'medium' }
        ];
        const taskIdToDelete = 1;
        const remainingTasks = deleteTask(tasks, taskIdToDelete);
        expect(remainingTasks.length).toBe(1);
        expect(remainingTasks[0].id).toBe(2);
    });
});
