import React from 'react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Galeria() {
	return (
		<div className='container mb-14 mt-3 p-5'>
			<h2 className='mb-9 text-2xl md:text-4xl text-center font-bold text-primary'>
				Galería
			</h2>

			<div>
				<section>
					<div class='grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3'>
						<div
							class='overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group'
							style={{
								backgroundImage: `url("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/4b/62/4d/photo4jpg.jpg?w=1200&h=-1&s=1")`,
							}}>
							<div class='flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100'>
								<h2 class='mt-4 text-2xl font-semibold text-white capitalize'>
									Nevado de Toluca
								</h2>
								<p class='mt-2 text-lg tracking-wider text-blue-400 uppercase '>
									Toluca
								</p>
							</div>
						</div>

						<div class='overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group'
							style={{
								backgroundImage: `url("https://www.mexicodesconocido.com.mx/wp-content/uploads/2017/03/3073226907_0ec108a732_o.jpg'")`,
							}}>
							<div class='flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100'>
								<h2 class='mt-4 text-2xl font-semibold text-white capitalize'>
									Bahía de Acapulco
								</h2>
								<p class='mt-2 text-lg tracking-wider text-blue-400 uppercase '>
									Guerrero
								</p>
							</div>
						</div>

						<div class='overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group'
							style={{
								backgroundImage: `url("https://images.unsplash.com/photo-1619459241314-3966f9efd729?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80")`,
							}}>
							<div class='flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100'>
								<h2 class='mt-4 text-2xl font-semibold text-white capitalize'>
								Pirámide del Sol
								</h2>
								<p class='mt-2 text-lg tracking-wider text-blue-400 uppercase '>
								Teotihuacán, Estado de México
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
