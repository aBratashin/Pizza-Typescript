import { TypePizza } from '../types/Pizza.ts'

export interface IDisplayPizzaProps {
	pizzasList: TypePizza[],
	updatePizza: (newPizza: TypePizza) => void,
	deletePizza: (id: number) => void
}