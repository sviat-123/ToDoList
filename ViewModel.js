import Controller from "./Controller.js";

export default class ViewModel {
	constructor() {
		console.log('initialize ViewModel class');
		this.controller = new Controller();
		this.isModalOpen = false;
		this.currentEditTaskId = null;
	}

	//============ CREATING ELEMENTS ============
	createMainStructure(){
		this.main = document.createElement('div');
		this.toDoList = document.createElement('div');
		this.toDoListTitle = document.createElement('h1');
		this.modalOpenButtonAddTask = document.createElement('button');
		this.modalOpenButtonText = document.createElement('span');
		this.modalOpenButtonIcon = document.createElement('img');
		this.taskList = document.createElement('ul');
	}

	createModaltructure(){
		this.modal = document.createElement('div');
		this.modalHeader = document.createElement('div');
		this.modalTitle = document.createElement('h1');
		this.modalCloseButton = document.createElement('button');
		this.modalBody = document.createElement('div');
		this.modalSubtitle_1 = document.createElement('h2');
		this.modalInput = document.createElement('input');
		this.modalDescription = document.createElement('div');
		this.modalSubtitle_2= document.createElement('h2');
		this.modalTextArea = document.createElement('textarea');
		this.modalFooter = document.createElement('div');
		this.modalCancelButton = document.createElement('button');
		this.modalSubmitButton = document.createElement('button');
	}

	// ============ НАСТРОЙКА СЛУШАТЕЛЕЙ ============
	setupMainListeners(){
		this.modalOpenButtonAddTask.addEventListener('click', () =>{
			this.openModalWindow()
		});
	}

	setupModalListeners(){
		this.modalCloseButton.addEventListener('click', () => {
			this.closeOrCancelModalWindow()
		});
		this.modalCancelButton.addEventListener('click', () => {
			this.closeOrCancelModalWindow()
		});
		this.modalSubmitButton.addEventListener('click', () => {
			this.sumbitOrSave()
		})
	}

	//============ DISPLAY ============
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

	displayModalWindow(mode, task = null){
		
		this.modal.classList.add('modal');
		this.modal.id = 'taskModal';
		this.main.after(this.modal);

		this.modalHeader.classList.add('modal__header');
		this.modalHeader.classList.add('block');
		this.modalHeader.id = 'taskModal__header';
		this.modal.append(this.modalHeader)

		this.modalTitle.classList.add('modal__title');
		this.modalTitle.id = 'taskModal__title';
		this.modalTitle.textContent = mode === 'add' ? 'Add Task' : 'Edit Task';
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

		this.modalDescription.classList.add('modal__description');
		this.modalDescription.classList.add('block');
		this.modalDescription.id = 'taskModal__description';
		this.modal.append(this.modalDescription);

		this.modalSubtitle_2.classList.add('modal__subtitle');
		this.modalSubtitle_2.id = 'taskModal__subtitle_2';
		this.modalSubtitle_2.textContent = 'Description (optional)'
		this.modalDescription.append(this.modalSubtitle_2);

		this.modalTextArea.classList.add('modal__textarea');
		this.modalTextArea.id = 'taskModal__descriptionInput';
		this.modalTextArea.placeholder = 'Add detailse...';
		this.modalDescription.append(this.modalTextArea);

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
		this.modalSubmitButton.textContent = mode === 'add' ?  'Submit' : 'Save';
		this.modalFooter.append(this.modalSubmitButton);

		if(mode === 'edit' && task){
			const [title, description = ''] = task.value.split(' | ');
			this.modalInput.value = title;
			this.modalTextArea.value = description;
		}
	}

	// ============ MODAL WINDOW LOGIC ============
	openModalWindow(){
		this.currentEditTaskId = null;
		this.displayModalWindow('add');
	}

	closeOrCancelModalWindow(){
		this.removeModalWindow();
	}

	removeModalWindow(){
		this.modalInput.value = '';
		this.modalTextArea.value = '';
		this.isModalOpen = false;
		this.modalInput.classList.remove('error');
		this.modal.remove();
	}

	sumbitOrSave() {
    try {
        const validatedTask = this.controller.validateTaskInput(
            this.modalInput,
            this.modalTextArea
        );

        if (this.currentEditTaskId !== null) {
            this.controller.updateTask(this.currentEditTaskId, validatedTask.value);
        } else {
            this.controller.createTask(validatedTask.value);   // ← вот здесь было главное упущение
        }

        this.removeModalWindow();
        this.refreshTaskList();
    } catch (error) {
        this.modalInput.placeholder = error.message;
        this.modalInput.classList.add('error');
        this.modalInput.focus();
    }
	}

	// ============ WORKING WITH TASKS ============
	displayTaskList(task) {
		const taskItem = document.createElement('li');
		const taskBlockInfo = document.createElement('div');
		const taskCheckBox = document.createElement('input');
		const taskTitle = document.createElement('p');
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
		
		taskTitle.classList.add('title-task');
		const [title, description] = task.value.split(' | ');
		taskTitle.textContent = title;
		taskBlockInfo.append(taskTitle);
		
		taskBlockBtn.classList.add('task-btn');
		taskItem.append(taskBlockBtn);
		
		taskEditButton.classList.add('edit-button');
		taskEditButton.type = 'button';
		taskBlockBtn.append(taskEditButton);

		taskEditButton.addEventListener('click', ()=>{
			this.editTask(task.id)
		})
		
		taskEditButtonIcon.classList.add('edit-icon');
		taskEditButtonIcon.src = './icon/pencil.svg';
		taskEditButtonIcon.alt = 'Edit';
		taskEditButton.append(taskEditButtonIcon);
		
		taskDeleteButton.classList.add('delete-button');
		taskDeleteButton.type = 'button';
		taskBlockBtn.append(taskDeleteButton);

		taskDeleteButton.addEventListener('click', ()=>{
			this.deleteTask(task.id)
		})
		
		taskDeleteButtonIcon.classList.add('delete-icon');
		taskDeleteButtonIcon.src = './icon/trashcan.svg';
		taskDeleteButtonIcon.alt = 'Delete';
		taskDeleteButton.append(taskDeleteButtonIcon);
	}

	editTask(taskId) {
    this.currentEditTaskId = Number(taskId);
    const task = this.controller.getTask(taskId);
    if (task) {
        this.displayModalWindow('edit', task);
    } else {
        console.error("Task not found for editing");
    }
}

	deleteTask(taskId){
		this.controller.deleteTask(taskId)
		this.refreshTaskList();
	}

	refreshTaskList() {
		const tasks = this.controller.getAllTasks();
		this.taskList.innerHTML = '';
		tasks.slice().reverse().forEach(task => {
			this.displayTaskList(task);
		});
	}

	// ============ INITIALIZATION ============
	init() {
		//creating a structure
		this.createMainStructure();
		this.createModaltructure();
		
		//display
		this.displayTodoList();
		this.refreshTaskList();

		//setting up listeners
		this.setupMainListeners();
		this.setupModalListeners();
	} 
}