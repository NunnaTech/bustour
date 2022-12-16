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
				<div className='grid md:grid-cols-1 gap-4'>
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

					{/* <div className='bg-white rounded-lg shadow-2xl p-8 md:p-16'>
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
								<IoLogoWhatsapp className='text-2xl text-white hover:text-slate-200 mr-2' />
								Envíar WhatsApp
							</a>
						</form>
					</div> */}


				</div>
			</section>
		</div>
	);
}
