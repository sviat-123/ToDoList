import Controller from "./Controller.js";

export default class ViewModel {
	constructor() {
		console.log('initialize ViewModel class');
		this.controller = new Controller();


		this.main = document.createElement('div');
		this.toDoList = document.createElement('div');
		this.modalOpenButton = document.createElement('button');
		this.modalOpenButtonText = document.createElement('span');
		this.modalOpenButtonIcon = document.createElement('img');
		
		//initializing a modal window
		this.modal = document.createElement('div');
		this.modalHeader = document.createElement('div');
		this.modalTitle = document.createElement('h1');
		this.modalCloseButton = document.createElement('button');
		this.modalBody = document.createElement('div');
		this.modalSubtitle_1 = document.createElement('h2');
		this.modalInput = document.createElement('input');
		this.modalDescripton = document.createElement('div');
		this.modalSubtitle_2= document.createElement('h2');
		this.modalTextArea = document.createElement('textarea');
		this.modalFooter = document.createElement('div');
		this.modalCancelButton = document.createElement('button');
		this.modalSubmitButton = document.createElement('button');
	}
	
	
	displayTodoList() {
		this.main.className = 'main';
		this.main.id = 'main';
		document.body.prepend(this.main);

		this.toDoList.className = 'toDoList';
		this.toDoList.id = 'toDolist';
		this.main.prepend(this.toDoList);

		this.modalOpenButton.className = 'button-open-modal';
		this.modalOpenButton.id = 'button-open-modal';
		this.toDoList.prepend(this.modalOpenButton);

		this.modalOpenButtonText.className = 'button-open-modal__text';
		this.modalOpenButtonText.id = 'button-open-modal__text';
		this.modalOpenButtonText.textContent = 'Add Todo';
		this.modalOpenButton.prepend(this.modalOpenButtonText);

		this.modalOpenButtonIcon.className = 'button-open-modal__icon';
		this.modalOpenButtonIcon.id = 'button-open-modal__icon';
		this.modalOpenButtonIcon.src = './icon/plus_icon.svg';
		this.modalOpenButton.prepend(this.modalOpenButtonIcon);
	}

	displayModalWindow(){
		this.modal.className = 'modal';
		this.modal.id = 'taskModal';
		this.main.after(this.modal);

		this.modalHeader.className = 'block modal__header';
		this.modalHeader.id = 'taskModal__header';
		this.modal.append(this.modalHeader)

		this.modalTitle.className = 'modal__title';
		this.modalTitle.id = 'taskModal__title';
		this.modalTitle.textContent = 'Add Todo';
		this.modalHeader.append(this.modalTitle);

		this.modalCloseButton.className = 'modal__button modal__button-close';
		this.modalCloseButton.id = 'taskModal__closeButton';
		this.modalHeader.append(this.modalCloseButton);

		this.modalBody.className = 'block modal__body';
		this.modalBody.id = 'taskModal__body';
		this.modal.append(this.modalBody);

		this.modalSubtitle_1.className = 'modal__subtitle';
		this.modalSubtitle_1.id = 'taskModal__subtitle_1';
		this.modalSubtitle_1.textContent = 'Title';
		this.modalBody.append(this.modalSubtitle_1);

		this.modalInput.className = 'modal__input';
		this.modalInput.id = 'taskModal__titleInput';
		this.modalInput.value = 'What needs to be done?';
		this.modalBody.append(this.modalInput);

		this.modalDescripton.className = 'block modal__description';
		this.modalDescripton.id = 'taskModal__description';
		this.modal.append(this.modalDescripton);

		this.modalSubtitle_2.className = 'modal__subtitle';
		this.modalSubtitle_2.id = 'taskModal__subtitle_2';
		this.modalSubtitle_2.textContent = 'Description (optional)'
		this.modalDescripton.append(this.modalSubtitle_2);

		this.modalTextArea.className = 'modal__teaxarea';
		this.modalTextArea.id = 'taskModal__descriptionInput';
		this.modalTextArea.value = 'Add detailse...';
		this.modalDescripton.append(this.modalTextArea);

		this.modalFooter.className = 'block modal__footer';
		this.modalFooter.id = 'taskModal__footer';
		this.modal.append(this.modalFooter);

		this.modalCancelButton.className = 'modal__button modal__button-cancel';
		this.modalCancelButton.id = 'taskModal__cancelButton';
		this.modalCancelButton.textContent = 'Cancel';
		this.modalFooter.append(this.modalCancelButton);

		this.modalSubmitButton.className = 'modal__button modal__button-submit';
		this.modalSubmitButton.id = 'taskModal__submitButton';
		this.modalSubmitButton.textContent = 'Submit';
		this.modalFooter.append(this.modalSubmitButton);
	}



	init() {
	// Method which initialaize empty state UI
		this.displayTodoList();
		this.displayModalWindow();
	} 
}