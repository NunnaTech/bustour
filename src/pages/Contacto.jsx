import { FiMapPin } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

export default function Acerca() {
	return (
		<div
			className='container my-14'
			id='contacto'>
			<h2 className='mb-5 text-2xl md:text-4xl text-center font-bold text-primary'>
				Contacto
			</h2>

			<section>
				<div className='grid md:grid-cols-2 gap-4'>
					<div className='bg-primary rounded-lg shadow-2xl text-white h-full'>
						<div className='p-4 md:p-10'>
							<h3 className='md:font-semibold text-lg md:text-2xl'>
								¡Contáctanos! Somos la mejor opción en la renta de autobuses y
								camionetas en Cuernavaca, Morelos.
							</h3>

							<div className='mt-6 space-y-4 md:mt-8'>
								<p className='flex items-start'>
									<FiMapPin className='text-5xl md:text-2xl' />
									<a
										href='https://goo.gl/maps/nsGeGqnbpDnBGsqD6'
										target='_blank'
										rel='noreferrer'>
										<span className='mx-2'>
											ANTONIO BARONA CENTRO, 145, ANTONIO BARONA CENTRO,
											CUERNAVACA, MOR, C.P. 62320
										</span>
									</a>
								</p>

								<p className='flex items-start '>
									<BsTelephone className='text-2xl' />
									<a href='tel:+527771196162'>
										<span className='mx-2'>777-119-6162</span>
									</a>
								</p>

								<p className='flex items-start '>
									<BsTelephone className='text-2xl' />
									<a href='tel:+527773165489'>
										<span className='mx-2'>777-316-5489</span>
									</a>
								</p>
								<p className='flex items-start '>
									<AiOutlineMail className='text-2xl' />
									<a href='mailto:bustourmorelos@hotmail.com'>
										<span className='mx-2 '>bustourmorelos@hotmail.com</span>
									</a>
								</p>
							</div>
						</div>

						<div className='w-full'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.7802470010533!2d-99.19245950125337!3d18.950261806654343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddff85de449ff%3A0x4ec212241579f72b!2sL%C3%A1zaro%20C%C3%A1rdenas%20145%2C%20Antonio%20Barona%2C%2062320%20Cuernavaca%2C%20Mor.!5e0!3m2!1ses-419!2smx!4v1662525791145!5m2!1ses-419!2smx'
								className='w-full h-96'
								allowFullScreen=''
								loading='lazy'
								title='Mapa de ubicación'
								referrerPolicy='no-referrer-when-downgrade'
							/>
						</div>
					</div>

					<div className='bg-white rounded-lg shadow-2xl p-8 md:p-16'>
						<h1 className='text-lg md:text-2xl font-medium text-gray-700'>
							Ingrese sus datos
						</h1>

						<form className='mt-6'>
							<div className='flex-1'>
								<label className='block mb-2 text-sm text-gray-600'>
									Nombre completo:
								</label>
								<input
									type='text'
									placeholder='Fernando Ortiz'
									className='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md         focus:border-blue-400   focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
								/>
							</div>

							<div className='flex-1 mt-6'>
								<label className='block mb-2 text-sm text-gray-600  '>
									Correo electrónico:
								</label>
								<input
									type='email'
									placeholder='bustourmorelos@hotmail.com'
									className='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md         focus:border-blue-400   focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
								/>
							</div>
							<div className='flex-1 mt-6'>
								<label className='block mb-2 text-sm text-gray-600  '>
									Número de teléfono:
								</label>
								<input
									type='tel'
									placeholder='777-327-3295'
									className='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md         focus:border-blue-400   focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
								/>
							</div>

							<div className='w-full mt-6'>
								<label className='block mb-2 text-sm text-gray-600  '>
									Comentario
								</label>
								<textarea
									className='block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48         focus:border-blue-400   focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
									placeholder='Comentario'></textarea>
							</div>

							<button className='w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-secondary rounded-md hover:bg-primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'>
								Enviar
							</button>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
}
