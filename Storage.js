export default class Storage {
	constructor() {
		console.log('initialize Storage class');
		this.todos = [];
		this.nextId = 1
		this.loadTasks()
	}
	getTasks(){
		return this.todos
	}
	createTask(value){
		const task ={
			id: this.nextId++,
			value: value.trim(),
			createAt: new Date().toISOString(),
			updateAt: new Date().toISOString(),
		}
		this.todos.push(task)
		this.saveToLocalStorage()
		return task
	}
	updateTask(){}
	deleteTask(){}
	getTask(id) {
		return this.todos.find(t => t.id === id);
	}
	saveToLocalStorage(){
		localStorage.setItem('todos', JSON.stringify(this.todos));
	}
	loadTasks() {
		const stored = localStorage.getItem('todos');
		if (stored) {
			this.todos = JSON.parse(stored);
			if (this.todos.length > 0) {
				this.nextId = Math.max(...this.todos.map(t => t.id)) + 1;
			}
		} else {
			this.todos = [];
		}
	}
}
