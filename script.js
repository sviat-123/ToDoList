import ViewModel from './ViewModel.js';

(() => {
    const viewModel = new ViewModel();
    
    viewModel.init();
    viewModel.DisplayTodoList();
})()