export default class Storage {
	constructor() {
        this.todos = [];
        this.nextId = 1;
        this.loadTasks();
    }

    loadTasks() {
        const data = localStorage.getItem('todos');
        if (data) {
            this.todos = JSON.parse(data);
            if (this.todos.length > 0) {
                this.nextId = Math.max(...this.todos.map(t => t.id)) + 1;
            }
        }
    }

    saveTasks() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    getAllTasks() {
        return this.todos;
    }

    getTaskById(id) {
        return this.todos.find(task => task.id === id);
    }

    createTask(title, description) {
        const newTask = {
            id: this.nextId++,
            title: title.trim(),
            description: description.trim(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        this.todos.push(newTask);
        this.saveTasks();
        return newTask;
    }

    updateTask(id, title, description) {
        const task = this.getTaskById(id);
        if (!task) return null;

        task.title = title.trim();
        task.description = description.trim();
        task.updatedAt = new Date().toISOString();
        this.saveTasks();
        return task;
    }

    deleteTask(id){
    const taskIndex = this.todos.findIndex(task => task.id === id);
        if (taskIndex === -1) return null;
        
        const deletedTask = this.todos.splice(taskIndex, 1)[0];
        this.saveTasks();
        return deletedTask;
    }
}
