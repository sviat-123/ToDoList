import Storage from './Storage.js';

export default class Controller {
	constructor() {
		console.log('initialize Controller class');
    this.storageService = new Storage();

	}
	//валидация поля, ошибка валидации, доступ,  получения обновленного текста 

	validateTextField(modalInput, modalTextArea){
		if(modalInput.value === ''){
			modalInput.placeholder = 'Required fields';
			modalInput.classList.add('error');

		} else {
			this.storageService.saveTasks(modalInput.value, modalTextArea.value);
		}
	}
}