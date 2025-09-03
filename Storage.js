export default class Storoge {
	constructor() {
		console.log('initialize Storage class');
		this.tasks = [];
	}

		//реализация сорханения 
		saveTasks(madalInputValue, modalTextAreaValue){
			this.task = {
				title: madalInputValue,
				description: modalTextAreaValue,
			};
			this.tasks.push(this.task);
			console.log(this.tasks);
			localStorage.setItem('allTasks', JSON.stringify(this.tasks)) 
		};
}