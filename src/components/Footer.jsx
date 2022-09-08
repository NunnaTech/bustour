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
					<span className='text-gray-900 font-bold'>BUSTOUR MORELOS.</span>{' '}
					Todos los derechos reservados.
				</p>
			</div>		
		</div>
	);
}
