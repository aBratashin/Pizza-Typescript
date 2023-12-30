import { FC, useState } from 'react'
import { ISinglePizzaProps } from '../models/interfaces/SinglePizzaProps.ts'
import { Link } from 'react-router-dom'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import EditPizzaForm from './EditPizzaForm.tsx'

const SinglePizza: FC<ISinglePizzaProps> = ({ pizza, updatePizza, deletePizza }) => {
	const [edit, setEdit] = useState<boolean>(false)

	const handleToggleEdit = () => {
		setEdit(!edit)
	}

	const handleDelete = () => {
		deletePizza(pizza.id)
	}

	return (
		<div className="pizza">
			<img src={`/images/${pizza.img}`} alt={pizza.title} />
			<h2><Link to={`/pizza/${pizza.id}`}>{pizza.title}</Link></h2>
			<span>{pizza.price}₽</span>
			<div className="pizza-controls">
				<AiFillEdit onClick={handleToggleEdit} />
				<AiFillDelete onClick={handleDelete} />
			</div>

			{edit ? <EditPizzaForm updatePizza={updatePizza} data={pizza} handleToggleEdit={handleToggleEdit} /> : null}
		</div>
	)
}

export default SinglePizza