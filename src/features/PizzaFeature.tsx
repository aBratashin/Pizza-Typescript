import { FC, useEffect, useState } from 'react'
import { TypePizza } from '../models/types/Pizza.ts'
import { useParams } from 'react-router-dom'

const PizzaFeature: FC = () => {
	const [pizza, setPizza] = useState<TypePizza | null>(null)

	const { id } = useParams()

	useEffect(() => {
		const pizzasState = localStorage.getItem('pizzasState')
		if (pizzasState && id) {
			const pizzasList = JSON.parse(pizzasState)
			const searchId = parseInt(id)

			const currentPizza = pizzasList.find((p: TypePizza) => p.id === searchId)
			setPizza(currentPizza)
		}
	}, [id])

	return (
		<div className="wrap">
			<span className="heading">Ваша пицца</span>
			<div className="pizza pizza-page">
				<img
					src={`/images/${pizza?.img}`}
					alt={pizza?.title}
				/>
				<h2>{pizza?.title}</h2>
				<span>{pizza?.price}₽</span>
				<p>Лучшая в городе!</p>
			</div>
		</div>
	)
}

export default PizzaFeature