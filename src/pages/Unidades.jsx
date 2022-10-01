import avanza from '../assets/img/avanza-2022.jpeg';
import bus from '../assets/img/bus.png';
import hiace from '../assets/img/hiace.png';
import mercedes from '../assets/img/mercedes.jpg';
import { MdOutlineAir } from 'react-icons/md';
import { BsPersonFill } from 'react-icons/bs';
import { MdOfflineBolt } from 'react-icons/md';
import { MdOutlineAirlineSeatLegroomNormal } from 'react-icons/md';
import { FaToilet } from 'react-icons/fa';

export default function Unidades() {
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
				{/* Autobus */}
				<div className='bg-white flex flex-col max-w-sm mx-auto rounded-lg shadow-xl'>
				<div className='h-60'>
						<img
							src={bus}
							alt='Usuario'
							className='w-full object-cover rounded-t-lg'
						/>
					</div>
					<div className='bg-gray-900 mx-4 rounded-lg flex items-center gap-4 -mt-6 z-10 shadow-xl py-2 px-6'>
						<h3 className='text-white text-lg font-semibold'>
							Autobus Mercedes
						</h3>
					</div>
					<div className='px-6 py-4 flex flex-col gap-2'>
						<p className='text-gray-500'>
							Para aquellos viajes magnos y con una basta capacidad de pasajeros
						</p>
						<div className='flex items-center mt-4 text-gray-700'>
							<BsPersonFill className='h-6 w-6' />
							<h1 className='px-2 text-sm '>47 Pasajeros</h1>
						</div>
						<div className='flex items-center mt-4 text-gray-700 '>
							<MdOutlineAir className='h-6 w-6' />
							<h1 className='px-2 text-sm'>Aire acondicionado</h1>
						</div>
						<div className='flex items-center mt-4 text-gray-700'>
							<MdOfflineBolt className='h-6 w-6' />
							<h1 className='px-2 text-sm'>Cargador para celular</h1>
						</div>
						<div className='flex items-center mt-4 text-gray-700'>
							<MdOutlineAirlineSeatLegroomNormal className='h-6 w-6' />
							<h1 className='px-2 text-sm'>Acientos reclinables</h1>
						</div>
						<div className='flex items-center mt-4 text-gray-700 mb-5'>
							<FaToilet className='h-5 w-5' />
							<h1 className='px-2 text-sm'>Baños incluidos</h1>
						</div>
						
					</div>
				</div>
				{/* Mercedes */}
				<div className='bg-white flex flex-col max-w-sm mx-auto rounded-lg shadow-xl'>
				<div className='h-60'>
						<img
							src={mercedes}
							alt='Usuario'
							className='w-full object-cover rounded-t-lg'
						/>
					</div>
					<div className='bg-gray-900 mx-4 rounded-lg flex items-center gap-4 -mt-6 z-10 shadow-xl py-2 px-6'>
						<h3 className='text-white text-lg font-semibold'>
						Mercedes-Benz 2015
						</h3>
					</div>
					<div className='px-6 py-4 flex flex-col gap-2'>
						<p className='text-gray-500'>
						Espacio, confort y seguridad son partes esencial para el camino. 
						</p>
						<div className='flex items-center mt-4 text-gray-700'>
							<BsPersonFill className='h-6 w-6' />

							<h1 className='px-2 text-sm '>20 Pasajeros</h1>
						</div>
						<div className='flex items-center mt-4 text-gray-700 '>
							<MdOutlineAir className='h-6 w-6' />
							<h1 className='px-2 text-sm'>Aire acondicionado</h1>
						</div>
						<div className='flex items-center mt-4 text-gray-700'>
							<MdOfflineBolt className='h-6 w-6' />
							<h1 className='px-2 text-sm'>Cargador para celular</h1>
						</div>
						<div className='flex items-center mt-4 text-gray-700'>
							<MdOutlineAirlineSeatLegroomNormal className='h-6 w-6' />
							<h1 className='px-2 text-sm'>Acientos reclinables</h1>
						</div>
					</div>
				</div>
				{/* Toyota Hiace */}
				<div className='bg-white flex flex-col max-w-sm mx-auto rounded-lg shadow-xl'>
				<div className='h-60'>
						<img
							src={hiace}
							alt='Usuario'
							className='w-full object-cover rounded-t-lg'
						/>
					</div>
					<div className='bg-gray-900 mx-4 rounded-lg flex items-center gap-4 -mt-6 z-10 shadow-xl py-2 px-6'>
						<h3 className='text-white text-lg font-semibold'>
							Toyota Hiace 2019
						</h3>
					</div>
					<div className='px-6 py-4 flex flex-col gap-2'>
						<p className='text-gray-500'>
						Espacio para tu trabajo, máxima comodidad para tus pasajeros.
						</p>
						<div className='flex items-center mt-4 text-gray-700'>
							<BsPersonFill className='h-6 w-6' />

							<h1 className='px-2 text-sm '>14 Pasajeros</h1>
						</div>
						<div className='flex items-center mt-4 text-gray-700 '>
							<MdOutlineAir className='h-6 w-6' />
							<h1 className='px-2 text-sm'>Aire acondicionado</h1>
						</div>
						<div className='flex items-center mt-4 text-gray-700'>
							<MdOfflineBolt className='h-6 w-6' />
							<h1 className='px-2 text-sm'>Cargador para celular</h1>
						</div>
						<div className='flex items-center mt-4 text-gray-700'>
							<MdOutlineAirlineSeatLegroomNormal className='h-6 w-6' />
							<h1 className='px-2 text-sm'>Acientos reclinables</h1>
						</div>
					</div>
				</div>
				{/* Toyota Avanza */}
				<div className='bg-white flex flex-col max-w-sm mx-auto rounded-lg shadow-xl'>
				<div className='h-60'>
						<img
							src={avanza}
							alt='Usuario'
							className='w-full object-cover rounded-t-lg'
						/>
					</div>
					<div className='bg-gray-900 mx-4 rounded-lg flex items-center gap-4 -mt-6 z-10 shadow-xl py-2 px-6'>
						<h3 className='text-white text-lg font-semibold'>
							Toyota Avanza 2022
						</h3>
					</div>
					<div className='px-6 py-4 flex flex-col gap-2'>
						<p className='text-gray-500'>
							Con nuevo diseño, más dinamismo y mejor desempeño
						</p>
						<div className='flex items-center mt-4 text-gray-700'>
							<BsPersonFill className='h-6 w-6' />

							<h1 className='px-2 text-sm '>6 Pasajeros</h1>
						</div>
						<div className='flex items-center mt-4 text-gray-700 '>
							<MdOutlineAir className='h-6 w-6' />
							<h1 className='px-2 text-sm'>Aire acondicionado</h1>
						</div>
						<div className='flex items-center mt-4 text-gray-700'>
							<MdOfflineBolt className='h-6 w-6' />
							<h1 className='px-2 text-sm'>Cargador para celular</h1>
						</div>
						<div className='flex items-center mt-4 text-gray-700'>
							<MdOutlineAirlineSeatLegroomNormal className='h-6 w-6' />
							<h1 className='px-2 text-sm'>Acientos reclinables</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
