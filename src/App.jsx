import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Unidades from './pages/Unidades';
import Precios from './pages/Precios';
import Galeria from './pages/Galeria';

export default function App() {
	return (
		<div className='font-poppins bg-background'>
			<Navbar />
			<Inicio />
			<Servicios />
			<Unidades />
			<Precios />
			<Galeria />

			<Footer />
		</div>
	);
}
