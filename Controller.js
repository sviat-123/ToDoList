import Storage from './Storage.js' 

export default class Controller {
	constructor() {
        this.storage = new Storage();
    }

  validateTaskInput(titleInput, descTextarea) {
    const title = titleInput.value.trim();
    if (!title) {
      return { ok: false, error: "Название задачи не может быть пустым" };
    }

    const description = descTextarea.value.trim();
    const fullValue = description ? `${title} | ${description}` : title;

    return { ok: true, value: fullValue };
  }

  createTask(fullValue) {
    return this.storage.createTask(fullValue);
  }

  updateTask(id, fullValue) {
    return this.storage.updateTask(id, fullValue);
  }

  deleteTask(id) {
    return this.storage.deleteTask(id);
  }

  getAllTasks() {
		return this.storage.getAllTasks();
  }

  getTask(id) {
    return this.storage.getTaskById(id);
  }
}