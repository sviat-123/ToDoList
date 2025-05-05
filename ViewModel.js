import Controller from "./Controller.js";

export default class ViewModel {
	constructor() {
		console.log('initialize ViewModel class');
		this.Main = document.createElement('div');
		this.ToDoList = document.createElement('div');
		this.ModalOpenButton = document.createElement('button');
		this.ModalOpenButtonText = document.createElement('span');
		this.ModalOpenButtonIcon = document.createElement('img');

		this.controller = new Controller();
	}
	
	DisplayTodoList() {
		this.Main.className = 'Main';
		this.Main.id = 'Main';
		document.body.prepend(this.Main);

		this.ToDoList.className = 'ToDoList';
		this.ToDoList.id = 'ToDolist';
		this.Main.prepend(this.ToDoList);

		this.ModalOpenButton.className = 'ModalOpenBtn';
		this.ModalOpenButton.id = 'ModalOpenBtn';
		this.ToDoList.prepend(this.ModalOpenButton);

		this.ModalOpenButtonText.className = 'ModalOpenButtonText';
		this.ModalOpenButtonText.id = 'ModalOpenButtonText';
		this.ModalOpenButtonText.textContent = 'Add Todo';
		this.ModalOpenButton.prepend(this.ModalOpenButtonText);

		this.ModalOpenButtonIcon.className = 'ModalOpenButtonIcon';
		this.ModalOpenButtonIcon.id = 'ModalOpenButtonIcon';
		this.ModalOpenButtonIcon.src = './icon/plus_icon.svg';
		this.ModalOpenButton.prepend(this.ModalOpenButtonIcon);




	}
	init() {
	// Method which initialaize empty state UI
	} 
}