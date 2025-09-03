import Storage from './Storage.js' 

export default class Controller {
	constructor() {
		console.log('initialize Controller class');
        this.storageService = new Storage();
	}
}