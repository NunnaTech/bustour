import Bus from '../assets/img/bus.png';

export default function Extra() {
	return (
		<div className='w-full my-10 px-5'>
			<div className='container'>
				<div className='md:grid md:grid-cols-2'>
					<div className='relative'>
						<img
							src={Bus}
							alt='Bus'
							className='mx-auto'
						/>
						<div className='absolute text-center text-xl bg-secondary rounded-full w-28 h-28 font-medium flex items-center justify-center inset-0 inset-x-2/3 md:inset-x-2/3'>
							<div>
								<div className='font-semibold text-4xl'>+6</div>
								Unidades
							</div>
						</div>
						<div className='absolute text-center text-xl bg-secondary rounded-full w-28 h-28 font-medium flex items-center justify-center inset-40 inset-x-10 md:inset-48'>
							<div>
								<div className='font-semibold text-4xl'>+25</div>
								Años
							</div>
						</div>
					</div>
					<div className='p-4 md:p-8 text-justify text-text text-xl max-w-xl mt-5'>
						<h2 className='text-2xl md:text-4xl font-bold text-secondary'>
							¿Sin camioneta o autobús?
						</h2>
						<p className='mt-2'>
							Estamos listos a cualquier hora del día todos los días para
							ofrecerte el mejor servicio y la mejor experiencia.
						</p>
						<p className='mt-4'>
							Contactanos para llegar a tiempo a tu destino.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
