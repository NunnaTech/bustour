import Img1 from '../assets/img/nevado-toluca.jpg';
import Img2 from '../assets/img/acapulco.png';
import Img3 from '../assets/img/teotihuacan.png';

export default function Galeria() {
	const Gallery = [
		{ img: Img1, title: 'Nevado de Toluca', description: 'Toluca' },
		{ img: Img2, title: 'Bahía de Acapulco', description: 'Guerrero' },
		{
			img: Img3,
			title: 'Pirámide del Sol',
			description: 'Teotihuacán, Estado de México',
		},
	];

	return (
		<div className='container mb-14 mt-3 p-5'>
			<h2 className='mb-9 text-2xl md:text-4xl text-center font-bold text-primary'>
				Galería
			</h2>
			<section>
				<div className='grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3'>
					{Gallery.map((item, index) => (
						<div
							key={index}
							className='overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group'
							style={{ backgroundImage: `url(${item.img})` }}>
							<div className='flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100'>
								<h2 className='mt-4 text-2xl font-semibold text-white capitalize'>
									{item.title}
								</h2>
								<p className='mt-2 text-lg tracking-wider text-blue-400 uppercase '>
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
