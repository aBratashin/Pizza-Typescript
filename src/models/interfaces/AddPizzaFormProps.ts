import { TypePizza } from '../types/Pizza.ts'

export interface IAddPizzaFormProps {
	addPizza: (newPizza: TypePizza) => void
}