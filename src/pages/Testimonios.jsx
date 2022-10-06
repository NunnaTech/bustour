import { AiFillStar } from "react-icons/ai";

export default function Testimonios() {

	const testiminiales = [
		{
			name: 'Luis Ortiz',
			content:
				'Excelente opción para ir de viaje y/o solicitar transporte a cualquier parte de la republica con un precio super accesible!',
			date: 'Agosto 2022',
			stars: 5,
		},
		{
			name: 'Valeria Manrique',
			content: 'Buen servicio',
			date: 'Hace 3 años',
			stars: 4,
		},
		{
			name: 'Wilber Romero',
			content: 'Muy buenos viajes!',
			date: 'Hace 1 año',
			stars: 5,
		},
		{
			name: 'David Reyes',
			content: 'Excelente atencion',
			date: 'Hace 2 años',
			stars: 5,
		},
	];

	return (
		<div className='my-14 py-14 px-5 bg-[#E1E7F0]'>
			<h2 className=' text-2xl md:text-4xl text-center font-bold text-primary'>
				Testimonios
			</h2>
			<section className='container'>
				<div className='px-4 py-4 mx-auto max-w-screen-xl sm:px-6 lg:px-4'>
					<div className='mt-8 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12'>
						{testiminiales.map((i, index) => (
							<blockquote key={index}>
							<header className='sm:items-center sm:flex'>
								<div className='flex -ml-1'>
									{[...Array(i.stars)].map((star, index) => (
										<AiFillStar key={index} className='w-5 h-5 text-yellow-400' />
									))}
								</div>
								<p className='mt-2 font-medium sm:ml-4 sm:mt-0'>{i.name}</p>
							</header>
							<p className='mt-2 text-gray-700'>{i.content}</p>
							<footer className='mt-4'>
								<p className='text-xs text-gray-500'>	Reseñas de Google - {i.date}</p>
							</footer>
						</blockquote>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
