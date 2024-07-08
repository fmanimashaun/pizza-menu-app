import { DataResource } from "../services/DataResource";

export interface PizzaPros {
    title: string;
    description: string;
    toppings: string[];
    price: number;
}

export const Pizza = new DataResource<PizzaPros>('http://localhost:3000/pizzas');