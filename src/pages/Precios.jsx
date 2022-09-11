import { BsWhatsapp } from 'react-icons/bs';

export default function Precios() {
	return (
		<div
			className='mt-14 mb-7 bg-[#E1E7F0] p-5'
			id='precios'>
			<h2 className='mb-5 pt-5 text-2xl md:text-4xl text-center font-bold text-primary'>
				Precios
			</h2>
			<div>
				<div className='container'>
					<div className='mx-auto py-10 px-6'>
						<div className='mx-auto text-center lg:w-8/12 xl:w-7/12'>
							<h3 className='text-xl text-gray-700 font-semibold md:text-3xl'>
								En BUSTOUR MORELOS te llevamos a la Rivera Maya a un súper
								precio de preventa
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
										<p className='text-5xl md:text-7xl text-gray-700 font-bold leading-0'>
											$7,800
										</p>
										<p className='text-lg font-semibold text-primary'>
											Solo transporte
										</p>
									</div>
									<ul className='space-y-4 py-6 m-auto text-gray-600'>
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

									<a
										rel='noreferrer'
										type='button'
										target='_blank'
										href='https://wa.me/527771196162?text=Hola!%20Quisiera%20información%20para%20cotizar%20un%20viaje%20a%20Cancún%20por%20favor'
										className='w-full text-white bg-[#25D366] hover:bg-[#25D366]/80 focus:ring-4 focus:outline-none focus:ring-[#25D366]/50 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex justify-center items-center mr-2 mb-2'>
										<BsWhatsapp className='mr-2 -ml-1 w-6 h-6 text-center' />
										Envíar WhatsApp
									</a>
								</div>
							</div>
							<div className='relative group md:w-6/12 lg:w-7/12'>
								<div className='absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105'></div>
								<div className='relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16'>
									<p className='text-3xl font-semibold text-center text-gray-700'>
										Visita:
									</p>
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
										abordar el día del viaje. Tambien aceptamos pagos con
										tarjeta
									</p>
									<div className='mt-6 flex flex-wrap justify-between gap-6'>
										<div className='grid justify-items-center'>
											<img
												className='w-12 lg:w-20'
												src='https://tqpytokz.cdn.imgeng.in/media-adsa/static/3714/036.svg'
												loading='lazy'
												alt='mastercard'
											/>
											<p className='text-center text-xs mt-2 text-zinc-600'>
												Mastercard
											</p>
										</div>
										<div className='grid justify-items-center'>
											<img
												className='w-12 lg:w-20'
												src='https://tqpytokz.cdn.imgeng.in/media-adsa/static/3714/042.svg'
												loading='lazy'
												alt='visa'
											/>
											<p className='text-center text-xs mt-2 text-zinc-600'>
												VISA
											</p>
										</div>
										<div className='grid justify-items-center'>
											<img
												className='w-12 lg:w-20'
												src='https://tqpytokz.cdn.imgeng.in/media-adsa/static/3714/035.svg'
												loading='lazy'
												alt='efectivo'
											/>
											<p className='text-center text-xs mt-2 text-zinc-600'>
												Efectivo
											</p>
										</div>
										<div className='grid justify-items-center'>
											<img
												className='w-12 lg:w-20'
												src='https://tqpytokz.cdn.imgeng.in/media-adsa/static/3714/034.svg'
												loading='lazy'
												alt='transferencia'
											/>
											<p className='text-center text-xs mt-2 text-zinc-600'>
												Transferencias
											</p>
										</div>
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
