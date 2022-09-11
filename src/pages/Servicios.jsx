import { BsWhatsapp } from 'react-icons/bs';
import Auto1 from '../assets/img/autobus-turistico.jpg';
import Auto2 from '../assets/img/camioneta-pasajeros.jpg';
import Auto3 from '../assets/img/versa.jpg';
import Auto4 from '../assets/img/aeropuerto.png';

export default function Servicios() {
	const servicios = [
		{
			title: 'Renta de autobuses',
			description:
				'Ideal para realizar una excursión, trasladar gran cantidad de gente y viajes largos.',
			image: Auto1,
		},
		{
			title: 'Renta de camionetas',
			description:
				'Ideal para realizar viajes en familia, llevar maletas, bicicletas etc.',
			image: Auto2,
		},
		{
			title: 'Renta de autos',
			description:
				'Ideal para grupos pequeños que buscan realizar una aventura o simplemente trasladarse de un lugar a otro.',
			image: Auto3,
		},
		{
			title: 'Traslados al aeropuerto',
			description:
				'Contamos con una amplia experiencia la cual no tendrás que preocuparte en cómo llegar y a que hora llegar. ¡Dejánolos a nosotros!',
			image: Auto4,
		},
	];

	return (
		<div
			className='py-16 bg-gradient-to-br from-yellow-50 to-orange-100'
			id='servicios'>
			<div className='container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
				<div className='mb-12 space-y-2 text-center'>
					<h2 className='text-2xl text-secondary font-bold md:text-4xl'>
						Nuestros servicios
					</h2>
					<p className='lg:w-6/12 lg:mx-auto text-xl'>
						Contamos con diferentes servicios de los cuales nos podemos acoplar
						para tu mayor cómodidad y de la misma manera, ayudarte con la
						logistica.
					</p>
					<p className='lg:w-6/12 lg:mx-auto text-xl font-semibold pb-6'>
						¡No dudes en enviarnos un mensaje para obtener una cotización!
					</p>
					<a
						rel='noreferrer'
						target='_blank'
						href='https://wa.me/527771196162?text=Hola!%20Quisiera%20información%20para%20cotizar%20un%20viaje%20por%20favor'
						type='button'
						className='animate-bounce text-white bg-[#25D366] hover:bg-[#25D366]/80 focus:ring-4 focus:outline-none focus:ring-[#25D366]/50 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2'>
						<BsWhatsapp className='mr-2 -ml-1 w-6 h-6' />
						Envíar WhatsApp
					</a>
				</div>
				<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
					{servicios.map((s, index) => (
						<div
							key={index}
							className='relative p-1 pb-16 rounded-xl group bg-white bg-opacity-50 shadow-xl hover:rounded-2xl'>
							<div className='relative'>
								<div
									aria-hidden='true'
									className='absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-yellow-50 '></div>
								<img
									src={s.image}
									alt={s.title}
									loading='lazy'
									width='1000'
									height='667'
									className='h-64 w-full object-cover object-top rounded-t-lg transition duration-500 group-hover:rounded-t-xl'
								/>
							</div>
							<div className='relative space-y-4 -mt-15 p-4'>
								<h4 className='text-2xl font-semibold text-yellow-900'>
									{s.title}
								</h4>
								<p className='text-gray-600'>{s.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
