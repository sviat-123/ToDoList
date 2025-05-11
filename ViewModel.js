import Controller from "./Controller.js";

export default class ViewModel {
	constructor() {
		console.log('initialize ViewModel class');
		this.main = document.createElement('div');
		this.toDoList = document.createElement('div');
		this.modalOpenButton = document.createElement('button');
		this.modalOpenButtonText = document.createElement('span');
		this.modalOpenButtonIcon = document.createElement('img');

		this.controller = new Controller();
	}
	
	displayTodoList() {
		this.main.className = 'main';
		this.main.id = 'main';
		document.body.prepend(this.main);

		this.toDoList.className = 'toDoList';
		this.toDoList.id = 'toDolist';
		this.main.prepend(this.toDoList);

		this.modalOpenButton.className = 'modalOpenBtn';
		this.modalOpenButton.id = 'modalOpenBtn';
		this.toDoList.prepend(this.modalOpenButton);

		this.modalOpenButtonText.className = 'modalOpenButtonText';
		this.modalOpenButtonText.id = 'modalOpenButtonText';
		this.modalOpenButtonText.textContent = 'Add Todo';
		this.modalOpenButton.prepend(this.modalOpenButtonText);

		this.modalOpenButtonIcon.className = 'modalOpenButtonIcon';
		this.modalOpenButtonIcon.id = 'modalOpenButtonIcon';
		this.modalOpenButtonIcon.src = './icon/plus_icon.svg';
		this.modalOpenButton.prepend(this.modalOpenButtonIcon);




	}
	init() {
	// Method which initialaize empty state UI
		this.displayTodoList();
	} 
}