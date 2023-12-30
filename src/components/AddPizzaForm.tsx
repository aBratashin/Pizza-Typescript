import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { IAddPizzaFormProps } from '../models/interfaces/AddPizzaFormProps.ts'

const AddPizzaForm: FC<IAddPizzaFormProps> = ({ addPizza }) => {
	const initState = {
		title: '',
		price: '',
		img: ''
	}

	const [newPizza, setNewPizza] = useState<{ title: string, price: string, img: string }>(initState)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setNewPizza({
			...newPizza,
			[name]: value
		})
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const { title, price, img } = newPizza

		if (title && price && img) {
			addPizza({
				id: Date.now(),
				title,
				img,
				price: Number(price)
			})
		}

		setNewPizza(initState)
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					name="title"
					type="text"
					placeholder="Название"
					onChange={handleChange}
					value={newPizza.title} />
				<input
					name="price"
					type="number"
					placeholder="Стоимость"
					onChange={handleChange}
					value={newPizza.price} />
				<input
					name="img"
					type="text"
					placeholder="Изображение"
					onChange={handleChange}
					value={newPizza.img} />
				<button type="submit">+ Добавить в меню</button>
			</form>
		</div>
	)
}

export default AddPizzaForm