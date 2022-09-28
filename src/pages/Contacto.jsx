import { FiMapPin } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

export default function Acerca() {
	return (
		<div
			className='container my-14 p-5'
			id='contacto'>
			<h2 className='mb-12 text-2xl md:text-4xl text-center font-bold text-primary'>
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
									<FiMapPin className='text-2xl' />
									<a
										href='https://goo.gl/maps/nsGeGqnbpDnBGsqD6'
										target='_blank'
										rel='noreferrer'>
										<span className='mx-2'>
											Lázaro Cárdenas 145, Antonio Barona, 62320 Cuernavaca,
											Mor.
										</span>
									</a>
								</p>

								<p className='flex items-start '>
									<BsTelephone className='text-2xl' />
									<a href='tel:7771196162'>
										<span className='mx-2'>777-119-6162</span>
									</a>
								</p>

								<p className='flex items-start '>
									<BsTelephone className='text-2xl' />
									<a href='tel:7773273295'>
										<span className='mx-2'>777-327-3295</span>
									</a>
								</p>
								<p className='flex items-start '>
									<AiOutlineMail className='text-2xl' />
									<a href='mailto:bustourmorelos@hotmail.com'>
										<span className='mx-2 '>bustourmorelos@hotmail.com</span>
									</a>
								</p>
							</div>
							<div className='md:col-span-2 flex items-center justify-start gap-4 mt-5'>
								<a
									rel='noreferrer'
									target='_blank'
									href='https://www.facebook.com/bustourmorelosrentadeautobusesycamionetas'>
									<BsFacebook className='text-2xl text-white hover:text-slate-200	' />
								</a>
								<a
									rel='noreferrer'
									target='_blank'
									href='https://wa.me/527771196162?text=Hola!%20Quisiera%20información%20para%20cotizar%20un%20viaje%20por%20favor'>
									<IoLogoWhatsapp className='text-2xl text-white hover:text-slate-200' />
								</a>
							</div>
						</div>

						<div className='w-full'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.7802470010533!2d-99.19245950125337!3d18.950261806654343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cddff85de449ff%3A0x4ec212241579f72b!2sL%C3%A1zaro%20C%C3%A1rdenas%20145%2C%20Antonio%20Barona%2C%2062320%20Cuernavaca%2C%20Mor.!5e0!3m2!1ses-419!2smx!4v1662525791145!5m2!1ses-419!2smx'
								className='w-full h-96 rounded-br-lg rounded-bl-lg'
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
									className='block w-full h-32 md:h-24 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md          focus:border-blue-400   focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
									placeholder='¡Hola! Me gustaria resevar un traslado al aeropuerto'></textarea>
							</div>

							<button className='w-full px-6 py-3 mt-6 text-md font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-secondary rounded-md hover:bg-primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'>
								Enviar
							</button>
							<p className='my-5 text-center text-gray-600'>
								Ó si lo prefieres...
							</p>
							<a
								rel='noreferrer'
								type='button'
								target='_blank'
								href='https://wa.me/527771196162?text=Hola!%20Quisiera%20información%20para%20cotizar%20un%20viaje%20por%20favor'
								className='w-full px-6 py-3 text-white bg-[#25D366] hover:bg-[#25D366]/80 focus:ring-4 focus:outline-none focus:ring-[#25D366]/50 font-medium rounded-md text-md text-center inline-flex justify-center items-center mr-2 mb-2'>
								<svg
									className='mr-2 -ml-1 w-6 h-6 text-center'
									aria-hidden='true'
									focusable='false'
									data-prefix='fab'
									data-icon='whatsapp'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 448 512'>
									<path
										fill='currentColor'
										d='M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z'
									/>
								</svg>
								Envíar WhatsApp
							</a>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
}
