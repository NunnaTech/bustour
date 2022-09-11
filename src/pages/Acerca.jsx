import { RiBusWifiFill, Ri24HoursLine } from 'react-icons/ri';
import { HiUserGroup } from 'react-icons/hi';
import { FaBus } from 'react-icons/fa';

export default function Acerca() {
	const about = [
		{ icon: () => <RiBusWifiFill />, content: 'Con +25 años de experiencia' },
		{
			icon: () => <HiUserGroup />,
			content: 'Equipo especializado y profesional',
		},
		{ icon: () => <FaBus />, content: 'Traslados a cualquier parte de la republica' },
		{ icon: () => <Ri24HoursLine />, content: 'Servicio las 24 hrs' },
	];

	return (
		<div className='container my-12 p-5'>
			<h2 className='my-5 text-2xl md:text-4xl text-center font-bold text-primary'>
				Acerca de BUSTOUR MORELOS
			</h2>
			<section>
				<div className='container px-6  mx-auto '>
					<div className='text-lg text-text text-center mb-8'>
						¡Somos una empresa especializada en trasporte de turismo, dónde
						nuestra confiabilidad y experiencia nos respalda!
						<br />
						Dispuestos a apoyarlos en la organización de sus viajes.
					</div>
					<div className='grid grid-cols-1 gap-8 xl:gap-16 md:grid-cols-2 xl:grid-cols-4 mx-5'>
						{about.map((item, index) => (
							<div
								key={index}
								className='flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl shadow-md'>
								<span className='inline-block p-3 text-xl text-blue-500 bg-blue-100 rounded-full'>
									<item.icon />
								</span>
								<p className='mt-5 text-text text-xl'>{item.content}</p>
							</div>
						))}
					</div>

					<div className='mb-12 space-y-2 text-center mt-11'>					
					<p className='lg:w-6/12 lg:mx-auto text-lg text-text text-center mb-8'>
					Con Bustour Morelos contarás con los mejores servicios en la renta
						de autobuses y camionetas con chofer, esto para que puedas disfrutar
						de tus vacaciones y relajarte.
					</p>
					<p className='lg:w-6/12 lg:mx-auto text-xl text-primary text-center font-semibold'>
					¡Contáctanos! Recibe toda la información sobre nuestros servicios,
						 así como las cotizaciones de los viajes que tienes pensado
						realizar.
					</p>
				</div>					
				</div>
			</section>
		</div>
	);
}
