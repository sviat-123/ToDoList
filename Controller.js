import Storage from './Storage.js' 

export default class Controller {
	constructor() {
        this.storage = new Storage();
    }

  validateTaskInput(titleInput, descTextarea) {
    const title = titleInput.value.trim();
    const description = descTextarea.value.trim();
    if (!title) {
      throw new Error("Название задачи не может быть пустым");
    }
    return { title, description };
  }

  createTask(titleValue, descriptionValue) {
    return this.storage.createTask(titleValue, descriptionValue);
  }

  updateTask(id, titleValue, descriptionValue) {
    return this.storage.updateTask(Number(id), titleValue, descriptionValue);
  }

  deleteTask(id) {
    return this.storage.deleteTask(Number(id));
  }

  getAllTasks() {
		return this.storage.getAllTasks();
  }

  getTask(id) {
    return this.storage.getTaskById(Number(id));
  }
}