import { FC, useEffect, useState } from 'react'
import AddPizzaForm from '../components/AddPizzaForm.tsx'
import { TypePizza } from '../models/types/Pizza.ts'
import DisplayPizza from '../components/DisplayPizza.tsx'

const HomeFeature: FC = () => {
	const [pizzasList, setPizzasList] = useState<TypePizza[]>([])

	const addPizza = (newPizza: TypePizza) => {
		const newPizzasList = [...pizzasList, newPizza]
		setPizzasList(newPizzasList)
		localStorage.setItem('pizzasState', JSON.stringify(newPizzasList))
	}

	const updatePizza = (newPizza: TypePizza) => {
		const newPizzasList = pizzasList.map(pizza => (pizza.id === newPizza.id ? newPizza : pizza))
		setPizzasList(newPizzasList)
		localStorage.setItem('pizzasState', JSON.stringify(newPizzasList))
	}

	const deletePizza = (id: number) => {
		const newPizzasList = pizzasList.filter(pizza => pizza.id !== id)
		setPizzasList(newPizzasList)
		localStorage.setItem('pizzasState', JSON.stringify(newPizzasList))
	}

	useEffect(() => {
		const pizzasState = localStorage.getItem('pizzasState')
		if (pizzasState) {
			setPizzasList(JSON.parse(pizzasState))
		}
	}, [])

	return (
		<div>
			<div className="wrap">
				<span className="heading">Наша пиццерия</span>
				<AddPizzaForm addPizza={addPizza} />
				<DisplayPizza
					pizzasList={pizzasList}
					updatePizza={updatePizza}
					deletePizza={deletePizza}
				/>
			</div>
		</div>
	)
}

export default HomeFeature
