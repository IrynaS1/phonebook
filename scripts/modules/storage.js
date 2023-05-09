const addContactData = (contact) => {
	data.push(contact);

	setStorage(contact);
};

const setStorage = (contact) => {
	localStorage.setItem(`contact ${contact.name}`, JSON.stringify(contact));
};

const getStorage = () => {
	const contactStorage = localStorage.getItem('contact');

	if (contactStorage !== null) {
		return contactStorage;
	} else {
		const noDataStorage = [];
		console.log('пустой storage!');
		return noDataStorage;
	}
};

const removeStorage = () => {
	const deleteContact = prompt('Введите номер телефона', '');

	const contactRemoveStorage = (data, deleteContact) => {
		for (let i = 0; i < data.length; i++) {
			let dataPhoneNumber = data[i].phone;
			if (dataPhoneNumber === deleteContact) {
				const contactForRemove = data[i].name;
				localStorage.removeItem(`contact ${contactForRemove}`);
			}
		}
	};
};

export {
	addContactData,
	setStorage,
	getStorage,
	removeStorage,
};