import { Pizza, PizzaPros } from "./models/Pizza";

const rootElement = document.querySelector('.root')!;


const createPizzaTemplate = (pizza: PizzaPros): string => {
	return `
        <div class="pizza">
            <h2>${pizza.title}</h2>
            <p class="toppings">${pizza.toppings.join(',')}</p>
            <p>${pizza.description}</p>
            <span>£${pizza.price}</span>
        </div>
    `;
}

const renderTemplete = (templates: string[], parent: Element): void => {
	const templateElement = document.createElement('template');

	for (const t of templates) {
		templateElement.innerHTML += t;
	}

	parent.append(templateElement.content);
}

document.addEventListener('DOMContentLoaded', async () => {
	const pizzas = await Pizza.loadAll();

	const pizzaArrayString: string[] = pizzas.map(createPizzaTemplate);

	renderTemplete(pizzaArrayString, rootElement);
});