import React from "react";

//include images into your bundle
import Navbar from "./Navbar";
import CardUser from "./CardUser";
import Faq from "./Faq";
import Footer from "./Footer";

//create your first component
const Home = () => {
	const users = [
		{ name: 'Ana', age: 28, job: 'Ingeniera' },
		{ name: 'Luis', age: 34, job: 'Diseñador' },
		{ name: 'Marta', age: 22, job: 'Desarrolladora' },
		{ name: 'Carlos', age: 40, job: 'Profesor' }
	]


	console.log(users)

	return (
		<div className="d-flex flex-column justify-content-between vh-100">
			<Navbar />
			<div className='container mt-5'>
				<h1 className='text-center mb-4'>Lista de Usuarios</h1>

				<div className='row justify-content-center'>
					{users.map((user, index) => (
						<CardUser
							key={index}
							name={user.name}
							age={user.age}
							job={user.job}
						/>
					))}
				</div>

				<Faq />
			</div>
			<Footer />
		</div>
	);
};

export default Home;