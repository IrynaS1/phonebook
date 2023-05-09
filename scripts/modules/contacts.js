export const contacts = (data) => {
	//добавление всего массива телефонной книги в локал сторадж
	for (let i = 0; i < data.length; i++) {
		let dataItem = data[i];
		localStorage.setItem(`contact ${data[i].name}`, JSON.stringify(data[i]));
	}
};