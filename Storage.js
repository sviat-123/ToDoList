export default class Storoge {
	constructor() {
		console.log('initialize Storage class');
	}

		//реализация сорханения 
		saveTasks(madalInputValue, modalTextAreaValue){
			this.tasks = [];


			this.task = {
				title: madalInputValue,
				'description (optional)': modalTextAreaValue,
			};
			this.tasks.push(this.task);
			console.log(this.task.title, this.task["description (optional)"]);
			console.log(this.tasks);
			localStorage.setItem('allTasks', JSON.stringify(this.tasks)) 
		};


}