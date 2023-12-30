import { FC } from 'react'
import { IDisplayPizzaProps } from '../models/interfaces/DisplayPizzaProps.ts'
import SinglePizza from './SinglePizza.tsx'


const DisplayPizza: FC<IDisplayPizzaProps> = ({ pizzasList, updatePizza, deletePizza }) => {
	return (
		<div className="container">
			{pizzasList.map(pizza =>
				<SinglePizza pizza={pizza} updatePizza={updatePizza} deletePizza={deletePizza} key={pizza.id} />
			)}
		</div>
	)
}

export default DisplayPizza