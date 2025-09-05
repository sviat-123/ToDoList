import Controller from "./Controller.js";

export default class ViewModel {
	constructor() {
		console.log('initialize ViewModel class');
		this.controller = new Controller();

		//initializing todolist
		this.main = document.createElement('div');
		this.toDoList = document.createElement('div');
		this.toDoListTitle = document.createElement('h1');
		this.modalOpenButtonAddTask = document.createElement('button');
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

		//initializing tasks
		this.taskList = document.createElement('ul');
		this.task = document.createElement('li');
		this.taskCheckBox = document.createElement('input');
		this.taskTittle = document.createElement('p');
		this.taskSubtitle = document.createElement('p');
		this.taskEditButton = document.createElement('button');
		this.taskDeleteButton = document.createElement('button');

		//state of one window
		this.isModalOpen = false;
	}
	
	displayTodoList() {
		this.main.classList = 'main';
		this.main.id = 'main';
		document.body.prepend(this.main);

		this.toDoList.classList = 'toDoList';
		this.toDoList.id = 'toDolist';
		this.main.prepend(this.toDoList);

		this.toDoListTitle.classList.add('to-Do-List__title');
		this.toDoListTitle.id = 'toDolistTitle';
		this.toDoListTitle.textContent = 'ToDo List';
		this.toDoList.prepend(this.toDoListTitle);

		this.modalOpenButtonAddTask.classList.add('button-open-modal');
		this.modalOpenButtonAddTask.id = 'button-open-modal';
		this.toDoListTitle.after(this.modalOpenButtonAddTask);

		this.modalOpenButtonText.classList.add('button-open-modal__text');
		this.modalOpenButtonText.id = 'button-open-modal__text';
		this.modalOpenButtonText.textContent = 'Add Todo';
		this.modalOpenButtonAddTask.prepend(this.modalOpenButtonText);

		this.modalOpenButtonIcon.classList.add('button-open-modal__icon');
		this.modalOpenButtonIcon.id = 'button-open-modal__icon';
		this.modalOpenButtonIcon.src = './icon/plus_icon.svg';
		this.modalOpenButtonAddTask.prepend(this.modalOpenButtonIcon);

		this.taskList.classList.add('task__list');
		this.taskList.id = 'taskList';
		this.modalOpenButtonAddTask.after(this.taskList);
	}

	displayModalWindow(){
		this.modal.classList.add('modal');
		this.modal.id = 'taskModal';
		this.main.after(this.modal);

		this.modalHeader.classList.add('modal__header');
		this.modalHeader.classList.add('block');
		this.modalHeader.id = 'taskModal__header';
		this.modal.append(this.modalHeader)

		this.modalTitle.classList.add('modal__title');
		this.modalTitle.id = 'taskModal__title';
		this.modalTitle.textContent = 'Add Todo';
		this.modalHeader.append(this.modalTitle);

		this.modalCloseButton.classList.add('modal__button-close');
		this.modalCloseButton.classList.add('modal__button');
		this.modalCloseButton.id = 'taskModal__closeButton';
		this.modalHeader.append(this.modalCloseButton);

		this.modalBody.classList.add('modal__body');
		this.modalBody.classList.add('block');
		this.modalBody.id = 'taskModal__body';
		this.modal.append(this.modalBody);

		this.modalSubtitle_1.classList.add('modal__subtitle');
		this.modalSubtitle_1.id = 'taskModal__subtitle_1';
		this.modalSubtitle_1.textContent = 'Title';
		this.modalBody.append(this.modalSubtitle_1);

		this.modalInput.classList.add('modal__input');
		this.modalInput.id = 'taskModal__titleInput';
		this.modalInput.placeholder = 'What needs to be done?';
		this.modalBody.append(this.modalInput);

		this.modalDescripton.classList.add('modal__description');
		this.modalDescripton.classList.add('block');
		this.modalDescripton.id = 'taskModal__description';
		this.modal.append(this.modalDescripton);

		this.modalSubtitle_2.classList.add('modal__subtitle');
		this.modalSubtitle_2.id = 'taskModal__subtitle_2';
		this.modalSubtitle_2.textContent = 'Description (optional)'
		this.modalDescripton.append(this.modalSubtitle_2);

		this.modalTextArea.classList.add('modal__teaxarea');
		this.modalTextArea.id = 'taskModal__descriptionInput';
		this.modalTextArea.placeholder = 'Add detailse...';
		this.modalDescripton.append(this.modalTextArea);

		this.modalFooter.classList.add('modal__footer');
		this.modalFooter.classList.add('block');
		this.modalFooter.id = 'taskModal__footer';
		this.modal.append(this.modalFooter);

		this.modalCancelButton.classList.add('modal__button-cancel');
		this.modalCancelButton.classList.add('modal__button');
		this.modalCancelButton.id = 'taskModal__cancelButton';
		this.modalCancelButton.textContent = 'Cancel';
		this.modalFooter.append(this.modalCancelButton);

		this.modalSubmitButton.classList.add('modal__button-submit');
		this.modalSubmitButton.classList.add('modal__button');
		this.modalSubmitButton.id = 'taskModal__submitButton';
		this.modalSubmitButton.textContent = 'Submit';
		this.modalFooter.append(this.modalSubmitButton);
	}

	openModalWindow(){
		// add task 
		this.modalOpenButtonAddTask.addEventListener('click', () =>{
			this.displayModalWindow();
			this.isModalOpen = true;
		});
		// edit task
		// this.modalOpenButtonEditTask.addEventListener('click', () =>{
		// 	this.displayModalWindow();
		// });
	}

	removeModalWindow(){
		this.modalInput.value = '';
		this.modalTextArea.value = '';
		this.isModalOpen = false;
		this.modal.remove();
	}

	closeOrCancelModalWindow(){
	this.modalCloseButton.addEventListener('click', () =>{
		if(this.isModalOpen === true ){
			this.removeModalWindow();
		}
	});
	this.modalCancelButton.addEventListener('click', () =>{
		if(this.isModalOpen === true ){
			this.removeModalWindow();
		}
	});
	}
	
	// обработчик по клику, записываем состояние, update form state by error
	submit(){
		this.isClickBtn = false;
		this.modalSubmitButton.addEventListener('click', () =>{
			try{
				this.controller.validateTextField(this.modalInput, this.modalTextArea);
				this.removeModalWindow();
			} catch (error){
				console.error(error.message);
				this.modalInput.placeholder = 'the field must not be empty';
				this.modalInput.classList.add('error');
			}
			this.displayTaskList();
		});
	}

	displayTaskList(){
		this.task.classList.add('createElement');
		this.task.id = 'taskItem';
		this.taskList.prepend(this.task);

		this.taskCheckBox.classList.add('task-checkbox');
		this.taskCheckBox.id = 'checkbox';
		this.task.prepend(this.taskCheckBox);

		this.taskTittle.classList.add('title-task');
		this.taskTittle.id = 'taskTitle';
		this.taskCheckBox.prepend(this.taskTittle);

		this.taskSubtitle.classList.add('textDescription-task');
		this.taskSubtitle.id = 'taskDescription';
		this.taskCheckBox.prepend(this.taskSubtitle);

		this.taskEditButton.classList.add('edit-button');
		this.taskEditButton.id = 'editButton';
		this.taskSubtitle.prepend(this.taskEditButton);

		this.taskDeleteButton.classList.add('delete-button');
		this.taskDeleteButton.id = 'deleteButton';
		this.taskEditButton.prepend(this.taskDeleteButton);
	}

	init() {
	// Method which initialaize empty state UI
		this.displayTodoList();
		this.openModalWindow();
		this.closeOrCancelModalWindow();
		this.submit();
	} 
}