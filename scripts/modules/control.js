import {
	addContactData,
	removeStorage,
} from './storage.js';

import addContactPage from './addpage.js';

const modalControl = (btnAdd, formOverlay) => {
	const openModal = () => {
		formOverlay.classList.add('is-visible');
	};

	const closeModal = () => {
		formOverlay.classList.remove('is-visible');
	};

	btnAdd.addEventListener('click', openModal);

	formOverlay.addEventListener('click', (e) => {
		const target = e.target;

		if (target === formOverlay ||
			target.closest('.close')) {
			closeModal();
		}
	});

	return {
		closeModal,
	};
};

const deleteControl = (btnDel, list) => {
	btnDel.addEventListener('click', () => {
		document.querySelectorAll('.delete').forEach(del => {
			del.classList.toggle('is-visible');
		});
	});

	list.addEventListener('click', (e) => {
		const target = e.target;

		if (target.closest('.del-icon')) {
			target.closest('.contact').remove();

			removeStorage();
		}
	});
};

const formControl = (form, list, closeModal) => {
	form.addEventListener('submit', e => {
		e.preventDefault();

		const formData = new FormData(e.target);

		const newContact = Object.fromEntries(formData);

		addContactPage(newContact, list);
		addContactData(newContact);
		form.reset();
		closeModal();
	});
};

export {
	modalControl,
	deleteControl,
	formControl,
};