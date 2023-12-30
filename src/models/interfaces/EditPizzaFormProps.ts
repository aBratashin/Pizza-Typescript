import { TypePizza } from '../types/Pizza.ts'

export interface IEditPizzaFormProps {
	data: TypePizza,
	updatePizza: (newPizza: TypePizza) => void,
	handleToggleEdit: () => void
}