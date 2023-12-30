import { TypePizza } from '../types/Pizza.ts'

export interface ISinglePizzaProps {
	pizza: TypePizza,
	updatePizza: (newPizza: TypePizza) => void,
	deletePizza: (id: number) => void
}