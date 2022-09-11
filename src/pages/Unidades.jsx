import Auto1 from '../assets/img/avanza-2022.jpeg';

export default function Unidades() {
	return (
		<div
			className='container my-14 p-5'
			id='unidades'>
			<h2 className='mb-5 text-2xl md:text-4xl text-center font-bold text-primary'>
				Unidades
			</h2>

			<div className='text-xl text-text text-center mb-10'>
				<p className='lg:w-6/12 lg:mx-auto text-xl'>
					En BUSTOUR MORELOS contamos con unidades de último modelo para que tu
					experiencia sea de lo más placentera
				</p>
			</div>

			<div className='grid md:grid-cols-3 gap-4 mx-4 md:mx-10'>
				<div className='bg-white flex flex-col max-w-sm mx-auto rounded-lg shadow-xl'>
					<div>
						<img
							src={Auto1}
							alt='Usuario'
							className='w-full object-cover rounded-t-lg'
						/>
					</div>
					<div className='bg-gray-900 mx-4 rounded-lg flex items-center gap-4 -mt-6 z-10 shadow-xl py-2 px-6'>
						<h3 className='text-white text-lg font-semibold'>
							Toyota Avanza 2022
						</h3>
					</div>
					<div className='px-6 py-4 flex flex-col gap-2'>
						<p className='text-gray-500'>
							Con nuevo diseño, más dinamismo y mejor desempeño
						</p>
						<div className='flex items-center mt-4'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6 '
								viewBox='0 0 320 512'>
								<path
									fill='#374151'
									d='M208 48c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM152 352V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z'
								/>
							</svg>
							<h1 className='px-2 text-sm'>6 Pasajeros</h1>
						</div>
						<div className='flex items-center mt-4 text-gray-700'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								strokeWidth={2}
								viewBox='0 0 512 512'>
								<path
									fill='#374151'
									d='M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z'
								/>
							</svg>

							<h1 className='px-2 text-sm'>Aire acondicionado</h1>
						</div>
						<div className='flex items-center mt-4 text-gray-700'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								viewBox='0 0 448 512'>
								<path
									fill='#374151'
									d='M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z'
								/>
							</svg>

							<h1 className='px-2 text-sm'>Cargador para celular</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
