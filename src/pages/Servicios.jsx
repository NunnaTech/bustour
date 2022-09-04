export default function Servicios() {
	const servicios = [
		{
			title: 'Renta de autobuses',
			description:
				'¡Explora todos tus destinos favoritos con estilo y comodidad!',
			image: 'https://www.freeiconspng.com/thumbs/bus-png/bus-png-4.png',
		},
		{
			title: 'Renta de camionetas',
			description: 'Autobuses, camionetas y autostuísticos.',
			image:
				'https://rentacamionetasdf.com/wp-content/uploads/2019/06/Sprinter_transparente-1-e1468386277126.png',
		},
		{
			title: 'Servicio de chofer',
			description:
				'Personal dispuesto con un servicio amable y profesional para cualquier evento',
			image: 'https://servisuma.com/images/conductor.png',
		},
	];

	return (
		<div
			className='container my-14'
			id='servicios'>
			<h2 className='mb-5 text-2xl md:text-4xl text-center font-bold text-primary'>
				Servicios
			</h2>
			<div className='grid md:grid-cols-3 gap-4 mx-4 md:mx-10'>
				{servicios.map((s) => (
					<div className='bg-white max-w-sm mx-auto rounded-lg shadow-xl'>
						<div className='py-4 px-6 flex flex-col gap-2'>
							<p className='text-2xl font-bold text-gray-700'>{s.title}</p>
							<p className='text-gray-500'>{s.description}</p>
						</div>
						<div className='flex justify-center'>
							<img
								src={s.image}
								alt={s.title}
								width='250'
								height='auto'
								className=''
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
