import Storage from './Storage.js' 

export default class Controller {
	constructor() {
		console.log('initialize Controller class');

    this.storageService = new Storage();
		
	}
	
	//валидация поля, ошибка валидации, доступ, получения обновленного текста 
	validateTextField(modalInput, modalTextArea){
		if(modalInput.value === ''){
			throw new Error('Поле не должно быть пустым');
		} else {
			this.storageService.saveTasks(modalInput.value, modalTextArea.value);
		}
		return true;
	}
}