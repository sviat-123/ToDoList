import Storage from './Storage.js' 

export default class Controller {
	constructor() {
		console.log('initialize Controller class');

    this.storageService = new Storage();
		
	}

	validateTextField(modalInput, modalTextArea) {
		if (modalInput.value.trim() === '') {
			throw new Error('The field must not be empty');
		} else {
			return this.storageService.createTask(
				`${modalInput.value}${modalTextArea.value ? ' | ' + modalTextArea.value : ''}`
			);
		}
	}

	getTasks() {
		return this.storageService.getTasks();
	}

	updateTask(id, newValue) {
		return this.storageService.updateTask(id, newValue);
	}

	deleteTask(id) {
		return this.storageService.deleteTask(id);
	}

	getTask(id) {
		return this.storageService.getTask(id);
	}
}