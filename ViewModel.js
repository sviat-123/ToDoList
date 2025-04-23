import Controller from "./Controller.js";

export default class ViewModel {
	constructor() {
		console.log('initialize ViewModel class');
		this.controller = new Controller();
	}
	
	init() {
	// Method which initialaize empty state UI
	} 
}