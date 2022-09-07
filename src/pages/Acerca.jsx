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
		{ icon: () => <FaBus />, content: 'Para cualquier tipo de tour' },
		{ icon: () => <Ri24HoursLine />, content: 'Servicio las 24 hrs' },
	];

	return (
		<div className='container my-14'>
			<h2 className='mb-5 text-2xl md:text-4xl text-center font-bold text-primary'>
				Acerca de BUSTOUR MORELOS
			</h2>
			<section>
				<div className='container px-6 py-10 mx-auto'>
					<div className='text-lg text-text text-center mb-5'>
						Somos una empresa especializada en trasporte de turismo, con más de
						40 años de experiencia.
						<br />
						Dispuestos a apoyarlos en la organización de sus viajes.
					</div>
					<div className='grid grid-cols-1 gap-8 xl:gap-16 md:grid-cols-2 xl:grid-cols-4 mx-5'>
						{about.map((item, index) => (
							<div
								key={index}
								className='flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl'>
								<span className='inline-block p-3 text-xl text-blue-500 bg-blue-100 rounded-full'>
									<item.icon />
								</span>
								<p className='mt-5 text-text text-xl'>{item.content}</p>
							</div>
						))}
					</div>

					<div className='text-lg text-text text-center mt-5'>
						Con Bustour Morelos contarás con los mejores servicios en la renta
						de autobuses
						<br /> y camionetas con chofer, esto para que puedas disfrutar tus
						vacaciones y relajarte.
					</div>

					<div className='text-lg text-primary text-center font-semibold mt-5'>
						¡Contáctanos! Recibe toda la información sobre nuestros servicios,
						<br /> así como las cotizaciones de los viajes que tienes pensado
						realizar.
					</div>
				</div>
			</section>
		</div>
	);
}