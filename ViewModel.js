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
	}
	
	displayTodoList() {
		this.main.className = 'main';
		this.main.id = 'main';
		document.body.prepend(this.main);

		this.toDoList.className = 'toDoList';
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
		this.modalOpenButtonIcon.src = './icon/plus.svg';
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
		this.modalInput.value = 'What needs to be done?';
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
		this.modalTextArea.value = 'Add detailse...';
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
		this.modalInput.placeholder = '';
		this.modalInput.classList.remove('error');
		this.modal.remove();
	}

	closeOrCancelModalWindow(){
	this.modalCloseButton.addEventListener('click', () =>{
		this.removeModalWindow();
	});
	this.modalCancelButton.addEventListener('click', () =>{
		this.removeModalWindow();
	});
	}

	
	submit(){
		this.modalSubmitButton.addEventListener('click', () => {
			try {
				const task = this.controller.validateTextField(this.modalInput, this.modalTextArea);
				this.removeModalWindow();
				this.displayTaskList(task);
			} catch (error) {
				this.modalInput.placeholder = error.message;	
				this.modalInput.classList.add('error');
			}
		});
	}

	displayTaskList(task) {
		const taskItem = document.createElement('li');
		const taskBlockInfo = document.createElement('div');
		const taskCheckBox = document.createElement('input');
		const taskTittle = document.createElement('p');
		const taskBlockBtn = document.createElement('div');
		const taskEditButton = document.createElement('button');
		const taskEditButtonIcon = document.createElement('img');
		const taskDeleteButton = document.createElement('button');
		const taskDeleteButtonIcon = document.createElement('img');
		
		taskItem.classList.add('task');
		taskItem.dataset.id = task.id;
		this.taskList.prepend(taskItem);
		
		taskBlockInfo.classList.add('task-info');
		taskItem.append(taskBlockInfo);
		
		taskCheckBox.classList.add('task-checkbox');
		taskCheckBox.type = 'checkbox';
		taskBlockInfo.append(taskCheckBox);
		
		taskTittle.classList.add('title-task');
		const [title, description] = task.value.split(' | ');
		taskTittle.textContent = title;
		taskBlockInfo.append(taskTittle);
		
		taskBlockBtn.classList.add('task-btn');
		taskItem.append(taskBlockBtn);
		
		taskEditButton.classList.add('edit-button');
		taskEditButton.type = 'button';
		taskBlockBtn.append(taskEditButton);
		
		taskEditButtonIcon.classList.add('edit-icon');
		taskEditButtonIcon.src = './icon/pencil.svg';
		taskEditButtonIcon.alt = 'Edit';
		taskEditButton.append(taskEditButtonIcon);
		
		taskDeleteButton.classList.add('delete-button');
		taskDeleteButton.type = 'button';
		taskBlockBtn.append(taskDeleteButton);
		
		taskDeleteButtonIcon.classList.add('delete-icon');
		taskDeleteButtonIcon.src = './icon/trashcan.svg';
		taskDeleteButtonIcon.alt = 'Delete';
		taskDeleteButton.append(taskDeleteButtonIcon);
	}

	refreshTaskList() {
		const tasks = this.controller.getTasks();
		this.taskList.innerHTML = '';
		tasks.slice().reverse().forEach(task => {
			this.displayTaskList(task);
		});
	}

	init() {
		this.displayTodoList();
		this.openModalWindow();
		this.closeOrCancelModalWindow();
		this.submit();
		this.refreshTaskList();
	} 
}