export default function Servicios() {
	const servicios = [
		{
			title: 'Renta de autobuses',
			description:
				'Ideal para realizar una excursión, trasladar gran cantidad de gente y viajes largos',
			image: 'https://s3.aws-k8s.generated.photos/ai-generated-photos/upscaler-uploads/uploads/528/45122728-d818-441b-baf1-e79ed6b31479.png',
		},
		{
			title: 'Renta de camionetas',
			description: 'Ideal para realizar viajes en familia, llevar maletas, bicicletas etc.',
			image:
				'https://rentacamionetasdf.com/wp-content/uploads/2019/06/Sprinter_transparente-1-e1468386277126.png',
		},
		{
			title: 'Renta de autos',
			description:
				'Ideal para grupos pequeños que buscan realizar una aventura o simplemente trasladarse de un lugar a otro.',
			image: 'https://i.pinimg.com/originals/51/60/0c/51600c401133c6097fffd988454db52a.png',
		},
		{
			title: 'Traslados al aeropuerto',
			description:
				'Contamos con una amplia experiencia la cual no tendrás que preocuparte en cómo llegar y a que hora llegar. ¡Dejánolos a nosotros!',
			image: 'https://s3.aws-k8s.generated.photos/ai-generated-photos/upscaler-uploads/uploads/901/2d9929d8-2dc4-4839-ab04-f096ed090c70.png',
		},
	];

	return (
		<div class='py-16 bg-gradient-to-br from-yellow-50 to-orange-100'>
			<div class='container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
				<div class='mb-12 space-y-2 text-center'>
					<h2 class='text-2xl text-secondary font-bold md:text-4xl'>
						Nuestros servicios
					</h2>
					<p class='lg:w-6/12 lg:mx-auto text-xl'>
						Contamos con diferentes servicios de los cuales nos podemos acoplar
						para tu mayor cómodidad y de la misma manera, ayudarte con la logistica.
					</p>
					<p class='lg:w-6/12 lg:mx-auto text-xl font-semibold'>
						¡No dudes en enviarnos un mensaje para obtener una cotización!
					</p>
				</div>

				<div class='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
				{servicios.map((s, index) => (
					<div class='relative p-1 pb-16 rounded-xl group bg-white bg-opacity-50 shadow-xl hover:rounded-2xl'>
						<div class='relative'>
							<div
								aria-hidden='true'
								class='absolute inset-x-0 bottom-0 h-64 '></div>
							<img
								src={s.image}
								alt={s.title}
								loading='lazy'
								width='1000'
								height='667'
								class='h-64 w-full object-cover object-top rounded-t-lg transition duration-500 group-hover:rounded-t-xl'
							/>
						</div>
						<div class='relative space-y-4 -mt-15 p-4'>
							<h4 class='text-2xl font-semibold text-yellow-900'>
							{s.title}
							</h4>
							<p class='text-gray-600'>
							{s.description}
							</p>
						</div>
					</div>
					))}
				</div>
			</div>
		</div>
	);
}
