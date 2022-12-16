import avanza from '../assets/img/avanza-2022.png';
import bus from '../assets/img/bus.png';
import hiace from '../assets/img/hiace.png';
import mercedes from '../assets/img/mercedes.jpg';
import { MdOutlineAir, MdOfflineBolt, MdOutlineAirlineSeatLegroomNormal } from 'react-icons/md';
import { BsPersonFill } from 'react-icons/bs';
import { FaToilet } from 'react-icons/fa';

export default function Unidades() {

	const units = [
		{
			image : bus,
			name: 'Autobus Mercedes',
			description: 'Para aquellos viajes magnos y con una alta capacidad de pasajeros',
			content:[
				{icon: <BsPersonFill className='h-6 w-6' />, text: '47 Pasajeros'},
				{icon: <MdOutlineAir className='h-6 w-6' />, text: 'Aire acondicionado'},
				{icon: <MdOfflineBolt className='h-6 w-6' />, text: 'Cargador para celular'},
				{icon: <MdOutlineAirlineSeatLegroomNormal className='h-6 w-6' />, text: 'Asientos reclinables'},
				{icon: <FaToilet className='h-6 w-6' />, text: 'Baños incluidos'},
			]
		},
		{
			image : mercedes,
			name: 'Mercedes-Benz 2015',
			description: 'Espacio, confort y seguridad son partes esencial para el camino.',
			content:[
				{icon: <BsPersonFill className='h-6 w-6' />, text: '20 Pasajeros'},
				{icon: <MdOutlineAir className='h-6 w-6' />, text: 'Aire acondicionado'},
				{icon: <MdOfflineBolt className='h-6 w-6' />, text: 'Cargador para celular'},
				{icon: <MdOutlineAirlineSeatLegroomNormal className='h-6 w-6' />, text: 'Asientos reclinables'},
			]
		},{
			image : hiace,
			name: 'Toyota Hiace 2019',
			description: 'Espacio para tu trabajo, máxima comodidad para tus pasajeros.',
			content:[
				{icon: <BsPersonFill className='h-6 w-6' />, text: '14 Pasajeros'},
				{icon: <MdOutlineAir className='h-6 w-6' />, text: 'Aire acondicionado'},
				{icon: <MdOfflineBolt className='h-6 w-6' />, text: 'Cargador para celular'},
				{icon: <MdOutlineAirlineSeatLegroomNormal className='h-6 w-6' />, text: 'Asientos reclinables'},
			]
		},{
			image : avanza,
			name: 'Toyota Avanza 2022',
			description: 'Con nuevo diseño, más dinamismo y mejor desempeño.',
			content:[
				{icon: <BsPersonFill className='h-6 w-6' />, text: '6 Pasajeros'},
				{icon: <MdOutlineAir className='h-6 w-6' />, text: 'Aire acondicionado'},
				{icon: <MdOfflineBolt className='h-6 w-6' />, text: 'Cargador para celular'},
				{icon: <MdOutlineAirlineSeatLegroomNormal className='h-6 w-6' />, text: 'Asientos reclinables'},
			]
		},
	]

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
			<div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 md:mx-10'>
			{units.map((unit, index) => (
				<div key={index} className='bg-white flex flex-col max-w-sm mx-auto rounded-lg shadow-xl'>
					<div className='h-60'><img src={unit.image} alt={unit.name} className='w-full object-cover rounded-t-lg' /></div>
					<div className='bg-gray-900 mx-4 rounded-lg flex items-center gap-4 -mt-6 z-10 shadow-xl py-2 px-6'>
						<h3 className='text-white text-lg font-semibold'>{unit.name}</h3>
					</div>
					<div className='px-6 py-4 flex flex-col gap-2'>
						<p className='text-gray-500'>{unit.description}</p>
						{unit.content.map((item, index) => (
							<div key={index} className='flex items-center mt-4 text-gray-700'>{item.icon}
								<h3 className='px-2 text-sm'>{item.text}</h3>
							</div>
							))
						}
					</div>
				</div>
				))
			}
			</div>
		</div>
	);
}
