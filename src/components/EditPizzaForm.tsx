import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { IEditPizzaFormProps } from '../models/interfaces/EditPizzaFormProps.ts'
import { TypePizza } from '../models/types/Pizza.ts'

const EditPizzaForm: FC<IEditPizzaFormProps> = ({ data, updatePizza, handleToggleEdit }) => {
	const [editPizza, setEditPizza] = useState<TypePizza>(data)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setEditPizza({
			...editPizza,
			[name]: value
		})
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const { title, price, img } = editPizza

		if (title && price && img) {
			updatePizza(editPizza)
			handleToggleEdit()
		}
	}

	return (
		<div>
			<form className="edit-form" onSubmit={handleSubmit}>
				<input
					name="title"
					type="text"
					placeholder="Название"
					onChange={handleChange}
					value={editPizza.title} />
				<input
					name="price"
					type="number"
					placeholder="Стоимость"
					onChange={handleChange}
					value={editPizza.price} />
				<input
					name="img"
					type="text"
					placeholder="Изображение"
					onChange={handleChange}
					value={editPizza.img} />
				<button type="submit">Подтвердить</button>
			</form>
		</div>
	)
}

export default EditPizzaForm