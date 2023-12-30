import './App.css'
import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import PizzaPage from './pages/PizzaPage.tsx'

const App: FC = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/pizza/:id" element={<PizzaPage />} />
			<Route path="*" element={<h1 className="heading">Страница не найдена</h1>} />
		</Routes>
	)
}

export default App
