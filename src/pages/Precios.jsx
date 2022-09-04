export default function Precios() {
	return (
		<div
			className='container my-14'
			id='precios'>
			<h2 className='mb-5 text-2xl md:text-4xl text-center font-bold text-primary'>
				Precios
			</h2>
			<div>
				<div className='bg-[#E1E7F0]'>
					<div className='container mx-auto py-10 px-6'>
						<div className='mx-auto text-center lg:w-8/12 xl:w-7/12'>
							<h3 className='text-xl text-primary font-semibold md:text-3xl'>
								En BUSTOUR MORELOS te llevamos a la Rivera Maya a u súper precio
								de preventa
							</h3>
						</div>
						<div className='mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12'>
							<div className='relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12'>
								<div
									aria-hidden='true'
									className='absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110'></div>
								<div className='relative p-6 space-y-6 lg:p-8'>
									<h3 className='text-3xl text-gray-700 font-semibold text-center'>
										Cancún
									</h3>
									<div className='text-center'>
										<p className='text-8xl text-gray-800 font-bold leading-0'>
											$7,800
										</p>
										<p className='text-lg font-semibold text-primary'>
											Solo transporte
										</p>
									</div>
									<ul className='w-max space-y-4 py-6 m-auto text-gray-600'>
										<li className='space-x-2'>
											<span className='text-primary font-semibold'>✓</span>
											<span>Transporte redonde saliendo de Cuernavaca</span>
										</li>
										<li className='space-x-2'>
											<span className='text-primary font-semibold'>✓</span>
											<span>Hospedaje hotel 3 a 4 estrellas</span>
										</li>
										<li className='space-x-2'>
											<span className='text-primary font-semibold'>✓</span>
											<span>Coordinadores de viaje</span>
										</li>
										<li className='space-x-2'>
											<span className='text-primary font-semibold'>✓</span>
											<span>Seguro de viajero</span>
										</li>
									</ul>
									<p className='flex items-center justify-center space-x-4 text-lg text-gray-600 text-center'>
										Para mayor información vía WhatsApp
									</p>
									<button
										type='submit'
										title='Submit'
										className='block w-full py-3 px-6 text-center rounded-xl bg-primary hover:bg-blue-800 text-white font-semibold'>
										Enviar WhatsApp
									</button>
								</div>
							</div>
							<div className='relative group md:w-6/12 lg:w-7/12'>
								<div className='absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105'></div>
								<div className='relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16'>
									<p className='text-3xl font-semibold text-center'>Visita:</p>
									<ul className='space-y-4 py-6 text-gray-600'>
										<li className='space-x-2'>
											<span className='text-primary font-semibold'>✓</span>
											<span>Chiapas</span>
										</li>
										<li className='space-x-2'>
											<span className='text-primary font-semibold'>✓</span>
											<span>Chetumal</span>
										</li>
										<li className='space-x-2'>
											<span className='text-primary font-semibold'>✓</span>
											<span>Tulum</span>
										</li>
										<li className='space-x-2'>
											<span className='text-primary font-semibold'>✓</span>
											<span>Playa del Carmen</span>
										</li>
										<li className='space-x-2'>
											<span className='text-primary font-semibold'>✓</span>
											<span>Y muchos destinos más.</span>
										</li>
									</ul>
									<p className='text-gray-700'>
										Aparta tu lugar y puedes ir dando pagos o liquidar al
										abordar el día del viaje
									</p>
									<div className='mt-6 flex justify-between gap-6'>
										<img
											className='w-16 lg:w-24'
											src='https://tailus.io/sources/blocks/organization/preview/images/clients/airbnb.svg'
											loading='lazy'
											alt='airbnb'
										/>
										<img
											className='w-8 lg:w-16'
											src='https://tailus.io/sources/blocks/organization/preview/images/clients/bissell.svg'
											loading='lazy'
											alt='bissell'
										/>
										<img
											className='w-6 lg:w-12'
											src='https://tailus.io/sources/blocks/organization/preview/images/clients/ge.svg'
											loading='lazy'
											alt='ge'
										/>
										<img
											className='w-20 lg:w-28'
											src='https://tailus.io/sources/blocks/organization/preview/images/clients/microsoft.svg'
											loading='lazy'
											alt='microsoft'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
