import { BsFacebook } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import Logo from '../assets/img/logo.svg';

export default function Navbar() {
	return (
		<div className='w-full bg-soft'>
			<div className='container p-2 grid md:grid-cols-12 gap-4 items-center justify-center'>
				<div className='md:col-span-2 flex justify-center md:justify-start font-bold cursor-pointer text-3xl'>
					<a href='/#inicio'>
						<img
							src={Logo}
							alt='Logo BUSTOUR'
							width='70'
							height='auto'
						/>
					</a>
				</div>
				<nav className='md:col-span-8 flex items-center flex-wrap gap-4 justify-center'>
					<a
						href='/#inicio'
						className='nabvar-link'>
						Inicio
					</a>
					<a
						href='/#servicios'
						className='nabvar-link'>
						Servicios
					</a>
					<a
						href='/#unidades'
						className='nabvar-link'>
						Unidades
					</a>
					<a
						href='/#precios'
						className='nabvar-link'>
						Precios
					</a>
					<a
						href='/#contacto'
						className='nabvar-link'>
						Contacto
					</a>
				</nav>
				<div className='md:col-span-2 flex items-center justify-center md:justify-end gap-4'>
					<a  rel="noreferrer" target="_blank" href='https://www.facebook.com/bustourmorelosrentadeautobusesycamionetas'>
						<BsFacebook className='text-2xl text-text hover:text-blue-600' />
					</a>
					<a rel="noreferrer" target="_blank" href="https://wa.me/527771196162?text=Hola!%20Quisiera%20información%20para%20cotizar%20un%20viaje%20por%20favor">
						<IoLogoWhatsapp className='text-2xl text-text hover:text-green-500' />
					</a>
					<a href='tel:7771196162'>
						<FaPhoneAlt className='text-2xl text-text hover:text-indigo-600' />
					</a>
				</div>
			</div>
		</div>
	);
}
