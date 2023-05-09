import { createRow } from './createElements.js';

const addContactPage = (contact, list) => {
	list.append(createRow(contact));
};

export default addContactPage;