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
            // Находим самый большой id, чтобы новые задачи не пересекались
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
        return this.todos.find(task => task.id === Number(id));
    }

    createTask(value) {
        const newTask = {
            id: this.nextId++,
            value: value.trim(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        this.todos.push(newTask);
        this.saveTasks();
        return newTask;
    }

    updateTask(id, newValue) {
        const task = this.getTaskById(id);
        if (!task) return null;

        task.value = newValue.trim();
        task.updatedAt = new Date().toISOString();
        this.saveTasks();
        return task;
    }
}
