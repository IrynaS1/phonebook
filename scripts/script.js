import {
	getStorage,
	removeStorage,
} from './modules/storage.js';

import * as render from './modules/render.js';

import hoverRow from './modules/hoverRow.js';

import { contacts } from './modules/contacts.js';

import {
	modalControl,
	deleteControl,
	formControl,
} from './modules/control.js';

const data = [
	{
		name: 'Иван',
		surname: 'Петров',
		phone: '+79514545454',
	},
	{
		name: 'Игорь',
		surname: 'Семёнов',
		phone: '+79999999999',
	},
	{
		name: 'Семён',
		surname: 'Иванов',
		phone: '+79800252525',
	},
	{
		name: 'Мария',
		surname: 'Попова',
		phone: '+79876543210',
	},
];

{
	contacts(data);

	getStorage();

	removeStorage();

	const init = (selectorApp, title) => {
		const app = document.querySelector(selectorApp);

		const {
			list,
			logo,
			btnAdd,
			formOverlay,
			form,
			btnDel, } = render.renderPhoneBook(app, title);

		const allRow = render.renderContacts(list, data);

		const { closeModal } = modalControl(btnAdd, formOverlay);

		hoverRow(allRow, logo);
		deleteControl(btnDel, list);
		formControl(form, list, closeModal);
	};
	window.phoneBookInit = init;
}