import Cover from '../assets/img/cover.webp';

export default function Portada() {
	return (
		<section className='relative'>
			<img
				className='absolute inset-0 object-[75%] md:object-[25%] object-cover w-full h-full  opacity-20 md:opacity-100'
				src={Cover}
				alt='Couple on a bed with a dog'
			/>
			<div className='hidden md:block md:inset-0 md:absolute md:bg-gradient-to-r md:from-white md:to-transparent'></div>
			<div className='relative px-5 md:px-15 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex'>
				<div className='max-w-xl text-center md:text-left'>
					<h1 className='text-3xl font-extrabold md:text-6xl text-primary'>
						¿Necesitas un autobús para un viaje o excursión?
					</h1>
					<p className='max-w-lg text-lg md:text-2xl mt-4 font-medium md:leading-relaxed text-gray-700'>
						Renta de autobuses, camionetas y autos.
					</p>
					<p className='text-lg md:text-2xl italic text-yellow-700 md:leading-relaxed'>
						"Un viaje, muchas experiencias"
					</p>
					<a
						href='/#contacto'
						type='button'
						class='mt-5 text-white bg-primary hover:bg-primary/80 focus:ring-4 focus:outline-none focus:ring-primary/50 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2'>
						¡Contáctanos!
					</a>
				</div>
			</div>
		</section>
	);
}
