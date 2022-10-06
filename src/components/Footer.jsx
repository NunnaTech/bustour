import { BsFacebook } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import Logo from '../assets/img/logo.svg';

export default function Footer() {
	return (
		<div className='bg-white flex flex-col xl:flex-row justify-center items-center gap-4 xl:gap-0 xl:justify-between w-full p-4'>
			<div>
				<a href='/#inicio'>
					<img
						src={Logo}
						alt='Logo BUSTOUR'
						width='50'
						height='auto'
					/>
				</a>
			</div>
			<div>
				<p className='text-gray-800 text-center md:text-left'>
					&copy; 2022.{' '}
					<span className='text-gray-700 font-bold'>BUSTOUR MORELOS</span>{' '}
					<a
						rel='noreferrer'
						target='_blank'
						href='https://github.com/ThePandaDevs'
						class='text-gray-700 font-bold hover:text-primary'>
						- ThePandaDevs.{' '}
					</a>
					Todos los derechos reservados.
				</p>
			</div>
			<div className='md:col-span-2 flex items-center justify-center md:justify-end gap-4'>
				<a
					rel='noreferrer'
					target='_blank'
					href='https://www.facebook.com/bustourmorelosrentadeautobusesycamionetas'>
					<BsFacebook className='text-2xl text-text hover:text-blue-600' />
				</a>
				<a
					rel='noreferrer'
					target='_blank'
					href='https://wa.me/527771196162?text=Hola!%20Quisiera%20información%20para%20cotizar%20un%20viaje%20por%20favor'>
					<IoLogoWhatsapp className='text-2xl text-text hover:text-green-500' />
				</a>
				<a href='tel:7771196162'>
					<FaPhoneAlt className='text-2xl text-text hover:text-indigo-600' />
				</a>
			</div>
		</div>
	);
}
