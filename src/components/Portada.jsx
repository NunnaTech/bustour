import Cover from '../assets/img/cover.webp';

export default function Portada() {
	return (
		<section class='relative'>
			<img
				class='absolute inset-0 object-[75%] md:object-[25%] object-cover w-full h-full opacity-25 md:opacity-100'
				src={Cover}
				alt='Couple on a bed with a dog'
			/>
			<div class='hidden md:block md:inset-0 md:absolute md:bg-gradient-to-r md:from-white md:to-transparent'></div>
			<div class='relative px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex'>
				<div class='max-w-xl text-center md:text-left'>
					<h1 class='text-3xl font-extrabold md:text-6xl text-primary'>
						¿Necesitas un autobús para un viaje o excursión?
					</h1>
					<p class='max-w-lg md:text-2xl mt-4 font-medium md:leading-relaxed'>
						Renta de autobuses y camionetas
					</p>
					<p class='md:text-2xl italic text-yellow-700 md:leading-relaxed'>
						"Un viaje, muchas experiencias"
					</p>
				</div>
			</div>
		</section>
	);
}
