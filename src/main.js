import Presenter from './presenter/PagePresenter.js';

const container = document.querySelector('.trip-events');
const presenter = new Presenter(container);
presenter.init();
