import Storage from './Storage.js';

export default class Controller {
	constructor() {
		console.log('initialize Controller class');
    this.storageService = new Storage();
		
	}
	//валидация поля, ошибка валидации, доступ,  получения обновленного текста 

	validateTextField(modalInput, modalTextArea){
		this.errorEmptyField = true;
		if(modalInput.value === ''){
			this.errorEmptyField = false;
		} else {
			this.storageService.saveTasks(modalInput.value, modalTextArea.value);
		}
		return this.errorEmptyField;
	}
}