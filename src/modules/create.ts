import { Pizza } from "./models/Pizza";

const form = document.querySelector('.create') as HTMLFormElement;


form.addEventListener('submit', async (e: Event) => {
	e.preventDefault();

	const formData = new FormData(form);

	const res = await Pizza.save({
		title: formData.get('title') as string,
		description: formData.get('description') as string,
		price: Number(formData.get('price') as string),
		toppings: formData.getAll('toppings') as string[]
	});

	if (!res.ok) {
		console.log("new pizza can't be saved");
	} else if (res.ok) {
		window.location.href = '/';
	}
});

