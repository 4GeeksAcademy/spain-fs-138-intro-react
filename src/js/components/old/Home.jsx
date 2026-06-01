import React, { useState } from "react";

//include images into your bundle
import Navbar from "./old/Navbar";
import CardUser from "./old/CardUser";
import Faq from "./old/Faq";
import Footer from "./old/Footer";

//create your first component
const Home = () => {
	const users = [
		{ name: 'Ana', age: 28, job: 'Ingeniera' },
		{ name: 'Luis', age: 34, job: 'Diseñador' },
		{ name: 'Marta', age: 22, job: 'Desarrolladora' },
		{ name: 'Carlos', age: 40, job: 'Profesor' }
	]

	const [view, setView] = useState([true])
	console.log(users)

	return (
		<div className="d-flex flex-column justify-content-between vh-100">
			<Navbar />
			<div className='container mt-5'>
				<h1 className='text-center mb-4'>Lista de Usuarios</h1>

				<div className='text-center mb-4'>
					<button className='btn btn-success' onClick={() => setView((preView) => !preView)}>
						{view ? 'Ocultar tarjetas' : 'Mostrar tarjetas'}
					</button>
				</div>


				{view === true ? (
					<div className='row justify-content-center'>
						{users.map((user, index) => (
							<CardUser
								key={index}
								name={user.name}
								age={user.age}
								job={user.job}
							/>

						))}
					</div>) : null}

				<Faq />
			</div>
			<Footer />
		</div>
	);
};

export default Home;