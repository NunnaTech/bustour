import { FiMapPin } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

export default function Acerca() {
	return (
		<div className='container my-14' id="contacto">
			<h2 className='mb-5 text-2xl md:text-4xl text-center font-bold text-primary'>
				Contacto
			</h2>

			<section>
				<div className='container px-6 mx-auto'>
					<div className='grid md:grid-cols-2 gap-6'>
						<div className='bg-primary rounded-lg shadow-2xl text-white shadow-gray-300/50'>
							<div className='p-10'>
								<h3 className='font-semibold text-lg md:text-2xl'>
									¡Contáctanos! Somos la mejor opción en la renta de autobuses y
									camionetas en Cuernavaca, Morelos.
								</h3>

								<div className='mt-6 space-y-4 md:mt-8'>
									<p className='flex items-start -mx-2'>
										<FiMapPin className='text-2xl' />
										<span className='mx-2'>
											ANTONIO BARONA CENTRO, 145, ANTONIO BARONA CENTRO,
											CUERNAVACA, MOR, C.P. 62320
										</span>
									</p>

									<p className='flex items-start -mx-2'>
										<BsTelephone className='text-2xl' />
										<span className='mx-2 truncate '>777-327-3295</span>
									</p>

									<p className='flex items-start -mx-2'>
										<BsTelephone className='text-2xl' />
										<span className='mx-2 '>777-327-3295</span>
									</p>
									<p className='flex items-start -mx-2'>
										<AiOutlineMail className='text-2xl' />
										<span className='mx-2 '>bustourmorelos@hotmail.com</span>
									</p>
								</div>
							</div>

							<div className='w-full'>
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1956.4813601634871!2d-99.23366585519756!3d18.9217323024702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdde4d5af476c7%3A0xfe627e431e4d2dfe!2zSmFyZMOtbiBKdcOhcmV6!5e0!3m2!1sen!2smx!4v1662488760451!5m2!1sen!2smx'
                  className='w-full h-96'
									style={{ border: 0 }}
									allowFullScreen=''
									loading='lazy'
									title='mapa'
									referrerPolicy='no-referrer-when-downgrade'></iframe>
							</div>
						</div>

						<div className='bg-white rounded-lg shadow-2xl shadow-gray-300/50 p-16'>
							<h1 className='text-lg md:text-2xl font-medium text-gray-700'>
								Ingrese sus datos
							</h1>

							<form className='mt-6'>
								<div className='flex-1'>
									<label className='block mb-2 text-sm text-gray-600  '>
										Nombre completo:
									</label>
									<input
										type='text'
										placeholder='John Doe'
										className='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md         focus:border-blue-400   focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
									/>
								</div>

								<div className='flex-1 mt-6'>
									<label className='block mb-2 text-sm text-gray-600  '>
										Correo electrónico:
									</label>
									<input
										type='email'
										placeholder='johndoe@example.com'
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
										placeholder='Message'></textarea>
								</div>

								<button className='w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-secondary rounded-md hover:bg-primary focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'>
									Enviar
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
